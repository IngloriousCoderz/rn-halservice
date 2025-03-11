import { useEffect, useState } from "react";

import App from "./app";

import { Task } from "@/types/task";
import * as api from "@/services/api";

const INITIAL_TASKS: Task[] = [];

export default function Index({ name = "User" }) {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  useEffect(() => {
    api.fetchTasks().then(setTasks);
  }, []);

  const handleAdd = (text: string) => {
    setTasks((tasks) => [...tasks, { id: "temp", text, completed: false }]);

    api
      .addTask(text)
      .then((data) =>
        setTasks((tasks) => [
          ...tasks.filter((task) => task.id !== "temp"),
          data,
        ])
      )
      .catch(() =>
        setTasks((tasks) => tasks.filter((task) => task.id !== "temp"))
      );
  };

  const handleToggle = (id: string) => {
    const task = tasks.find((task) => task.id === id);
    const body = { ...task, completed: !task?.completed };
    api.toggleTask(id, body).then((response) => {
      if (response.ok) {
        setTasks((tasks) =>
          tasks.map((task) => (task.id === id ? body : task))
        );
      }
    });
  };

  const handleDelete = (id: string) =>
    fetch(`http://192.168.1.157:3000/tasks/${id}`, { method: "DELETE" }).then(
      (response) => {
        if (response.ok) {
          setTasks((tasks) => tasks.filter((task) => task.id !== id));
        }
      }
    );

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
