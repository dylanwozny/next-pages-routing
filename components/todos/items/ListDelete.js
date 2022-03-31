import styled from 'styled-components';
import { SvgButton } from 'components/ui/buttons';
import { FiTrash2 } from "react-icons/fi";

const DeleteButton = styled(SvgButton)`

`;



function ListDelete(props){
return(
  
  <DeleteButton userColor={props.color} onClick={(e)=> props.clickHandler(e)}>
    <span className="item-small"><FiTrash2/></span>
  </DeleteButton>

  )
}

export default ListDelete;