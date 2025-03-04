import axios from 'axios';

const TIMEOUT_MS = 10000;

const httpClient = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: TIMEOUT_MS,
  headers: { 'X-Custom-Header': 'foobar' },
});

export default httpClient;
