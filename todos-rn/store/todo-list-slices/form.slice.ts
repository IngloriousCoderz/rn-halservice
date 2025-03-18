import { createSlice } from "@reduxjs/toolkit";
import { addTask } from "./action.creators";

const initialState = "";

const slice = createSlice({
  name: "form",

  initialState,

  reducers: {
    setText: (_, action) => action.payload,
  },

  extraReducers: (builder) => builder.addCase(addTask, () => ""),

  selectors: {
    selectText: (state) => state,
  },
});

export const { setText } = slice.actions;
export const { selectText } = slice.selectors;
export default slice.reducer;
