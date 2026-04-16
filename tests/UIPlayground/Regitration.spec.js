
// @ts-check
import { test, expect } from '@playwright/test';

test('Verify successful registration', async ({ page }) => {
    await page.goto('http://uiplayground.techwithjatin.com/');
    await expect(page).toHaveURL('http://uiplayground.techwithjatin.com/');
    await expect(page).toHaveTitle('UI Automation Playground SDET MASTER CLASS Tech with Jatin')
    await expect(page.locator('.main-title')).toBeVisible();
    await expect(page.locator('.main-title')).toHaveText('Registration Form');

    //Filling the Form
    const firstNameLocator = await page.getByTestId('input-first-name');
    const lastNameLocator = await page.getByTestId('input-last-name');
    const emailLocator = await page.getByTestId('input-email-reg');
    const passwordLocator = await page.getByTestId('input-password');
    const phoneLocator = await page.locator('#phone');
    const dobLocator = await page.getByTestId('input-dob');
    const genderLocator = await page.getByTestId('input-gender-male');
    const countryLocator = await page.locator('[data-testid="input-country"]');
    const tcLocator = await page.getByTestId('input-terms');
    const registerButtonLocator = await page.getByTestId('btn-register');

    await firstNameLocator.fill('Vikram');
    await lastNameLocator.fill('Kumar');
    await emailLocator.fill('vikone@yahoo.com');
    await passwordLocator.fill('Password@2026');
    await phoneLocator.fill('8766626585');
    await dobLocator.fill('1995-11-14');
    await genderLocator.check();
    await countryLocator.selectOption('UAE');
    await tcLocator.check();
    //await page.waitForTimeout(10000);
    await registerButtonLocator.click();

    await expect(page.locator("//div[contains(text(),'Registration Successful!')]")).toHaveText('Registration Successful!');
    const successmsgLocator = await page.getByTestId('success-name');
    await expect(successmsgLocator).toHaveText('Vikram Kumar');
    //await page.pause();
    //await page.waitForTimeout(5000);
    // Navigate to Register page
    const registerAgainButtonLocator = await page.getByTestId('btn-register-again');
    await registerAgainButtonLocator.click();
    await expect(page.locator('.main-title')).toHaveText('Registration Form');

    //Print Total Number of links
    const linksCount = await page.locator('//a').count();
    const allLinks = await page.$$('a');
    console.log('Total Links present:  ', linksCount)

    let index = 1;
    for (const link of allLinks) {

        const href = await link.getAttribute('href');
        //console.log(`${index}: ${href}`);
        console.log(`${href}`);
        index++;
    }
    //await page.waitForTimeout(5000);
});

