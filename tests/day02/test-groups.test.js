import { test } from "@playwright/test";

test.describe("Cydeo practice website tests", async () => {
  test.beforeEach(async ({page}) => {
    // go to https://practice.cydeo.com
    await page.goto("https://practice.cydeo.com");
  });

  test.afterEach(async ({page}) => {
    await page.waitForTimeout(2000);
  });

  test("A/B Testing is clickable", async ({page}) => {
    const abTestingElement = await page.locator("text='A/B Testing'");
    console.log(`A/B Testing is clickable: ${await abTestingElement.isEnabled()}`);
  });

  test("Add/Remove Elements is enabled", async ({page}) => {
    const addRemoveElementsElement = await page.locator("text='Add/Remove Elements'");
    console.log(`Add/Remove Elements is enabled: ${await addRemoveElementsElement.isEnabled()}`);
  });

  test("Autocomplete is displayed", async ({page}) => {
    const autoCompleteElement = await page.locator("text='Autocomplete'");
    console.log(`Autocomplete is displayed: ${await autoCompleteElement.isVisible()}`);
  });
});

// ----------------------------------------------------------------
test.describe("Test Group", async () => {
  test.beforeAll(async () => {
    console.log("BeforeAll executed successfully");
  });

  test.afterAll(async () => {
    console.log("AfterAll executed successfully");
  });

  test.beforeEach(async () => {
    console.log("BeforeEach executed successfully");
    /*
    before each is good place to add page.goto(url) statement
    */
  });

  test.afterEach(async () => {
    console.log("AfterEach executed successfully");
  });

  test("Test1", async () => {
    console.log("Test1 executed successfully");
  });

  test("Test2", async () => {
    console.log("Test2 executed successfully");
  });

  test("Test3", async () => {
    console.log("Test3 executed successfully");
  });
});
