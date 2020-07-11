const isDevelopment = () => process.env !== 'production'
const port = () => parseInt(process.env.PORT)

module.exports = {
    isDevelopment,
    port
}
