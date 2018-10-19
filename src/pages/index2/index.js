import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudentById } from './../../service/index.js';
import { increment, decrement } from './action';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

class _Index_ extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fetch: false
        };

        this.handleIncrement = this.handleIncrement.bind(this);
    }

    componentWillMount() {
        debugger;
        getStudentById()
            .then(({ code, data }) => {
                let { student } = data;
                this.setState({
                    student,
                    fetch: true
                });
            })
            .catch(e => {
                console.error(e);
            });
    }

    handleIncrement() {
        let value = this.state.value + 1;

        increment(value);
    }

    render() {
        let { value } = this.props;

        // if (this.state.fetch === false) {
        //     return null;
        // }

        // let {
        //     student: {
        //         name: { first, last }
        //     }
        // } = this.state;

        return (
            <div>
                Hello, world
                <span onClick={this.handleIncrement()}> + </span>
                <span>
                    Value:
                    {value}
                </span>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { value: state['counterCaption'] };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        Increment: () => {
            dispatch(increment(ownProps.value));
        },
        Decrement: () => {
            dispatch(decrement(ownProps.value));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(_Index_);

// const Root = () => (
//     <Provider store={store}>
//         <Index />
//     </Provider>
// );
// ReactDOM.render(<Root />, document.getElementById('app'));
