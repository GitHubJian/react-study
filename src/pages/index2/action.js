const type = {
    Increment: Symbol('Increment'),
    Decrement: Symbol('Decrement'),
    Student: Symbol('Student')
};

export { type };

export const increment = data => ({
    type: type.Increment,
    data
});

export const decrement = data => ({
    type: type.Decrement,
    data
});

export const student = data => ({
    type: type.Student,
    data
});
