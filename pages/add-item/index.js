import { useState, useEffect } from "react";
import Link from 'next/link'
import { v4 as uuid } from "uuid";
import { IoIosArrowRoundBack } from "react-icons/io";
import {doc,getDoc,update, updateDoc} from "firebase/firestore";
import {db} from "../../firebase";
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

function AddItemPage(props) {
  const user = useAuth(); 
  const [uid,setUid] = useState()
  const [desc, setDesc] = useState('');
  useEffect(()=>{
    setUid(uuid().substring(0,8))

  },[]);


  
async function updateUserData(newToDo){
  if(user){
    console.log(newToDo)
    
    const docPath = `todoitems/${user.uid}`;
    const docRef = await doc(db, docPath)
    const temp = await updateDoc(docRef, newToDo);
    const todos = await getDoc(docRef)
    console.log(todos.data())
    
  }
  

} 
 
  
   

//   // form submit event handler
  function handleSubmit(e) {
    e.preventDefault();
    updateUserData({[`${uid}`]:{
      uid,
      desc,
      category:"work",
      completed:true
    }});

    

    
    
    
    
   
  }

  return (
    <>
      <NavBar/>
      <div>{desc}</div>
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
          style={{margin:"1rem 0"}}
        />
        {/* components have functions and properties passed down */}
        <AddNewItemForm submitHandler={(e)=>handleSubmit(e)}>
          <UniqueId uid={uid}/>
          <ItemTextArea
            style={{ margin: "1rem 0 1rem" }}
            changeHandler={(e)=> setDesc(e.currentTarget.value)}
          />
          <Button type="submit" bgcolor="crimson" color="white">
            Add New To Do Item
          </Button>
        </AddNewItemForm>
      </ContentSection>
    </>
  );
}

export default AddItemPage;
