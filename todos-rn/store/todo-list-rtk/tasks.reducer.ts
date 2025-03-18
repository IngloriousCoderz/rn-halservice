import { createReducer } from "@reduxjs/toolkit";

import { addTask, toggleTask, deleteTask } from "./action.creators";
import { Task } from "@/types/task";

export default createReducer([] as Task[], (builder) =>
  builder
    .addCase(addTask, (state, action) => {
      const maxId = state.length ? state[state.length - 1].id : "0";
      state.push({ id: `${Number(maxId) + 1}`, text: action.payload });
    })
    .addCase(toggleTask, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state[index].completed = !state[index].completed;
    })
    .addCase(deleteTask, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    })
);
