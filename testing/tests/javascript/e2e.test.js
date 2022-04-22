// https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/
const {Builder, By, Capabilities} = require('selenium-webdriver');
const fs = require('fs');

// Create driver
const capabilities = Capabilities.firefox();
const driver = new Builder()
  .forBrowser('firefox')
  .usingServer("http://firefoxdriver:4444/wd/hub")
  .withCapabilities(capabilities)
  .build();

// Set Up
beforeAll(async () => {
  await driver.get("http://proxy");
});

// Tear Down
afterAll(async () => {
  await driver.quit();
});

const printScreen = async (path) =>{
  let encodedString = await driver.takeScreenshot();
  await fs.writeFileSync(path, encodedString, 'base64');
};

test("Tes frontend app", async () => {
  try {
    const text = await driver.findElement(By.id('recommendation')).getText();
    expect(text).toContain("Pink Flody - Pulse");
  } catch (err) {
    throw err;
  } finally {
    await printScreen('/app/tmp/jshot1.png');
  }
});

test("Tes movie app", async () => {
  try {
    // Click recommendation button
    const element = await driver.findElement(By.id('btn-recommend-movie'));
    element.click();

    // Check new recommendation
    const text = await driver.findElement(By.id('recommendation')).getText();
    expect(text).not.toContain("Pink Flody - Pulse");
  } catch (err) {
    throw err;
  } finally {
    await printScreen('/app/tmp/jshot2.png');
  }
});

test("Tes music app", async () => {
  try {
    // Click recommendation button
    const element = await driver.findElement(By.id('btn-recommend-music'));
    element.click();

    // Check new recommendation
    const text = await driver.findElement(By.id('recommendation')).getText();
    expect(text).not.toContain("Pink Flody - Pulse");
  } catch (err) {
    throw err;
  } finally {
    await printScreen('/app/tmp/jshot3.png');
  }
});