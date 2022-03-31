import { useState, useEffect } from "react";
import Link from 'next/link'
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


function DeleteItemPage(props) {
  const user = useAuth(); 
  const [uid,setUid] = useState()
  
  
async function deleteUserData(uid){
  console.log(uid);
  // functions below need to be async to get data
  if(user){
    const docPath = `todos/${user.uid}`;
    console.log(docPath);
} 
 
//   // form submit event handler
  function handleSubmit(e) {
    e.preventDefault();
    
    updateUserData({[`${uid}`]:{
      id:uid,
      desc,
      category:"work",
      completed:true
    }});
  }

  return (
    <>
      <NavBar/>
      <div>{desc}</div>
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
          style={{margin:"1rem 0"}}
        />
        {/* components have functions and properties passed down */}
        <AddNewItemForm submitHandler={(e)=>handleSubmit(e)}>
          <ItemTextArea
            style={{ margin: "1rem 0 1rem" }}
            changeHandler={(e)=> setDesc(e.currentTarget.value)}
          />
          <Button type="submit" bgcolor="crimson" color="white">
            delete to do item
          </Button>
        </AddNewItemForm>
      </ContentSection>
      </main>
    </>
  );
}

export default DeleteItemPage;
