import apiClient from '../helpers/apiClient';
import { GITHUB_API } from '../routes.constant';

const githubAPI = apiClient(GITHUB_API.baseURL, GITHUB_API.headers);
