import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../../../firebase";
import TextInput from "../../ui/forms/TextInput";
import { Button } from "../../ui/buttons/index";
import Login from "./styled";
import { useAuth } from "../../../hooks/useAuth";
import { ReplaceFirebaseM } from "hooks/removeFireMessage";
import Router from "next/router";
import { useRouter } from "next/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  update,
  updateDoc,
} from "firebase/firestore";
import styled from "styled-components";
import { db } from "../../../firebase";

// colors
// EBE8ED white
// 977585 red
// 82A4D1 blue
// 999CB2

//------------------------------Styled Components---------------------------

const ErrorMessage = styled.div`
  margin: 0 auto;
  text-align: left;
  font-weight: 600;
  font-style: italic;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;

  color: red;
  margin-bottom: 2rem;

  .show {
    display: block;
    transform: 1s;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  button {
    margin: 0;
  }

  .sign-up-btn {
    border: 2px solid #999cb2;
    color: #999cb2;
  }

  .sign-up-btn:hover {
    color: white;
    background-color: #999cb2;
  }

  .sign-in-btn {
    color: white;
    background-color: ${(props) => props.theme.secondaryColor};
  }

  .sign-in-btn:hover {
    background-color: transparent;
    color: ${(props) => props.theme.secondaryColor};
  }
`;

//------------------------------States---------------------------
function UserLogin({ ...props }) {
  const [email, setEmail] = useState("placeholder");
  const [password, setPassword] = useState("placeholder");
  const [userMessage, setUserMessage] = useState("");

  const router = useRouter();
  const user = useAuth();
  let message = "";

  //------------------------------Validation Logic---------------------------
  // validation Flag
  let validPass = true;

  // error message object
  let errorMessages = {};
  const validateEmail = (email) => {
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  if (!email) {
    errorMessages["email"] = "Please Do Not Leave email Blank";
    validPass = false;
  }
  // ------------email validation-------------//
  if (email === "placeholder") {
    validPass = false;
  } else if (!validateEmail(email)) {
    errorMessages["email"] = "Please type in a valid email address format";
    validPass = false;
  }

  // ------------Password validation-------------//
  if (password === "placeholder") {
    validPass = false;
  } else if (!password) {
    errorMessages["password"] = "Please Do Not Leave password Blank";
    validPass = false;
  }
  //------------- can make resusable hook or function--------
  // ------------add new user function---------------
  async function addNewUser(newUser) {
    await setDoc(doc(db, `todos/${newUser}`), {});
  }

  //------------------------------On Submit---------------------------
  async function handleSubmit(e) {
    let targetName = e.target.name;
    e.preventDefault();
    console.log(targetName);

    if (!validPass) {
    } else {
      //-----------SIGN IN--------
      if (targetName === "form1") {
        console.log("sign-in pressed");
        const isValidUser = await signInWithEmailAndPassword(
          auth,
          email,
          password
        ).catch((error) => {
          console.log(error.message);
          console.log(error.code);

          setUserMessage(ReplaceFirebaseM(error.message));
        });

        if (isValidUser) {
          Router.push("/todo");
        } else {
          validPass = false;
        }
        //-----------SIGN UP--------
      } else if (targetName === "sign_up_button") {
        //   ----------------------------DO SIGN UP-------------------------
        // promise function takes a second or so to run, the .then makes sure it waits till after the promise is called to execute.
        const newAuth = getAuth();
        let errorFlag = false;
        createUserWithEmailAndPassword(newAuth, email, password)
          .then((clientCredential) => {
            console.log(clientCredential.user.uid);
            addNewUser(clientCredential.user.uid);
            Router.push("/todo");
          })
          .catch((error) => {
            setUserMessage(ReplaceFirebaseM(error.message));
            console.log(error.code);
            console.log(error.message);
          });
      }
    }
  }

  return (
    <>
      <Login name="form1" {...props} onSubmit={(e) => handleSubmit(e)}>
        <TextInput
          name="email"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          label="Email"
          id="emailAddress"
          placeholder="janedoe@home.com"
          {...props}
        ></TextInput>
        <ErrorMessage>{errorMessages["email"]}</ErrorMessage>
        <TextInput
          name="password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          label="Password"
          type="password"
          id="emailAddress"
          placeholder="use a secure password"
          {...props}
        />
        <ErrorMessage>{errorMessages["password"]}</ErrorMessage>
        <FlexContainer>
          <Button
            type="submit"
            value="sign_in"
            name="sign_in_button"
            className="sign-in-btn"
          >
            LOGIN
          </Button>
          <Button
            className="sign-up-btn"
            type="submit"
            value="sign_up"
            name="sign_up_button"
            onClick={(e) => handleSubmit(e)}
          >
            SIGN UP
          </Button>
        </FlexContainer>
        <ErrorMessage>{userMessage}</ErrorMessage>
      </Login>
    </>
  );
}

export default UserLogin;
