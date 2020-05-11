module.exports = {
    html() {
        return `<!doctype html>
<html lang="zh_cn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum=1.0,user-scalable=no, viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
</head>
<body>
<div id="app"></div>
<script src="./sdk/vue.js"></script>
</body>
</html> 
`
    },
    mainJs() {
        return `import App from './app.page'
        
new Vue({
    render: h => h(App),
}).$mount('#app')
        `
    }
}