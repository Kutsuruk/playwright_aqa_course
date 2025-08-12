export const elements = [
  {
    locator: (page) => page.getByRole('link', { name: 'Playwright logo Playwright' }),
    name: 'Playwright logo Playwright',
    text: 'Playwright',
    attributes: {
      type: 'href',
      value: '/',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Docs' }),
    name: 'Docs',
    text: 'Docs',
    attributes: {
      type: 'href',
      value: '/docs/intro',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'API' }),
    name: 'API',
    text: 'API',
    attributes: {
      type: 'href',
      value: '/docs/api/class-playwright',
    },
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Node.js' }),
    name: 'Node.js',
    text: 'Node.js',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Community' }),
    name: 'Community',
    text: 'Community',
    attributes: {
      type: 'href',
      value: '/community/welcome',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'GitHub repository' }),
    name: 'GitHub repository',
    text: '',
    attributes: {
      type: 'href',
      value: 'https://github.com/microsoft/playwright',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Discord server' }),
    name: 'Discord server',
    text: '',
    attributes: {
      type: 'href',
      value: 'https://aka.ms/playwright/discord',
    },
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Switch between dark and light' }),
    name: 'Switch between dark and light',
    text: '',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Search (Command+K)' }),
    name: 'Search (Command+K)',
    text: '',
  },
];
