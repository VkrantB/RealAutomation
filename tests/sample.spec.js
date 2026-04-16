// @ts-check
import { test, expect, chromium } from '@playwright/test';



test('Login via Basic Authetication', async () => {
  const browser = await chromium.launch();
const context = await browser.newContext({
  httpCredentials:{
    username : 'VikOne',
    password : 'Password@123'
  }
}); //new isolated session
const page = await context.newPage();
  await page.goto('https://bolt.playrealbrokerage.com/login');
      //  await page.locator('[data-testid="usernameOrEmail"]').fill('');
      //  await page.locator('[data-testid="password"]').fill('')
      await page.locator('//span[contains(text(),Login)]').click();
      await page.waitForTimeout(5000);
  
});

