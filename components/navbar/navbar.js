// Router in next.js has a router built in
// Link component from 'next/link'

// Link is a pre built component

import Link from "next/link";
import { navbar } from "./styles.module.scss";
import { UserLoginStatus } from "components/auth/login-status";

function NavBar(props) {
  return (
    <nav className={navbar}>
      <ul>
        <li>
          <Link href="/todo">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <UserLoginStatus></UserLoginStatus>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
