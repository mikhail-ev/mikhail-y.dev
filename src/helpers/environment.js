const isDevelopment = () => process.env !== 'production'
const port = () => process.env.PORT

module.exports = {
    isDevelopment,
    port
}
