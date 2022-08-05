import firebaseInitialize from "./firebase.init";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
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
    };
    const loginWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            });
    };
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((useCredential) => {
                const user = useCredential.user;
            });
    };
    return {
        loggingWithGoogle, loginWithFacebook, createUser

    };
};
export default firebase;