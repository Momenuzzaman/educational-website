import firebaseInitialize from "./firebase.init";
import {
    GoogleAuthProvider, signInWithPopup,
    createUserWithEmailAndPassword, signOut,
    signInWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged,
    sendPasswordResetEmail
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialize();

function Firebase() {
    const [user, setUser] = useState({});
    const [Error, setError] = useState('');
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
                emailVerification();
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
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [auth]);
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser).then(() => {
            console.log('emailVerification');
        });
    };
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('reset password');
            });
    };
    return {
        loggingWithGoogle, createNewUser, logInWithEmail, Error, logOut, user, resetPassword
    };
}
export default Firebase;