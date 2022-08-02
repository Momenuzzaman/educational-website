import firebaseInitialize from "./firebase.init";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
firebaseInitialize();

const firebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    const loggingWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
        const loginWithFacebook = () => {
        };
    };
    return {
        loggingWithGoogle
    };
};
export default firebase;