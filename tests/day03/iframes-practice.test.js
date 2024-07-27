import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/iframe")
  });

  test("Locate the iframe by id", async ({ page }) => {

    const myFrame = page.frameLocator("#mce_0_ifr");
    const textBoxElementInsideFrame = myFrame.locator("//body[@id='tinymce']");

    // await textBoxElementInsideFrame.clear();
    await textBoxElementInsideFrame.press("Control+A");
    await textBoxElementInsideFrame.press("Backspace");

    await textBoxElementInsideFrame.fill("Hello World");

    console.log(await textBoxElementInsideFrame.innerText());
    await expect(textBoxElementInsideFrame).toHaveText("Hello World");
  });

  test("Locate the iframe using CSS", async ({ page }) => {
    const myFrame = page.frameLocator("iframe[id='mce_0_ifr'][title='Rich Text Area']");
    const textBoxElementInsideFrame = myFrame.locator("//body[@id='tinymce']");

    await expect(textBoxElementInsideFrame).toBeEnabled();

  });

  test("Locate the iframe using XPath", async ({ page }) => {
    const myFrame = page.frameLocator("//iframe[@id='mce_0_ifr' and @title='Rich Text Area']");
    const textBoxElementInsideFrame = myFrame.locator("//body[@id='tinymce']");

    await expect(textBoxElementInsideFrame).not.toBeEmpty();
    await textBoxElementInsideFrame.clear();
    await expect(textBoxElementInsideFrame).toBeEmpty();

    await expect(textBoxElementInsideFrame).toBeVisible();
    await expect(textBoxElementInsideFrame).not.toBeHidden();

    await expect(textBoxElementInsideFrame).toBeEnabled();
    await expect(textBoxElementInsideFrame).not.toBeDisabled();

  });

  /*
  <iframe id="mce_0_ifr" frameborder="0" allowtransparency="true" 
  title="Rich Text Area" class="tox-edit-area__iframe"></iframe>
  */
});
