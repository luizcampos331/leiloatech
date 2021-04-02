import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 44%;
  }
`;

export const Header = styled.header`
  padding: 40px 0;
  justify-content: center;

  div {
    flex-direction: row;

    text {
      font-size: 60px;

      @media (max-width: 360px) {
        font-size: 50px;
      }

      @media (max-width: 310px) {
        font-size: 45px;
      }
    }

    text:last-child {
      font-weight: 700;
    }
  }
`;

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  form {
    background-color: rgb(32, 32, 36);
    width: 365px;
    padding: 20px;
    border-radius: 10px;

    h2 {
      text-align: center;
      margin-bottom: 24px;
    }

    @media (max-width: 380px) {
      width: 300px;
    }

    @media (max-width: 320px) {
      width: 280px;
    }
  }

  a {
    color: #008d23;
    transition: color 200ms;
    display: flex;
    align-items: center;
    margin: 16px 0;

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
