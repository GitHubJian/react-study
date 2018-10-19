import React, { Component } from 'react';
import { increment, decrement } from './action';
import { connect } from 'react-redux';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { value } = this.props;
        return (
            <div>
                Hello, world
                {JSON.stringify(this.props)}
                {JSON.stringify(this.state)}
                {value}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    console.log('@'.repeat(20));
    console.log(state);
    const o = { value: state['counterCaption'] };
    return o;
}

export default connect(mapStateToProps)(Index);
