import { useEffect, useState } from "react";

import App from "./app";

import { Task } from "@/types/task";
import * as api from "@/services/api";

const INITIAL_TASKS: Task[] = [];

export default function Index({ name = "User" }) {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  useEffect(() => {
    api.fetchTasks().then(setTasks);

    // const getData = async () => {

    //   const data = await api.fetchTasks();
    //   setTasks(data);
    // };

    // getData();
  }, []);

  const handleAdd = async (text: string) => {
    setTasks((tasks) => [...tasks, { id: "temp", text, completed: false }]);

    try {
      const data = await api.addTask(text);

      setTasks((tasks) => [
        ...tasks.filter((task) => task.id !== "temp"),
        data,
      ]);
    } catch {
      setTasks((tasks) => tasks.filter((task) => task.id !== "temp"));
    }
  };

  const handleToggle = async (id: string) => {
    const task = tasks.find((task) => task.id === id);
    const body = { ...task!, completed: !task?.completed };

    const response = await api.updateTask(id, body);
    if (response.ok) {
      setTasks((tasks) => tasks.map((task) => (task.id === id ? body : task)));
    }
  };

  const handleDelete = async (id: string) => {
    const response = await api.deleteTask(id);
    if (response.ok) {
      setTasks((tasks) => tasks.filter((task) => task.id !== id));
    }
  };

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
