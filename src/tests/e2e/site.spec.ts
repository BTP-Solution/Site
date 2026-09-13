import { test, expect } from '@playwright/test';

test('language negotiation and tracking query survive redirects', async ({ request }) => {
    for (const header of ['*', 'en-US,en;q=0.9', 'bad_locale']) {
        const response = await request.get('/?utm_source=regression', { headers: { 'Accept-Language': header }, maxRedirects: 0 });
        expect(response.status()).toBe(307);
        expect(response.headers().location).toContain('utm_source=regression');
    }
});
test('English navigation and footer preserve selected language', async ({ page }) => {
    await page.goto('/en/services/sap-consulting');
    const breadcrumb = page.locator('main nav').getByRole('link', { name: /^services$/i });
    await expect(breadcrumb).toHaveAttribute('href', '/en/services');
    await breadcrumb.click();
    await expect(page).toHaveURL(/\/en\/services$/);
    await expect(page.locator('footer').getByRole('link', { name: 'About', exact: true })).toHaveAttribute('href', '/en/about');
});
test('contact routes and localized 404 work', async ({ request }) => {
    for (const locale of ['tr', 'en']) {
        expect((await request.get('/' + locale + '/contact')).status()).toBe(200);
        expect((await request.get('/' + locale + '/missing-regression-page')).status()).toBe(404);
    }
});
test('cookie rejection survives reload and floating widgets do not overlap the banner', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/en');
    const banner = page.locator('[data-cookie-banner]');
    await expect(banner).toBeVisible();
    await expect(page.locator('[data-contact-widget]')).toBeHidden();
    await banner.getByRole('button', { name: 'Reject', exact: true }).click();
    await page.reload();
    await expect(banner).toHaveCount(0);
    await expect(page.locator('[data-contact-widget]')).toBeVisible();
});
test('mobile heading fits and menu is translated and keyboard dismissible', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/en/services/sap-consulting');
    const heading = await page.locator('h1').boundingBox();
    expect(heading).not.toBeNull();
    expect(heading!.x + heading!.width).toBeLessThanOrEqual(390);
    const menu = page.getByRole('button', { name: 'Toggle mobile menu' });
    await menu.click();
    await page.locator('#mobile-menu').getByRole('button', { name: 'Services', exact: true }).click();
    await expect(page.locator('#mobile-services')).toContainText('Financial Solutions');
    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
});
test('demo links reach form and existing technical features', async ({ page }) => {
    await page.goto('/en/products/apd');
    await page.getByRole('link', { name: 'Schedule a Demo', exact: true }).click();
    await expect(page).toHaveURL(/#contact-form$/);
    await expect(page.locator('#contact-form')).toBeInViewport();
    await expect(page.locator('#apd-features')).toHaveCount(1);
});
test('form error preserves input and retry only succeeds on provider acceptance', async ({ page }) => {
    await page.goto('/en/contact');
    await page.getByLabel('Full name', { exact: true }).fill('Local Test');
    await page.getByLabel('Company', { exact: true }).fill('Test Company');
    await page.getByLabel('Corporate email', { exact: true }).fill('test@example.com');
    await page.getByLabel('Message', { exact: true }).fill('This is a mocked browser test.');
    await page.route('**/api/contact', route => route.fulfill({ status: 503, json: { error: 'service_unavailable' } }));
    await page.getByRole('button', { name: 'Send request', exact: true }).click();
    await expect(page.getByRole('alert')).toBeVisible();
    await expect(page.getByLabel('Message', { exact: true })).toHaveValue('This is a mocked browser test.');
    await expect(page.getByRole('heading', { name: 'Request submitted' })).toHaveCount(0);
    await page.unroute('**/api/contact');
    await page.route('**/api/contact', route => route.fulfill({ status: 200, json: { ok: true } }));
    await page.getByRole('button', { name: 'Send request', exact: true }).click();
    await expect(page.getByRole('status')).toContainText('Request submitted');
});
