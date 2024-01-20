import {
  signInWIthGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";


const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWIthGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }
    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
        </div>
    )

}

export default SignIn;