import { test, expect } from "@playwright/test";

let elements;
let count;

test.describe("Assertion practice2", async() => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
    elements = page.locator("//ul[@class='list-group']/li/a");
    count = await elements.count();
  });

  test("Verify that there are 50 elements under the url tag", async ({page}) => {
    expect(count).toEqual(50);
  });

  test("Verify all 50 elements under the url tag are visible", async ({page}) => {
   for(let i = 0; i < count; i++){
    const eachElement = elements.nth(i);
    expect(eachElement.isVisible()).toBeTruthy();
    console.log(await eachElement.innerText());
   }
  });

  test("Verify all 50 elements under the url tag are enabled", async ({page}) => {
      for(let i=0; i < count; i++){
        const eachElement = elements.nth(i);
        expect(eachElement.isEnabled()).toBeTruthy();
        console.log(await eachElement.getAttribute("href"));
      }
  });
});