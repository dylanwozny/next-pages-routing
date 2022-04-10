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
import { render } from "react-dom";


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


.delete-message{
    font-size: 3rem;
    text-align: center;
    margin-top: 15rem;
    color: #fcfcfc;
    width: 100%;
    background-color: #22273a;
}


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


function List({theFlag,flag,todoSet,userId,refreshPage,theCount,...todoItem}) {

    // Delete in progress popup
    let theDeletePopup = document.querySelector(".delete-popup");
    
    
    console.log("this is the toitemsetter " + todoSet);
    // grabbing the uuid key of each doc
    let docKeys = Object.getOwnPropertyNames(todoItem);
    console.log(docKeys);


    // Rerender on delete logic 
    const deleteObject = () => {
        if(theFlag > 1){
            flag(1);
            console.log(theFlag);
        }
        
        else {
            flag(2);
            console.log(theFlag);
        }

    }
    
    

    // set object state of item list
    const [objectKeys,updateKeys] = useState({});
    const [books, updateBooks] = useState([]);
    const handleClick = () => {

        // update the books state property by adding a new book
 
        updateBooks([...books, { name: 'A new Book', id: '...'}]);
    }


    function updateObjectState(){
        setTodoItem();

    }

    // DELETE FIREBASE DOCUMENT
    function deleteHandleSubmit(e,propKey){
    e.preventDefault();
    let theKey = propKey;
    let theClass = "popup" + theKey.toString();
    let theElement = document.querySelector("." + theClass);
    theElement.classList.remove("show");
    console.log(theElement);    
    console.log("delete item confirmed");
    console.log(theKey)
    // RUN QUERY HERE AND REFRESH LIST
    async function deleteFireBaseDoc(key){
        let docPath = `/todos/${userId.uid}`;
        const docRef = await doc(db, docPath)
        const remove = await updateDoc(docRef,{
            [key]: deleteField()
        })
     
    }
    //delete from db
    deleteFireBaseDoc(theKey); 
    
    theDeletePopup.classList.add("show");
    
    setTimeout(() => {
        
        console.log("timeout now");
        theDeletePopup.classList.remove("show");
        //change flag forstate change and rerender
        deleteObject();        
    }, 1000);
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

        // let setSession = window.sessionStorage.setItem("animals","cat");


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
                        <ListEdit  itemId={theKey}  color="orange"/>
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
            <PopUp className="delete-popup">
                    <p className="delete-message">
                        Deleting Item. Please Wait.
                    </p>
            </PopUp>
            {mapItems}
        </ListContainer>

    )

}

export default List;