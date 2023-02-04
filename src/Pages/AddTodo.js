import { async } from "@firebase/util";
import { addDoc, collection, doc } from "firebase/firestore";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../firbase/config";

export default function AddTodo() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const todoCollection = collection(db, "todos");
  const naviagte = useNavigate();

  const addNewTodo = async () => {
    if (!todoTitle || !todoDescription) return;
    try {
      await addDoc(todoCollection, {
        title: todoTitle,
        description: todoDescription,
        date: new Date(),
        userId: auth.currentUser.uid,
        complete: false,
      });
      naviagte("/home");
    } catch (err) {
      console.log(err);
    }
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
        <h1>Add A Todo</h1>
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
        <NavLink role={"button"} to={""} className="saveButton">
          <div className="saveButton" onClick={addNewTodo}>
            Save{" "}
          </div>
        </NavLink>
      </div>
    </div>
  );
}
