import axios from 'axios';
import constants from '@/utilities/constants';
import store from '@/store';

axios.interceptors.request.use(function (config) {
    if (!config) {
        config = {};
    }

    if (!config.headers) {
        config.headers = {};
    }

    if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json';
    }

    if (!config.headers['X-Authorization']) {
        config.headers['X-Authorization'] = store.getters['user/getToken'];
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});

export default {
    methods: {
        ajax(method, endpointUrl, data) {
            let options = {
                method: method,
                url: constants.apiUrl + endpointUrl
            };

            if (method === 'get' || method === 'delete') {
                options.params = data;
            } else {
                options.data = data;
            }

            return axios(options);
        }
    }
};
