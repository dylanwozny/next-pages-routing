import firebase from "../firebase";
import Brand from "../components/branding"
import NavBar from "../components/navbar";
import {Button} from 'components/ui/buttons';
import styled from "styled-components";
import { List, ListItem } from "components/ui/list";
import { UserLogin } from "components/auth/user-login";

const Wrapper = styled.div``;



// <> this is a fragment, use instead of div
export default function Home() {

  return (
    
    <>
      <NavBar/>
      <Brand title="Dylan's To Do App" tagline="Get it all done !" />    
        {/* <Button>
          Login in to Firebase
        </Button> */}
        <UserLogin></UserLogin>
      

    </>
  )
}
