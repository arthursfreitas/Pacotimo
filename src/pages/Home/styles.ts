import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0592b;
    font-family: Poppins;
    background-image:url('./img.png');
    background-blend-mode: darken;
  }
`;

export const Main = styled.div`
  h1{
    color:#fff;
    font-weight:400;
    margin:0;
    padding: 5rem 2rem 5rem 2rem;
    text-align:center;
    span{
      font-weight:700;
    }
  }
  `;

export const Container = styled.div`
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
  align-items:center;
`;


