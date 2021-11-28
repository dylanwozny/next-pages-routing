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
      <Brand title="Sign up" tagline="Sign up for the app" />     
    </>
  )
}
