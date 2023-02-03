import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="homeScreenContainer">
      <nav>
        <ul>
          <li>User Name</li>
          <NavLink
            style={{ textDecoration: "none", color: "aliceblue" }}
            to={"/"}
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
          <div className="addTodobutton">ADD NEW TODO </div>
        </NavLink>
      </section>
      <section className="ItemLst">
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
