import firebase from "../firebase";
import Brand from "../components/branding"
import NavBar from "../components/navbar";
import {Button} from 'components/ui/buttons';
import styled from "styled-components";
import { List, ListItem } from "components/ui/list";
import { UserLogin } from "components/auth/user-login";
import { useAuth } from "hooks/useAuth";
import Link from "next/link";
import {db} from "../firebase";
import{doc,getDoc} from "firebase/firestore"
import { useEffect,useState } from "react";

function useGetDoc(props){
    
    const [userProfile, setUserProfile] = useState(null)
    const [output,setOutPut] = useState('is working')

    useEffect(()=>{
        async function getFirebaseDoc(){
            const refDoc = doc(db,'todoitems','boardMeeting');
            const docData = await getDoc(refDoc);
            console.log(docData.data())
            console.log(docData.exists())
            setUserProfile(docData.data());

        }
        getFirebaseDoc();
    },[])

    return userProfile;

}

export {useGetDoc};