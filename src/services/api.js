import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://food-explorer-y5xb.onrender.com',
  withCredentials: true
});
