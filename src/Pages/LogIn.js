import React from "react";
import { NavLink } from "react-router-dom";

export default function LogIn() {
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
      <NavLink to={"/home"} className="loginButton">
        <div className="">Using Google Account </div>
      </NavLink>
    </div>
  );
}
