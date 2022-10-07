import styled from "styled-components";
import NavBar from "components/navbar";
import PageHeader from "../banner/header";

import Brand from "components/branding";
const SectionHeader = styled.div`
  display: flex;
  gap: 0.5rem;

`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;
//  import {Brand} from 'components/brand'

function ContentSectionHeader({ title, ...props }) {
  return (
    <SectionHeader {...props}>
      <PageHeader title={title} tagline={"review your item below"}></PageHeader>
    </SectionHeader>
  );
}

export default ContentSectionHeader;
