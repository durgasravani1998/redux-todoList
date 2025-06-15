import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "./todoSlice";
const TodoList = ({ setEditId, setEditText }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todo-list-inner">
      {todos.map((todo) => {
        const { id, text } = todo;
        return (
          <div key={id} className="lists">
            <div className="text">
              <p>{text}</p>
            </div>
            <div className="Edit-Delete">
              <button
                className="deleteButton"
                onClick={() => deleteHandler(id)}
              >
                Delete
              </button>
              <button
                className="editButton"
                onClick={() => {
                  setEditId(todo.id);
                  setEditText(todo.text);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;
