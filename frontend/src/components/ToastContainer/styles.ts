import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  overflow: hidden;

  @media (max-width: 290px) {
    padding: 30px 16px;
  }
`;
