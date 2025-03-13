import { create } from "zustand";

import * as api from "@/services/api";
import { TasksState } from "@/types/tasks.state";

export const useTasksStore = create<TasksState>()((set, get) => ({
  tasks: [],

  fetchTasks: () => {
    api
      .fetchTasks()
      .then((data) => set((state) => ({ ...state, tasks: data })));
  },

  addTask: async (text: string) => {
    set((state) => ({
      ...state,
      tasks: [...state.tasks, { id: "temp", text, completed: false }],
    }));

    try {
      const data = await api.addTask(text);

      set((state) => ({
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== "temp"), data],
      }));
    } catch {
      set((state) => ({
        ...state,
        tasks: state.tasks.filter((task) => task.id !== "temp"),
      }));
    }
  },

  toggleTask: async (id: string) => {
    const { tasks } = get();
    const task = tasks.find((task) => task.id === id);
    const body = { ...task!, completed: !task?.completed };

    const response = await api.updateTask(id, body);
    if (response.ok) {
      set((state) => ({
        ...state,
        tasks: state.tasks.map((task) => (task.id === id ? body : task)),
      }));
    }
  },

  deleteTask: async (id: string) => {
    const response = await api.deleteTask(id);
    if (response.ok) {
      set((state) => ({
        ...state,
        tasks: state.tasks.filter((task) => task.id !== id),
      }));
    }
  },
}));
