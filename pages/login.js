// module uuid

// Nextjs Modules

// components
import Brand from "../components/branding";
import NavBar from "../components/navbar";

// <> this is a fragment, use instead of div
export default function Home() {
  return (
    
    <>
      <NavBar/>
      <Brand title="App Login" tagline="Login to firebase" />     
    </>
  )
}
