import styled from 'styled-components';
const IsDone = styled.div`

label{
    margin-right: 1rem;
}



`; 

// drill down data
 function ItemIsDone ({value,changeHandler,...props}) {

// ADD COMPONENT TO NEW ITEM INDEX   

    return (
        <IsDone {...props}>
            <label htmlFor="isdone">Is this Item Done:</label>
            <input type="checkbox" id="html" name="isdone"
            defaultChecked={value}
            onChange={(e)=>changeHandler(e)}></input>
        </IsDone>
    )
      
}

export default ItemIsDone;