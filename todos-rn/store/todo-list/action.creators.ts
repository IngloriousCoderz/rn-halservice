import { UnknownAction } from "@reduxjs/toolkit";
import {
  ADD_TASK,
  DELETE_TASK,
  RESET,
  SET_TEXT,
  TOGGLE_TASK,
} from "./action.types";

export const setText = (text: string): UnknownAction => ({
  type: SET_TEXT,
  payload: text,
});

export const reset = (): UnknownAction => ({ type: RESET });

export const addTask = (text: string): UnknownAction => ({
  type: ADD_TASK,
  payload: text,
});

export const toggleTask = (id: string): UnknownAction => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const deleteTask = (id: string): UnknownAction => ({
  type: DELETE_TASK,
  payload: id,
});
