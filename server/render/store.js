const { pathConfig } = require('./../../config');
const path = require('path');
const { createStore, applyMiddleware, compose } = require('redux');
const { routerMiddleware } = require('react-router-redux');
const thunk = require('redux-thunk').default;
const createMemoryHistory = require('history/createMemoryHistory.js').default;

const { default: reducer, initState: initialState } = require(path.resolve(
    pathConfig.pages,
    'index2/reducer.js'
));

module.exports = req => {
    const path = req.url;
    const history = createMemoryHistory({ initialEntries: [path] });
    const middleware = [thunk, routerMiddleware(history)];
    const composedEnhancers = compose(applyMiddleware(...middleware));

    const store = createStore(reducer, initialState, composedEnhancers);
    
    return { history, store };
};
