import { test, expect } from "@playwright/test";

test.describe("Test Group", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("Left click test", async ({ page }) => {
    await page.click("//a[@href='/inputs']");
    expect(await page.title()).toBe("Inputs")
    expect(page.url()).toBe("https://practice.cydeo.com/inputs")
  });

  test("Right click test", async ({ page }) => {
    await page.click("//a[@href='/inputs']", { button: "right"});
  });

  test("Double click test", async ({ page }) => {
    await page.dblclick("text='A/B Testing'");
    expect(page.url()).toBe("https://practice.cydeo.com/abtest")
  });

  test("Double click practice", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await page.dblclick("//button[.='Add Element']");
    await expect(page.locator("//button[contains(.,'Delete')]")).toHaveCount(2);
  });

  test("Mouse hover test", async ({ page }) => {
    await page.click("text='Hovers'");
    await page.hover("//img[@src='/img/avatar-blank.jpg' and @alt='User Avatar']");

    await expect(page.locator("text='name: user1'")).toBeVisible();
    expect(await page.locator("text='name: user1'").innerText()).toBe("name: user1");
    await expect(page.locator("//a[@href='/users/1']")).toBeEnabled();
  });

  test("Mouse hover on multiple element test", async ({ page }) => {
    await page.click("text='Hovers'");
    const elements = page.locator("//img[@src='/img/avatar-blank.jpg' and @alt='User Avatar']");
    const invisibleElements = page.locator("//h5");

    for (let i = 0; i < elements.count(); i++) {
      console.log(await invisibleElements.nth(i).textContent());
      await page.hover(elements.nth(i));
    //  console.log(invisibleElements.nth(i).innerText());
    //  expect(await invisibleElements.nth(i).isVisible()).toBeTruthy();
      }
  });

  test("Drag and Drop test", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/drag_and_drop");
    const source = page.locator("//div[@id='column-a' and @draggable='true']");
    const target = page.locator("//div[@id='column-b' and @draggable='true']");

    // accepts string params (pass selector directly) - simulates mouse action: drag and drop
    // await page.dragAndDrop("//div[@id='column-a' and @draggable='true']","//div[@id='column-b' and @draggable='true']"); 

    // accepts locators - performed on web elements drictly
    await source.dragTo(target);  

    const dragableElements = page.locator("//div[@class='column' and @draggable='true']");
    let texts = ['B','A'];
    for (let i = 0; i < await dragableElements.count(); i++) {
      const text = await dragableElements.nth(i).innerText();
      console.log(text);
      expect(text).toBe(texts[i]);      
    }
  });

  test("Mouse wheel scrolling test", async ({ page }) => {
    await page.mouse.wheel(0,500); // scroll down
    await page.mouse.wheel(0,-400); // scroll up - negative element for deltaY
  });

  test("Mouse scrolling to specific element test", async ({ page }) => {
    const inputLink =  page.locator("text='Inputs'");
    await inputLink.scrollIntoViewIfNeeded(true);
  });
});
