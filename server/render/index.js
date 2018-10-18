const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { Provider } = require('react-redux');
const { ConnectedRouter, routerMiddleware } = require('react-router-redux');
const { matchRoutes, renderRoutes } = require('react-router-config');
const { matchPath } = require('react-router-dom');
const getCreateStore = require('./store');
//前端路由
const router = '';
const layout = require('./layout');

const getMatch = (routesArray, url) => {
    return routesArray.some(router =>
        matchPath(url, {
            path: router.path,
            exact: router.exact
        })
    );
};

module.exports = async function(req, res, next) {
    const { store, history } = getCreateStore(req);
    const branch = matchRoutes(router, req.url);
    const promises = branch.map(({ route }) => {
        const fetch = route.component.fetch;
        return fetch instanceof Function ? fetch(store) : Promise.resolve(null);
    });
    //处理store
    await Promise.all(promises).catch(err => {
        console.log(err);
    });

    let isMatch = getMatch(router, req.url);
    if (!isMatch) {
        await next();
    } else {
        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter location={ctx.url} context={{}}>
                    <App />
                </StaticRouter>
            </Provider>
        );
        let initState = store.getState();
        const body = layout(html, initState);
        res.send(body);
    }
};
