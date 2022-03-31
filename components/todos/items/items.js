import { ListContainer, ListItem, ListTitle,ListControl, ListHeader, ListDone,ListBody } from "./styles";
// import { ListControl } from "./ListControl";
import { Children } from "react/cjs/react.production.min";
import {db} from "/firebase";
import { FiTrash2 } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import ListDelete from "./ListDelete";
import ListEdit from "./ListEdit";
import { useEffect, useRef,  } from "react/cjs/react.production.min";
import { useState } from "react";
import styled  from "styled-components";
import { Button } from "components/ui/buttons";
import Link from "next/link";
import { clearIndexedDbPersistence, deleteDoc, deleteField, doc, updateDoc,update } from "firebase/firestore";

const name = styled.li`
`;

export {name};

const PopUp = styled.div`

position: absolute !important;
top: -9999px !important;
left: -9999px !important;
background-color: gray;
height: 100vh;
width: 100vw;
background-color: rgba(200, 200, 200,0.8);
padding-top: 10rem;




h3{
    text-align: center;
    margin-bottom: 3rem;
}

&.show{
    position:  fixed !important;
    top: 0px !important;
    left: 0px !important;
    width: 100%;

}

div{
    background-color:#fcfcfc;
    max-width: 30rem;
    margin: 0 auto;
    opacity: 1;
    padding: 5rem 1rem;
}

`;

const DeleteButton = styled(Button)`
border: 2px solid red;
color: red;

&:hover{
 background-color: red;
}

`;


const CancelButton = styled(Button)`
`;


// ---- delete item produces a popup window, code will be here ?
// grab id, pass it into something with a button press
// on button press, have a pop up window, then run query to delete item.


function List({userId,...todoItem}) {

    console.log(userId);
    // grabbing the uuid key of each doc
    let docKeys = Object.getOwnPropertyNames(todoItem);

    const [showWindow, setShowWindow] = useState('');
    // const [ItemKey, setItemKey] = useState('');

    // DELETE FIREBASE DOCUMENT
    function deleteHandleSubmit(e,propKey){
    e.preventDefault();
    let theKey = propKey;
    let theClass = "popup" + theKey.toString();
    let theElement = document.querySelector("." + theClass);
    theElement.classList.remove("show");
    console.log(theElement);    
    console.log("delete item");
    console.log(theKey)
    // RUN QUERY HERE AND REFRESH LIST
    async function deleteFireBaseDoc(key){
        let docPath = `/todos/${userId.uid}`;
        const docRef = await doc(db, docPath)
        const remove = await updateDoc(docRef,{
            [key]: deleteField()
        })
        
    }
    deleteFireBaseDoc(theKey);
    }   


 
    function cancelHandleSubmit(e,propKey){
    e.preventDefault();
    let theKey = propKey;
    theKey = "popup" + theKey.toString();
    let theElement = document.querySelector("." + theKey);
    theElement.classList.remove("show");
    console.log(theElement);    
    console.log("cancel item");
    console.log(theKey)
    }

     //delete item logic
    // query select body element and gray out body when selected
    // pass the item id to the the delete window
    function deleteItemSubmit(e,propKey){
        e.preventDefault();
        let theKey = propKey;
        let theUid = theKey;
        theKey = "popup" + theKey.toString();
        let theElement = document.querySelector("." + theKey);
        theElement.classList.add("show");       
        console.log(theUid);    
        console.log("delete item");
        console.log(keyArray);
        

    }
    // Might have to put delete confirm here

    // map to make items
    // loop

    let keyArray = [];

    function testClick(e){
        e.preventDefault()
        console.log("test click on");

    }


    const mapItems = docKeys.map((data,index) => {

        let theKey = todoItem[data].id;

        
        keyArray.push(theKey);
        

        
        // is done logic
        let isDone ="";
        let isDoneClass= "";
        let isDoneBody ="";
        // GRAB UID TO PASS TO DELETE FUNCTION HERE
        // UPDATE DATA PERSISTANCE
 


        if( todoItem[data].completed === true){
            isDone = "Done";
            isDoneClass = "done";
            isDoneBody = "done-body";
        }
        else{
            isDone = "In progress";
            isDoneClass = "inprogress";
            isDoneBody = "";
        }




        // FIX STYLING ON COMPONENTS
        // use the key value to delete the item and then refresh the list

        // REWORK BUTTONS !!!
        // use Props passed components or just JSX HTML

    
        return(
            <>
                <ListItem  key={index}  className={isDoneBody}>
                
                    
                    <div> 
                        {/* PUT Delete Button Here*/}
                        <PopUp className={"popup" + theKey}>  
                        <div>                     
                            <h3 > Are you sure you want to delete this item ? {index}</h3>
                            {/* key is a hidden property */}
                            <CancelButton  onClick={(e) => cancelHandleSubmit(e,theKey)}>Cancel</CancelButton> 
                            <DeleteButton  onClick={(e) => deleteHandleSubmit(e,theKey)}>Delete</DeleteButton>     
                        </div>                
                        </PopUp>
                    </div>

                                  
                    
                    <ListHeader>
                        <ListTitle>{todoItem[data].category}</ListTitle>
                        <ListEdit color="orange"/>
                        <ListDelete color="red" clickHandler={(e) => deleteItemSubmit(e,theKey)}></ListDelete>                        
                    </ListHeader>
                    <ListBody>
                        <ListDone className={isDoneClass}>
                            {isDone}
                        </ListDone>
                    <li>{todoItem[data].desc}</li>
                    </ListBody>
                </ListItem>
            </>                            
        )
    })

    
    return (
        <ListContainer>
            {mapItems}
        </ListContainer>

    )
}

export default List;