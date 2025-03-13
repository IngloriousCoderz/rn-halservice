import { increment, reset } from "@/store/complex-counter/action.creators";
import counter, { selectCount } from "@/store/complex-counter/counter.reducer";

describe("Counter Reducer", () => {
  it("increments by a certain amount", () => {
    // given
    const stateBefore = { count: 0 };
    const action = increment(3);
    const stateAfter = { count: 3 };

    // when
    const state = counter(stateBefore, action);

    // then
    expect(state).toStrictEqual(stateAfter);
  });

  it("resets the counter value", () => {
    // given
    const stateBefore = { count: 3 };
    const action = reset();
    const stateAfter = { count: 0 };

    // when
    const state = counter(stateBefore, action);

    // then
    expect(state).toStrictEqual(stateAfter);
  });

  it("ignores any other action", () => {
    // given
    const stateBefore = { count: 3 };
    const action = { type: "coffeeMaker/makeCoffee", payload: 2 };

    // when
    const state = counter(stateBefore, action);

    // then
    expect(state).toBe(stateBefore);
  });

  it("selects its count value", () => {
    const state = { count: 3 };
    const expectedCount = 3;

    const count = selectCount(state);

    expect(count).toBe(expectedCount);
  });

  it("concatenates multiple actions together", () => {
    const stateBefore = { count: 0 };
    const actions = [
      increment(3),
      increment(-2),
      reset(),
      increment(4),
      increment(-2),
    ];
    const stateAfter = { count: 2 };

    const state = actions.reduce(counter, stateBefore);

    expect(state).toStrictEqual(stateAfter);
  });
});
