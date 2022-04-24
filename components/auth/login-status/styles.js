import styled from 'styled-components';

const LoginStatus = styled.figure`
  display: flex;
  gap: 0.5rem;
  background-color: ${(props) => props.bgcolor || "white"};
  justify-content: center;
  align-items: center;
  line-height: 0.65rem;
  vertical-align: center;
  padding: 0.125rem 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  height: 100%;
 
  

  img {
    border-radius: 50%;
  }

  figcaption {
    text-align: left;
    font-size: 11px;
    p{
      margin-bottom: 0rem;
    }

    p:first-child {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    p:last-child {
      font-weight: 8px;    
    }
  }
`;

export {LoginStatus}