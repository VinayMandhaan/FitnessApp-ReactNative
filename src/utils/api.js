import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: 'http://192.168.1.108:5000/api',

    headers:{
        'Content-Type':'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    }
});
export default api;