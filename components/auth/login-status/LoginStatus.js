import { useAuth } from "hooks/useAuth";
import { useRouter } from "next/router";
import { auth } from "../../../firebase/";
import { signOut } from "@firebase/auth";
import { IoPersonCircleSharp } from "react-icons/io5";
import { LoginStatus } from "./styles";

function UserLoginStatus({ size, color, status, ...props }) {
  // conditional render
  const user = useAuth();
  const router = useRouter();

  // logout click handler, go to home page
  function handleClick() {
    signOut(auth).then(() => {
      router.push("/");
    });
  }

  if (user) {
    let userEmail = user.email;
    return (
      <LoginStatus {...props} onClick={handleClick}>
        <IoPersonCircleSharp size={size || "2.5rem"} color="green" />
        <figcaption>
          <p>{userEmail}</p>
          <p>Log Out</p>
        </figcaption>
      </LoginStatus>
    );
  }

  return (
    <LoginStatus>
      <IoPersonCircleSharp size={size || "2.5rem"} color="red" />
      <figcaption>
        <p>Status</p>
        <p>please login</p>
      </figcaption>
    </LoginStatus>
  );
}

export default UserLoginStatus;
