import { Task } from "@/types/task";
import { createContext } from "react";

interface TasksContext {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const TasksContext = createContext<TasksContext>({
  tasks: [],
  addTask: () => {},
  toggleTask: () => {},
  deleteTask: () => {},
});
