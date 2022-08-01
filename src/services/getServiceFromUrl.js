const supportedServices = require('../constants/supported-services');

module.exports = (url) => {
  // Really basic check, might be improved
  if (url.includes('amazon')) {
    return supportedServices.AMAZON;
  }

  if (url.includes('ebay')) {
    return supportedServices.EBAY;
  }

  return null
}
