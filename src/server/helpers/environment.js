const isDevelopment = () => process.env.NODE_ENV !== 'production'
const port = () => parseInt(process.env.PORT) || 3000
const httpsPort = () => parseInt(process.env.HTTPS_PORT) || 3001

module.exports = {
    isDevelopment,
    httpsPort,
    port
}
