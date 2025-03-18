import { useDispatch } from "react-redux";

import ListItemComponent from "./list-item";
import { deleteTask, toggleTask } from "@/store/todo-list-slices/tasks.slice";

import { Task } from "@/types/task";

interface Props {
  task: Task;
}

export default function ListItem({ task }: Props) {
  const dispatch = useDispatch();

  const handleTextPress = () => dispatch(toggleTask(task.id));
  const handleButtonPress = () => dispatch(deleteTask(task.id));

  return (
    <ListItemComponent
      task={task}
      onTextPress={handleTextPress}
      onButtonPress={handleButtonPress}
    />
  );
}
