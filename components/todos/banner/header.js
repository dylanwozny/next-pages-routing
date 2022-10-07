import styled from "styled-components";

const BannerContainer = styled.header`
  text-align: center;
  margin: 3rem 0rem 4.5rem 0rem;
  h1 {
    font-weight: 600;
    font-size: clamp(2.3rem, 8vw, 3.441rem);
  }

  p {
    font-style: italic;
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
