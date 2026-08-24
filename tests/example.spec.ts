import { test, expect } from '@playwright/test';
import { FlipkartPage } from '../Pages/flipkartPage';
import { testData } from '../testdata/formfields';
test('test', async ({ page }) => {
  const flipkartPage = new FlipkartPage(page);
  await page.goto('https://www.google.com/');
  await flipkartPage.googleSearch.fill('fl');
  await flipkartPage.googleSearchFlipkart.click();
  await flipkartPage.Flipkartlink.click();
  await flipkartPage.popupClose.click();
  await flipkartPage.flipKartSearchField.click();
  await flipkartPage.flipKartSearchField.fill(testData.flipkartsearchitem);
  await flipkartPage.FlipkartIphoneoption.click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: testData.textboxfield }).click();
  const page1 = await page1Promise;
});