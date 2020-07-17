const preparePath = (path) => {
    if (path !== '/' && path.endsWith('/')) {
        return path.slice(0, -1)
    }
    return path
}

module.exports = {
    preparePath
}
