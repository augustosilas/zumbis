import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.88:3003/api',
});

export default api;
