import axios from 'axios';

export function getStudentById(id) {
    const student = { name: { last: 'ws', first: 'xiao' }, age: 28 };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ status: 0, data: { student } });
        }, 200);
    }).then(({ status, data }) => {
        if (status == 0) {
            return data;
        } else {
            return { msg: '错误' };
        }
    });
}
