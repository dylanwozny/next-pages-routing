import styled from 'styled-components';
import NavBar from 'components/navbar';

import Brand from 'components/branding';
const SectionHeader = styled.header`
       display:flex;
       gap:0.5rem;
       h1{
           font-size: ${props => props.size || "1rem"};;
           font-weight:bold;
       };
`

const Title = styled.h1`
    font-size:2rem;
    font-weight:bold;
`
//  import {Brand} from 'components/brand'
 
 function ContentSectionHeader ({title, ...props}) {
    return (

        <SectionHeader {...props}>
          <Brand title={title} tagline={"review your item below"} { ...props}/>
          {/* <Title {...props}>{title || "Content Section Title"}</Title> */}
        </SectionHeader>
    )
}

export default ContentSectionHeader 