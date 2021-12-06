import styled from 'styled-components';

const FormControl = styled.div`
   margin-bottom: 1rem;
`;

 
import Label from "./Label" 
import Input from "./Input"
 
 function TextInput({id, label, ...props}) {
    return (
        <FormControl>
            <Label id={id} label={label} {...props}/> 
            <Input {...props}/> 
        </FormControl>
    )
}

export default TextInput