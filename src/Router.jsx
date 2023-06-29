import { Suspense } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { TOKEN_KEY } from '@/constants/auth';
import { PATH } from '@/constants/path';
import SigninPage from '@/pages/signin';
import SignupPage from '@/pages/signup';
import TodoPage from '@/pages/todo';

import TodoContextProvider from './context/TodoContext';
import { getToken } from './utils/token';

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path={PATH.TODO} element={<TodoPage />} />
        </Route>
        <Route element={<PublicRouter />}>
          <Route path={PATH.SIGNIN} element={<SigninPage />} />
          <Route path={PATH.SIGNUP} element={<SignupPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;

const PrivateRouter = () => {
  const token = getToken(TOKEN_KEY);

  return token ? (
    <TodoContextProvider>
      <Outlet />
    </TodoContextProvider>
  ) : (
    <Navigate to={PATH.SIGNIN} replace />
  );
};

const PublicRouter = () => {
  const token = getToken(TOKEN_KEY);

  return token ? <Navigate to={PATH.TODO} replace /> : <Outlet />;
};
