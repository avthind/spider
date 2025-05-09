import axios from 'axios';

const API = axios.create({ baseURL: 'http://YOUR_BACKEND_IP:5000/api' });

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = token;
  return config;
});

export default API;
