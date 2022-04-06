// Jim videos 
import firebase from "../firebase";
import Brand from "../components/branding"
import NavBar from "../components/navbar";
import {Button} from 'components/ui/buttons';
import styled from "styled-components";
import { ToDoList } from "components/todos/items";
import { UserLogin } from "components/auth/user-login";
import { useAuth } from "hooks/useAuth";
import Link from "next/link";
import {db} from "../firebase";
import{doc,getDoc} from "firebase/firestore"
import { useEffect,useState } from "react";
import {collection, getDocs} from "firebase/firestore"
import { AddNewContainer } from "components/todos/add-area";


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




    const [todoItem,setTodoItem] = useState({});
    const [Flag,setFlag] = useState(1);
    const user = useAuth()



    count++;
    // pass this to items component ?
    let forceUpdate = useForceUpdate();

    // getting json object from firebase
    useEffect(()=>{
        async function getFirebaseDoc(){
            // grabbing the users id and putting it into firebase path 
            let docRef = `/todos/${user.uid}`;
            // passing user path into db
            let userRef = doc(db,docRef);
            // ask server for information
            let userToDos = await getDoc(userRef);
            console.log(userToDos.data())
            //taking data from db, using setter to pass information into settodoitem as an object
            setTodoItem(Object.assign({},userToDos.data()))
        }
        if(user){
            getFirebaseDoc();
        }
        
    },[user,Flag])

    //--------------------- to be run on delete list change, rerenders and removes deleted item----------------------



    // if logged in
    if(user){
        // if there is data
        //  todoItem data is retrieved outside useeffect functio

        // Put logic into react component
        console.log("state below");
        console.log(todoItem)

          let docKeys = Object.getOwnPropertyNames(todoItem);
          console.log(docKeys);



          docKeys.forEach(element => {
              console.log(todoItem[element].desc)
              
          });
        

 

        if(todoItem){
            return ( 
                      
                <>                
                <NavBar/>
                <Brand title="The to do list!" tagline="Here are your to do items" />
                <main>
                {/* <button onClick={deleteObject}>Click me to update</button> */}
                {/* <h1>{count++} times clicked</h1> */}
                {/* <button onClick={forceUpdate}>Refresh</button> */}
                <AddNewContainer/>
                <ToDoList theFlag={Flag} flag={setFlag} todoSet={()=>setTodoItem()} userId={user} {...todoItem} refreshPage={()=>forceUpdate()} theCount={count} />
                
                <Link href="/">
                     <a>Go Home</a>
                     
                </Link> 

                </main> 
                 
                </>
                )
        }else{
            return (       
                <>
                <NavBar/>
                <Brand title="You are not a user of this App !" tagline="" /> 
                <Link href="/">
                     <a>Go Home</a>
                </Link>         
                </>
                )
        }

    }

    return (
        <>
        <NavBar/>
        <Brand title="you are not a user of this app !" tagline="Get it all done !" />   </>
        )
}


export default ToDoPage;