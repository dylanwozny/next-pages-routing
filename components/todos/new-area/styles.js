import styled from "styled-components";
import { SvgButton } from "components/ui/buttons";

const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #D2483F;
  box-shadow: 0 0 2px 0px #dddddd;
  margin-bottom: 2rem;
  max-width: 18rem;
  padding: 1rem;
  border: solid 2px #D2483F;
  align-items: center;
  border-radius: 5px;

  &:hover {
    background-color: #D2483F;
    cursor: pointer;
    color: white;
  }
`;

const AddTitle = styled.h2`
  font-weight: 100;
  margin: 0;
`;

const AddButton = styled(SvgButton)``;

export { AddContainer, AddTitle, AddButton };
