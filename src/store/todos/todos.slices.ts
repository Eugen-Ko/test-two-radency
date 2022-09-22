import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KEY_LS } from "assets/initData";
import { ToDoRecord } from "assets/interfaces";
import { init } from "services/init";

interface TodosState {
  todos: ToDoRecord[];
  isNewEdit: boolean;
  isArch: boolean;
  currentEl: ToDoRecord | null;
  currentCat: string | null;
}

const initialState: TodosState = {
  todos: init(),
  isNewEdit: false,
  isArch: false,
  currentEl: null,
  currentCat: null,
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
    elementEdit(state, action: PayloadAction<ToDoRecord>) {
      state.todos = state.todos.map((el) => {
        return el.id === action.payload.id ? action.payload : el;
      });
      localStorage.setItem(KEY_LS, JSON.stringify(state.todos));
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
    setCurrentEl(state, action: PayloadAction<ToDoRecord | null>) {
      state.currentEl = action.payload;
    },
    triggerModalArch(state) {
      state.isArch = !state.isArch;
    },
    setCurrentCat(state, action: PayloadAction<string | null>) {
      state.currentCat = action.payload;
    },
    elementUnArch(state, action: PayloadAction<string>) {
      state.todos = state.todos.map((el) => {
        if (el.id === action.payload) {
          return { ...el, isArch: false };
        }
        return el;
      });
      localStorage.setItem(KEY_LS, JSON.stringify(state.todos));
    },
  },
});

export const todosActions = todoSlice.actions;
export const todosReducer = todoSlice.reducer;
