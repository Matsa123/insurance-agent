import axios from 'axios';

const api = axios.create({
    baseURL: 'http://insurance-api.test/api',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
});

export default api;