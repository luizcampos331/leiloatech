import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,

  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,

  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  display: flex;
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type]}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 18px;
    }
  }

  button {
    position: absolute;
    right: 8px;
    top: 8px;
    border: 0;
    background: transparent;
    color: inherit;
  }

  @media (max-width: 415px) {
    width: 300px;
  }

  @media (max-width: 350px) {
    width: 250px;
  }
`;
