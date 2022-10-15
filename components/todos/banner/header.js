import styled from "styled-components";

const BannerContainer = styled.header`
  text-align: center;
  background: white;
  padding: 2rem 0rem 2rem 0rem;
  margin-bottom: 2rem;
  h1 {
    font-weight: 600;
    font-size: clamp(2.3rem, 8vw, 3.441rem);
    margin-bottom: 0rem;
  }

  p {
    font-style: italic;
    margin-bottom: 0rem;
  }
`;

function PageHeader({ title, tagline }) {
  return (
    <BannerContainer>
      <h1>{title || "Brand Text"}</h1>
      <p>{tagline || "tagline here"}</p>
    </BannerContainer>
  );
}

export default PageHeader;
