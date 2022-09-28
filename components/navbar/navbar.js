// Router in next.js has a router built in
// Link component from 'next/link'

// Link is a pre built component

import Link from "next/link";
// import { navbar } from "./styles.module.scss";
import { UserLoginStatus } from "components/auth/login-status";
import styled from "styled-components";

const TheNav = styled.nav`
  background-color: ${(props) => props.theme.primaryColor};
  //   border-bottom: solid 2px #214a88;
  filter: drop-shadow(0 0 0.5rem gray);



  ul {
    display: flex;
    justify-content: space-around;
    max-width: 30rem;
    margin: 0 auto;
  }

  li:nth-child(2) {
    border: none;
  }

  li {
    flex: 1;
    border-left: solid white 1px;
    border-right: solid white 1px;
    text-align: center;
  }

  a:hover {
    background-color: ${(props) => props.theme.whiteHighlight};
    color: #22273a;
    text-decoration: none;
  }

  a {
    color: ${(props) => props.theme.whiteHighlight};
    display: block;
    padding: 1rem;
    font-weight: 600;
  }
`;

export default function NavBar(props) {
  return (
    <TheNav>
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
    </TheNav>
  );
}
