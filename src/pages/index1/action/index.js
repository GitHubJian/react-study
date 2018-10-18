export const Increment = Symbol('Increment');
export const Decrement = Symbol('Decrement');

export const increment = counterCaption => ({
    type: Increment,
    counterCaption
});

export const decrement = counterCaption => ({
    type: Decrement,
    counterCaption
});
