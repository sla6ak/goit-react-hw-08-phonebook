import React from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Header, BoxHeader, Footer, Main } from './Layout.styled';
import { Conteiner } from 'components/Conteiner/Conteiner.styled';
import { BoxFooter } from 'components/BoxFooter/BoxFooter';

export function Layout(props) {
  return (
    <>
      <Header>
        <Conteiner>
          <BoxHeader>
            Logo
            <Navigation />
          </BoxHeader>
        </Conteiner>
      </Header>
      <Main>
        <Conteiner>Layout</Conteiner>
      </Main>
      <Footer>
        <Conteiner>
          <BoxFooter />
        </Conteiner>
      </Footer>
    </>
  );
}
