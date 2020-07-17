const express = require('express')
const http = require('http')
const https = require('https')
const next = require('next')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const {graphqlExpress} = require('apollo-server-express/dist/expressApollo')
const schema = require('./graphql/schema.js')
const {isDevelopment, port, httpsPort} = require('./helpers/environment')
const {preparePath} = require('./helpers/path')

async function createExpressApp() {
    const app = next({ dev: isDevelopment() });
    await app.prepare();

    const server = express();

    server.use('/public', express.static(path.join(__dirname, 'public')));

    server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

    server.get('*', (req, res) => {
        app.render(req, res, preparePath(req.path), req.query)
    });

    return server
}

function startHttpServer(express) {
    http.createServer(express).listen(port())
    console.log('🚀 HTTP started')
}

function startHttpsServer(express) {
    const cwd = process.cwd()
    const privateKey  = fs.readFileSync(path.join(cwd, 'server.key'), 'utf8');
    const certificate = fs.readFileSync(path.join(cwd, 'server.crt'), 'utf8');

    https.createServer({key: privateKey, cert: certificate}, express).listen(httpsPort())
    console.log('🔒 HTTPS started')
}

createExpressApp().then((express) => {
    startHttpServer(express)

    if (!isDevelopment()) {
        startHttpsServer(express)
    }
});
