import puppetteer from 'puppeteer';

jest.setTimeout(50000); // default puppeteer timeout

describe('Tooltip', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8888/';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should add and remove new element with .tooltip class in 5 sec', async () => {
    await page.goto(baseUrl);
    const widgetBtn = await page.$('[class=widget__btn]');
    widgetBtn.click();
    await page.waitForSelector('div.tooltip');
    await page.waitForFunction(() => !document.querySelector('div.tooltip'));
  });

  test('should add and remove new element with .tooltip class on click', async () => {
    await page.goto(baseUrl);
    const widgetBtn = await page.$('[class=widget__btn]');
    widgetBtn.click();
    await page.waitForSelector('div.tooltip');
    widgetBtn.click();
    await page.waitForFunction(() => !document.querySelector('div.tooltip'));
  });
});
