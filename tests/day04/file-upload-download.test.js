import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

test.describe("File upload download", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
  });

  test.afterEach(async ({ page }) => {
    // await page.waitForTimeout(1000);
  });

  test("File upload test", async ({ page }) => {
    await page.click("text='File Upload'");
    expect(page.url()).toBe("https://practice.cydeo.com/upload");

    // file path:
    const filePath = path.join(__dirname, "upload", "Upload_File.txt");

    // send the file to the elemnt
    //await page.waitForTimeout(4000);
    page.setInputFiles("//input[@id='file-upload' and @type='file']", filePath);
    //await page.waitForTimeout(2000);

    // click uplaod
    page.click("//input[@id='file-submit' and @type='submit']");

    await expect(page.locator("//h3[text()='File Uploaded!']")).toBeVisible();

    // do assertion if the file was successfully uploaded
    expect(fs.existsSync(uploadFilePath)).toBeTruthy();

    // delete the uploaded file
    fs.unlinkSync(uploadFilePath);
    expect(fs.existsSync(uploadFilePath)).toBeFalsy();
  });

  test("File download test", async ({ page }) => {
    // setting up listener for download event
    const downloadPromise = page.waitForEvent("download"); // promise is created: pending state

    await page.click("text='File Download'");
    expect(page.url()).toBe("https://practice.cydeo.com/download");

    await page.click("text='Selenium Review.txt'");

    const download = await downloadPromise; // promise is resolved: fulfilled or reject state
    expect(download.suggestedFilename()).toBe("Selenium Review.txt");
  });

  test("Save the downloaded file", async ({ page }) => {
    // setting up listener for download event
    const downloadPromise = page.waitForEvent("download"); // promise is created: pending state

    await page.click("text='File Download'");
    await page.click("text='Selenium Review.txt'");

    const download = await downloadPromise; // promise is resolved: fulfilled or reject state
    expect(download.suggestedFilename()).toBe("Selenium Review.txt");

    // save the downloaded file
    const downloadFilePath = path.join(
      __dirname,
      "download",
      download.suggestedFilename()
    );
    await download.saveAs(downloadFilePath);

    // do assertion if the file was successfully downloaded
    expect(fs.existsSync(downloadFilePath)).toBeTruthy();

    // delete the downloaded file
    fs.unlinkSync(downloadFilePath);
    expect(fs.existsSync(downloadFilePath)).toBeFalsy();
  });
});
