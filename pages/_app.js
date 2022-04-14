import GlobalStyles from "../styles/globalCss"
import { AppWrapper } from "context/state"
import { useState } from "react"
import { ToDoProvider } from "context/state";

export default function App({ Component, pageProps }) {

   const [itemData,setItemData] = useState({});
  return (
    <ToDoProvider>
    <>
        <GlobalStyles/>
        <Component {...pageProps} />
              
    </>
    </ToDoProvider>
  )
}