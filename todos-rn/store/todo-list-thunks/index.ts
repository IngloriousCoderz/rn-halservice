import { configureStore, Reducer, UnknownAction } from "@reduxjs/toolkit";

import tasks from "./tasks.slice";

import { Task } from "@/types/task";

const preloadedState = {
  tasks: [],
};

export const store = configureStore({
  reducer: {
    tasks: tasks as Reducer<Task[], UnknownAction, Task[]>,
  },
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
