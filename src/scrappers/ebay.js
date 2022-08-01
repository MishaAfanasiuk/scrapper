const HTMLParser = require('node-html-parser');
const createScrapper = require('../services/createScrapper')
const request = require('../services/request')

const getData = (request) => async (url) => {
  return request.get(url);
}

const parseData = (parser) => (data, url) => {
  const root = parser.parse(data)

  const name = root.querySelector('#LeftSummaryPanel h1 span').innerHTML.trim();
  const price = root.querySelector('#LeftSummaryPanel [itemprop="price"]').getAttribute('content').trim()

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
