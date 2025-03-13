import { useEffect, useState } from "react";

import App from "./app";
import { useTasksStore } from "@/stores/tasks.store";

export default function Index({ name = "User" }) {
  const fetchTasks = useTasksStore(({ fetchTasks }) => fetchTasks);

  useEffect(() => {
    fetchTasks();
  }, []);

  return <App name={name} />;
}
