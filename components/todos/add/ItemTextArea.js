import styled from 'styled-components';
const ItemDescription = styled.div`
   textarea{
       resize: none;
       border:none;
       border-radius: 2px;
       box-shadow:0 0 2px 1px  #d0d0d0;
       color:#5a5b66;
       font-size:14px;
       padding: 0.25rem;
       margin-bottom: .5rem;
   }
   input, textarea{
       width:100%;
   }
`; 

// drill down data
 function ItemTextArea ({type,changeHandler,...props}) {

    if(type === "description"){   
    return (
        <ItemDescription {...props}>
            <label htmlFor="description">Description</label>
            <textarea placeholder="Add Your To Do Description Here"
            onChange={(e)=>changeHandler(e)}/>
        </ItemDescription>
    )
    }

    if(type === "category"){
        return (
            <ItemDescription {...props}>
                <label htmlFor="category">Category</label>
                <textarea placeholder="Add Your Category Here"
                onChange={(e)=>changeHandler(e)}/>
            </ItemDescription>
        )
    }
  
    else{
        return(null);
    }
    

}

export default ItemTextArea