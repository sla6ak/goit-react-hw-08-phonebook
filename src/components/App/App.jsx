import { GlobalStyled } from './GlobalStyled.styled';
import { Routes, Route } from 'react-router-dom'; // работа с маршрутизацией
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';

const ContactsPage = lazy(() => import('../ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('../RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../LoginPage/LoginPage'));

export const App = () => {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};
