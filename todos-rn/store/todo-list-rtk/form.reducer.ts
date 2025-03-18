import { createReducer } from "@reduxjs/toolkit";

import { setText, reset, addTask } from "./action.creators";

export default createReducer("", (builder) =>
  builder
    .addCase(setText, (_, action) => action.payload)
    .addCase(reset, () => "")
    .addCase(addTask, () => "")
);
