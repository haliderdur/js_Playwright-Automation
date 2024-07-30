import { test } from "@playwright/test";

test("state methods of locator", async ({ page }) => {
  /*
  returns boolean
  isVisible()
  isDisabled()
  isEnabled()
  isChecked()
  */

  // go to https://practice.cydeo.com
  await page.goto("https://practice.cydeo.com");

  const autoCompleteLink = page.locator("text='Autocomplete'");

  const elementIsDisplayed = await autoCompleteLink.isVisible();
  const elementIsDisabled = await autoCompleteLink.isDisabled();
  const elementIsEnabled = await autoCompleteLink.isEnabled();

  console.log(elementIsDisplayed);
  console.log(elementIsDisabled);
  console.log(elementIsEnabled);

  const checkBoxLink = page.locator("text='Checkboxes'");
  await checkBoxLink.click();

  const checkbox1 = page.locator("//input[@id='box1']");
  const checkbox2 = page.locator("//input[@id='box2']");

  console.log(await checkbox1.isChecked());
  console.log(await checkbox2.isChecked());

});
