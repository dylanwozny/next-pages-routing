import styled from "styled-components";

const PageLayout = styled.main`
  max-width: 30rem;
  margin: 3rem auto 6rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 3px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.125);
  .jim {
    background-color: blue;
  }
`;

const LoginHeader = styled.h2`
  padding: ${(props) => props.padding || "0rem"};
  max-width: 25rem;
  margin: 0 auto;
  text-align: center;
  font-weight: normal;
`;

export { PageLayout, LoginHeader };
