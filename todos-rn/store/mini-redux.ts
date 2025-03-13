import { Action } from "@/types/action";
import { Reducer } from "@/types/reducer";

export function createStore(reducer: Reducer, initialState: unknown) {
  const listeners: Set<Function> = new Set();
  let state = initialState;

  return {
    subscribe(listener: Function) {
      listeners.add(listener);

      return function unsubscribe() {
        listeners.delete(listener);
      };
    },

    dispatch(action: Action) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },

    getState() {
      return state;
    },
  };
}
