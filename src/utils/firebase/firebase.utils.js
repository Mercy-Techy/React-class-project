// this is to connect the firebase app to ur laptop

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// getDoc is for geting data of a doc while setDoc is for setting data of a doc

const firebaseConfig = {
  apiKey: "AIzaSyC1r4b6_i1Sj0slmehpEdz7n73bw4Q76zs",
  authDomain: "crown-clothing-db-d0877.firebaseapp.com",
  projectId: "crown-clothing-db-d0877",
  storageBucket: "crown-clothing-db-d0877.appspot.com",
  messagingSenderId: "323144779922",
  appId: "1:323144779922:web:49431aa14390f8ba4d7e4b",
};

const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        createdAt,
        email,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userDocRef;
};

// // GoogleAuthProvider is just one of the many providers there is also facebook and github so there are many
// // so provider can either be facebook or even github that is why you can have multiple signInWithPopup with different providers i.e is
// import {FacebookAuthProvider,GithubAuthProvider} from 'firebase/auth'
// const fProvider = new FacebookAuthProvider()
// const gProvider = new GithubAuthProvider()
// export const signInWithFacebookPopup = ()=>signInWithPopup(auth,fProvider)
// export const signInWithGithubPopup = ()=>signInWithPopup(auth,gProvider)
// // so when you put all of them in a button it will be showing different popup
