// external data import
import { useState, useContext,useEffect,useReducer,useRef} from "react";
import useSWR from "swr";
import firebase from "../firebase";
import Brand from "../components/branding"
import NavBar from "../components/navbar";
import {Button} from 'components/ui/buttons';
import styled from "styled-components";
import { List, ListItem } from "components/ui/list";

const Wrapper = styled.div``;


const fetcher = (...args) => fetch(...args).then(res => res.json())

// <> this is a fragment, use instead of div
 function toDo(props) {

    // accessing external data
  const fetcher = (...args) => fetch(...args).then(res=> res.json())
  function onHandleClick (){
    console.log("event trigger");
  }
  return (
      <Wrapper>
          <List> 
            <ListItem>
            </ListItem>                 
          </List>
          {/* you can also pass functions into other components just add it to props
          do not define functions in components 
          functionlity and data can be passed down through components
          nov 22 1:20*/}
          <Button onClick={onHandleClick}>Adding Data</Button>
          <Button onClick={onHandleClick}>Counting</Button>
          <p></p>
      </Wrapper>
    )
}

export default toDo;