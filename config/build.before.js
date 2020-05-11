const fs = require('fs')
const fse = require('fs-extra')
const {rootPath, isDir} = require('./utils')
const configDef = require('./config.default')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {html, mainJs} = require('./template')

let entry = {}
let htmlPlugin = []

fs.readdirSync(rootPath('src/pages')).forEach(item => {
    let p = rootPath(`src/pages/${item}`)
    if (!isDir(p)) {
        return false
    }
    if (!fs.readdirSync(p).includes('App.page')) {
        return
    }
    if (!fs.readdirSync(p).includes('main.js')) {
        fs.writeFileSync(p + '/main.js', mainJs())
    }
    entry[item] = rootPath(`src/pages/${item}/main.js`)
    const template = rootPath(`html/${item}.html`)
    if (!fs.existsSync(template)) {
        fs.writeFileSync(template, html())
    }
    htmlPlugin.push(new HtmlWebpackPlugin({
        filename: rootPath(`dist/${item}.html`),
        template
    }))
})

fse.copySync(rootPath(`public`), rootPath(`dist`))

module.exports = {
    entry,
    htmlPlugin,
    rootPath
}