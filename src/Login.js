import { LinkedIn } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./login.css";
function Login() {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.DisplayName,
            photoUrl: userAuth.user.photoUrl,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  const register = () => {
    if (!name) {
      return alert("please enter a full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)

      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <div className="logo">
        <h1>Linked</h1>
        <LinkedIn className="logo__in" />
      </div>
      <form>
        <input
          type="text"
          placeholder="full name required if registering!"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="text"
          placeholder="Profile pic url (optional )"
          onChange={(e) => {
            setProfilePic(e.target.value);
          }}
          value={profilePic}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button type="submit" onClick={loginToApp}>
          sign in
        </button>
      </form>
      <p>
        not a member? {` `}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
