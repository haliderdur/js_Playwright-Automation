import { test, expect } from "@playwright/test";

test.describe("Test Group", async () => {

    let table, rows, columns, cells;
    let rowCount, columnCount, cellCount;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/web-tables");
    table = page.locator("//table[@class='SampleTable' and @id='ctl00_MainContent_orderGrid']");

    rows = table.locator("//tr");
    columns = table.locator("//th");
    cells = table.locator("//td");
    rowCount = await rows.count();
    columnCount = await columns.count();
    cellCount = await cells.count();
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("Verify rows, columns and cells in Pizza table", async ({ page }) => {
     expect(rowCount).toEqual(9);
     expect(columnCount).toEqual(13);
     expect(cellCount).toEqual(104);
  });

  test("Read all data from the web table", async ({ page }) => {
    for (let i = 1; i < rowCount; i++) {
      const eachRow = await rows.nth(i);
      const eachColumnData = await eachRow.locator("td");

      for (let j = 0; j < await eachColumnData.count()-1; j++) {
        console.log(await eachColumnData.nth(j).innerText());
      }
      console.log("-----------------------");
    }
  });

test("Verify checkboxes in web table are enabled", async ({ page }) => {
  const checkBoxes = table.locator("//input[@type='checkbox']");
  // verify that there are 8 checkboxes
  expect(await checkBoxes.count()).toEqual(8);
  // use for of loop to access each checkboxes
  for (const checkbox of await checkBoxes.all()) {
    expect(await checkbox.isChecked()).toBeFalsy();
    await checkbox.check();
    expect(await checkbox.isChecked()).toBeTruthy();
  }
});
});