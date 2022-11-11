import { useState, useEffect } from "react";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { IoIosArrowRoundBack } from "react-icons/io";
import { deleteDoc, doc, getDoc, update, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "hooks/useAuth";
import { AppBar } from "components/navbar/index";
import { Button } from "components/ui/buttons";
import {
  ContentSection,
  ContentSectionHeader,
  AddNewItemForm,
  UniqueId,
  ItemTextArea,
} from "components/todos";
import NavBar from "components/navbar/navbar";
import styled from "styled-components";
import { useRouter } from "next/router";

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
  const user = useAuth();
  const [uid, setUid] = useState();
  const [desc, setDesc] = useState("placeholder");
  const [category, setCategory] = useState("placeholder");
  const [IdKey, setIdKey] = useState("");
  const [serverEr, setServerEr] = useState("");
  const [messC, setMessC] = useState("");
  const [messD, setMessD] = useState("");
  // generate id
  useEffect(() => {
    setUid(uuid().substring(0, 8));
  }, [user]);

  // ----db function to get data and update firebase db----
  async function updateUserData(newToDo) {
    // functions below need to be async to get data
    if (user) {
      try {
        const docPath = `todos/${user.uid}`;

        const docRef = await doc(db, docPath);
        const temp = await updateDoc(docRef, newToDo);
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
  // catch error if nothing in box when sumbit pressed
  let emptyCategory = false;
  let emptyDescription = false;

  // error message object
  let errorMessages = {
    category: "",
    description: "",
  };
  //--------------validation Logic on input--------------
  if (!category) {
    errorMessages["category"] = "Please Do Not Leave Category Blank";
    validPass = false;
  }

  if (desc === "placeholder") {
    validPass = false;
    emptyDescription = true;
  }

  if (category === "placeholder") {
    validPass = false;
    emptyCategory = true;
  }

  if (!desc) {
    errorMessages["description"] = "Please Do Not Leave Description Blank";
    validPass = false;
  }

  //----form submit event handler----
  function handleSubmit(e) {
    e.preventDefault();
    if (!validPass) {
      //--------------validation Logic submit if empty--------------
      if (emptyCategory) {
        setMessC("please put in a Category");
      }
      if (emptyDescription) {
        setMessD("please put in a description");
      }
    } else {
      updateUserData({
        [`${uid}`]: {
          id: uid,
          desc,
          category,
          completed: false,
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
            title="Add New To Do Item"
          />
          {/* components have functions and properties passed down */}
          <AddNewItemForm submitHandler={(e) => handleSubmit(e)}>
            <InputWrapper>
              <UniqueId id={uid} />
              <ItemTextArea
                type="category"
                error={messC}
                changeHandler={(e) => setCategory(e.currentTarget.value)}
              ></ItemTextArea>
              <ItemTextArea
                error={messD}
                type="description"
                changeHandler={(e) => setDesc(e.currentTarget.value)}
              />
            </InputWrapper>
            <AddNewButton>Add New To Do Item</AddNewButton>
          </AddNewItemForm>
          <ErrorMessage>{serverEr}</ErrorMessage>
        </ContentSection>
      </main>
    </>
  );
}

export default AddItemPage;
