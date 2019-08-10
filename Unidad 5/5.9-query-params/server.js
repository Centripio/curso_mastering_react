const express = require('express');
const http = require('http')
const path = require('path');

var app = express();
var port = 3000;


if(process.env.NODE_ENV !== 'production'){
    console.log("start app in developer mode")
    var config = require('./webpack.config.js');
    var webpack = require('webpack');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));
}else{
    console.log("start app in production mode")
}

//Expose the public folder
app.use('/public', express.static(__dirname + '/public'))

app.get('/*', function (req, res) {
    console.log("__dirname > " + __dirname)
    res.sendFile(path.join(__dirname, 'index.html'))
});

http.createServer(app).listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});