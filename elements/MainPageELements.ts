export const elements = [
  {
    locator: (page) => page.getByRole('link', { name: 'Playwright logo Playwright' }),
    name: 'Playwright logo Playwright',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Docs' }),
    name: 'Docs',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'API' }),
    name: 'API',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Node.js' }),
    name: 'Node.js',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Community' }),
    name: 'Community',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'GitHub repository' }),
    name: 'GitHub repository',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Discord server' }),
    name: 'Discord server',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Switch between dark and light' }),
    name: 'Switch between dark and light',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Search (Command+K)' }),
    name: 'Search (Command+K)',
  },
];
