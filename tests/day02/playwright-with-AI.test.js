import { test } from "@playwright/test";

test("Youtube test", async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  const acceptCookies = await page.locator(
    "//span[@role='text' and .='Accept all']"
  );

  await acceptCookies.click();
  const searchBox = page.locator("//input[@id='search']");

  await searchBox.click();
  await searchBox.fill("AI Prompt Engineering");
  await searchBox.press("Enter");

  const firstVideo = await page.locator(
    "//a[@id='thumbnail' and contains(@href, '/watch?v=_ZvnD73m40o')]"
  );

  await firstVideo.click();
});
