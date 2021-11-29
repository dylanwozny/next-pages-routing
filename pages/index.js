import firebase from "../firebase";
import Brand from "../components/branding"
import NavBar from "../components/navbar";
import {Button} from 'components/ui/buttons';


// <> this is a fragment, use instead of div
export default function Home() {

  return (
    
    <>
      <NavBar/>
      <Brand title="Dylan's To Do App" tagline="Get it all done !" />    
        <Button>
          Login in to Firebase
        </Button>
      

    </>
  )
}
