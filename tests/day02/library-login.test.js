import { test } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config("./.env");

test("Library Login", async ({ page }) => {
  // Navigate to the www.library2.cydeo.com website
  await page.goto(process.env.LIBRARY_URL);

  const usernameInputBox = page.locator("//input[@id='inputEmail']");
  const passwordInputBox = page.locator("//input[@id='inputPassword']");
  const signInButton = page.locator(
    "//button[@type='submit' and contains(@class, 'btn-primary')]"
  );

  // enter username
  await usernameInputBox.fill(process.env.LIBRARY_STUDENT_USERNAME);

  // enter password
  await passwordInputBox.fill(process.env.LIBRARY_STUDENT_PASSWORD);

  // click sign in button
  await signInButton.click();
});
