import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC_4Z-vLd1TsdQ9_UDDV8AMuQK1n_PqMkY",
    authDomain: "crwn-db-447a3.firebaseapp.com",
    databaseURL: "https://crwn-db-447a3.firebaseio.com",
    projectId: "crwn-db-447a3",
    storageBucket: "crwn-db-447a3.appspot.com",
    messagingSenderId: "691304123144",
    appId: "1:691304123144:web:801c2079869a8124bffabd",
    measurementId: "G-XXZGXHP5MY"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log("error ucreating user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google auth utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;