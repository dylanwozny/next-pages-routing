// Jim videos
import firebase from "../firebase";
import Brand from "../components/branding";
import NavBar from "../components/navbar";
import { Button } from "components/ui/buttons";
import styled from "styled-components";
import { ToDoList } from "components/todos/items";
import { UserLogin } from "components/auth/user-login";
import { useAuth } from "hooks/useAuth";
import Link from "next/link";
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { AddNewContainer } from "components/todos/new-area";
import { ToDoContext } from "context/state";

const ErrorMessage = styled.div`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-style: italic;

  color: red;

  .show {
    display: block;
    transform: 1s;
    text-transform: capitalize;
  }
`;

// set state rerenders the page, this works here, figure out how to pass to other components....
function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

let count = 0;

// ---- you can move the logic to hooks and import it to do component ----//

// <> this is a fragment, use instead of div
// get and setter
function ToDoPage(props) {
  // making an empty object for future data

  // use context persistant data
  // call what you want from context
  const { todos, setTodos, accessContext, userId, setUserId } =
    useContext(ToDoContext);

  accessContext();

  const [todoItem, setTodoItem] = useState({});
  const [Flag, setFlag] = useState(1);
  const user = useAuth();
  const [serverEr, setServerEr] = useState("");

  // create new user if none exsists
  async function addNewUser(newUser) {
    try {
      await setDoc(doc(db, `todos/${newUser}`), {});
    } catch (error) {
      setServerEr(error.message);
    }
  }

  count++;
  // pass this to items component ?
  let forceUpdate = useForceUpdate();

  // getting json object from firebase
  useEffect(() => {
    async function getFirebaseDoc() {
      try {
        // grabbing the users id and putting it into firebase path
        let docRef = `/todos/${user.uid}`;
        // passing user path into db
        let userRef = doc(db, docRef);
        // ask server for information
        let userToDos = await getDoc(userRef);

        if (!userToDos.data()) {
          addNewUser(user.uid);
        }
        //taking data from db, using setter to pass information into settodoitem as an object
        setTodoItem(Object.assign({}, userToDos.data()));
      } catch (error) {
        setServerEr(error.message);
      }
    }
    if (user) {
      getFirebaseDoc();
    }
  }, [user, Flag]);

  //--------------------- to be run on delete list change, rerenders and removes deleted item----------------------

  useEffect(() => {
    // set redux todos
    setTodos(todoItem);
  });

  // if logged in
  if (user) {
    // if there is data
    //  todoItem data is retrieved outside useeffect functio

    // set user id in context
    setUserId(user.uid);

    let docKeys = Object.getOwnPropertyNames(todoItem);

    if (todoItem) {
      return (
        <>
          <NavBar />
          <Brand title="The to do list!" tagline="Here are your to do items" />
          <main>
            <ErrorMessage>{serverEr}</ErrorMessage>
            <AddNewContainer />
            <ToDoList
              theFlag={Flag}
              flag={setFlag}
              todoSet={() => setTodoItem()}
              userId={user}
              {...todoItem}
              refreshPage={() => forceUpdate()}
              theCount={count}
            />
          </main>
        </>
      );
    } else {
      return (
        <>
          <NavBar />
          <Brand title="You are not a user of this App !" tagline="" />
          <Link href="/">
            <a>Go Home</a>
          </Link>
        </>
      );
    }
  }

  return (
    <>
      <NavBar />
      <main>
        <Brand
          title="You are not a user of this app !"
          tagline="Sign up to use the app"
        />
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </main>
    </>
  );
}

export default ToDoPage;
