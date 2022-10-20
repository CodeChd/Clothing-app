import {initializeApp} from 'firebase/app'
import {
     getAuth,
     signInWithRedirect, 
     signInWithPopup,
      GoogleAuthProvider
    } from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTQlZTHyQg4ZFskl3SJz5gvsgJk5Z70Ss",
    authDomain: "ecommerce-clothing-db-5ae4d.firebaseapp.com",
    projectId: "ecommerce-clothing-db-5ae4d",
    storageBucket: "ecommerce-clothing-db-5ae4d.appspot.com",
    messagingSenderId: "818213181778",
    appId: "1:818213181778:web:c771a686cace6c6ba3428b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: 'select_account'
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup    (auth, provider)

export const db = getFirestore()

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try{
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
          })
      }catch (error){
        console.log('error creating the user', error.message)
      }
    }

    return userDocRef
}