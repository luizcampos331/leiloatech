import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Header, Body, Footer } from './styles';

const ActionRules: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <text>Leiloa</text>
          <text style={{ color: '#008d23' }}>TECH</text>
        </div>
      </Header>

      <Body>
        <div>
          <h2>Como o vencedor é eleito?</h2>

          <ul>
            <li>
              Seu lance deve ser único, caso alguém tenha feito o mesmo lance
              você perde;
            </li>
            <li>
              Seu lance deve ser o menor lance possível, caso tenha algum lance
              menor que o seu sem ser repetido, você perde;
            </li>
            <li>
              Os lances acabam quanto o total de lances chegar a 999, caso
              chegue a esse total, você não poderá mais fazer lances.
            </li>
          </ul>
        </div>

        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </Body>

      <Footer>
        <text>2021 - Brasil</text>
      </Footer>
    </Container>
  );
};

export default ActionRules;
