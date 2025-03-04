import logger from 'src/util/logger.util';
import httpClient from '.';
import { formatJson } from 'src/util/commons.util';

httpClient.interceptors.request.use(handleRequest, handleErrors);
httpClient.interceptors.response.use(handleResponse, handleErrors);

function handleErrors(error: any) {
  logger(formatJson(error), 'error');
}

function handleRequest(config: any) {
  return config;
}

function handleResponse(response: any) {
  return response;
}
