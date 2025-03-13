import { configureStore } from "@reduxjs/toolkit";
import form from "./form.reducer";
import tasks from "./tasks.reducer";

const preloadedState = {
  form: "",
  tasks: [
    { id: "1", text: "Learn Zustand", completed: true },
    { id: "2", text: "Learn Redux", completed: false },
    { id: "3", text: "Learn RTK" },
  ],
};

const store = configureStore({
  reducer: { form, tasks },
  preloadedState,
});
