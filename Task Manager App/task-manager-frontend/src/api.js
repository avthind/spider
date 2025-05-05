// api.js
import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api' });
API.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.getItem('token');
  return config;
});
export default API;
