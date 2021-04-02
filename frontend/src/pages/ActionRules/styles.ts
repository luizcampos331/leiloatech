import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  margin: 40px;
  justify-content: center;

  div {
    flex-direction: row;

    text {
      font-size: 45px;
    }

    text + text {
      font-weight: 700;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  div {
    max-width: 500px;
    background-color: rgb(32, 32, 36);
    padding: 30px;
    margin: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-bottom: 24px;
    }

    ul {
      li {
        margin-bottom: 16px;
      }
    }

    @media (max-width: 365px) {
      width: 300px;
    }

    @media (max-width: 320px) {
      width: 280px;
    }
  }

  a {
    display: flex;
    color: #008d23;
    transition: color 200ms;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#008d23')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Footer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(32, 32, 36);

  text {
    font-size: 15px;
    font-weight: 300;
  }
`;
