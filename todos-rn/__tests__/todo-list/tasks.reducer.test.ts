import {
  addTask,
  deleteTask,
  toggleTask,
} from "@/store/todo-list/action.creators";
import tasks, { TaskAction } from "@/store/todo-list/tasks.reducer";
import { Task } from "@/types/task";

describe("Tasks Reducer", () => {
  it("should initialize the state", () => {
    const stateBefore = undefined;
    const action = { type: "coffeeMaker/makeCoffee" };
    const stateAfter: Task[] = [];

    const state = tasks(stateBefore, action as TaskAction);

    expect(state).toStrictEqual(stateAfter);
  });

  it("adds a new task", () => {
    const stateBefore = [
      { id: "1", text: "Learn Zustand", completed: true },
      { id: "2", text: "Learn Redux", completed: false },
      { id: "3", text: "Learn RTK" },
    ];
    const action = addTask("New task");
    const stateAfter = [
      { id: "1", text: "Learn Zustand", completed: true },
      { id: "2", text: "Learn Redux", completed: false },
      { id: "3", text: "Learn RTK" },
      { id: "4", text: "New task" },
    ];

    const state = tasks(stateBefore, action as TaskAction);

    expect(state).toStrictEqual(stateAfter);
  });

  it("toggles the 'completed' property on a task given its id", () => {
    const stateBefore = [
      { id: "1", text: "Learn Zustand", completed: true },
      { id: "2", text: "Learn Redux", completed: false },
      { id: "3", text: "Learn RTK" },
    ];
    const action = toggleTask("2");
    const stateAfter = [
      { id: "1", text: "Learn Zustand", completed: true },
      { id: "2", text: "Learn Redux", completed: true },
      { id: "3", text: "Learn RTK" },
    ];

    const state = tasks(stateBefore, action as TaskAction);

    expect(state).toStrictEqual(stateAfter);
  });

  it("deletes a task given its id", () => {
    const stateBefore = [
      { id: "1", text: "Learn Zustand", completed: true },
      { id: "2", text: "Learn Redux", completed: false },
      { id: "3", text: "Learn RTK" },
    ];
    const action = deleteTask("2");
    const stateAfter = [
      { id: "1", text: "Learn Zustand", completed: true },
      { id: "3", text: "Learn RTK" },
    ];

    const state = tasks(stateBefore, action as TaskAction);

    expect(state).toStrictEqual(stateAfter);
  });

  it("ignores any other action", () => {
    const stateBefore = [
      { id: "1", text: "Learn Zustand", completed: true },
      { id: "2", text: "Learn Redux", completed: false },
      { id: "3", text: "Learn RTK" },
    ];
    const action = { type: "coffeeMaker/makeCoffee" };

    const state = tasks(stateBefore, action as TaskAction);

    expect(state).toBe(stateBefore);
  });
});
