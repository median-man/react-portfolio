const puppeteer = require('puppeteer')

let page, browser

beforeEach(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
  await page.goto('http://localhost:3000', {waitUntil: 'domcontentloaded'})
})

afterEach(async () => {
  await browser.close()
})

test('header text has name', async () => {
  const text = await page.$eval('#header-name', el => el.textContent)
  expect(text).toMatch(/John Desrosiers/)
})

test('header has tagline', async () => {
  const text = await page.$eval('#header-tagline', el => el.textContent)
  expect(text).toMatch(/Web Developer/)
})
