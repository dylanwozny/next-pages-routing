// diffrent button styles here

import styled from "styled-components";

// with {props} you can add styles from anywhere !
// not clear rule ! You can do another way.
const Button = styled.button`
padding: 1rem 2rem;
color: #65ade5;
background-color: transparent;
border: 2px #65ade5 solid;
border-radius: 4px;
display: block;
margin: 0 auto;
font-family: "Open Sans",sans-serif;
font-weight: 600;
margin-bottom: 1rem;

&:hover{
    background-color: gray;
    cursor: pointer;
    background-color: #65ade5;
    color: white;
}

`

const ProviderButton = styled(Button)`
border: none;
color: #22273a; 
box-shadow: 2px 2px 2px 2px gray;
display: flex;
justify-content: center;
align-items: center;

&:hover{
    background-color: gray;
    cursor: pointer;
    color: white;
}

span{
    padding-left: 1rem;
}


`

export {Button, ProviderButton};