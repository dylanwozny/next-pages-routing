import Logo  from "../logo";
// importing only the class
import {brand} from './styles.module.scss'


function Brand({title,tagline}){
return(
    <header className={brand}>
        <Logo/>
        <h1>{title || "Brand Text"}</h1>
        <p>{tagline || "Tagline Text"}</p>
    </header>
  )
}

export default Brand;