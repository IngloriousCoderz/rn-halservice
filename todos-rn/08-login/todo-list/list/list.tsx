import { FlatList, StyleSheet } from "react-native";

import ListItem from "./list-item";

import { useContext } from "react";
import { TasksContext } from "@/contexts/tasks.context";

export default function List() {
  const { tasks } = useContext(TasksContext);

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <ListItem task={item} />}
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
