import { test, expect } from '@playwright/test';

test.beforeEach (async({page}) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
});

test('Handle JS Alert', async ({ page }) => {
 page.once('dialog', async dialog => {
    console.log(dialog.message()); // Alert text
    await dialog.accept();         // Click OK
  });
   await page.getByRole('button', { name: 'Click for JS Alert' }).click();
  await expect(page.getByText('You successfully clicked an alert', { exact: true })).toBeVisible();
});

test('Handle JS confirm OK', async ({ page }) => {

  page.once('dialog', async dialog => {
    console.log(dialog.type());
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

  await expect(page.getByText('You clicked: Ok')).toBeVisible();
});
test('Handle JS confirm cancel', async ({ page }) => {

  page.once('dialog', async dialog => {
    console.log(dialog.type());
    console.log(dialog.message());
    await dialog.dismiss();
  });

  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

  await expect(page.getByText('You clicked: Cancel')).toBeVisible();
});

test('Handle JS prompt enter', async ({ page }) => {

  page.once('dialog', async dialog => {
    console.log(dialog.type());
    console.log(dialog.message());
    await dialog.accept('India');
  });

  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

  await expect(page.getByText('You entered: India')).toBeVisible();
});

