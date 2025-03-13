import { Action } from "@/types/action";
import { INCREMENT, RESET } from "./action.types";

interface CounterState {
  count: number;
}

export default function counter(state: CounterState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + (action.payload as number) };

    case RESET:
      return { count: 0 };

    default:
      return state;
  }
}

export const selectCount = (state: CounterState) => state.count;
