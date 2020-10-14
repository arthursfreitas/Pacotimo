import styled from 'styled-components';

export const CardInformation = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -58px;
  padding: 7px 10px 7px 10px;
  background: #000000b0;
  position: relative;
  border-radius: 0px 0px 15px 15px;
  h3, p {
    margin: 0;
    color:#FFF;
}

`;
export const CardText = styled.div`
   
`;

export const CardDateText = styled.div`
  p{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
`;

export const CardContent = styled.article`
  box-shadow: 0px 0px 28px -9px rgba(0,0,0,0.72);
  width:fit-content;
  border-radius: 15px;
  margin:10px;
  img{
    border-radius: 15px;
  }
`;