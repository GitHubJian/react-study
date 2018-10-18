import React from 'react';
import { render } from 'react-dom';
import { ReactDOMServer } from 'react-dom/server';
import store from './store.js';
import { Provider } from 'react-redux';
import Index from './index/index.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li>
                        <Switch to="/about">About</Switch>
                    </li>
                    <li>
                        <Switch to="/inbox">Inbox</Switch>
                    </li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}

const markupAsString = ReactDOMServer.renderToString(
    <Provider store={store}>
        <div>
            <Index name="xiao" />
        </div>
    </Provider>
);
