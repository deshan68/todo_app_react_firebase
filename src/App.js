import AddTodo from "./Pages/AddTodo";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import { Route, Routes } from "react-router-dom";
import Cookies from "universal-cookie";
import { useState } from "react";
import UpdateTodo from "./Pages/UpdateTodo";

function App() {
  const cookies = new Cookies();
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [authName, setSetAuthName] = useState(cookies.get("auth-name"));
  const [authId, setSetAuthId] = useState(cookies.get("auth-id"));

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LogIn
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              setSetAuthName={setSetAuthName}
              authName={authName}
              authId={authId}
              setSetAuthId={setSetAuthId}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              authId={authId}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              authName={authName}
            />
          }
        />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/update" element={<UpdateTodo />} />
      </Routes>
    </div>
  );
}

export default App;
