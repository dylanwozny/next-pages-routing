// diffrent button styles here

import styled from "styled-components";

// with {props} you can add styles from anywhere !
// not clear rule ! You can do another way.
const Button = styled.button`
  padding: 1rem 2rem;
  color: #D2483F;
  background-color: transparent;
  border: 2px #D2483F solid;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  margin-bottom: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #D2483F;
    color: white;
  }
`;

const ProviderButton = styled(Button)`
  border: none;
  color: #22273a;
  box-shadow: 2px 2px 2px 2px gray;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: gray;
    cursor: pointer;
    color: white;
  }

  span {
    padding-left: 1rem;
  }
`;

const SvgButton = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: none;
  &:hover svg {
    fill: ${(props) => props.userColor || "black"};
  }

  svg {
    height: 100%;
    width: 2rem;
    fill: none;
    cursor: pointer;
    color: ${(props) => props.userColor || "black"};
  }
`;

export { Button, ProviderButton, SvgButton };
