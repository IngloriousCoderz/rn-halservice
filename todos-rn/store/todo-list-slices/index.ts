import { configureStore, Reducer, UnknownAction } from "@reduxjs/toolkit";

import form from "./form.slice";
import tasks from "./tasks.slice";

import { Task } from "@/types/task";

const preloadedState = {
  form: "",
  tasks: [
    { id: "1", text: "Learn Zustand", completed: true },
    { id: "2", text: "Learn Redux", completed: false },
    { id: "3", text: "Learn RTK" },
  ],
};

export const store = configureStore({
  reducer: {
    form: form as Reducer<string, UnknownAction, string>,
    tasks: tasks as Reducer<Task[], UnknownAction, Task[]>,
  },
  preloadedState,
});
