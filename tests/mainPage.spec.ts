import { test, expect } from '@playwright/test';
import { elements, lightModes } from '../elements/MainPageElements';

test.describe('Main page test', () => {
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
    elements.forEach(({ locator, name, text }) => {
      if (text) {
        test.step(`Check the text of header's ${name} element`, async () => {
          await expect.soft(locator(page)).toContainText(text);
        });
      }
    });
  });

  test('Check the href attribute of headers link', async ({ page }) => {
    elements.forEach(({ locator, name, attributes }) => {
      if (attributes) {
        test.step(`Check the href of ${name} header element`, async () => {
          await expect(locator(page)).toHaveAttribute(attributes?.type, attributes?.value);
        });
      }
    });
  });

  test('Check the changing of theme mode', async ({ page }) => {
    await page.getByLabel('Switch between dark and light').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('Check the h1 title', async ({ page }) => {
    elements.forEach(({ locator, name }) => {
      async () => {
        await expect(locator(page)).toBeVisible();
        await expect(locator(page)).toContainText(name);
      };
    });
  });

  test('Get started button is present on the page', async ({ page }) => {
    elements.forEach(({ locator, name, attributes }) => {
      async () => {
        if (attributes) {
          await expect(locator(page)).toBeVisible();
          await expect(locator(page)).toContainText(name);
          await expect(locator(page)).toHaveAttribute(attributes?.value, attributes?.type);
        }
      };
    });
  });

  lightModes.forEach((value) => {
    test(`Check the active style of ${value} mode`, async ({ page }) => {
      await page.evaluate((value) => {
        document.querySelector('html')?.setAttribute('data-theme', value);
      }, value);
      await expect(page).toHaveScreenshot(`page-with-${value}.png`);
    });
  });
});
