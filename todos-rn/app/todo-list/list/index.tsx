import { useSelector } from "react-redux";

import ListComponent from "./list";
import { selectTasks } from "@/store/todo-list/selectors";

export default function List() {
  const tasks = useSelector(selectTasks);

  return <ListComponent tasks={tasks} />;
}
