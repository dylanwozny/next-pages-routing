// external data import
import { useState, useContext,useEffect,useReducer,useRef} from "react";
import useSWR from "swr";
import firebase from "../firebase";
import Brand from "../components/branding"
import NavBar from "../components/navbar";
import {Button} from 'components/ui/buttons';
import styled from "styled-components";
import { List, ListItem } from "components/ui/list";
import { useRouter } from "next/router";


// HOOK is a reusable function


const Wrapper = styled.div``;


const fetcher = (...args) => fetch(...args).then(res => res.json())

// 
 function toDo(props) {
  //  react function
   const [isValidUser, setValidUser] = useState(false);
  //  setting router
  const router = useRouter();

   function onRequestSignIn (){
     setValidUser(true);
   }

   if(isValidUser){
     router.push('http://www.apple.com');

   }


  return (
      <Wrapper>

          <Button onClick={onRequestSignIn}>Counting</Button>
      </Wrapper>
    )
}

export default toDo;