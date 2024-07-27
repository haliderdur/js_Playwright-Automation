import { test, expect } from '@playwright/test';

test.describe('Test Group', async () => {

    test.beforeEach(async ({page}) => {
        await page.goto("https://practice.cydeo.com/javascript_alerts");
    })

  test('Handling JS Simple alerts', async ({ page }) => {
    
    let alertMessage;

    page.on("dialog", async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      alertMessage = dialog.message();
      await dialog.accept();
    })

    const clickForJsAlert = page.locator("button[onclick='jsAlert()']");
    await clickForJsAlert.click();

    expect(alertMessage).toBe("I am a JS Alert");

    const successMessage = page.locator("'You successfully clicked an alert'");
    await expect(successMessage).toBeVisible();
  
  });

  test('Handling JS Confirmation alerts', async ({ page }) => {
    
    let confirmMessage;

    page.on("dialog", async(dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        confirmMessage = dialog.message();
        await dialog.dismiss();
    });

    const clickForJsConfirm = page.locator("button[onclick='jsConfirm()']");
    await clickForJsConfirm.click();
    
    expect(confirmMessage).toBe("I am a JS Confirm");
    await expect(page.locator("text='You clicked: Cancel'")).toBeVisible();
  });

  test('Handling JS Prompt alerts', async ({ page }) => {

    let promptMessage;

    page.on("dialog", async(dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      promptMessage = dialog.message();
      dialog.accept("Cydeo");
    })

    const clickForJsPrompt = page.locator("button[onclick='jsPrompt()']");
    await clickForJsPrompt.click();

    expect(promptMessage).toBe("I am a JS prompt");
    await expect(page.locator("text='You entered: Cydeo'")).toBeVisible();
  });

});