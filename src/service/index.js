import axios from 'axios';
import { serverConfig } from './../../config';
const { host, port } = serverConfig;
const URL_PREFIX = `http://${host}:${port}`;

export function getStudentById(id) {
    return axios.get(`${URL_PREFIX}/api/student/1`).then(res => {
        return res;
    });
}
