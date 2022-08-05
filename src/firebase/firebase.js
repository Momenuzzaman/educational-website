import firebaseInitialize from "./firebase.init";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";

firebaseInitialize();

function Firebase() {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const loggingWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    };
    const createNewUser = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
            });
    };
    const logInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
            });
    };
    return {
        loggingWithGoogle, createNewUser
    };
}
export default Firebase;