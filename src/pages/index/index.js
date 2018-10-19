import React from 'react';
import { increment, decrement } from './action';
import { connect } from 'react-redux';
import { getStudentById } from './../../service/index.js';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            student: null
        };
    }

    componentWillMount() {
        getStudentById().then(({ student }) => {
            this.props.dispatch(dispatch => {
                dispatch(student);
                this.setState({
                    student
                });
            });
        });
    }

    render() {
        let { value, Increment, Decrement } = this.props;
        let { student } = this.state;

        return <div>Hello, world</div>;

        return (
            <div>
                <div />
                <button onClick={Increment}>+</button>
                <button onClick={Decrement}>-</button>
                <span>count: {value}</span>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { value: state['index']['counterCaption'] };
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
