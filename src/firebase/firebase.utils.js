import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyAs28gmSf8jsrqk9pyt8kN1ZgNHCuLTV3k",
    authDomain: "clothing-estore-db.firebaseapp.com",
    databaseURL: "https://clothing-estore-db.firebaseio.com",
    projectId: "clothing-estore-db",
    storageBucket: "clothing-estore-db.appspot.com",
    messagingSenderId: "400266044606",
    appId: "1:400266044606:web:128afc75a121fd49b42aef"
  };

  export const createUserProfileDocument = async (userAuth, extraData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...extraData
        })
      }
      catch(error){
        console.log("error creating user", error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);
   
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);



  export default firebase;