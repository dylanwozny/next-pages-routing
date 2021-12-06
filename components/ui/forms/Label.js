 import styled from 'styled-components';
 
 const FormLabel = styled.label`
      font-size: 14px;
      font-weight: 600;
      margin: 0;
      padding:0 0 0 0.15rem;
   
 `;
 
 
 
 function Label({id, label, ...props}) {
    return (
        <FormLabel htmlFor={id}>{label}</FormLabel>
    )
}

export default Label