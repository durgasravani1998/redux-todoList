import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const todoSlice = createSlice({
  name: "todolist",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: ++id, text: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      return state.filter((eachItem) => eachItem.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) todo.text = newText;
    },
  },
});
export default todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
