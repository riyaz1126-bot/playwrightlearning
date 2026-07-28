import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('fl');
  await page.getByText('Flipkart', { exact: true }).click();
  await page.getByRole('link', { name: 'Flipkart Flipkart https://www' }).click();
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('apple iphone 16 plus 128gb black');
  await page.getByRole('link', { name: 'apple iphone 16 plus black 128 gb in Mobiles' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Apple iPhone 16 Plus (Black, 128 GB) Add to Compare Apple iPhone 16 Plus (Black' }).click();
  const page1 = await page1Promise;
});