// build the app instance of firebase
import { initializeApp } from '@firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getAuth } from '@firebase/auth'
import firebaseConfig from './firebaseConfig'

const app = initializeApp(firebaseConfig)
const db = getFirestore();
const auth = getAuth();
export {app, db, auth}