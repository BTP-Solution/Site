import { defineConfig, devices } from '@playwright/test';
const worker = process.env.PLAYWRIGHT_TARGET === 'worker';
const baseURL = process.env.PLAYWRIGHT_BASE_URL || (worker ? 'http://127.0.0.1:8787' : 'http://127.0.0.1:3000');
export default defineConfig({
    testDir: './src/tests/e2e', fullyParallel: true, forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0, workers: process.env.CI ? 1 : undefined,
    reporter: [['list'], ['html', { open: 'never' }]],
    use: { baseURL, trace: 'on-first-retry', launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH } },
    projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
    webServer: process.env.PLAYWRIGHT_BASE_URL ? undefined : {
        command: worker ? 'npx wrangler dev --local --ip 127.0.0.1 --port 8787' : (process.env.CI ? 'npm run start' : 'npm run dev'),
        url: baseURL + '/en', reuseExistingServer: !process.env.CI, timeout: 120000,
    },
});
