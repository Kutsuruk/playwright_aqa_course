import { test, expect, Page } from '@playwright/test';
import { elements, lightModes } from '../../elements/MainPageElements';
import { MainPage } from '../models/MainPage';

test.describe('Main page test', () => {
  test('Check exist of header nav elements', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.checkHeaderElementsVisability();
  });

  test('Check that header nav elems has correct naming', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.checkHeaderElementsNaming();
  });

  test('Check the href attribute of headers link', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.checkHeaderElementHrefAttribute();
  });

  test('Check the changing of theme mode', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.clickSwitchThemeButton();
  });

  test('Check the h1 title', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.checkHeaderElementHeadingTitle();
  });

  test('Get started button is present on the page', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.checkGetStartedButtonAvailability();
  });

  test(`Check the active style of theme mode`, async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    mainPage.checkTheActiveThemeStatus();
  });
});
