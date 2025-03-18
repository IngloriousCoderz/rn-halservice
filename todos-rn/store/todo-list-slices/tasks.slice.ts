import { createSlice } from "@reduxjs/toolkit";

import { addTask } from "./action.creators";
import { Task } from "@/types/task";

const initialState: Task[] = [];

const slice = createSlice({
  name: "tasks",

  initialState,

  reducers: {
    toggleTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state[index].completed = !state[index].completed;
    },

    deleteTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
  },

  extraReducers: (builder) =>
    builder.addCase(addTask, (state, action) => {
      const maxId = state.length ? state[state.length - 1].id : "0";
      state.push({ id: `${Number(maxId) + 1}`, text: action.payload });
    }),

  selectors: {
    selectTasks: (state) => state,

    selectTask: (state, id) => state.find((task) => task.id === id),
  },
});

export const { toggleTask, deleteTask } = slice.actions;
export const { selectTasks, selectTask } = slice.selectors;
export default slice.reducer;
