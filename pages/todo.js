import firebase from "../firebase";
import Brand from "../components/branding"
import NavBar from "../components/navbar";
import {Button} from 'components/ui/buttons';
import styled from "styled-components";
import { List, ListItem } from "components/ui/list";
import { UserLogin } from "components/auth/user-login";
import { useAuth } from "hooks/useAuth";
import Link from "next/link";
import {db} from "../firebase";
import{doc,getDoc} from "firebase/firestore"
import { useEffect,useState } from "react";
import {collection, getDocs} from "firebase/firestore"


const Wrapper = styled.div``;


function TodoItem ({name,subject,time,...props}){
    return(
        <ul>
            <li>{name}</li>
            <li>{subject}</li>
            {/* <li>{time['date'].toDate()}</li> */}
        </ul>
    )
}


// <> this is a fragment, use instead of div
function ToDoPage(props) {
    const user = useAuth()
    const [todoItem, setTodoItems] = useState([])
    const [output,setOutPut] = useState('is working')
    let todoItems = [];

    // getting json object from firebase
    useEffect(()=>{
        async function getFirebaseDoc(){
            const ref = collection(db,"todoitems")
            const userSnapshot = await getDocs(ref);
            
            userSnapshot.forEach(doc=>{
                // setTodoItems.(doc.data())
                
            })
            console.log(todoItems);

            
        }
        getFirebaseDoc();
    },[])
    // if logged in
    if(user){
        // if there is data
        if(todoItems){
            return (       
                <>
                <NavBar/>
                <Brand title="The to do list!" tagline="" /> 
                <Link href="/">
                     <a>Go Home</a>
                </Link> 
                <div><TodoItem {...todoItem}/></div>          
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
                <div>{output}</div>       
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