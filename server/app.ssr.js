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

const React = require('react');
const ReactDOM = require('react-dom');
const { createStore, applyMiddleware, compose } = require('redux');
const { Provider } = require('react-redux');
const thunk = require('react-thunk');
const { renderToString, renderToStaticMarkup } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const reducers = require(path.resolve(pathConfig.pages, 'reducer.js'));
const store = createStore(reducers, compose(applyMiddleware(thunk)));

function start() {
    //app.use(favicon(__dirname + '/favicon.ico'));
    // 对post请求的请求体进行解析
    //app.use(bodyParser.json());
    //app.use(bodyParser.urlencoded({ extended: false }));
    // 对cookie进行解析
    //app.use(cookieParser);

    app.use((req, res, next) => {
        if (!req.url.startsWith('/index/')) {
            return next();
        }

        const context = {};
        const frontComponents = renderToString(<Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <Routers />
                </StaticRouter>
            </Provider>);
        res.send(frontComponents);
    });
    // 静态文件处理
    app.use(express.static(path.join(__dirname, './../dist')));
    // gzip
    //app.use(compression());
    // 响应头
    app.use(function(req, res, next) {
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('X-Powered-By', 'QXF');
        next();
    });
    // 路由
    app.use('/', routers);

    app.listen(8419, () => {
        console.log(`✨ 服务以启动：http://localhost:8419`);
    });
}

module.exports = start;
