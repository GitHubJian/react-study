const _state_ = {
    counterCaption: 0
};

import { Increment, Decrement } from './../action';

export default (state = _state_, action) => {
    const { type } = action;

    switch (type) {
        case Increment:
            return Object.assign({}, state, {
                counterCaption: state.counterCaption + 1
            });
        case Decrement:
            return Object.assign({}, state, {
                counterCaption: state.counterCaption - 1
            });
        default:
            return state;
    }
};
