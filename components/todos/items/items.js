import {
  ListContainer,
  ListItem,
  ListTitle,
  ListControl,
  ListHeader,
  ListDone,
  ListBody,
} from "./styles";
// import { ListControl } from "./ListControl";
import { Children } from "react/cjs/react.production.min";
import { db } from "/firebase";
import { FiTrash2 } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import ListDelete from "./ListDelete";
import ListEdit from "./ListEdit";
import { useEffect, useRef } from "react/cjs/react.production.min";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "components/ui/buttons";
import Link from "next/link";
import {
  clearIndexedDbPersistence,
  deleteDoc,
  deleteField,
  doc,
  updateDoc,
  update,
} from "firebase/firestore";
import { render } from "react-dom";
import { useAppContext } from "context/state";

const ErrorMessageDelete = styled.span`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-style: italic;
  color: red;
  display: block;
  text-transform: capitalize;

  .show {
    display: block;
    transform: 1s;
  }
`;
const name = styled.li``;

export { name };

const PopUp = styled.div`
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
  background-color: gray;
  height: 100vh;
  width: 100vw;
  background-color: rgba(200, 200, 200, 0.8);
  padding-top: 10rem;

  .delete-message {
    font-size: 3rem;
    text-align: center;
    margin-top: 15rem;
    color: #fcfcfc;
    width: 100%;
    background-color: #22273a;
  }

  h3 {
    text-align: center;
    margin-bottom: 3rem;
  }

  &.show {
    position: fixed !important;
    top: 0px !important;
    left: 0px !important;
    width: 100%;
  }

  div {
    background-color: #fcfcfc;
    max-width: 30rem;
    margin: 0 auto;
    opacity: 1;
    padding: 5rem 1rem;
  }
`;

const DeleteButton = styled(Button)`
  border: 2px solid red;
  color: red;

  &:hover {
    background-color: red;
  }
`;

const CancelButton = styled(Button)`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.whiteHighlight};

  &:hover {
    background-color: ${(props) => props.theme.whiteHighlight};
    color: ${(props) => props.theme.secondaryColor};
  }
`;

function List({
  theFlag,
  flag,
  todoSet,
  userId,
  refreshPage,
  theCount,
  ...todoItem
}) {
  // Delete in progress popup
  let theDeletePopup = document.querySelector(".delete-popup");

  // grabbing the uuid key of each doc
  let docKeys = Object.getOwnPropertyNames(todoItem);

  // Rerender on delete logic
  const deleteObject = () => {
    if (theFlag > 1) {
      flag(1);
    } else {
      flag(2);
    }
  };

  // set object state of item list
  const [objectKeys, updateKeys] = useState({});
  const [books, updateBooks] = useState([]);
  const [serverEr, setServerEr] = useState("");
  const handleClick = () => {
    // update the books state property by adding a new book

    updateBooks([...books, { name: "A new Book", id: "..." }]);
  };

  // DELETE FIREBASE DOCUMENT
  function deleteHandleSubmit(e, propKey) {
    e.preventDefault();
    let theKey = propKey;
    let theClass = "popup" + theKey.toString();
    let theElement = document.querySelector("." + theClass);
    theElement.classList.remove("show");

    // RUN QUERY HERE AND REFRESH LIST
    async function deleteFireBaseDoc(key) {
      try {
        theDeletePopup.classList.add("show");
        let docPath = `/todos/${userId.uid}`;
        const docRef = await doc(db, docPath);
        const remove = await updateDoc(docRef, {
          [key]: deleteField(),
        }).then(theDeletePopup.classList.remove("show"), deleteObject());
      } catch (error) {
        setServerEr(error.message);
      }
    }
    //delete from db
    deleteFireBaseDoc(theKey);
  }

  function cancelHandleSubmit(e, propKey) {
    e.preventDefault();
    let theKey = propKey;
    theKey = "popup" + theKey.toString();
    let theElement = document.querySelector("." + theKey);
    theElement.classList.remove("show");
  }

  //delete item logic
  // query select body element and gray out body when selected
  // pass the item id to the the delete window
  function deleteItemSubmit(e, propKey) {
    e.preventDefault();
    let theKey = propKey;
    let theUid = theKey;
    theKey = "popup" + theKey.toString();
    let theElement = document.querySelector("." + theKey);
    theElement.classList.add("show");
  }

  // map to make items
  // loop

  let keyArray = [];

  const mapItems = docKeys.map((data, index) => {
    let theKey = todoItem[data].id;

    keyArray.push(theKey);

    // is done logic
    let isDone = "";
    let isDoneClass = "";
    let isDoneBody = "";
    // GRAB UID TO PASS TO DELETE FUNCTION HERE
    // UPDATE DATA PERSISTANCE

    if (todoItem[data].completed === true) {
      isDone = "Done";
      isDoneClass = "done";
      isDoneBody = "done-body";
    } else {
      isDone = "In progress";
      isDoneClass = "inprogress";
      isDoneBody = "";
    }

    return (
      <>
        <ListItem key={index} className={isDoneBody}>
          <div>
            {/* PUT Delete Button Here*/}
            <PopUp className={"popup" + theKey}>
              <div>
                <h3> Are you sure you want to delete this item ?</h3>
                {/* key is a hidden property */}
                <CancelButton onClick={(e) => cancelHandleSubmit(e, theKey)}>
                  Cancel
                </CancelButton>
                <DeleteButton onClick={(e) => deleteHandleSubmit(e, theKey)}>
                  Delete
                </DeleteButton>
                <ErrorMessageDelete>{serverEr}</ErrorMessageDelete>
              </div>
            </PopUp>
          </div>

          <ListHeader>
            <ListTitle>{todoItem[data].category}</ListTitle>
            <ListEdit itemId={theKey} color="orange" />
            <ListDelete
              color="red"
              clickHandler={(e) => deleteItemSubmit(e, theKey)}
            ></ListDelete>
          </ListHeader>
          <ListBody>
            <ListDone className={isDoneClass}>{isDone}</ListDone>
            <li>
              <p>{todoItem[data].desc}</p>
            </li>
          </ListBody>
        </ListItem>
      </>
    );
  });

  return (
    <ListContainer>
      <PopUp className="delete-popup">
        <p className="delete-message">Deleting Item. Please Wait.</p>
      </PopUp>
      {mapItems}
    </ListContainer>
  );
}

export default List;
