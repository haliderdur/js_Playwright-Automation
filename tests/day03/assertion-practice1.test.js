import { test, expect } from "@playwright/test";

test.describe("Assertion in UI testing", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
  });

  test("Verify page title is 'Practice'", async ({ page }) => {
    const title = await page.title();
    console.log(title);
    expect(title).toEqual("Practice");
  });

  test("Verify the text 'Automation' is in header", async ({ page }) => {
    const header = await page.locator("h1");
    const headerText = await header.textContent();
    console.log(headerText);
    expect(headerText).toContain("Automation");
  });

  test("Verify the 'A/B Testing' link is clickable and visible ", async ({
    page,
  }) => {
    const abTestingLink = await page.locator("//a[@href='/abtest']");

    expect(await abTestingLink.isEnabled()).toBeTruthy();
    // await expect(abTestingLink).toBeEnabled();
    expect(await abTestingLink.isVisible()).toBeTruthy();
    // await expect(abTestingLink).toBeVisible();
  });

  test("Verify the element 'Autocomplete' has the href of '/autocomplete'", async ({
    page,
  }) => {
    const autocompleteLink = await page.locator("//a[@href='/autocomplete']");
    const href = await autocompleteLink.getAttribute("href");
    console.log(href);

    expect(href).toBe("/autocomplete");
    // await expect(autocompleteLink).toHaveAttribute("href","/autocomplete")
  });
});
