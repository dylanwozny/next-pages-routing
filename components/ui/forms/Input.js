import styled from 'styled-components';

const FormInput = styled.input`
    width:100%;  
    border:none;
    border-radius:3px;
    box-shadow:0 0 2px 1px rgba(0,0,0,0.125);
    background-color: "transparent";
    padding: 0.25rem 0.5rem;
`;
 function Input(props) {
    return (
      <FormInput {...props}/>
    )
}

export default Input