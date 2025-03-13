import { Task } from "@/types/task";
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./action.types";

type TaskActionType = typeof ADD_TASK | typeof TOGGLE_TASK | typeof DELETE_TASK;

export interface TaskAction {
  type: TaskActionType;
  payload?: unknown;
}

const Reducers: Record<TaskActionType, Function> = {
  [ADD_TASK]: addTask,
  [TOGGLE_TASK]: toggleTask,
  [DELETE_TASK]: deleteTask,
};

export default function tasks(state: Task[] = [], action: TaskAction) {
  const reducer = Reducers[action.type];

  return reducer ? reducer(state, action) : state;
}

function addTask(state: Task[], action: TaskAction) {
  const maxId = state.length ? state[state.length - 1].id : "0";
  return [...state, { id: `${Number(maxId) + 1}`, text: action.payload }];
}

function toggleTask(state: Task[], action: TaskAction) {
  return state.map((task) =>
    task.id === action.payload ? { ...task, completed: !task.completed } : task
  );
}

function deleteTask(state: Task[], action: TaskAction) {
  return state.filter((task) => task.id !== action.payload);
}
