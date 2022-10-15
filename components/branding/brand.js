import SvgLogo from "../icons/logo/index";
// importing only the class
import { brand } from "./styles.module.scss";
import styled from "styled-components";

const BannerLogo = styled.header`
    margin: 0 auto 2rem auto;
    text-align: center;
    padding: 2rem 1rem 2rem 1rem;
    background: white;
    svg {
      width: 10rem;
    }

    h1 {
      font-size: clamp(2.3rem, 8vw, 3.441rem);
      font-weight: 600;
    }

    p {
      font-size: 18px;
      font-style: italic;
      margin-bottom: 0rem;

    }
  
`;

function Brand({ title, tagline }) {
  return (
    <>
      <BannerLogo className={brand}>
        <SvgLogo width1="9rem" height1="6rem" />
        <h1>{title || "Brand Text"}</h1>
        <p>{tagline || "Tagline Text"}</p>
      </BannerLogo>
    </>
  );
}

export default Brand;

//next-pages-routing-l1ux06x26-dylanwozny.vercel.app
