const isDevelopment = () => process.env.ENV !== 'production'
const port = () => parseInt(process.env.PORT) || 3000

module.exports = {
    isDevelopment,
    port
}
