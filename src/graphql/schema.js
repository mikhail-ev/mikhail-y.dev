const apolloServer = require('apollo-server')
const main = require('./main/schema.js')
const time = require('./time/schema.js')

module.exports = apolloServer.mergeSchemas({ schemas: [main, time] })
