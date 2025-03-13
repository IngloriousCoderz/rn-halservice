import {
  addTask,
  deleteTask,
  reset,
  setText,
  toggleTask,
} from "@/store/todo-list/action.creators";
import { FormAction } from "@/store/todo-list/form.reducer";
import { TaskAction } from "@/store/todo-list/tasks.reducer";
import todoList from "@/store/todo-list/todo-list.reducer";

describe("Todo List Reducer", () => {
  it("should initialize the state", () => {
    const stateBefore = undefined;
    const action = { type: "coffeeMaker/makeCoffee" };
    const stateAfter = {
      form: "",
      tasks: [],
    };

    const state = todoList(stateBefore, action as TaskAction);

    expect(state).toStrictEqual(stateAfter);
  });

  it("sets any text", () => {
    const stateBefore = {
      form: "Some text",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: false },
        { id: "3", text: "Learn RTK" },
      ],
    };
    const action = setText("Some other text");
    const stateAfter = {
      form: "Some other text",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: false },
        { id: "3", text: "Learn RTK" },
      ],
    };

    const state = todoList(stateBefore, action as FormAction);

    expect(state).toStrictEqual(stateAfter);
  });

  it("resets the form text to an empty string", () => {
    const stateBefore = {
      form: "Some text",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: false },
        { id: "3", text: "Learn RTK" },
      ],
    };
    const action = reset();
    const stateAfter = {
      form: "",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: false },
        { id: "3", text: "Learn RTK" },
      ],
    };

    const state = todoList(stateBefore, action as FormAction);

    expect(state).toStrictEqual(stateAfter);
  });

  it("adds a new task", () => {
    const stateBefore = {
      form: "Some text",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: false },
        { id: "3", text: "Learn RTK" },
      ],
    };
    const action = addTask("New task");
    const stateAfter = {
      form: "",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: false },
        { id: "3", text: "Learn RTK" },
        { id: "4", text: "New task" },
      ],
    };

    const state = todoList(stateBefore, action as TaskAction);

    expect(state).toStrictEqual(stateAfter);
  });

  it("toggles the 'completed' property on a task given its id", () => {
    const stateBefore = {
      form: "Some text",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: false },
        { id: "3", text: "Learn RTK" },
      ],
    };
    const action = toggleTask("2");
    const stateAfter = {
      form: "Some text",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: true },
        { id: "3", text: "Learn RTK" },
      ],
    };

    const state = todoList(stateBefore, action as TaskAction);

    expect(state).toStrictEqual(stateAfter);
  });

  it("deletes a task given its id", () => {
    const stateBefore = {
      form: "Some text",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: false },
        { id: "3", text: "Learn RTK" },
      ],
    };
    const action = deleteTask("2");
    const stateAfter = {
      form: "Some text",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "3", text: "Learn RTK" },
      ],
    };

    const state = todoList(stateBefore, action as TaskAction);

    expect(state).toStrictEqual(stateAfter);
  });

  it("ignores any other action", () => {
    const stateBefore = {
      form: "Some text",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: false },
        { id: "3", text: "Learn RTK" },
      ],
    };
    const action = { type: "coffeeMaker/makeCoffee" };

    const state = todoList(stateBefore, action as TaskAction);

    expect(state).toBe(stateBefore);
  });
});
