import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "./todoSlice";
const Todos = ({ editId, editText, setEditId, setEditText }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setText(editText);
  }, [editText]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(addTodo(text));
  //   setText("");
  //   console.log(text);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      if (editId !== null) {
        dispatch(editTodo({ id: editId, newText: text }));
        setEditId(null);
        setEditText("");
      } else {
        dispatch(addTodo(text));
      }
      setText("");
    }
  };

  return (
    <div className="todos-inner">
      <input
        className="input"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="submit-button" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
export default Todos;
