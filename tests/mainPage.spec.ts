import { test, expect } from '@playwright/test';
import { elements } from '../elements/MainPageELements';

test.describe('Main page test', async () => {
  test.beforeEach(async ({ page }) => {
    await await page.goto('https://playwright.dev/');
  });

  test('Check exist of header nav elements', async ({ page }) => {
    elements.forEach(({ locator, name }) => {
      test.step(`Check the availability of header's ${name} logos`, async () => {
        await expect.soft(locator(page)).toBeVisible();
      });
    });
  });

  test('Check that header nav elems has correct naming', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Playwright logo Playwright', exact: true }),
    ).toContainText('Playwright');
    await expect(page.getByRole('link', { name: 'Docs', exact: true })).toContainText('Docs');
    await expect(page.getByRole('link', { name: 'API', exact: true })).toContainText('API');
    await expect(page.getByRole('button', { name: 'Node.js', exact: true })).toContainText(
      'Node.js',
    );
    await expect(page.getByRole('link', { name: 'Community', exact: true })).toContainText(
      'Community',
    );
  });

  test('Check the href attribute of headers link', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
      'href',
      '/',
    );
    await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
    await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute(
      'href',
      '/docs/api/class-playwright',
    );
    await expect(page.getByRole('link', { name: 'Community' })).toHaveAttribute(
      'href',
      '/community/welcome',
    );
    await expect(page.getByRole('link', { name: 'GitHub repository' })).toHaveAttribute(
      'href',
      'https://github.com/microsoft/playwright',
    );
    await expect(page.getByRole('link', { name: 'Discord server' })).toHaveAttribute(
      'href',
      'https://aka.ms/playwright/discord',
    );
  });

  test('Check the changing of theme mode', async ({ page }) => {
    await page.getByLabel('Switch between dark and light').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('Check the h1 title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText(
      'Playwright enables reliable end-to-end testing for modern web apps.',
    );
  });

  test('Get started button is present on the page', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
    await expect(page.getByRole('link', { name: 'Get started' })).toHaveAttribute(
      'href',
      '/docs/intro',
    );
  });
});
