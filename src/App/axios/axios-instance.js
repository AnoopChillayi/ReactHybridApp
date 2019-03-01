import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reacthooks-4c63e.firebaseio.com/'
});

export default instance;