import { GlobalStyled } from './GlobalStyled.styled';
import { Routes, Route } from 'react-router-dom'; // работа с маршрутизацией
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const ContactsPage = lazy(() => import('../ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('../RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../LoginPage/LoginPage'));

export const App = () => {
  const token = useSelector(state => state.token);
  // console.log(token);
  const dispatch = useDispatch();

  // useEffect(() => {
  // dispatch(curentUser()); // тут должен улетать объект с именем и логином для получения токена так как же сохранять токен при перезапуске браузера???
  // }, [curentUser, dispatch]);

  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/contacts"
            element={
              token !== '' ? (
                <ContactsPage />
              ) : (
                <h1 style={{ margin: '50px' }}>Сначало войдите</h1>
              )
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};
