import Image from "next/image";
import { ProviderButton } from "../../../ui/buttons/";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../../../../firebase";
import google from "./google.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "../../../../hooks/useAuth";

// Children are the value between <googleprovider>--children--<googleprovider> in the element
function GoogleProvider({ func, children, ...props }) {
  const [isValidUser, setIsValidUser] = useState(null);
  // observer hook
  // if value returned valid user or null
  const user = useAuth();
  // routing pages, this is the built in router
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  // ASYNC is an alternative to .then promise
  async function signIn() {
    try {
      setIsValidUser(await signInWithPopup(auth, provider));
    } catch (error) {
      func(error.message);
    }
  }

  // click function
  function handleClick() {
    signIn();
  }

  if (isValidUser) {
    // Create document for first time user
    let userID = user.uid;
    router.push("/todo");
  }

  return (
    <ProviderButton onClick={handleClick}>
      <div>
        <Image
          src={google}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span>{children}</span>
      </div>
    </ProviderButton>
  );
}

export default GoogleProvider;
