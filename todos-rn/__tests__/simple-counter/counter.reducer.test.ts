import { increment, reset } from "@/store/simple-counter/action.creators";
import counter from "@/store/simple-counter/counter.reducer";

describe("Counter Reducer", () => {
  it("increments by a certain amount", () => {
    // given
    const stateBefore = 0;
    const action = increment(3);
    const stateAfter = 3;

    // when
    const state = counter(stateBefore, action);

    // then
    expect(state).toBe(stateAfter);
  });

  it("resets the counter value", () => {
    // given
    const stateBefore = 3;
    const action = reset();
    const stateAfter = 0;

    // when
    const state = counter(stateBefore, action);

    // then
    expect(state).toBe(stateAfter);
  });

  it("ignores any other action", () => {
    // given
    const stateBefore = 3;
    const action = { type: "coffeeMaker/makeCoffee", payload: 2 };

    // when
    const state = counter(stateBefore, action);

    // then
    expect(state).toBe(stateBefore);
  });
});
