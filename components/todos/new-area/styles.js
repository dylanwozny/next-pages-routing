import styled from "styled-components";
import { SvgButton } from "components/ui/buttons";

const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;

  box-shadow: 0 0 2px 0px #dddddd;
  background-color: ${(props) => props.theme.secondaryColor};
  margin-bottom: 2rem;
  max-width: 18rem;
  padding: 1rem;
  border: solid 2px ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.whiteHighlight};
  align-items: center;
  border-radius: 35px;

  &:hover {
    background-color: ${(props) => props.theme.whiteHighlight};
    cursor: pointer;
    color: ${(props) => props.theme.secondaryColor};
  }

  svg {
    color: ${(props) => props.theme.whiteHighlight};
    fill: ${(props) => props.theme.successColor};
  }
`;

const AddTitle = styled.h2`
  font-weight: 100;
  margin: 0;
`;

const AddButton = styled(SvgButton)``;

export { AddContainer, AddTitle, AddButton };
