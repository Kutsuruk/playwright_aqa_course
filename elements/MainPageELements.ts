import { Locator, Page } from '@playwright/test';
import { Companies, Elements, LightModes } from '../Interfaces/Elements.interface';

export const elements: Elements[] = [
  {
    locator: (page: Page): Locator =>
      page.getByRole('link', { name: 'Playwright logo Playwright' }),
    name: 'Playwright logo Playwright',
    text: 'Playwright',
    attributes: {
      type: 'href',
      value: '/',
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Docs' }),
    name: 'Docs',
    text: 'Docs',
    attributes: {
      type: 'href',
      value: '/docs/intro',
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'API' }),
    name: 'API',
    text: 'API',
    attributes: {
      type: 'href',
      value: '/docs/api/class-playwright',
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole('button', { name: 'Node.js' }),
    name: 'Node.js',
    text: 'Node.js',
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Community' }),
    name: 'Community',
    text: 'Community',
    attributes: {
      type: 'href',
      value: '/community/welcome',
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'GitHub repository' }),
    name: 'GitHub repository',
    text: '',
    attributes: {
      type: 'href',
      value: 'https://github.com/microsoft/playwright',
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Discord server' }),
    name: 'Discord server',
    text: '',
    attributes: {
      type: 'href',
      value: 'https://aka.ms/playwright/discord',
    },
  },
  {
    locator: (page: Page): Locator =>
      page.getByRole('button', { name: 'Switch between dark and light' }),
    name: 'Switch between dark and light',
    text: '',
  },
  {
    locator: (page: Page): Locator => page.getByRole('button', { name: 'Search (Command+K)' }),
    name: 'Search (Command+K)',
    text: '',
  },
  {
    locator: (page: Page): Locator =>
      page.getByRole('heading', { name: 'Playwright enables reliable' }),
    name: 'Playwright enables reliable',
    text: '',
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Get started' }),
    name: 'Get started',
    text: '',
    attributes: {
      type: 'href',
      value: '/docs/intro',
    },
  },
];

export const lightModes: LightModes[] = ['light', 'dark'];

export const companies: Companies[] = [
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'VS Code' }),
    name: 'VS Code',
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Bing' }),
    name: 'Bing',
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Outlook' }),
    name: 'Outlook',
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Disney+ Hotstar' }),
    name: 'Disney Hotstar',
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Material UI' }),
    name: 'Material UI',
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'ING', exact: true }),
    name: 'ING',
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Adobe' }),
    name: 'Adobe',
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'React Navigation' }),
    name: 'React Navigation',
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Accessibility Insights' }),
    name: 'Accessibility Insights',
  },
];
