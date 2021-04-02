import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: rgb(18, 18, 20);
  border-radius: 10px;
  border: 2px solid rgb(32, 32, 36);
  padding: 12px;
  width: 100%;
  color: #666;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  & + button {
    margin-top: 20px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      & + div {
        margin-top: 6px;
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #008d23;
      border-color: #008d23;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #008d23;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #ddd;

    &::placeholder {
      color: #666;
    }
  }

  svg {
    margin-right: 12px;
  }
`;

export const Error = styled.div`
  display: flex;
  color: #c53030;
  margin-bottom: 16px;
`;
