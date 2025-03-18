import { createAppSlice } from "./create-app-slice";

import * as api from "@/services/api";

import { Task } from "@/types/task";
import { RootState } from ".";

const initialState: Task[] = [];

const slice = createAppSlice({
  name: "tasks",

  initialState,

  reducers: (create) => ({
    fetchTasks: create.asyncThunk(() => api.fetchTasks(), {
      fulfilled: (_, action) => action.payload,
    }),

    addTask: create.asyncThunk((text: string) => api.addTask(text), {
      pending: (state) => {
        state.push({ id: "temp", text: "Pending..." });
      },
      fulfilled: (state, action) => {
        const index = state.length - 1;
        state.splice(index, 1, action.payload);
      },
      rejected: (state) => {
        const index = state.findIndex((task) => task.id === "temp");
        state.splice(index, 1);
      },
    }),

    toggleTask: create.asyncThunk<Task, string>(
      (id: string, { getState }): Promise<Task> => {
        const tasks = selectTasks(getState() as RootState);

        const task = tasks.find((task) => task.id === id);
        const body = { ...task!, completed: !task?.completed };

        return api.updateTask(id, body);
      },
      {
        fulfilled: (state, action) => {
          const index = state.findIndex(
            (task) => task.id === action.payload.id
          );
          state[index] = action.payload;
        },
      }
    ),

    deleteTask: create.asyncThunk((id: string) => api.deleteTask(id), {
      fulfilled: (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        state.splice(index, 1);
      },
    }),
  }),

  selectors: {
    selectTasks: (state) => state,

    selectTask: (state, id) => state.find((task) => task.id === id),
  },
});

export const { fetchTasks, addTask, toggleTask, deleteTask } = slice.actions;
export const { selectTasks, selectTask } = slice.selectors;
export default slice.reducer;
