const main = require('./main/schema.js')
const apolloServer = require('apollo-server')

module.exports = apolloServer.mergeSchemas({ schemas: [main] })
