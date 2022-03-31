import styled from 'styled-components';
import { SvgButton } from 'components/ui/buttons';
import { FiEdit2 } from "react-icons/fi";

const EditButton = styled(SvgButton)`

`;



function ListEdit(props){
return(

  <EditButton userColor={props.color}>
     <span className="item-small"><FiEdit2/></span>
  </EditButton>

  )
}

export default ListEdit;