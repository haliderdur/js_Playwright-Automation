import { test } from "@playwright/test";

test("check/uncheck method test: can be used for radio buttons & checkboxes", async ({
  page,
}) => {
  // go to https://practice.cydeo.com/checkboxes
  await page.goto("https://practice.cydeo.com/checkboxes");

  // locate checkbox1
  const checkbox1 = await page.locator("//input[@id='box1']");

  // click on checkbox1
  await checkbox1.check();

  await page.waitForTimeout(2000);

  // locate checkbox2
  const checkbox2 = await page.locator("//input[@id='box2']");

  // click on checkbox2
  await checkbox2.uncheck();
});

test("selectOptions method test: can be used for dropdowns", async ({
  page,
}) => {
  // go to https://practice.cydeo.com/dropdown
  await page.goto("https://practice.cydeo.com/dropdown");

  // locate dropdown
  const simpleDropdown = await page.locator("//select[@id='dropdown']");

  // select by value
  await simpleDropdown.selectOption("1");

  // select by index
  await simpleDropdown.selectOption({ index: 2 });

  // select by visible text
  await simpleDropdown.selectOption({ label: "Option 1" });

  // to get all options from dropdown
  const options = await simpleDropdown.evaluate((select) => {
    return Array.from(select.options).map((option) => ({
      text: option.text,
      value: option.value,
    }));
  });
  console.log(options);
});
