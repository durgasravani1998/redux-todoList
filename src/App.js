import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Todos from "./components/others/Todos";
import TodoList from "./components/others/TodoList";

function App() {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  return (
    <div className="App">
      <div className="todos">
        <Todos
          editId={editId}
          editText={editText}
          setEditId={setEditId}
          setEditText={setEditText}
        />
      </div>
      <div className="todo-list">
        <TodoList setEditId={setEditId} setEditText={setEditText} />
      </div>
    </div>
  );
}

export default App;
