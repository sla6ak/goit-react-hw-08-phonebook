import { GlobalStyled } from './GlobalStyled.styled';
import { Routes, Route } from 'react-router-dom'; // работа с маршрутизацией
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';

const ContactsPage = lazy(() => import('../ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('../RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../LoginPage/LoginPage'));

export const App = () => {
  const token = useSelector(state => state.token);

  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Layout token={token} />}>
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
