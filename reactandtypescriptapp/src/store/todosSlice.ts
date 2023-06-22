import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Todo {
  id: number;
  message: string;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        message: action.payload,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todosSlice.reducer;
