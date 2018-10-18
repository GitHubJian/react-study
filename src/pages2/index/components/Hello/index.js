import React from 'react';
import { connect } from 'react-redux';

class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        try {
            var {
                person: {
                    name: { last }
                }
            } = this.props;
        } catch (e) {
            lats = 'world';
        }

        return (
            <div>
                <span>Hello, {last}</span>
            </div>
        );
    }
}

function _(state) {
    return {
        ...state
    };
}

export default connect(_)(Hello);
