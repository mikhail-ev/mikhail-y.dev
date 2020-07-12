const express = require('express')
const next = require('next')
const path = require('path')
const bodyParser = require('body-parser')
const {graphqlExpress} = require('apollo-server-express/dist/expressApollo')
const schema = require('./server/graphql/schema.js')
const {isDevelopment, port} = require('./server/helpers/environment')

const listenOn = port()
const app = next({ dev: isDevelopment() })

const preparePath = (path) => {
    if (path !== '/' && path.endsWith('/')) {
        return path.slice(0, -1)
    }
    return path
}

app.prepare().then(() => {
    const server = express()

    server.use('/public', express.static(path.join(__dirname, 'public')))

    server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

    server.get('*', (req, res) => {
        app.render(req, res, preparePath(req.path), req.query)
    })

    server.listen(listenOn, (err) => {
        if (err) throw err
        console.log(`🚀 Ready on http://localhost:${listenOn}`)
    })
})
