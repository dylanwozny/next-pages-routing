import styled from "styled-components";

const PageLayout = styled.main`
  max-width: 30rem

`;

const LoginHeader = styled.h2`
  padding: ${(props) => props.padding || "0rem"};
  max-width: 25rem;
  margin: 0 auto;
  text-align: center;
  font-weight: normal;

`;

export { PageLayout, LoginHeader };
