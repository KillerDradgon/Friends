import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import "./signin.css";

const SignIn = (props) => {
  console.log("HELLO");
  const signin = async () => {
    // Signing in with Google
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(props.auth, provider);
  };
  return (
    <div className="SignInHighlight">
      <div className="SignInWrapper">
        <div className="SigninCard">
          <button className="SignInButton" onClick={signin}>
            <p className="SigninText"> Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
