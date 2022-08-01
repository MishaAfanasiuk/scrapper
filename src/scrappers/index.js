const amazon = require('./amazon');
const ebay = require('./ebay');
const supportedServices = require('../constants/supported-services');

module.exports = {
  [supportedServices.AMAZON]: amazon,
  [supportedServices.EBAY]: ebay
}
