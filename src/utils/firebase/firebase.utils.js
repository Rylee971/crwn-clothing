import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyArDRM1Hx0-uHJ28i-rNt93nnU-zbgaJ9I",
    authDomain: "crwn-db-83cdf.firebaseapp.com",
    projectId: "crwn-db-83cdf",
    storageBucket: "crwn-db-83cdf.appspot.com",
    messagingSenderId: "117136474665",
    appId: "1:117136474665:web:8a875e9e54d328a43c9238"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWIthGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }

    }

    return userDocRef;
}