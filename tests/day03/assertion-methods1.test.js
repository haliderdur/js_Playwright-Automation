import { test, expect } from "@playwright/test";

test.describe("Assertion methods", async() => {

  test("toBe assertion", async () => {
    let elementValue = 5;
    expect(elementValue).toBe(5);
  });

  test("toBeTruthy & toBeFalsy assertion", async () => {
    let value1 = true;
    expect(value1).toBeTruthy(); // assertTrue

    let value2 = false;
    expect(value2).toBeFalsy(); // assertFalse
  });

  test("toContain assertion", async () => {
    let title = "cydeo";
    expect(title).toContain("cydeo");
  });
  
  test("toEqual assertion", async () => {
    let elementValue = 5;
    expect(elementValue).toBe(5); // == operator in java
    expect(elementValue).toEqual(5); // .equals() method in java

    let obj1 = {a:1, b:2};
    let obj2 = {a:1, b:2};
  //  expect(obj1).toBe(obj2); // checks references, not values - FAIL - instead of toBe(), use toStrictEqual() or toEqual() methods
    expect(obj1).toEqual(obj2); // checks value - PASS
  });

});

// Create a function can pause for given number of seconds
async function pause(seconds) {
  await new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

// Use the pause function in a test
test("pause function test", async () => {
  await pause(1); // Pause for 1 second
});



