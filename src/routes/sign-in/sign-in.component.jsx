import {signInWithGooglePopup, createUserDocFromAuth} from '../../utilities/firebase/firebasae.utility'

const SignIn = () => {
const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    console.log(user)

    createUserDocFromAuth(user)
}

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
