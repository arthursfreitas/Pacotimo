import styled from 'styled-components';

export const Container = styled.div`
  background-color:#fff;
  padding:2rem;
  min-width:30vw;
  margin-left: 5rem;
  border-radius:20px;
  margin-bottom:2rem;
  label{
    line-height: 1.7rem;
    font-weight: 600;
  }
  input{
    padding: 1vh;
    border: 1px solid #c2c2c2;
    border-radius: 0.5rem;
    outline: aquamarine;
    height: 1.5rem;
  }
  box-shadow: 0px 0px 20px -9px rgba(0,0,0,0.72); 
  @media(max-width:1120px){
    margin-left: initial;
  }
`;
export const DestinyInput = styled.div`
display:flex;
flex-direction:column;
`;
export const DateInput = styled.div`
  display: flex;
  justify-content: inherit;
  align-items:center;
  margin-top:1rem;
  label{
    display:flex;
  }
  @media(max-width:570px){
    display: block;
  }

`;

export const FormSearch = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`;

export const ButtonSearch = styled.div`
  display:flex;
  align-self:center;
  padding-top:2rem;
  button{
    width: 10rem;
    border-radius: 1rem;
    outline: none;
    font-size: 22px;
    border: none;
    color: #fff;
    font-weight: 600;
    background: #ed3730;
    padding: 1rem;
    &:hover{
      cursor: pointer;
    }
  }
  
`;
