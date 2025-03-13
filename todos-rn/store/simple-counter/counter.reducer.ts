import { Action } from "@/types/action";
import { INCREMENT, RESET } from "./action.types";

// export function increment(state: number, amount: number) {
//   return state + amount;
// }

// export function reset(state: number) {
//   return 0;
// }

export default function counter(state: number, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + (action.payload as number);

    case RESET:
      return 0;

    default:
      return state;
  }
}
