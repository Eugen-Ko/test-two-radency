import { createSlice } from "@reduxjs/toolkit";
import { initialToDo } from "assets/initialToDo";

export const todoSlices = createSlice({
  name: "todo",
  initialState: {
    todos: initialToDo || [],
    isModalNewEdit: false,
    isModalArch: false,
  },
  reducers: {},

  extraReducers: (builder) => {},
});
