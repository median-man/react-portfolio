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

const menuId = 'menu'

test('menu renders', async () => {
  const menuEl = await page.$(`nav#${menuId}`)
  expect(menuEl).not.toBeNull()
})


test('renders About nav', renderNavTest('#about', /about/i))
test('renders Portfolio nav', renderNavTest('#portfolio', /portfolio/i))
test('renders Portfolio nav', renderNavTest('#contact', /contact/i))

function renderNavTest(hash, textMatcher) {
  return async () => {
    const text = await page.$eval(`#${menuId} a[href="${hash}"]`, el => el.textContent);
    expect(text).toMatch(textMatcher);
  }
}
