import { signOut } from "firebase/auth";
import React from "react";
import "./profilepage.css";
const ProfilePage = (props) => {
  if (props) {
    console.log(props);
  }

  const signout = () => {
    signOut(props.auth)
      .then(() => {
        console.log("signOut sucessful");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {props && props.user && (
        <div className="tempWrapper">
          <div className="ProfileCard">
            <img
              className="ProfileImage"
              alt="Profile Picture"
              src={props.user.photoURL}
            />
            <h2 className="DisplayName">{props.user.displayName}</h2>
            <p className="UserEmail">{props.user.email}</p>
            <div className="LogoutContainer">
              <button onClick={signout} className="SignOutButton">
                <p className="LogOutText">LOGOUT</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
