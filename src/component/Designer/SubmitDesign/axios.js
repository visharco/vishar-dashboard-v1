import axios from 'axios';
// import base from '../../../api/baseURL'
// import base from 'http://api.ddtarh.ir/api/v1/'

const instance = axios.create({
    baseURL: 'http://api.ddtarh.ir/api/v1/'
});

export default instance;