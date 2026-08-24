import { test, expect } from '@playwright/test';
import { PracticePage} from '../Pages/practicepage';
import {testData } from '../testdata/formfields';
test('test iframe', async ({ page }) => {
  const practicepage = new PracticePage(page);
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
  const practicepage = new PracticePage(page);
  await page.goto('/AutomationPractice/');
  await practicepage.radioButton.check();
  await expect(practicepage.radioButton).toBeChecked();
});

test('hover menu option', async ({ page }) => {
  const practicepage = new PracticePage(page);
  await page.goto('/AutomationPractice/');
  await practicepage.hoverButton.hover();
  await practicepage.Gototopbutton.click();
  await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/#top');
});

test('dropdown selection', async ({ page }) => {
  const practicepage = new PracticePage(page);
  await page.goto('/AutomationPractice/');
  await practicepage.dropdown.selectOption('Option1');
  await expect(practicepage.dropdown).toHaveValue('option1');
});

test('alert should contain the name', async ({ page }) => {
await page.goto('/AutomationPractice/');
const practicepage = new PracticePage(page);
await practicepage.textboxField.fill('tom');
  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain(testData.textboxfield);
    await dialog.accept();
  });
  await practicepage.Alertbutton.click();
});

test('click ok on confirm on pop up', async ({ page }) => {
await page.goto('/AutomationPractice/');
const practicepage = new PracticePage(page);
await practicepage.textboxField.fill(testData.textboxfield);

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain(testData.textboxfield);
    await dialog.accept();
  });
  await page.locator('#confirmbtn').click();
});

test('confirm check box checked', async ({ page }) => {
  const practicepage = new PracticePage(page);
await page.goto('/AutomationPractice/');

const option1 = page.locator('#checkBoxOption1');
const option2 = page.locator('#checkBoxOption2');

await practicepage.option1.check();
await practicepage.option2.check();

await expect(practicepage.option1).toBeChecked();
await expect(practicepage.option2).toBeChecked();
});