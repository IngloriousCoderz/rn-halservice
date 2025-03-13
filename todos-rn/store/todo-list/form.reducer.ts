import { ADD_TASK, RESET, SET_TEXT } from "./action.types";

type FormActionType = typeof SET_TEXT | typeof RESET | typeof ADD_TASK;

export interface FormAction {
  type: FormActionType;
  payload?: unknown;
}

const Reducers: Record<FormActionType, Function> = {
  [SET_TEXT]: setText,
  [RESET]: reset,
  [ADD_TASK]: reset,
};

export default function form(state = "", action: FormAction) {
  const reducer = Reducers[action.type];

  return reducer ? reducer(state, action) : state;
}

function setText(state: string, action: FormAction) {
  return action.payload;
}

function reset(state: string, action: FormAction) {
  return "";
}

export const selectText = (state: string) => state;
