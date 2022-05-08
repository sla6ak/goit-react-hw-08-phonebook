import React from 'react';
import { Login } from 'components/Login/Login';
import { Header, BoxHeader, Footer, Main } from './Layout.styled';
import { Conteiner } from 'components/Conteiner/Conteiner.styled';
import { BoxFooter } from 'components/BoxFooter/BoxFooter';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export function Layout(props) {
  return (
    <>
      <Header>
        <Conteiner>
          <BoxHeader>
            <NavLink to="/contacts">Contacts</NavLink>
            <Login />
          </BoxHeader>
        </Conteiner>
      </Header>
      <Main>
        <Conteiner>
          <Suspense>
            <Outlet />
          </Suspense>
        </Conteiner>
      </Main>
      <Footer>
        <Conteiner>
          <BoxFooter />
        </Conteiner>
      </Footer>
    </>
  );
}
