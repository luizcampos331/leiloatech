import React, { useCallback, useRef, useState } from 'react';
import { FiUser, FiInfo } from 'react-icons/fi';
import { ImHammer2 } from 'react-icons/im';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';

import { useToast } from '../../hook/toast';

import getValidationErrors from '../../utils/getValiationErrors';
import api from '../../Services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Header, Body, Footer } from './styles';

interface FormData {
  name: string;
  bid: number;
}

const BidAuction: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFilledName, setIsFilledName] = useState(false);

  const [isFocusedBid, setIsFocusedBid] = useState(false);
  const [isFilledBid, setIsFilledBid] = useState(false);

  const { addToast } = useToast();

  const handleInputFocus = useCallback((nameInput: string) => {
    if (nameInput === 'name') {
      setIsFocusedName(true);
    } else {
      setIsFocusedBid(true);
    }
  }, []);

  const handleInputBlur = useCallback((nameInput: string) => {
    if (nameInput === 'name') {
      setIsFocusedName(false);

      setIsFilledName(!!formRef.current?.getFieldValue('name'));
    } else {
      setIsFocusedBid(false);

      setIsFilledBid(!!formRef.current?.getFieldValue('bid'));
    }
  }, []);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          bid: Yup.string()
            .required('Lance obrigatório')
            .min(5, 'Os 4 números são obrigatórios'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/bid', {
          name: data.name,
          bid: Number(data.bid),
        });

        formRef.current?.clearField('name');
        formRef.current?.clearField('bid');

        setIsFilledName(false);
        setIsFilledBid(false);

        addToast({
          title: 'Parabéns',
          description: 'Você acaba de realizar o seu lance!',
          type: 'success',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        console.log(error.response);

        if (error.response.data.message === 'Number of maximum bids reached') {
          addToast({
            title: 'Limite atingido',
            description: 'O limite máximo de 999 lances foi atingido.',
            type: 'info',
          });
        }

        if (error.response.data.message === 'Bid less than 0') {
          addToast({
            title: 'Lance não permitido',
            description: 'O lance deve ser acima de 00.00',
            type: 'error',
          });
        }
      }
    },
    [addToast],
  );

  // <img src={HammerImg} alt="hammer-auction" />

  return (
    <Container>
      <Header>
        <div>
          <text>Leiloa</text>
          <text style={{ color: '#008d23' }}>TECH</text>
        </div>
      </Header>

      <Body>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{ name: '', bid: '' }}
          defaultValue=""
        >
          <h2>Leilão de menor lance único</h2>

          <Input
            name="name"
            icon={FiUser}
            placeholder="Nome Completo"
            isFocused={isFocusedName}
            isFilled={isFilledName}
            onFocus={() => handleInputFocus('name')}
            onBlur={() => handleInputBlur('name')}
          />

          <Input
            name="bid"
            mask
            icon={ImHammer2}
            placeholder="Lance. Ex: 00.01"
            isFocused={isFocusedBid}
            isFilled={isFilledBid}
            onFocus={() => handleInputFocus('bid')}
            onBlur={() => handleInputBlur('bid')}
          />

          <Button type="submit">Enviar</Button>
        </Form>

        <Link to="/action-rules">
          <FiInfo />
          Mais informações
        </Link>
      </Body>

      <Footer>
        <text>2021 - Brasil</text>
      </Footer>
    </Container>
  );
};

export default BidAuction;
