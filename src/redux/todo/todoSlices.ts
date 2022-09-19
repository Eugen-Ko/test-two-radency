import { createSlice } from "@reduxjs/toolkit";

export const todoSlices = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    isModalNewEdit: false,
    isModalArch: false,
  },
  reducers: {},

  extraReducers: (builder) => {},
});
