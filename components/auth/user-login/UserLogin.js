import { useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { app, auth } from "../../../firebase"
import TextInput from "../../ui/forms/TextInput"
import  {Button}  from "../../ui/buttons/index"
import Login from "./styled"
import { useAuth } from '../../../hooks/useAuth'
import Router from 'next/router'
import { useRouter } from 'next/router'

 
 
function UserLogin ({...props}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const user = useAuth()


    //on submit
    async function handleSubmit(e){
        e.preventDefault();
        // const user = await signInWithEmailAndPassword(auth,"jim@home.com","123456");

        const isValidUser = await signInWithEmailAndPassword(auth, email, password);

        if(isValidUser){
        Router.push('/todo')

        }
         

        
    }
 
   
    return (
        <>
        <Login {...props} onSubmit={(e)=>handleSubmit(e)} >    
         <TextInput onChange={(e)=>{setEmail(e.currentTarget.value)}} label="Email"  id="emailAddress" placeholder="janedoe@home.com" {...props}/>
         <TextInput onChange={(e)=>{setPassword(e.currentTarget.value)}} label="Password"  type="password" id="emailAddress" placeholder="use a secure password" {...props}/>
    
        <Button bgcolor="#ed4747" color="white" noBoxShadow {...props} type="submit">LOGIN</Button>
        </Login>
        </>

    )
}

export default UserLogin