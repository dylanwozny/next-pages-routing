import styled from 'styled-components';
import { SvgButton } from 'components/ui/buttons';

const AddContainer = styled.div`
display: flex;
justify-content:space-between;

box-shadow: 0 0 2px 0px #dddddd;
background-color: #fcfcfc;
margin-bottom: 2rem;
max-width: 18rem;
padding: 1rem;
border: solid 2px #65ade5;
color: #65ade5;
align-items: center;
border-radius: 5px;

&:hover{
    background-color: #65ade5;
    cursor: pointer;
    color: white;
}
`;

const AddTitle = styled.h2`
font-weight: 100;
margin: 0;
`;

const AddButton = styled(SvgButton)`
`;

export {AddContainer,AddTitle,AddButton};