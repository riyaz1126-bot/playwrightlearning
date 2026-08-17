import { test, expect } from '@playwright/test';
test('test iframe', async ({ page }) => {
  await page.goto('/AutomationPractice/');
  const frame = page.frameLocator('iframe');
  await frame.getByRole('link', { name: 'VIEW ALL COURSES' }).click();
  await page.locator('img.logoClass').isVisible();
});

test('test tab switch', async ({ page }) => {
  await page.goto('/AutomationPractice/');
const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.getByRole('link', { name: 'Open Tab' }).click()
]);

await newPage.waitForLoadState();
await newPage.getByText('Opening Hours : Monday to Saturay - 8 Am to 5 Pm').isVisible();
await newPage.close();
await page.bringToFront();
await page.getByRole('img').isVisible();
  
});

test('test window switch', async ({ page }) => {
  await page.goto('/AutomationPractice/');
const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.getByRole('button', { name: 'Open Window' }).click()
]);

await newPage.waitForLoadState();
await newPage.getByText('Opening Hours : Monday to Saturay - 8 Am to 5 Pm').isVisible();
await newPage.close();
await page.bringToFront();
await page.getByRole('img').isVisible();
  
});

test('test radio button', async ({ page }) => {
  await page.goto('/AutomationPractice/');
  const radioButton = page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio');
  await radioButton.check();
  await expect(radioButton).toBeChecked();
});

test('hover menu option', async ({ page }) => {
  await page.goto('/AutomationPractice/');
  const hoverButton = page.getByRole('button', { name: 'Mouse Hover' });
  await hoverButton.hover();
  await page.getByRole('link', { name: 'Top' }).click();
  await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/#top');
});

test('dropdown selection', async ({ page }) => {
  await page.goto('/AutomationPractice/');
  const dropdown = page.getByRole('combobox');
  await dropdown.selectOption('Option1');
  await expect(dropdown).toHaveValue('option1');
});

test('alert should contain the name', async ({ page }) => {
await page.goto('/AutomationPractice/');

  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('tom');

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('tom');
    await dialog.accept();
  });

  await page.locator('#alertbtn').click();
});

test('click ok on confirm on pop up', async ({ page }) => {
await page.goto('/AutomationPractice/');

  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('tom');

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('tom');
    await dialog.accept();
  });
  await page.locator('#confirmbtn').click();
});

test('confirm check box checked', async ({ page }) => {
await page.goto('/AutomationPractice/');

const option1 = page.locator('#checkBoxOption1');
const option2 = page.locator('#checkBoxOption2');

await option1.check();
await option2.check();

await expect(option1).toBeChecked();
await expect(option2).toBeChecked();
});