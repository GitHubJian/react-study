import React from 'react';
import { increment, decrement } from './action';
import { connect } from 'react-redux';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { value, Increment, Decrement } = this.props;

        return (
            <div>
                <button onClick={Increment}>+</button>
                <button onClick={Decrement}>-</button>
                <span>count2: {value}</span>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { value: state['index1']['counterCaption'] };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        Increment: () => {
            dispatch(increment(ownProps.caption));
        },
        Decrement: () => {
            dispatch(decrement(ownProps.caption));
        }
    };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, stateProps, dispatchProps, ownProps);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Index);
