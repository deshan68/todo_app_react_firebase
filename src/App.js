import AddTodo from "./Pages/AddTodo";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import { Route, Routes, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useState } from "react";

function App() {
  const cookies = new Cookies();
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [authName, setSetAuthName] = useState(cookies.get("auth-name"));

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
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home isAuth={isAuth} setIsAuth={setIsAuth} authName={authName} />
          }
        />
        <Route path="/addtodo" element={<AddTodo />} />
      </Routes>
    </div>
  );
}

export default App;
