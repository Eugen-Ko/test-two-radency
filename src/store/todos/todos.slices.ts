import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoRecord } from "assets/interfaces";
import { init } from "services/init";

interface TodosState {
  todos: ToDoRecord[];
  isNewEdit: boolean;
  isArchived: boolean;
}

const initialState: TodosState = {
  todos: init(),
  isNewEdit: false,
  isArchived: false,
};

init();

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    fetchTodo(state, action: PayloadAction<ToDoRecord>) {
      console.log(state);
    },
    // addTodo(state, action: PayloadAction<ToDoRecord>) {
    //   state.todos.push(action.payload);
    //   localStorage.setItem(KEY_LS, JSON.stringify(state.todos));
    // },
    // removeTodo(state, action: PayloadAction<ToDoRecord>) {
    //   state.todos = state.todos.filter((f) => f !== action.payload);
    //   localStorage.setItem(KEY_LS, JSON.stringify(state.todos));
    // },
  },
});

console.log(todoSlice.caseReducers.fetchTodo);

export const todosActions = todoSlice.actions;
export const todosReducer = todoSlice.reducer;
