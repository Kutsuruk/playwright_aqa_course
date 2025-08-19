import test, { expect, Page } from '@playwright/test';
import { elements, lightModes } from '../../elements/MainPageElements';
import { Elements, LightModes } from '../../Interfaces/Elements.interface';

export class MainPage {
  readonly page: Page;
  readonly elements: Elements[];
  readonly lightModes: LightModes[];

  constructor(page: Page) {
    this.page = page;
    this.elements = elements;
    this.lightModes = lightModes;
  }

  async openMainPage() {
    await this.page.goto('https://playwright.dev/');
  }

  async checkHeaderElementsVisability() {
    for (const { locator, name } of this.elements) {
      test.step(`Check the availability of header's ${name} logos`, async () => {
        await expect.soft(locator(this.page)).toBeVisible();
      });
    }
  }

  async checkHeaderElementsNaming() {
    for (const { locator, name, text } of this.elements) {
      if (text) {
        test.step(`Check the text of header's ${name} element`, async () => {
          await expect.soft(locator(this.page)).toContainText(text);
        });
      }
    }
  }

  async checkHeaderElementHrefAttribute() {
    for (const { locator, name, attributes } of this.elements) {
      if (attributes) {
        test.step(`Check the href of ${name} header element`, async () => {
          await expect(locator(this.page)).toHaveAttribute(attributes?.type, attributes?.value);
        });
      }
    }
  }

  async clickSwitchThemeButton() {
    await this.page.getByLabel('Switch between dark and light').click();
    await expect(this.page.locator('html')).toHaveAttribute('data-theme', 'light');
  }

  async checkHeaderElementHeadingTitle() {
    for (const { locator, name } of this.elements) {
      async () => {
        await expect(locator(this.page)).toBeVisible();
        await expect(locator(this.page)).toContainText(name);
      };
    }
  }

  async checkGetStartedButtonAvailability() {
    for (const { locator, name, attributes } of this.elements) {
      async () => {
        if (attributes) {
          await expect(locator(this.page)).toBeVisible();
          await expect(locator(this.page)).toContainText(name);
          await expect(locator(this.page)).toHaveAttribute(attributes?.value, attributes?.type);
        }
      };
    }
  }

  async checkTheActiveThemeStatus() {
    for (const value of this.lightModes) {
      async ({ page }) => {
        await page.evaluate((value) => {
          document.querySelector('html')?.setAttribute('data-theme', value);
        }, value);
        await expect(page).toHaveScreenshot(`page-with-${value}.png`);
      };
    }
  }
}
