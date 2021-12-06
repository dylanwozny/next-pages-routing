// Router in next.js has a router built in
// Link component from 'next/link'

// Link is a pre built component

import Link from 'next/link';
import {navbar} from "./styles.module.scss";

function NavBar(props){
return(
    <nav className={navbar}>
        <ul>
            <li>
                
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/login">
                    <a>Login</a>
                </Link>                
            </li>
            <li>
                <Link href="/signup">
                    <a>Signup</a>
                </Link>   
            </li>            
            <li>
                <Link href="/signup">
                    <p>logged in</p>
                </Link>   
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;