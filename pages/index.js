import firebase from "../firebase";
import Brand from "../components/branding";
import NavBar from "../components/navbar";
import { Button, ProviderButton } from "components/ui/buttons";
import styled from "styled-components";
import { List, ListItem } from "components/ui/list";
import { UserLogin } from "components/auth/user-login";
import GoogleProvider from "../components/auth/providers/google/GoogleProvider";
import GithubAuthProvider from "../components/auth/providers/github/GitHubProvider";
import { PageLayout, LoginHeader } from "layouts/home-page/styles";
import { useState } from "react";

const ErrorWrapper = styled.div``;

const ErrorMessage = styled.div`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-style: italic;

  color: red;
  margin-bottom: 2rem;

  .show {
    display: block;
    transform: 1s;
    text-transform: capitalize;
  }
`;

// <> this is a fragment, use instead of div
export default function Home() {
  // provider error message

  const [Mess, setMess] = useState("");

  let erMessage = "";
  const errorProvider = (message) => {
    setMess(message);
  };

  return (
    <>
      <NavBar />

      <Brand title="Dylan's To Do App" tagline="Get it all done !" />

      <PageLayout>
        <LoginHeader padding="2rem">Provider Login</LoginHeader>
        <GoogleProvider func={errorProvider}>Login with Google</GoogleProvider>
        <ErrorMessage>{Mess}</ErrorMessage>
      </PageLayout>
      <LoginHeader padding="2rem 0rem 0rem 0rem">Email Login</LoginHeader>
      <UserLogin></UserLogin>
    </>
  );
}
