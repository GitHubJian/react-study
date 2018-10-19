import { type as TYPE } from './action';

export const initState = {
    counterCaption: 0,
    student: {}
};

export default (state = initState, action) => {
    let { type, data } = action;

    switch (type) {
        case TYPE.Increment:
            return {
                data: Object.assign({}, data, {
                    counter: data.counterCaption + 1
                })
            };
        case TYPE.Decrement:
            return {
                data: Object.assign({}, data, {
                    counter: data.counterCaption - 1
                })
            };
        case TYPE.Student:
            return {
                student: data
            };
        default:
            return state;
    }
};
