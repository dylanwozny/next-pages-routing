import { useState, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase/index";
import firebaseConfig from "../firebase/firebaseConfig";

// MVC
// View = DOM
// Controller = Your controller / observer
// Model = Firebase

function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (clientCredential) => {
      if (clientCredential) {
        setUser(clientCredential);
      } else {
        setUser(null);
      }
    });
  });
  return user;
}

export { useAuth };
