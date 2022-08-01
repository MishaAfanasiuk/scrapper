const HTMLParser = require('node-html-parser');
const createScrapper = require('../services/createScrapper')
const request = require('../services/request')

const getData = (request) => (url) => {
  return request.get(url);
}

const parseData = (parser) => (data, url) => {
  const root = parser.parse(data)

  const name = root.getElementById('productTitle').innerHTML.trim();
  const price = root.querySelector('.a-price .a-offscreen').innerHTML.replace('$', '').trim()

  return {
    name,
    price,
    url
  }
}

module.exports = createScrapper({
  getData: getData(request),
  parseData: parseData(HTMLParser)
})
