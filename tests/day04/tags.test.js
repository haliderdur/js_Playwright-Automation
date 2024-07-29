import { test } from "@playwright/test";

test.describe("Test Group 1", async () => {
  test("Test 1", async ({ page }) => {
    console.log("Test 1 completed in Group 1");
  });

  test("@smoke Test 2", async ({ page }) => {
    console.log("Test 2 completed in Group 1");
  });

  test("Test 3", async ({ page }) => {
    console.log("Test 3 completed in Group 1");
  });

});

test.describe("Test Group 2", async () => {
  test("@smoke Test 1", async ({ page }) => {
    console.log("Test 1 completed in Group 2");
  });

  test("Test 2", async ({ page }) => {
    console.log("Test 2 completed in Group 2");
  });

  test("Test 3", async ({ page }) => {
    console.log("Test 3 completed in Group 2");
  });

  test("Test 4", async ({ page }) => {
    console.log("Test 4 completed in Group 2");
  });
  
  test("@smoke Test 5", async ({ page }) => {
    console.log("Test 5 completed in Group 2");
  });
});
