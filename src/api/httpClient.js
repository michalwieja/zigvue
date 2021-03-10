import axios from 'axios';

const config = {
  baseURL: process.env.VUE_APP_SERVER_URL,
  json: true,
  headers: {
    Accept: 'application/vnd.api+json; charset=utf-8',
    'Content-Type': 'application/json',
  },
};

const httpClient = axios.create(config);

export default httpClient;
