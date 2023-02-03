import AddTodo from "./Pages/AddTodo";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addtodo" element={<AddTodo />} />
      </Routes>
    </div>
  );
}

export default App;
