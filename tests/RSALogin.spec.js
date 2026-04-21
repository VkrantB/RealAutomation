const { test, expect } = require('@playwright/test');

test('RSA Register Test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/register');
    await expect(page).toHaveTitle("Let's Shop");
    //await expect(page).toHaveURL('/auth/');

    //Filling the Form
    const firstNameLocator = await page.locator('#firstName');
    const lastNameLocator = await page.locator('#lastName');
    const emailLocator = await page.locator('#userEmail');

    const phoneLocator = await page.getByPlaceholder('enter your number');

    const occupationDropdownLocator = await page.locator('.custom-select');
    const genderLocator = await page.locator("[value='Male']");
    const passwordLocator = await page.getByRole('textbox', { name: 'Passsword' });
    const cnfpasswordLocator = await page.getByLabel('Confirm Password');

    const ageCheckboxLocator = await page.locator('[type="checkbox"]');
    const registerButtonLocator = await page.locator('#login');

    await firstNameLocator.fill('Vikram');
    await lastNameLocator.fill('Kumar');
    await emailLocator.fill('vikky1@lnovic.com');
    await phoneLocator.fill('8766626585');
    await occupationDropdownLocator.selectOption('Student');
    await genderLocator.check();
    await passwordLocator.fill('Password@2026');
    await cnfpasswordLocator.fill('Password@2026');
    await ageCheckboxLocator.check();
    await registerButtonLocator.click();
    await page.pause();
    //await page.waitForTimeout(7000);

   const sucMsgLocator = await page.locator('text="Account Created Successfully"'); //Account Created Successfully
    await expect(sucMsgLocator).toHaveText('Account Created Successfully');
})
test.only('RSA Login Test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await expect(page).toHaveTitle("Let's Shop");
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/login');

    //Filling the Form
    const emailLocator = await page.locator('#userEmail');
    const passwordLocator = await page.getByRole('textbox', { name: 'enter your passsword' });
    const loginButtonLocator = await page.getByRole('button', { name: 'Login' });

    await emailLocator.fill('vikky1@lnovic.com');
await passwordLocator.fill('Password@2026');
await loginButtonLocator.click();

     
const cardTitles = await page.locator('.card-body b').allTextContents();
console.log(cardTitles);
})