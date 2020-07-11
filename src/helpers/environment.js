const isDevelopment = () => process.env.ENV !== 'production'
const port = () => parseInt(process.env.PORT)

module.exports = {
    isDevelopment,
    port
}
