import { Locator, Page } from '@playwright/test';

export interface Elements {
  locator: (page: Page) => Locator;
  name: string;
  text?: string;
  attributes?: {
    type: string;
    value: string;
  };
}

export type LightModes = 'light' | 'dark';
