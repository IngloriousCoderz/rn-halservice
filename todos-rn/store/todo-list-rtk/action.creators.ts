import { createAction } from "@reduxjs/toolkit";

export const setText = createAction<string>("form/setText");
export const reset = createAction("form/reset");
export const addTask = createAction<string>("tasks/addTask");
export const toggleTask = createAction<string>("tasks/toggleTask");
export const deleteTask = createAction<string>("tasks/deleteTask");
