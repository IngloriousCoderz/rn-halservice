import { INCREMENT, RESET } from "./action.types";

export const increment = (amount: number) => ({
  type: INCREMENT,
  payload: amount,
});

export const reset = () => ({ type: RESET });
