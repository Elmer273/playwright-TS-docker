import { test, expect } from '@playwright/test';

test('Search University of Victoria', async({page}) => {
   await page.goto('https:/google.com/');
   await expect(page).toHaveTitle(/Google/);

   await page.getByLabel('Search', { exact: true }).fill('University of Victoria');
   await page.getByLabel('university of victoria', { exact: true }).click();
   await page.getByRole('link', { name: 'University of Victoria: Home' }).click();
   await expect(page).toHaveTitle(/University of Victoria/);
   await page.close();
})