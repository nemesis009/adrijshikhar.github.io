import apiClient from '../helpers/apiClient';
import { GITHUB_ROUTES } from '../routes.constant';

const githubAPI = apiClient(GITHUB_ROUTES.baseURL, GITHUB_ROUTES.headers);

export const getUser = username => {
  const apiURL = GITHUB_ROUTES.user(username);
  return githubAPI.get(apiURL);
};
