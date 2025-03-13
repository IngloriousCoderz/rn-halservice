import {
  ADD_TASK,
  DELETE_TASK,
  RESET,
  SET_TEXT,
  TOGGLE_TASK,
} from "./action.types";

export const setText = (text: string) => ({ type: SET_TEXT, payload: text });

export const reset = () => ({ type: RESET });

export const addTask = (text: string) => ({
  type: ADD_TASK,
  payload: text,
});

export const toggleTask = (id: string) => ({ type: TOGGLE_TASK, payload: id });

export const deleteTask = (id: string) => ({ type: DELETE_TASK, payload: id });
