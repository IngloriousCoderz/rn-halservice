import { View, Text, StyleSheet } from "react-native";

import Button from "@/components/button";
import { Task } from "@/types/task";

interface Props {
  task: Task;
  onTextPress: () => void;
  onButtonPress: () => void;
}

export default function ListItem({ task, onTextPress, onButtonPress }: Props) {
  return (
    <View style={styles.listItem}>
      <Text
        style={task.completed ? styles.completed : undefined}
        onPress={onTextPress}
      >
        {task.text}
      </Text>
      <Button onPress={onButtonPress}>x</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    marginBottom: 8,
  },
  completed: {
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
});
