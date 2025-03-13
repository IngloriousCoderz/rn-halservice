import { TodoListState } from "./todo-list.reducer";

export const selectText = (state: TodoListState) => state.form;

export const selectTasks = (state: TodoListState) => state.tasks;

export const selectTask = (state: TodoListState, id: string) =>
  selectTasks(state).find((task) => task.id === id);
