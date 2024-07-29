import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config("./.env");

test.describe("Web based authentication", async () => {
  test.afterEach(async ({ page }) => {
    // await page.waitForTimeout(2000);
  });

  test("By embedding credentials in the URL", async ({ page }) => {
    await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
    await expect(
      page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible();

    // this way of exposing username and password is not reccommended, it's not secure
  });

  test("By encoding the credentials", async ({ page }) => {
    /*
    >>>>>> THIS IS THE SYNTAX FOR ENCODED AUTHENTICATION <<<<<<
    const encodedCredentials = Buffer.from("username:password").toString("base64");
    page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredentials}`,});
    */

    // encode the credentials in base64 format
    const encodedCredentials = Buffer.from(process.env.PRACTICE_USERNAME + ":" + process.env.PRACTICE_USERNAME).toString("base64");
    // set up the authentication header
    page.setExtraHTTPHeaders({
      Authorization: `Basic ${encodedCredentials}`,
    });

    await page.goto("https://practice.cydeo.com/basic_auth");
    await expect(
      page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible();
  });

});
