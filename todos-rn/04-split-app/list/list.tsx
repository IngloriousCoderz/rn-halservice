import { FlatList, StyleSheet } from "react-native";

import ListItem from "./list-item";

import { Task } from "@/types/task";

interface Props {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function List({ tasks, onToggle, onDelete }: Props) {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <ListItem task={item} onToggle={onToggle} onDelete={onDelete} />
      )}
      keyExtractor={({ id }) => `${id}`}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
  },
});
