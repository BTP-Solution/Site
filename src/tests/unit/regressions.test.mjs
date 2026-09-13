import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { detectLocale } from '../../lib/i18n/detect-locale.ts';
import { withLocale } from '../../lib/i18n/locale.ts';
import { handleContact, parseContact } from '../../lib/contact.ts';

for (const [header, expected] of [[null, 'tr'], ['', 'tr'], ['*', 'tr'], ['tr', 'tr'], ['en-US,en;q=0.9', 'en'], ['de-DE', 'tr'], ['bad_locale, en;q=0.9', 'en'], ['en;q=0,*;q=1', 'tr']]) {
    test('locale negotiation: ' + String(header), () => assert.equal(detectLocale(header), expected));
}
for (const [href, expected] of [['/', '/en'], ['/services?ref=a#details', '/en/services?ref=a#details'], ['/?utm_source=test', '/en?utm_source=test'], ['/tr/about', '/tr/about'], ['#demo', '#demo'], ['mailto:info@btpsolution.com', 'mailto:info@btpsolution.com'], ['https://example.com', 'https://example.com'], ['//example.com', '//example.com'], ['/logo.png', '/logo.png'], ['/api/contact', '/api/contact']]) {
    test('localized link: ' + href, () => assert.equal(withLocale(href, 'en'), expected));
}
const valid = { name: 'Test User', company: 'Test Company', email: 'test@example.com', message: 'Please arrange a demo.', lang: 'en', website: '' };
const environment = { RESEND_API_KEY: 'test-key', CONTACT_FROM_EMAIL: 'test@example.com', CONTACT_RATE_LIMITER: { limit: async () => ({ success: true }) } };
const makeRequest = (body = valid, overrides = {}) => new Request('https://btpsolution.com/api/contact', {
    method: 'POST', headers: { origin: 'https://btpsolution.com', 'content-type': 'application/json', 'idempotency-key': '12345678-abcd-1234-abcd-123456789abc', ...overrides }, body: JSON.stringify(body),
});
const neverSend = async () => { throw new Error('Unexpected delivery attempt'); };
test('contact trims text and validates required fields', () => {
    assert.equal(parseContact({ ...valid, name: '  Test User ' }).name, 'Test User');
    for (const input of [null, {}, { ...valid, email: 'bad' }, { ...valid, message: 'short' }, { ...valid, message: 'a'.repeat(4001) }, { ...valid, website: 'bot' }, { ...valid, name: 'Name\nInjected' }]) assert.equal(parseContact(input), null);
});
test('provider acceptance is required before success; recipient is server controlled', async () => {
    let payload, options;
    const response = await handleContact(makeRequest({ ...valid, to: 'attacker@example.com' }), environment, async (url, init) => {
        assert.equal(url, 'https://api.resend.com/emails');
        options = init; payload = JSON.parse(init.body);
        return Response.json({ id: 'provider-message-id' });
    });
    assert.equal(response.status, 200); assert.deepEqual(await response.json(), { ok: true });
    assert.deepEqual(payload.to, ['info@btpsolution.com']); assert.equal(payload.reply_to, valid.email);
    assert.match(options.headers['Idempotency-Key'], /^site-contact\//);
    assert.match(payload.text, /Please arrange a demo/);
});
test('missing credentials or rate limiter returns unavailable without sending', async () => {
    for (const env of [{}, { RESEND_API_KEY: 'test', CONTACT_FROM_EMAIL: 'test@example.com' }]) assert.equal((await handleContact(makeRequest(), env, neverSend)).status, 503);
});
test('invalid input is rejected without sending', async () => assert.equal((await handleContact(makeRequest({ ...valid, email: 'invalid' }), environment, neverSend)).status, 400));
test('cross-origin requests are rejected', async () => assert.equal((await handleContact(makeRequest(valid, { origin: 'https://other.example' }), environment, neverSend)).status, 403));
test('non-JSON requests are rejected', async () => assert.equal((await handleContact(makeRequest(valid, { 'content-type': 'text/plain' }), environment, neverSend)).status, 415));
test('oversized body is rejected even without Content-Length', async () => assert.equal((await handleContact(makeRequest({ ...valid, message: 'a'.repeat(21000) }), environment, neverSend)).status, 413));
test('rate limit prevents provider calls and supplies retry delay', async () => {
    const response = await handleContact(makeRequest(), { ...environment, CONTACT_RATE_LIMITER: { limit: async () => ({ success: false }) } }, neverSend);
    assert.equal(response.status, 429); assert.equal(response.headers.get('retry-after'), '60');
});
test('provider failure, timeout and malformed response never return success', async () => {
    for (const send of [async () => new Response('', { status: 500 }), async () => { throw Error('timeout'); }, async () => Response.json({})]) assert.equal((await handleContact(makeRequest(), environment, send)).status, 502);
});
test('invalid request id cannot trigger delivery', async () => assert.equal((await handleContact(makeRequest(valid, { 'idempotency-key': 'bad' }), environment, neverSend)).status, 400));
test('TR and EN dictionary structures remain equal', () => {
    const read = lang => JSON.parse(fs.readFileSync(new URL('../../lib/i18n/dictionaries/' + lang + '.json', import.meta.url)));
    const keys = (value, prefix = '') => Object.entries(value).flatMap(([key, child]) => child && typeof child === 'object' ? keys(child, prefix + key + '.') : [prefix + key]).sort();
    assert.deepEqual(keys(read('en')), keys(read('tr')));
});
