const axios = require('axios');

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';
// axios.default.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.get['Content-Type'] = 'application/application/json';
axios.defaults.headers.post['Content-Type'] = 'application/application/json';


export const fetchUser = async () => {
    try {
        const response = await axios.get('/users?page=1&count=5');
        if (response.status !== 200) {
            throw new Error(response);
        }

        return response.data;
    } catch (error) {
        console.error(error);
    }
}