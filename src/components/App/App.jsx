import { GlobalStyled } from './GlobalStyled.styled';
import { Routes, Route } from 'react-router-dom'; // работа с маршрутизацией
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route />
          <Route />
          <Route />
        </Route>
      </Routes>
    </>
  );
};
