import styled from 'styled-components'
 
const PageLayout = styled.div`

    max-width: 460px;
    margin: 3rem auto 0;
    padding: 3rem 2rem;
    background-color: white;
    border:3px;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.125);
    .jim{
        background-color: blue;
    }

    
    
`

const PageHeader = styled.header`
      padding: 2rem 0;
      text-align:center;
`

const PageFooter = styled.footer`
      padding: 2rem 0;
`
const PageBody = styled.main`
       .spacing{
           padding:2rem 0;
       }
    
`

 
 

export {PageLayout, PageHeader, PageFooter, PageBody }

 