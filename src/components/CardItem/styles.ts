import styled from 'styled-components';

export const CardInformation = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -54px;
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
  h3{
    font-weight:600;
    text-transform:uppercase;
    font-size:14px;
  }
  p{
    font-size:18px;
    font-weight:500;
  }
`;

export const CardDateText = styled.div`
  p{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size:12px;
    font-weight:200;
  }
  p + p{
    font-family:monospace;
    font-size:14px;
  }
  
`;

export const CardContent = styled.div`
  box-shadow: 0px 0px 20px -9px rgba(0,0,0,0.72);
  width:fit-content;
  border-radius: 15px;
  margin:10px;
  img{
    border-radius: 15px;
  }
`;