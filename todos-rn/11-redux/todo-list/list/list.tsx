import { FlatList, StyleSheet } from "react-native";

import ListItem from "./list-item";
import { Task } from "@/types/task";

interface Props {
  tasks: Task[];
}

export default function List({ tasks }: Props) {
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
