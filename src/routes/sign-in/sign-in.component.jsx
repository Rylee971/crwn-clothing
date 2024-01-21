import {
  signInWIthGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";


const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWIthGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }
    
    return (
      <div>
        <h1>Sign in Page</h1>
        <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignUpForm/>
        </div>
    );

}

export default SignIn;