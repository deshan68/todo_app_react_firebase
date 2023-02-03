import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function AddTodo() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="addtodoContainer">
        <h1>Add A Todo</h1>
        <input type="text" placeholder="Enter Title" />
        <input type="text" placeholder="Enter Description" />
        <NavLink to={"/home"} className="saveButton">
          <div className="saveButton">Save </div>
        </NavLink>
      </div>
    </div>
  );
}
