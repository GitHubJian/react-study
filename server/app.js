const { pathConfig } = require('./../config');
const express = require('express');
//const favicon = require('serve-favicon');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const compression = require('compression');
const rootPath = process.cwd();
const routers = require('./routers');
const path = require('path');
const app = express();

function start() {
    //app.use(favicon(__dirname + '/favicon.ico'));
    // 对post请求的请求体进行解析
    //app.use(bodyParser.json());
    //app.use(bodyParser.urlencoded({ extended: false }));
    // 对cookie进行解析
    //app.use(cookieParser);
    // 静态文件处理
    app.use(express.static(path.join(__dirname, './../dist')));
    // gzip
    //app.use(compression());
    // 响应头
    app.use(function(req, res, next) {
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Expires', '0');
        next();
    });
    // 路由
    app.use('/', routers);

    app.listen(8419, () => {
        console.log(`✨ 服务以启动：http://localhost:8419`);
    });
}

module.exports = start;
