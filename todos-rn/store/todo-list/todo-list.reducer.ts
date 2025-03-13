import { Action } from "@/types/action";
import { Task } from "@/types/task";
import form, { FormAction } from "./form.reducer";
import tasks, { TaskAction } from "./tasks.reducer";
import { combineReducers, Reducer } from "@reduxjs/toolkit";

export interface TodoListState {
  form: string;
  tasks: Task[];
}

// export default function todoList(state: TodoListState = {}, action: Action) {
//   const newState = {
//     form: form(state.form, action as FormAction),
//     tasks: tasks(state.tasks, action as TaskAction),
//   };

//   return JSON.stringify(newState) === JSON.stringify(state) ? state : newState;
// }

export default combineReducers({ form, tasks });
