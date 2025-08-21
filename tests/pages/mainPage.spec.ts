import { test, expect } from '../fixtures/mainPage';

test.describe('Main page test', () => {
  test('Check exist of header nav elements', async ({ mainPage }) => {
    await mainPage.checkHeaderElementsVisability();
  });

  test('Check that header nav elems has correct naming', async ({ mainPage }) => {
    await mainPage.openMainPage();
    await mainPage.checkHeaderElementsNaming();
  });

  test('Check the href attribute of headers link', async ({ mainPage }) => {
    await mainPage.openMainPage();
    await mainPage.checkHeaderElementHrefAttribute();
  });

  test('Check the changing of theme mode', async ({ mainPage }) => {
    await mainPage.openMainPage();
    await mainPage.clickSwitchThemeIcon();
    await mainPage.checkDataThemeAttributeValue();
  });

  test('Check the h1 title', async ({ mainPage }) => {
    await mainPage.openMainPage();
    await mainPage.checkHeaderElementHeadingTitle();
  });

  test('Get started button is present on the page', async ({ mainPage }) => {
    await mainPage.openMainPage();
    await mainPage.checkGetStartedButtonAvailability();
  });

  test(`Check the active style of theme mode`, async ({ mainPage }) => {
    await mainPage.openMainPage();
    mainPage.checkTheActiveThemeStatus();
  });
});
