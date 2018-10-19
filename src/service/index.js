import axios from 'axios';

export function getStudentById(id) {
    return axios.get('/api/student/1').then(res => {
        return res;
    });
}
