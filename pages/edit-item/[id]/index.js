
import { useState, useEffect } from "react";
import Link from 'next/link'
import { v4 as uuid } from "uuid";
import { IoIosArrowRoundBack } from "react-icons/io";
import {deleteDoc, doc,getDoc,update, updateDoc} from "firebase/firestore";
import {db} from "../../../firebase";
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
import { useRouter } from 'next/router';
import { ItemDescription } from "components/todos/styles";


// ---styled components---
const InputWrapper = styled.div`
  margin-bottom: 3rem;
`;


// ---component function---
function AddItemPage(props) {
  const user = useAuth(); 
  const [uid,setUid] = useState()
  const [desc, setDesc] = useState('');
  const [category,setCategory] = useState('');
  const [IdKey,setIdKey] = useState('');
  // generate id
  useEffect(()=>{
    setUid(uuid().substring(0,8))

  },[user]);

// grabbing id of the item
const myRouter = useRouter();
const theId = myRouter.query.id;

// session
// let getSession = window.sessionStorage.getItem("animals");
// console.log("the animal is : " + getSession)


// ----db function to get data and update firebase db----
async function updateUserData(newToDo){
  console.log(newToDo);
  // functions below need to be async to get data
  if(user){
    const docPath = `todos/${user.uid}`;
    console.log(docPath);
    const docRef = await doc(db, docPath)
    const temp = await updateDoc(docRef,newToDo)
    const todos = await getDoc(docRef)
    console.log(todos.data())
  }
} 

  //--- declaring redirect function after submit. Must be outside of event handler.---
  const router = useRouter();
  function redirectPage(){
    const redirectUser = router.push('/todo');


  }

  
//----form submit event handler----
  function handleSubmit(e) {
    e.preventDefault();
    
    updateUserData({[`${uid}`]:{
      id:uid,
      desc,
      category,
      completed:true
    }});

    setTimeout(()=>{redirectPage(),13000})
     
  }

  //----component render----
  return (
    <>
      <NavBar/>
      <main>
      {/* <p>{ItemDescription}</p> */}
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
          style={{margin:"1rem 0"}}
        />
        {/* components have functions and properties passed down */}
        <AddNewItemForm submitHandler={(e)=>handleSubmit(e)}>
          <InputWrapper>
            <UniqueId id={theId}/>  
            <ItemTextArea
              type="description"
              changeHandler={(e)=> setDesc(e.currentTarget.value)}
            />
            <ItemTextArea type="category"
            changeHandler={(e)=> setCategory(e.currentTarget.value)}>           
            </ItemTextArea>
            <ItemIsDone/>
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
