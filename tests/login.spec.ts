import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test('logs in with valid credentials', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('shows an error for a locked-out user', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
  });

  test('shows an error for an unknown username', async () => {
    await loginPage.login('unknown_user', 'secret_sauce');
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
  });

  test('shows an error for an invalid password', async () => {
    await loginPage.login('standard_user', 'incorrect_password');
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
  });

  test('requires a username when credentials are blank', async () => {
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });
});
