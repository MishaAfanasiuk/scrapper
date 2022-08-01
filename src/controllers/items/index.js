// Move to service dependencies?
const getServiceFromUrl = require('../../services/getServiceFromUrl');
const keyFromUrl = require('../../db/keyFromUrl');

module.exports = ({ db, scrappers }) => {
  const findItemsByName = async (searchName) => {
    const data = Object.values(db.getData('/'))

    // Basic implementation of search by name, might be improved
    if (searchName) {
      const regExp = new RegExp(searchName, 'i')

      return data.filter(({ name }) => regExp.test(name))
    }

    return data
  }

  const addItem = async (url) => {
    const service = getServiceFromUrl(url);

    if (!service || !scrappers[service]) throw Error('No service found for url');

    const data = await scrappers[service](url);

    db.push(keyFromUrl(url), data)
  }

  return {
    findItemsByName,
    addItem
  }
}
