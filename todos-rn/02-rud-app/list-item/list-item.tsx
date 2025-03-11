import { View, Text, StyleSheet } from "react-native";

import Button from "@/app/button";
import { Task } from "@/types/task";

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function ListItem({ task, onToggle, onDelete }: Props) {
  const handleTextPress = () => onToggle(task.id);
  const handleButtonPress = () => onDelete(task.id);

  return (
    <View style={styles.listItem}>
      <Text
        style={task.completed ? styles.completed : undefined}
        onPress={handleTextPress}
      >
        {task.text}
      </Text>
      <Button onPress={handleButtonPress}>x</Button>
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
