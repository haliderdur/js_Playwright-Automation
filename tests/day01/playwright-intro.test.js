import { test } from "playwright/test";

test("Search for Playwright on Google", async ({ page }) => {
  // navigate to "https://www.google.com"
  await page.goto("https://www.google.com");

  await page.waitForTimeout(2000); // pause for 2 seconds

  // locate cookies accept button and click
  const acceptCookiesBtn = await page.locator("[id=L2AGLb]");
  acceptCookiesBtn.click();

  // locate search box
  const searchBox = await page.locator("[name=q]");

  // type "Playwright"
  await page.waitForTimeout(2000); // pause for 2 seconds
  await searchBox.fill("Playwright Automation");

  // press Enter
  await page.waitForTimeout(2000); // pause for 2 seconds
  await searchBox.press("Enter");
  // await page.keyboard.press("Enter");
});
