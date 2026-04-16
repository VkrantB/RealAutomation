// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { AgentOnboardingPage } from '../pages/AgentOnboardingPage';


test('Verify Login to Real App', async ({ page }) => {
  const login = new LoginPage(page);
  const agentOnboardingPage = new AgentOnboardingPage(page);
  await login.gotoLoginPage();
  await login.login('vikOne', 'Password@123');

  // Expect assertions on Login Page
  await expect(page).toHaveTitle('Login - Bolt');
  await expect(page).toHaveURL('https://bolt.playrealbrokerage.com/login');

  await agentOnboardingPage.checkLogo();
  await agentOnboardingPage.clickOnLogout();
  await page.waitForTimeout(5000);

    //await expect(page.locator('//span[contains(text(),"Bad credentials")]')).toHaveText("Bad credentials");
  
});

test('Test the Register Page', async ({ page }) => {
  const login = new LoginPage(page);
  const register = new RegistrationPage(page);

  await login.gotoLoginPage();
  await login.navigateToRegisterPage();
  await register.createAccount('Viking','Kumar','vikOne','vik@vik.com','Password@123','Password@123');
  await page.waitForTimeout(6000);

  // // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
