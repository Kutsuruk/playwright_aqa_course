import test, { expect, Page } from '@playwright/test';
import { elements } from '../../elements/MainPageElements';
import { Elements } from '../../Interfaces/Elements.interface';

export class MainPage {
  readonly page: Page;
  readonly elements: Elements[];

  constructor(page: Page) {
    this.page = page;
    this.elements = elements;
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
}
