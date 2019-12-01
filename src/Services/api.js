import axios from 'axios';

const api = axios.create({
    baseURL: 'https://emporiodacarne.herokuapp.com'
});

export default api;