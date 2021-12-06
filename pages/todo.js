import firebase from "../firebase";
import Brand from "../components/branding"
import NavBar from "../components/navbar";
import {Button} from 'components/ui/buttons';
import styled from "styled-components";
import { List, ListItem } from "components/ui/list";
import { UserLogin } from "components/auth/user-login";
import { useAuth } from "hooks/useAuth";
import Link from "next/link";


const Wrapper = styled.div``;



// <> this is a fragment, use instead of div
function ToDoPage(props) {
    const user = useAuth()
    if(!user){
        return(
        <>
        <NavBar/>
        <Brand title="You are not a user of this App !" tagline="" /> 
        <Link href="/">
             <a>Go Home</a>
        </Link>           
        </>
        )
    }

    return (
        <>
        <NavBar/>
        <Brand title="Welcome to the to do app" tagline="Get it all done !" />   </>
        )
}

export default ToDoPage;