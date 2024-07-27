import { test, expect } from "@playwright/test";
import exp from "constants";

test.describe("Test Group", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("Left click test", async ({ page }) => {
    await page.click("//a[@href='/inputs']");
    expect(await page.title()).toBe("Inputs")
    expect(page.url()).toBe("https://practice.cydeo.com/inputs")
  });

  test("Right click test", async ({ page }) => {
    await page.click("//a[@href='/inputs']", { button: "right"});
    
  });

  test("Test 2", async ({ page }) => {
    // Test logic here
  });

  test("Test 3", async ({ page }) => {
    // Test logic here
  });

  test("Test 4", async ({ page }) => {
    // Test logic here
  });
});
