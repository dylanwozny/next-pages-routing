import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { IoIosArrowRoundBack } from "react-icons/io";
import { deleteDoc, doc, getDoc, update, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useAuth } from "hooks/useAuth";
import { AppBar } from "components/navbar/index";
import { Button } from "components/ui/buttons";
import {
  ContentSection,
  ContentSectionHeader,
  AddNewItemForm,
  UniqueId,
  ItemTextArea,
  ItemIsDone,
} from "components/todos";
import NavBar from "components/navbar/navbar";
import styled from "styled-components";
import { useRouter } from "next/router";
import { ItemDescription } from "components/todos/styles";
import { ToDoContext } from "context/state";

// ---styled components---
const AddNewButton = styled(Button)`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.whiteHighlight};

  &:hover {
    background-color: ${(props) => props.theme.whiteHighlight};
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 3rem;
`;

const ErrorMessage = styled.div`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-style: italic;

  color: red;
  margin-bottom: 2rem;

  .show {
    display: block;
    transform: 1s;
    text-transform: capitalize;
  }
`;

// ---component function---
function AddItemPage(props) {
  // grabbing id of the item from url
  const myRouter = useRouter();
  const theId = myRouter.query.id;

  //grabbing CONTEXT
  const { todos, setTodos, accessContext, setEditTodo, editTodo, userId } =
    useContext(ToDoContext);
  accessContext();

  let currentItem = todos[`${theId}`];

  let curDesc = "";
  let curCategory = "";
  let curCompleted = "";

  if (currentItem) {
    curDesc = currentItem.desc;
    curCategory = currentItem.category;
    curCompleted = currentItem.completed;
  }

  const user = useAuth();
  const [uid, setUid] = useState();
  const [desc, setDesc] = useState(curDesc);
  const [category, setCategory] = useState(curCategory);
  const [done, setDone] = useState(curCompleted);
  const [serverEr, setServerEr] = useState("");

  //Use local storage for fixing losing data on page refresh
  function saveToLocalStorage(store, name) {
    const stringStore = JSON.stringify(store);
    window.localStorage.setItem(name, stringStore);
  }

  // ----db function to get data and update firebase db----
  async function updateUserData(newToDo) {
    // functions below need to be async to get data
    if (user) {
      try {
        const docPath = `todos/${userId}`;

        const docRef = await doc(db, docPath);
        const temp = await updateDoc(docRef, newToDo);
        // get new updated doc and redirect once request is done !
        const todos = await getDoc(docRef).then(redirectPage());
      } catch (error) {
        setServerEr(error.message);
      }
    }
  }

  //--- declaring redirect function after submit. Must be outside of event handler.---
  const router = useRouter();
  function redirectPage() {
    const redirectUser = router.push("/todo");
  }

  // validation Flag
  let validPass = true;

  // error message object
  let errorMessages = {
    category: "",
    description: "",
    isdone: "",
  };
  //validation Logic
  if (!category) {
    errorMessages["category"] = "Please Do Not Leave Category Blank";
    validPass = false;
  }

  if (!desc) {
    errorMessages["description"] = "Please Do Not Leave Description Blank";
    validPass = false;
  }

  //----form submit event handler----
  function handleSubmit(e) {
    e.preventDefault();
    // if validation fail do nothing
    if (!validPass) {
    } else {
      updateUserData({
        [`${theId}`]: {
          id: theId,
          desc: desc,
          category: category,
          completed: done,
        },
      });
    }
  }

  //----component render----
  return (
    <>
      <NavBar />
      <main>
        <ContentSection>
          <Link href="/todo">
            <a>
              <IoIosArrowRoundBack />
              back
            </a>
          </Link>

          <ContentSectionHeader
            width="2.5rem"
            size="1.75rem"
            title="Edit your current item"
          />
          {/* components have functions and properties passed down */}
          <AddNewItemForm submitHandler={(e) => handleSubmit(e)}>
            <InputWrapper>
              <UniqueId id={theId} />

              <ItemTextArea
                error={errorMessages["category"]}
                type="category"
                theplaceholder={curCategory}
                changeHandler={(e) => setCategory(e.currentTarget.value)}
              />
              <ItemTextArea
                error={errorMessages["description"]}
                type="description"
                theplaceholder={curDesc}
                changeHandler={(e) => setDesc(e.currentTarget.value)}
              />
              <ItemIsDone
                value={curCompleted}
                changeHandler={(e) => setDone(e.currentTarget.checked)}
              />
            </InputWrapper>
            <AddNewButton>Edit Item</AddNewButton>
          </AddNewItemForm>
          <ErrorMessage>{serverEr}</ErrorMessage>
        </ContentSection>
      </main>
    </>
  );
}

export default AddItemPage;
