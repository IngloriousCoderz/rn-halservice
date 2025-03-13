import { Counter } from "@/store/simple-counter/counter.class";

describe("Counter Class", () => {
  it("increments by a certain amount", () => {
    // given
    const counter = new Counter();
    const expectedCount = 3;

    // when
    counter.increment(3);

    // then
    expect(counter.count).toBe(expectedCount);
  });

  it("resets the counter value", () => {
    // given
    const counter = new Counter(3);
    const expectedCount = 0;

    // when
    counter.reset();

    // then
    expect(counter.count).toBe(expectedCount);
  });
});
