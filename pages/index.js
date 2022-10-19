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

const LoginBanner = styled.p`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
`;

const OrDiv = styled.div`
  display: flex;
  align-items: center;
  max-width: 31rem;
  margin: 0 auto;
  padding: 0rem 0.5rem;
  span {
    flex: 1;
    border-bottom: 1px solid #999cb2;
  }

  p {
    margin: 1rem 1rem;
  }
`;

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

      <Brand title="Dylan's To-Do App" tagline="Get it all done !" />

      <PageLayout>
        {/* <LoginHeader padding="2rem">Provider Login</LoginHeader> */}
        <GoogleProvider func={errorProvider}>Login with Google</GoogleProvider>
        <ErrorMessage>{Mess}</ErrorMessage>
      </PageLayout>
      <OrDiv>
        <span></span>
        <p>Or</p>
        <span></span>
      </OrDiv>
      <LoginHeader padding="2rem 0rem 0rem 0rem">
        Email Login / Sign-Up
      </LoginHeader>
      <LoginBanner>
        {" "}
        Not a user ? fill in the email and password boxes, then hit sign up to
        get started.
      </LoginBanner>

      <UserLogin></UserLogin>
    </>
  );
}
