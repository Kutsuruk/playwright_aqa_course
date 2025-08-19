import { test } from '@playwright/test';
import { MainPage } from '../models/MainPage';

test.describe('Main page test', () => {
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  });

  test('Check exist of header nav elements', async ({}) => {
    await mainPage.checkHeaderElementsVisability();
  });

  test('Check that header nav elems has correct naming', async ({}) => {
    await mainPage.openMainPage();
    await mainPage.checkHeaderElementsNaming();
  });

  test('Check the href attribute of headers link', async ({}) => {
    await mainPage.openMainPage();
    await mainPage.checkHeaderElementHrefAttribute();
  });

  test('Check the changing of theme mode', async ({}) => {
    await mainPage.openMainPage();
    await mainPage.clickSwitchThemeIcon();
    await mainPage.checkDataThemeAttributeValue();
  });

  test('Check the h1 title', async ({}) => {
    await mainPage.openMainPage();
    await mainPage.checkHeaderElementHeadingTitle();
  });

  test('Get started button is present on the page', async ({}) => {
    await mainPage.openMainPage();
    await mainPage.checkGetStartedButtonAvailability();
  });

  test(`Check the active style of theme mode`, async ({}) => {
    await mainPage.openMainPage();
    mainPage.checkTheActiveThemeStatus();
  });
});
