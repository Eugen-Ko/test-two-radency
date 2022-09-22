import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KEY_LS } from "assets/initData";
import { ToDoRecord } from "assets/interfaces";
import { init } from "services/init";

interface TodosState {
  todos: ToDoRecord[];
  isNewEdit: boolean;
  isArch: boolean;
  currentEl: ToDoRecord | null;
}

const initialState: TodosState = {
  todos: init(),
  isNewEdit: false,
  isArch: false,
  currentEl: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    allArch(state) {
      state.todos = state.todos.map((el) => {
        return { ...el, isArch: true };
      });
      localStorage.setItem(KEY_LS, JSON.stringify(state.todos));
    },
    allActiveDel(state) {
      state.todos = state.todos.filter((el) => el.isArch);
      localStorage.setItem(KEY_LS, JSON.stringify(state.todos));
    },
    elementEdit(state, action: PayloadAction<ToDoRecord | null>) {
      state.currentEl = action.payload;
    },
    elementArch(state, action: PayloadAction<string>) {
      state.todos = state.todos.map((el) => {
        if (el.id === action.payload) {
          return { ...el, isArch: true };
        }
        return el;
      });
      localStorage.setItem(KEY_LS, JSON.stringify(state.todos));
    },
    elementDel(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
      localStorage.setItem(KEY_LS, JSON.stringify(state.todos));
    },
    triggerModalNewEdit(state) {
      state.isNewEdit = !state.isNewEdit;
    },
    addNewRecord(state, action: PayloadAction<ToDoRecord>) {
      state.todos.push(action.payload);
      localStorage.setItem(KEY_LS, JSON.stringify(state.todos));
    },
    // archTodo(state, action: PayloadAction<ToDoRecord>) {
    //   state.todos = [action.payload];
    // },
    //   localStorage.setItem(KEY_LS, JSON.stringify(state.todos));
    // },
    // removeTodo(state, action: PayloadAction<ToDoRecord>) {
    //   state.todos = state.todos.filter((f) => f !== action.payload);
    //   localStorage.setItem(KEY_LS, JSON.stringify(state.todos));
    // },
  },
});

export const todosActions = todoSlice.actions;
export const todosReducer = todoSlice.reducer;
