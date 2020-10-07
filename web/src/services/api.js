import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tiktok-mern01-backend.herokuapp.com'
});

export default api;