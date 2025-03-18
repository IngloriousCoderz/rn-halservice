import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ListComponent from "./list";
import { AppDispatch } from "@/store/todo-list-thunks";
import {
  deleteTask,
  fetchTasks,
  selectTasks,
  toggleTask,
} from "@/store/todo-list-thunks/tasks.slice";

export default function List() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const handleToggle = (id: string) => dispatch(toggleTask(id));

  const handleDelete = (id: string) => dispatch(deleteTask(id));

  return (
    <ListComponent
      tasks={tasks}
      onToggle={handleToggle}
      onDelete={handleDelete}
    />
  );
}
