import { Task } from "./task";

export interface TasksState {
  tasks: Task[];
  fetchTasks: () => void;
  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}
