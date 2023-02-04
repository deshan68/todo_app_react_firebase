import { signInWithPopup } from "firebase/auth";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth, googleProvider } from "../firbase/config";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie/es6";
import Home from "./Home";

const cookies = new Cookies();

export default function LogIn({
  setSetAuthId,
  isAuth,
  setIsAuth,
  setSetAuthName,
  authName,
  authId,
}) {
  const navigate = useNavigate();

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Logged");
      cookies.set("auth-token", result.user.refreshToken);
      cookies.set("auth-name", auth?.currentUser?.displayName);
      cookies.set("auth-id", auth?.currentUser?.uid);
      setIsAuth(true);
      setSetAuthName(auth?.currentUser?.displayName);
      setSetAuthId(auth?.currentUser?.uid);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  if (!isAuth || !authName) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        <h1>Login</h1>
        <NavLink onClick={signUpWithGoogle} to={""} className="loginButton">
          <div className="">Using Google Account </div>
        </NavLink>
      </div>
    );
  }
  return (
    <Home
      authId={authId}
      authName={authName}
      isAuth={isAuth}
      setIsAuth={setIsAuth}
    />
  );
}
