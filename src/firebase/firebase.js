import firebaseInitialize from "./firebase.init";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";

firebaseInitialize();

function Firebase() {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
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
                setError(errorMessage);
            });
    };
    const createNewUser = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };
    const logInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };
    return {
        loggingWithGoogle, createNewUser, logInWithEmail, error
    };
}
export default Firebase;