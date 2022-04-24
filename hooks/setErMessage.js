import { useState, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase/index";
import firebaseConfig from "../firebase/firebaseConfig";

// MVC
// View = DOM
// Controller = Your controller / observer
// Model = Firebase

function createErrorMessage(themessage, ...props) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(themessage);
  });
  return message;
}

export { createErrorMessage };
