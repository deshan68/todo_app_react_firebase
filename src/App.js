import AddTodo from "./Pages/AddTodo";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
