import React from 'react';
import Card from '../../components/Card';
import Search from '../../components/Search';
import { Container, Main, GlobalStyle } from './styles';

const Home = () => {
  return (
    <Main>
      <GlobalStyle />
      <h1>Compre pacotes de viagem com o <span>menor custo!</span></h1>
      <Container>
        <Search />
        <Card />
      </Container>
    </Main>
  );
}

export default Home;