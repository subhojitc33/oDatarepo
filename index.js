/*!
 * Copyright(c) 2014 Jan Blaha (pofider)
 *
 * Simple OData server with adapters for mongodb and nedb
 */

const ODataServer = require('./lib/odataServer.js')

module.exports = function (options) {
  return new ODataServer(options)
}
