import axios from 'axios';

const UNAUTHORIZED = 401;

const apiClient = (baseURL = '/', headers = {}) =>
  axios.create({
    baseURL: process.env.BASE_URL || baseURL,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });

apiClient.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response;

    if (status === UNAUTHORIZED) {
      Promise.reject(UNAUTHORIZED);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
