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
const InputWrapper = styled.div`
  margin-bottom: 3rem;
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
  console.log(userId);

  let currentItem = todos[`${theId}`];
  let curDesc = currentItem.desc;
  let curCategory = currentItem.category;
  let curCompleted = currentItem.completed;

  const user = useAuth();
  const [uid, setUid] = useState();
  const [desc, setDesc] = useState(curDesc);
  const [category, setCategory] = useState(curCategory);
  const [done, setDone] = useState(curCompleted);

  //Use local storage for fixing losing data on page refresh
  function saveToLocalStorage(store, name) {
    const stringStore = JSON.stringify(store);
    window.localStorage.setItem(name, stringStore);
  }

  // useEffect(()=>{
  //   let currentItem = todos[`${theId}`];
  //   console.log(todos)
  //   saveToLocalStorage(currentItem,'store');
  //   const reduxState = localStorage.getItem('store');
  //   const thisObject = JSON.parse(reduxState);
  //   console.log("redux below")
  //   console.log(thisObject)

  // })

  // setItemObject(todos[`${theId}`]);
  // console.log(todos)

  // ----db function to get data and update firebase db----
  async function updateUserData(newToDo) {
    console.log(newToDo);
    // functions below need to be async to get data
    if (user) {
      const docPath = `todos/${userId}`;
      console.log(docPath);
      const docRef = await doc(db, docPath);
      const temp = await updateDoc(docRef, newToDo);
      const todos = await getDoc(docRef);
      console.log(todos.data());
    }
  }

  //--- declaring redirect function after submit. Must be outside of event handler.---
  const router = useRouter();
  function redirectPage() {
    const redirectUser = router.push("/todo");
  }

  // NEED TO FIGURE OUT WHY OBJECT PERSISTANCE IS WACK
  // current placeholder information

  //----form submit event handler----
  function handleSubmit(e) {
    e.preventDefault();
    updateUserData({
      [`${theId}`]: {
        id: theId,
        desc: desc,
        category: category,
        completed: done,
      },
    });

    setTimeout(() => {
      redirectPage(), 13000;
    });
  }

  //----component render----
  return (
    <>
      <NavBar />
      <main>
        {/* <p>{ItemDescription}</p> */}
        <div>{category}</div>
        <div>{desc}</div>
        {console.log(done)}
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
            style={{ margin: "1rem 0" }}
          />
          {/* components have functions and properties passed down */}
          <AddNewItemForm submitHandler={(e) => handleSubmit(e)}>
            <InputWrapper>
              <UniqueId id={theId} />
              <ItemTextArea
                type="description"
                theplaceholder={curDesc}
                changeHandler={(e) => setDesc(e.currentTarget.value)}
              />
              <ItemTextArea
                type="category"
                theplaceholder={curCategory}
                changeHandler={(e) => setCategory(e.currentTarget.value)}
              ></ItemTextArea>
              <ItemIsDone
                value={curCompleted}
                changeHandler={(e) => setDone(e.currentTarget.checked)}
              />
            </InputWrapper>
            <Button type="submit" bgcolor="crimson" color="white">
              Add New To Do Item
            </Button>
          </AddNewItemForm>
        </ContentSection>
      </main>
    </>
  );
}

export default AddItemPage;
