import styled  from "styled-components";
import { Button } from "components/ui/buttons";
import Link from "next/link";



const PopUp = styled.div`
max-width: 30rem;
margin: 0 auto;
margin-right: .5rem;
padding: 1rem;
position: fixed;
top: 10rem;
background-color: #fcfcfc;
box-shadow: 0 0 2px 0px #dddddd;
padding: 10rem 1rem;
display: none;


h3{
    text-align: center;
    margin-bottom: 3rem;
}

&.show{
    display: block;

}

div{
    background-color: gray;
    height: 100vh;
    width: 100vw;
    display: fixed;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: .1;
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



// BUTTON LOGIC

// delete: grab id and run delete query and swap display a message saying the delete was complete

// cancel: set popup to display none and un-gray background

function DeleteWindow(props){


return(

    <PopUp className={props.cssClass}>
        <div></div>
        <h3>Are you sure you want to delete this item ?</h3>
    {/* run delete query when pressed */}
    {/* unique id need to be passed as part of delete function */}
        <DeleteButton>Delete Item</DeleteButton>
        
    {/* set display to none and query select body and stop the gray out */}
        <CancelButton onClick={(e) => props.cancelSubmitHandler(e)}> Cancel</CancelButton>
    </PopUp>
 
  )
}

export default DeleteWindow;