import { test, expect } from '@playwright/test';
import originalUrls from './existing-urls.json';

test('all 58 original public URLs keep their status, canonical and language alternatives', async ({ request }) => {
    test.setTimeout(120000);
    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.status()).toBe(200);
    const xml = await sitemap.text();
    const listed = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
    expect(listed.sort()).toEqual([...originalUrls].sort());
    for (const path of originalUrls) {
        const response = await request.get(path);
        expect(response.status(), path).toBe(200);
        const html = await response.text();
        expect(html, path).toContain(`rel="canonical" href="https://btpsolution.com${path}"`);
        expect(html, path).toMatch(/hreflang="tr"/i);
        expect(html, path).toMatch(/hreflang="en"/i);
        expect(html, path).not.toMatch(/name="robots" content="[^"]*noindex/i);
    }
});

for (const lang of ['tr', 'en']) {
    test(`${lang}: APD is discoverable, development status is explicit and enquiry context is retained`, async ({ page }) => {
        await page.goto(`/${lang}`);
        const apd = page.getByRole('link', { name: lang === 'tr' ? 'APD’yi inceleyin' : 'Explore APD', exact: true });
        await apd.click();
        await expect(page).toHaveURL(new RegExp(`/${lang}/products/apd$`));
        await expect(page.locator('main')).toContainText(lang === 'tr' ? 'henüz müşteri sisteminde canlı değildir' : 'not yet live in a customer system');
        await expect(page.locator('main')).not.toContainText(/ISO 27001|SOC 2|99.9|Sıfır Hatayla|Zero Errors/);
        await page.getByRole('link', { name: lang === 'tr' ? 'APD’yi birlikte değerlendirelim' : 'Discuss APD', exact: true }).click();
        await expect(page.locator('#contact-form')).toBeInViewport();
        await expect(page.locator('input[name="topic"]')).toHaveValue('apd');
        await expect(page.locator('textarea[name="message"]')).toHaveValue(/APD/);
    });
    test(`${lang}: header keeps all 24 service links and does not overflow`, async ({ page }) => {
        await page.setViewportSize({ width: 1100, height: 800 });
        await page.goto(`/${lang}`);
        await page.getByRole('button', { name: lang === 'tr' ? 'SAP Hizmetleri' : 'SAP Services', exact: true }).click();
        await expect(page.locator('#desktop-services a')).toHaveCount(25);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    });
    for (const width of [390, 768, 1440]) {
        test(`${lang}: home and APD fit at ${width}px`, async ({ page }, testInfo) => {
            await page.setViewportSize({ width, height: 900 });
            await page.context().addCookies([{ name: 'btp-cookie-consent', value: 'rejected', domain: '127.0.0.1', path: '/' }]);
            for (const path of ['', '/products/apd']) {
                await page.goto(`/${lang}${path}`);
                await expect(page.locator('h1')).toHaveCount(1);
                expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
                if (lang === 'tr' && width !== 768) await page.screenshot({ path: testInfo.outputPath(path ? 'apd.png' : 'home.png'), fullPage: true });
            }
        });
    }
}
