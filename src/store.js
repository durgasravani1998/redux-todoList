import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./components/others/todoSlice";
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
