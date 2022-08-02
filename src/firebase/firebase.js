import firebaseInitialize from "./firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
firebaseInitialize();

const firebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const loggingWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            });
    };
    return {
        loggingWithGoogle
    };
};
export default firebase;