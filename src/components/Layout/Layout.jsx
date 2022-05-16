import { Login } from 'components/Login/Login';
import { Header, BoxHeader, Footer, Main } from './Layout.styled';
import { Conteiner } from 'components/Conteiner/Conteiner.styled';
import { BoxFooter } from 'components/BoxFooter/BoxFooter';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Unlogin } from 'components/UnLogin/Unlogin';
import { linkActiv } from '../utilits/linkActiv';
import { useLocation } from 'react-router-dom';

export function Layout({ auth }) {
  const location = useLocation();
  if (location.pathname === '/');
  return (
    <>
      <Header>
        <Conteiner>
          <BoxHeader>
            {auth !== '' ? (
              <NavLink style={linkActiv} to="/contacts">
                Contacts
              </NavLink>
            ) : (
              <div></div>
            )}
            {auth === '' ? <Login /> : <Unlogin>UnLogin</Unlogin>}
          </BoxHeader>
        </Conteiner>
      </Header>
      <Main>
        <Conteiner>
          {location.pathname === '/' ? (
            <h1 style={{ margin: '50px' }}>Welcome!</h1>
          ) : (
            <Suspense>
              <Outlet />
            </Suspense>
          )}
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
