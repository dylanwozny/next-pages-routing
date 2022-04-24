import styled from "styled-components";
import { SvgButton } from "components/ui/buttons";

const ListItem = styled.li.attrs({
  key: "1",
  id: "1",
})`
  background-color: #fcfcfc;
  box-shadow: 0 0 2px 0px #dddddd;
  padding: 2rem 1rem;
  margin-bottom: 1rem;

  .done {
    color: green;
  }

  .inprogress {
    font-style: italic;
  }

  &.done-body {
    box-shadow: 0 0 5px 0px gray;
  }

  .popup-hide {
    display: none;
  }

  .popup-show {
    max-width: 30rem;
    margin: 0 auto;
    margin-right: 0.5rem;
    padding: 1rem;
    position: fixed;
    top: 10rem;
    background-color: white;
    box-shadow: 0 0 2px 0px #dddddd;
    padding: 10rem 1rem;
    display: block;

    h3 {
      text-align: center;
      margin-bottom: 3rem;
    }

    div {
      background-color: gray;
      height: 100vh;
      width: 100vw;
      display: fixed;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0.2;
    }
  }
`;

const ListBody = styled.ul``;

const ListHeader = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  .item-small {
    flex: 1;
  }
`;

const ListTitle = styled.h3`
  margin: 0rem;
  flex: 10;
  font-size: clamp(1.25rem, 5vw, 1.563rem);
  text-transform: uppercase;
  word-wrap: normal;
  max-width: 20rem;
  text-transform: capitalize;
  font-weight: 500;
`;

const ListContainer = styled.ul`
  max-width: 30rem;
  margin: 0 auto;
`;

const ListDone = styled.li`
  font-weight: 800;
  margin-bottom: 2rem;
`;

const ListControl = styled(SvgButton)``;

export {
  ListItem,
  ListContainer,
  ListControl,
  ListDone,
  ListTitle,
  ListHeader,
  ListBody,
};
