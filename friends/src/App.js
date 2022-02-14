import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import SignIn from "./components/Signin/SignIn";
import ProfilePage from "./components/Userpage/ProfilePage";

const app = initializeApp({
  apiKey: "AIzaSyBIjwy70g_BVmO8T3d4BzVl3JioIPVHqeo",
  authDomain: "friends-7d1d0.firebaseapp.com",
  projectId: "friends-7d1d0",
  storageBucket: "friends-7d1d0.appspot.com",
  messagingSenderId: "357397795811",
  appId: "1:357397795811:web:2b9e337a9f19adfd8b06d6",
  measurementId: "G-X2BRRM8TZ1",
});

const db = getFirestore(app);
const auth = getAuth(app);

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {!user ? (
        <>
          <SignIn auth={auth} />
        </>
      ) : (
        <>
          <ProfilePage auth={auth} user={user} />
        </>
      )}
    </div>
  );
}

export function SignOut() {
  const signout = () => {
    signOut(auth)
      .then(() => {
        console.log("signOut sucessful");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button onClick={signout}>SIGN OUT</button>
    </div>
  );
}
export default App;
