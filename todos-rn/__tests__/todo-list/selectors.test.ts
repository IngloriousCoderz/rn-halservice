import {
  selectText,
  selectTask,
  selectTasks,
} from "@/store/todo-list/selectors";

describe("Todo List Selectors", () => {
  it("selects the text", () => {
    const state = {
      form: "Some text",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: false },
        { id: "3", text: "Learn RTK" },
      ],
    };
    const expectedText = "Some text";

    const text = selectText(state);

    expect(text).toBe(expectedText);
  });

  it("selects all tasks", () => {
    const state = {
      form: "Some text",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: false },
        { id: "3", text: "Learn RTK" },
      ],
    };
    const expectedTasks = [
      { id: "1", text: "Learn Zustand", completed: true },
      { id: "2", text: "Learn Redux", completed: false },
      { id: "3", text: "Learn RTK" },
    ];

    const tasks = selectTasks(state);

    expect(tasks).toStrictEqual(expectedTasks);
  });

  it("selects a task given its id", () => {
    const state = {
      form: "Some text",
      tasks: [
        { id: "1", text: "Learn Zustand", completed: true },
        { id: "2", text: "Learn Redux", completed: false },
        { id: "3", text: "Learn RTK" },
      ],
    };
    const id = "2";
    const expectedTask = { id: "2", text: "Learn Redux", completed: false };

    const task = selectTask(state, id);

    expect(task).toStrictEqual(expectedTask);
  });
});
