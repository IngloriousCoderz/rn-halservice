import { createStore } from "@/store/mini-redux";
import reducer from "@/store/complex-counter/counter.reducer";
import { increment, reset } from "@/store/complex-counter/action.creators";

describe("Mini-Redux", () => {
  it("works like Redux", () => {
    const initialState = { count: 0 };
    const store = createStore(reducer, initialState);
    const finalState = { count: 2 };

    store.subscribe(() => {
      console.log("updated!", store.getState());
    });

    store.dispatch(increment(3));
    store.dispatch(increment(-2));
    store.dispatch(reset());
    store.dispatch(increment(4));
    store.dispatch(increment(-2));

    expect(store.getState()).toStrictEqual(finalState);
  });
});
