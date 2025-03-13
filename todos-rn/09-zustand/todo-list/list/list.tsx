import { FlatList, StyleSheet } from "react-native";

import ListItem from "./list-item";

import { useTasksStore } from "@/stores/tasks.store";

export default function List() {
  const tasks = useTasksStore(({ tasks }) => tasks);

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
