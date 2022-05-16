import { GlobalStyled } from './GlobalStyled.styled';
import { Routes, Route } from 'react-router-dom'; // работа с маршрутизацией
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useGetIsActivUserQuery } from 'server/login';
import { isAuth } from 'redux/sliceAuth';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const ContactsPage = lazy(() => import('../ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('../RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../LoginPage/LoginPage'));

export const App = () => {
  const curentAuth = useSelector(state => state.auth);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const { data: auth, error } = useGetIsActivUserQuery('', { skip: !token });

  useEffect(() => {
    if (token === '') {
      dispatch(isAuth(''));
      return;
    }
    if (auth === undefined) {
      return;
    }
    dispatch(isAuth(auth.name)); //при монтировании компонентов проверяем подлинность токена.
  }, [auth, dispatch, token]);

  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Layout auth={curentAuth} />}>
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
