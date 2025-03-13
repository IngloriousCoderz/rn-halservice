import { create } from "zustand";

import * as api from "@/services/api";
import { TasksState } from "@/types/tasks.state";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Task } from "@/types/task";

export const useTasksStore = create<TasksState>()(
  devtools(
    immer((set, get) => ({
      tasks: [],

      fetchTasks: () => {
        api.fetchTasks().then((data) =>
          set((state) => {
            state.tasks = data;
          })
        );
      },

      addTask: async (text: string) => {
        set((state) => {
          state.tasks.push({ id: "temp", text, completed: false });
        });

        try {
          const data = await api.addTask(text);

          set((state) => {
            const index = state.tasks.findIndex(
              (task: Task) => task.id === "temp"
            );
            state.tasks.splice(index, 1, data);
          });
        } catch {
          set((state) => {
            const index = state.tasks.findIndex(
              (task: Task) => task.id === "temp"
            );
            state.tasks.splice(index, 1);
          });
        }
      },

      toggleTask: async (id: string) => {
        const { tasks } = get();
        const task = tasks.find((task) => task.id === id);
        const body = { ...task!, completed: !task?.completed };

        const response = await api.updateTask(id, body);
        if (response.ok) {
          set((state) => {
            const index = state.tasks.findIndex((task: Task) => task.id === id);
            state.tasks[index] = body;
          });
        }
      },

      deleteTask: async (id: string) => {
        const response = await api.deleteTask(id);
        if (response.ok) {
          set((state) => {
            const index = state.tasks.findIndex((task: Task) => task.id === id);
            state.tasks.splice(index, 1);
          });
        }
      },
    })),
    { name: "Tasks" }
  )
);
