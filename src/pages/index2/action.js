export const Increment = Symbol('Increment');
export const Decrement = Symbol('Decrement');

export const increment = data => ({
    type: Increment,
    data
});

export const decrement = data => ({
    type: Decrement,
    data
});
