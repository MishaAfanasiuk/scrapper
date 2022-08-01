const pt = require('puppeteer')

// Puppeteer is used because it was the fastest way to scrap data for test task
// We can use it for scrap as well

const request = () => ({
  get: async (url) => {
    const browser = await pt.launch()
    const page = await browser.newPage();
    await page.goto(url)

    const data = await page.content();

    await browser.close();

    return data
  }
})

module.exports = request();
