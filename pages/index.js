import firebase from "../firebase";
import Brand from "../components/branding"
import NavBar from "../components/navbar";
import {Button, ProviderButton} from 'components/ui/buttons';
import styled from "styled-components";
import { List, ListItem } from "components/ui/list";
import { UserLogin } from "components/auth/user-login";
import GoogleProvider  from "../components/auth/providers/google/GoogleProvider";
import GithubAuthProvider from "../components/auth/providers/github/GitHubProvider";

const Wrapper = styled.div``;



// <> this is a fragment, use instead of div
export default function Home() {

  return (
    
    <>
      <NavBar/>
      <Brand title="Dylan's To Do App" tagline="Get it all done !" />    
        <UserLogin></UserLogin>
        <ProviderButton>Basic Provider</ProviderButton>
        <GithubAuthProvider>Login with Github</GithubAuthProvider>
        <GoogleProvider>Login with Google</GoogleProvider>

      

    </>
  )
}
