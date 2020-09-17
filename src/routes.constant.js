import config from './config';

export const GITHUB_ROUTES = {
  headers: { Accept: 'application/vnd.github.v3+json' },
  baseURL: config.github.baseURL,
  user: username => `${config.github.baseURL}/users/${username}`,
  followers: '/followers',
};
