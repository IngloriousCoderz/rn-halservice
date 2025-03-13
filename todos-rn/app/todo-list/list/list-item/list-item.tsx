import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import Button from "@/components/button";
import { Task } from "@/types/task";
import { deleteTask, toggleTask } from "@/store/todo-list/action.creators";

interface Props {
  task: Task;
}

export default function ListItem({ task }: Props) {
  const dispatch = useDispatch();

  const handleTextPress = () => dispatch(toggleTask(task.id));
  const handleButtonPress = () => dispatch(deleteTask(task.id));

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
