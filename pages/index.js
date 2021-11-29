import firebase from "../firebase";
import Brand from "../components/branding"
import NavBar from "../components/navbar";

// <> this is a fragment, use instead of div
export default function Home() {
  console.log(firebase);
  return (
    
    <>
      <NavBar/>
      <Brand title="Dylan's To Do App" tagline="Get it all done !" />     
    </>
  )
}
