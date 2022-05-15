import React from 'react';
import { Login } from 'components/Login/Login';
import { Header, BoxHeader, Footer, Main } from './Layout.styled';
import { Conteiner } from 'components/Conteiner/Conteiner.styled';
import { BoxFooter } from 'components/BoxFooter/BoxFooter';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Unlogin } from 'components/UnLogin/Unlogin';
import { linkActiv } from '../utilits/linkActiv';

export function Layout({ token }) {
  return (
    <>
      <Header>
        <Conteiner>
          <BoxHeader>
            <NavLink style={linkActiv} to="/contacts">
              Contacts
            </NavLink>
            {token === '' ? <Login /> : <Unlogin>UnLogin</Unlogin>}
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
