import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { db } from "../firbase/config";

export default function UpdateTodo({}) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const naviagte = useNavigate();
  const location = useLocation();

  const updatetitle = async () => {
    const movieDoc = doc(db, "todos", location.state);
    await updateDoc(movieDoc, {
      title: todoTitle,
      description: todoDescription,
    });
    naviagte("/home");
  };

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
        <h1>Update Todo</h1>
        <input
          required
          type="text"
          placeholder="Enter Title"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Enter Description"
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <NavLink
          onClick={updatetitle}
          role={"button"}
          to={""}
          className="saveButton"
        >
          <div className="saveButton">Update </div>
        </NavLink>
      </div>
    </div>
  );
}
