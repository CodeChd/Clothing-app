import {
   signInWithGooglePopup,
   createUserDocFromAuth, } 
   from '../../utilities/firebase/firebasae.utility'

   import SignUpForm from '../../components/sign-up/sign-up-form';


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
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
