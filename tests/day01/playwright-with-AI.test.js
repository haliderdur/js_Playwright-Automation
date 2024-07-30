import { test } from "@playwright/test";

test("Search for Cydeo on Google", async ({ page }) => {
  // go to google website
  await page.goto("https://www.google.com");

  // locate cookies accept button and click
  const acceptCookiesBtn = await page.locator("[id=L2AGLb]");
  acceptCookiesBtn.click();

  // find search box and type Cydeo
  const searchBox = await page.locator("[name=q]");
  searchBox.fill("Cydeo");

  // press enter
  await page.keyboard.press("Enter");
});
