import { reset, setText } from "@/store/todo-list/action.creators";
import form, { FormAction, selectText } from "@/store/todo-list/form.reducer";

describe("Form Reducer", () => {
  it("should initialize the state", () => {
    const stateBefore = undefined;
    const action = { type: "coffeeMaker/makeCoffee" };
    const stateAfter = "";

    const state = form(stateBefore, action as FormAction);

    expect(state).toBe(stateAfter);
  });

  it("sets any text", () => {
    const stateBefore = "Some text";
    const action = setText("Some other text");
    const stateAfter = "Some other text";

    const state = form(stateBefore, action as FormAction);

    expect(state).toBe(stateAfter);
  });

  it("resets to an empty string", () => {
    const stateBefore = "Some text";
    const action = reset();
    const stateAfter = "";

    const state = form(stateBefore, action as FormAction);

    expect(state).toBe(stateAfter);
  });

  it("ignores any other action", () => {
    const stateBefore = "Some text";
    const action = { type: "coffeeMaker/makeCoffee" };

    const state = form(stateBefore, action as FormAction);

    expect(state).toBe(stateBefore);
  });

  it("selects the text", () => {
    const state = "Some text";
    const expectedText = "Some text";

    const text = selectText(state);

    expect(text).toBe(expectedText);
  });
});
