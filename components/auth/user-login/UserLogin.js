import { useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { app, auth } from "../../../firebase"
import TextInput from "../../ui/forms/TextInput"
import  {Button}  from "../../ui/buttons/index"
import Login from "./styled"
 
 
function UserLogin ({...props}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //on submit
    async function handleSubmit(e){
        e.preventDefault();
        const user = await signInWithEmailAndPassword(auth,"jim@home.com","123456");
        console.log(user);
        
    }
 
   
    return (
        <>
        <Login {...props} onSubmit={(e)=>handleSubmit(e)} >    
         <TextInput label="Email"  id="emailAddress" placeholder="janedoe@home.com" {...props}/>
         <TextInput label="Password"  type="password" id="emailAddress" placeholder="use a secure password" {...props}/>
    
        <Button bgcolor="#ed4747" color="white" noBoxShadow {...props} type="submit">LOGIN</Button>
        </Login>
        </>

    )
}

export default UserLogin