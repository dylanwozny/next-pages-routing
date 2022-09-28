import SvgLogo  from "../icons/logo/index";
// importing only the class
import {brand} from './styles.module.scss'


function Brand({title,tagline}){
return(
    <header className={brand}>
        <SvgLogo width1="9rem" height1="6rem" />
        <h1>{title || "Brand Text"}</h1>
        <p>{tagline || "Tagline Text"}</p>
    </header>
  )
}

export default Brand;

//next-pages-routing-l1ux06x26-dylanwozny.vercel.app