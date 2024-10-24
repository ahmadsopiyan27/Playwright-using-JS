const { test, expect } = require("@playwright/test");

test.describe("Saucedemo Automation Test", () => {
  test("Login Test", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await expect(page.locator('.login_logo')).toBeVisible()

    await page.fill('#user-name', 'standard_user')

    await page.fill('#password', 'secret_sauce')

    await page.click('#login-button')

    await expect(page.locator('.title')).toBeVisible()

    await page.click('#add-to-cart-sauce-labs-backpack')

    await page.click('.shopping_cart_link')

    await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack');

  });
});
