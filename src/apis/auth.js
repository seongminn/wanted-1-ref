import { TOKEN_KEY } from '@/constants/auth';
import { setToken } from '@/utils/token';

import { instance } from './instance';

export const postSignin = async (body) => {
  return instance
    .post('/auth/signin', body)
    .then((res) => {
      setToken(TOKEN_KEY, res.data.access_token);

      return res;
    })
    .catch((err) => {
      throw err;
    });
};

export const postSignup = async (body) => {
  return instance.post('/auth/signup', body);
};
