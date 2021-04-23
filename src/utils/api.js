import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: 'https://fitness-server.herokuapp.com/api',

    headers:{
        'Content-Type':'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    }
});
export default api;