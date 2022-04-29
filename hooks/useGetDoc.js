import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

// hooks are re-usable code

function useGetDoc(props) {
  const [userProfile, setUserProfile] = useState(null);
  const [output, setOutPut] = useState("is working");

  useEffect(() => {
    async function getFirebaseDoc() {
      const refDoc = doc(db, "todoitems", "boardMeeting");
      const docData = await getDoc(refDoc);
      setUserProfile(docData.data());
    }
    getFirebaseDoc();
  }, []);

  return userProfile;
}

export { useGetDoc };
