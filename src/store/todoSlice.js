import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todo.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },

    removeTodo(state, action) {
      state.todo = state.todo.filter((todos) => todos.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todo.find(
        (todos) => todos.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
