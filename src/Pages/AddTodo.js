import { addDoc, collection, doc } from "firebase/firestore";
import React, { useState } from "react";
import { Spinner } from "react-activity";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../firbase/config";

export default function AddTodo({}) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const [isIndicating, setIsIndicating] = useState(false);

  const todoCollection = collection(db, "todos");
  const naviagte = useNavigate();

  const addNewTodo = async () => {
    if (!todoTitle || !todoDescription) return;
    setIsIndicating(true);
    try {
      await addDoc(todoCollection, {
        title: todoTitle,
        description: todoDescription,
        date: new Date(),
        userId: auth.currentUser.uid,
        complete: false,
      });
      setIsIndicating(false);
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
        <span>Add A Todo</span>
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
          onClick={addNewTodo}
          role={"button"}
          to={""}
          className="saveButton"
        >
          <div className="saveButton">Save </div>
          {isIndicating ? <Spinner size={10} /> : null}
        </NavLink>
      </div>
    </div>
  );
}
