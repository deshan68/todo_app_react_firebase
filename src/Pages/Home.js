import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firbase/config";
import Cookies from "universal-cookie";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Spinner, Bounce, Digital, Windmill } from "react-activity";
import "react-activity/dist/library.css";

export default function Home({ authId, setIsAuth, authName }) {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [todiLists, setTodoLists] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isEmptyList, setIsemptyList] = useState(false);
  const [isIndicating, setIsIndicating] = useState(false);
  const [isDeleteBtnIndicating, setIsDeleteBtnIndicating] = useState(false);
  const [clickedButoonId, setClickedButoonId] = useState("");

  // const todoCollection = doc(db, "todos", auth.currentUser.uid);
  // const todoCollection = collection(db, "todos");
  const q = query(collection(db, "todos"), where("userId", "==", authId));

  const logOutHandler = async () => {
    try {
      await signOut(auth);
      cookies.remove("auth-token");
      cookies.remove("auth-name");
      cookies.remove("auth-id");
      setIsAuth(false);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const getTodoList = async () => {
    try {
      const data = await getDocs(q);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodoLists(filterData);
      if (filterData.length == 0) {
        setIsemptyList(true);
      } else {
        setIsemptyList(false);
      }
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const deletTodo = async (id) => {
    setClickedButoonId(id);
    setIsDeleteBtnIndicating(true);
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
    getTodoList();
    setIsDeleteBtnIndicating(false);
  };

  const updateComplete = async (id, complete) => {
    setClickedButoonId(id);
    setIsIndicating(true);
    const todoDoc = doc(db, "todos", id);
    await updateDoc(todoDoc, { complete: !complete });
    getTodoList();
    setTimeout(() => {
      setIsIndicating(false);
    }, 1000);
  };

  const updaHandler = async (id) => {
    navigate("/update", { state: id });
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
      <div className="homeBodyContainer">
        {isLoading ? (
          <Digital style={{ paddingTop: "20px" }} color="white" size={30} />
        ) : (
          <>
            <section
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <NavLink to={"/addtodo"} className="addTodobutton">
                <div>ADD NEW TODO</div>
              </NavLink>
            </section>
            <>
              {isEmptyList ? (
                <span style={{ color: "white", paddingTop: "20px" }}>
                  Empty List
                </span>
              ) : (
                <>
                  <section className="ItemLst">
                    {todiLists.map((item) => (
                      <div className="todoItem" key={item.id}>
                        <div className="todoInfo">
                          <h2>Titile : {item.title}</h2>
                          <h4>Description : {item.description}</h4>
                          <h4>Date : {item.data}</h4>
                        </div>
                        <div className="todoButtonsdiv">
                          <div
                            className="todoButtons delete"
                            onClick={() => deletTodo(item.id)}
                          >
                            Delete
                            {isDeleteBtnIndicating &&
                            clickedButoonId === item.id ? (
                              <Spinner
                                style={{ marginLeft: "10px" }}
                                size={10}
                              />
                            ) : null}
                          </div>
                          <div
                            className="todoButtons edit"
                            onClick={() => updaHandler(item.id)}
                          >
                            Edit
                          </div>
                          <div
                            className="todoButtons markAsDone"
                            onClick={() =>
                              updateComplete(item.id, item.complete)
                            }
                          >
                            Mark As Done
                            {isIndicating && clickedButoonId === item.id ? (
                              <Spinner size={10} />
                            ) : (
                              <div
                                className={
                                  item.complete === true
                                    ? "fillcheckCircle"
                                    : "checkCircle"
                                }
                              ></div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </section>
                </>
              )}
            </>
          </>
        )}
      </div>
    </div>
  );
}
