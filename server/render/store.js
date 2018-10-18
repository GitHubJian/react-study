const { createStore, applyMiddleware, compose } = require('redux');
const { routerMiddleware } = require('react-router-redux');
const thunk = require('redux-thunk');
const createMemoryHistory = require('history/createMemoryHistory');

module.exports = req => {
    const initialState = {};
    const path = req.url;
    const history = createMemoryHistory({ initialEntries: [path] });
    const middleware = [thunk, routerMiddleware(history)];
    const composedEnhancers = compose(applyMiddleware(...middleware));
    const store = createStore(reducer, initialState, composedEnhancers);

    return { history, store };
};
