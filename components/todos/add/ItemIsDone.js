import styled from 'styled-components';
const IsDone = styled.div`



`; 

// drill down data
 function ItemIsDone ({changeHandler,...props}) {

// ADD COMPONENT TO NEW ITEM INDEX   

    return (
        <IsDone {...props}>
            <label htmlFor="isdone">Is this Item Done ?</label>
            <input type="radio" id="html" name="isdone" value="HTML"
            onChange={(e)=>changeHandler(e)}></input>
        </IsDone>
    )
      
}

export default ItemIsDone;