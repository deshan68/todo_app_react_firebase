import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Spinner } from "react-activity";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { db } from "../firbase/config";

export default function UpdateTodo({}) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [isIndicating, setIsIndicating] = useState(false);

  const naviagte = useNavigate();
  const location = useLocation();

  const updatetitle = async () => {
    if (!todoTitle || !todoDescription) return;
    setIsIndicating(true);
    const todoDoc = doc(db, "todos", location.state);
    await updateDoc(todoDoc, {
      title: todoTitle,
      description: todoDescription,
    });
    setIsIndicating(false);
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
        <span>Update Todo</span>
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
          {isIndicating ? <Spinner size={10} /> : null}
        </NavLink>
      </div>
    </div>
  );
}
