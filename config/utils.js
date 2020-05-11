const path = require('path')
const fs = require('fs')

module.exports = {
    rootPath(p) {
        return path.resolve(p)
    },
    isDir(p) {
        return fs.statSync(p).isDirectory
    }
}