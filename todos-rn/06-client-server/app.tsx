import Form from "./form";
import Header from "./header";
import List from "./list";

import { Task } from "@/types/task";

interface Props {
  name: string;
  tasks: Task[];
  onAdd: (text: string) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function App({ name, tasks, onAdd, onToggle, onDelete }: Props) {
  return (
    <>
      <Header name={name} />
      <Form onAdd={onAdd} />
      <List tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </>
  );
}
