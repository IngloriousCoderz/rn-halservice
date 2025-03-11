import { useState } from "react";

import App from "./app";

import { Task } from "@/types/task";

const INITIAL_TASKS: Task[] = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Learn React Native", completed: false },
  { id: 3, text: "Work!" },
];

export default function Index({ name = "User" }) {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleAdd = (text: string) =>
    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;

      return [...tasks, { id: maxId + 1, text, completed: false }];
    });

  const handleToggle = (id: number) =>
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const handleDelete = (id: number) =>
    setTasks((tasks) => tasks.filter((task) => task.id !== id));

  return (
    <App
      name={name}
      tasks={tasks}
      onAdd={handleAdd}
      onToggle={handleToggle}
      onDelete={handleDelete}
    />
  );
}
