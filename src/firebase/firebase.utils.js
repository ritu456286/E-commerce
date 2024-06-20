import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCfHlggrI7FXkqkdLC6okPOhPtSUV1dzaE",
  authDomain: "crwn-db-1a6d9.firebaseapp.com",
  projectId: "crwn-db-1a6d9",
  storageBucket: "crwn-db-1a6d9.appspot.com",
  messagingSenderId: "866362809121",
  appId: "1:866362809121:web:9d96c340f77f3c2ca07c60",
  measurementId: "G-6V7CPEJG1Q"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return;

  const userDocRef = doc(db, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userDocRef);

  if(!snapShot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try{
        await setDoc(userDocRef, {
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
          console.log("Error writing document", error);
      }
  }

  return userDocRef;

}


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getFirestore(app);

export { db };

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then(result => {
    // Handle result here
    console.log(result);
  })
  .catch(error => {
    // Handle errors here
    console.error("Error during sign in:", error);
  });

export { onSnapshot };

