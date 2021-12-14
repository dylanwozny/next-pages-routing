import styled from 'styled-components';

const Section = styled.section`
    max-width:480px ;
    margin: 2rem auto 0;
    padding: 2rem;
    border-radius:2px;
    box-shadow:0 0 2px 0px  #c9c9c9;
    background-color: white;

`;
 
 function ContentSection({children, ...props}) {
    return (
        <Section>
            {children}
        </Section>
    )
}

export default ContentSection