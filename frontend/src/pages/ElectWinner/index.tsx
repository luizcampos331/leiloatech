import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';

import { FormHandles } from '@unform/core';
import Button from '../../components/Button';

import { Container, Header, Body, Footer } from './styles';
import api from '../../Services/api';
import { useToast } from '../../hook/toast';

interface ResultData {
  name: string;
  bid: number;
  collection: number;
}

const ElectWinner: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [result, setResult] = useState<ResultData>();

  const { addToast } = useToast();

  const handleSubmit = useCallback(async () => {
    try {
      const response = await api.get('/winner');

      setResult(response.data);
    } catch (error) {
      console.log(error.response.data.message);

      if (error.response.data.message === 'Bids not found') {
        addToast({
          title: 'Nenhum lance encontrado',
          description: 'Não foi realizado nenhum lance até o momento!',
          type: 'info',
        });
      }

      if (error.response.data.message === 'Unique bid not found') {
        addToast({
          title: 'Nenhum lance único encontrado',
          description: 'Nenhum lance único feito até o momento!',
          type: 'info',
        });
      }
    }
  }, [addToast]);

  return (
    <Container>
      <Header>
        <div>
          <text>Leiloa</text>
          <text style={{ color: '#008d23' }}>TECH</text>
        </div>
      </Header>

      <Body>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Vencedor</h2>

          <h3>{result?.name}</h3>

          {result && (
            <>
              <div>
                <text>{`Lance de ${result?.bid}`}</text>
              </div>

              <div>
                <text>{`Arrecadação de ${result?.collection}`}</text>
              </div>
            </>
          )}

          <Button type="submit">Eleger o vencedor</Button>
        </Form>
      </Body>

      <Footer>
        <text>2021 - Brasil</text>
      </Footer>
    </Container>
  );
};

export default ElectWinner;
