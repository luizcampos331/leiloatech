import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #008d23;
  border-radius: 10px;
  border: 0;
  padding: 12px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  transition: background-color 200ms;
  color: rgb(18, 18, 20);

  &:hover {
    background-color: ${shade(0.2, '#008d23')};
  }
`;
