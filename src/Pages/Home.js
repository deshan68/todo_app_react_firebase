import { getAuth, signInWithRedirect, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firbase/config";
import Cookies from "universal-cookie";

export default function Home({ disName, setIsAuth, authName }) {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const logOutHandler = async () => {
    try {
      await signOut(auth);
      cookies.remove("auth-token");
      cookies.remove("auth-name");
      setIsAuth(false);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="homeScreenContainer">
      <nav>
        <ul>
          <li>{authName}</li>
          <NavLink
            style={{ textDecoration: "none", color: "aliceblue" }}
            to={""}
            onClick={logOutHandler}
          >
            <li>Sign Out</li>
          </NavLink>
        </ul>
      </nav>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NavLink to={"/addtodo"} className="addTodobutton">
          <div>ADD NEW TODO </div>
        </NavLink>
      </section>
      <section className="ItemLst">
        <div className="todoItem">
          <div className="todoInfo">
            <h2>Titile :{" This is a titile"}</h2>
            <h4>
              Description :
              {" Lorem Ipsum is simply dummy text of the printing a... "}
            </h4>
            <h4>Date :{" 2023 02 03"}</h4>
          </div>
          <div className="todoButtonsdiv">
            <div className="todoButtons delete">Delete</div>
            <div className="todoButtons edit">Edit</div>
            <div className="todoButtons markAsDone">Mark As Done</div>
          </div>
        </div>
        <div className="todoItem">
          <div className="todoInfo">
            <h2>Titile :</h2>
            <h4>Description :</h4>
            <h4>Date :</h4>
          </div>
          <div className="todoButtonsdiv">
            <div className="todoButtons delete">Delete</div>
            <div className="todoButtons edit">Edit</div>
            <div className="todoButtons markAsDone">Mark As Done</div>
          </div>
        </div>
      </section>
    </div>
  );
}
