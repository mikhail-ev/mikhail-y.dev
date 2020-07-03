const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const {graphqlExpress} = require('apollo-server-express/dist/expressApollo')
const schema = require('./graphql/schema')

const port = 3000
const app = next({ dev: true })

const preparePath = (path) => {
    if (path.endsWith('/')) {
        return path.slice(0, -1)
    }
    return path
}

app.prepare().then(() => {
    const server = express()

    server.use('/public', express.static('public'))

    server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

    server.get('*', (req, res) => {
        app.render(req, res, preparePath(req.path), req.query)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
