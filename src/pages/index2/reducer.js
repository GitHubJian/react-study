import { Increment, Decrement } from './action';

export const initState = {
    counterCaption: 0
};

export default (state = initState, action) => {
    let { type, data } = action;

    switch (type) {
        case Increment:
            return {
                data: Object.assign({}, data, {
                    counter: data.counterCaption + 1
                })
            };
        case Decrement:
            return {
                data: Object.assign({}, data, {
                    counter: data.counterCaption - 1
                })
            };
        default:
            return state;
    }
};
