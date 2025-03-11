import { useRef, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

import Button from "./button";
import ListItem from "./list-item";
import { Task } from "@/types/task";

const INITIAL_TASKS: Task[] = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Learn React Native", completed: false },
  { id: 3, text: "Work!" },
];

export default function Index({ name = "User" }) {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const textInput = useRef<TextInput>(null);

  const handleChangeText = (text: string) => setText(text);

  const handleAdd = () => {
    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;

      return [...tasks, { id: maxId + 1, text, completed: false }];
    });

    setText("");

    textInput.current?.focus();
  };

  const handleToggle = (id: number) =>
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const handleDelete = (id: number) =>
    setTasks((tasks) => tasks.filter((task) => task.id !== id));

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>{name}'s Todo List</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={handleChangeText}
          placeholder="What next?"
          autoFocus
          onSubmitEditing={handleAdd}
          submitBehavior="submit"
          ref={textInput}
        />
        <Button onPress={handleAdd}>Add</Button>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <ListItem
            task={item}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
        keyExtractor={({ id }) => `${id}`}
        style={styles.list}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 8,
  },
  form: {
    flexDirection: "row",
    padding: 16,
    gap: 16,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  list: {
    paddingHorizontal: 16,
  },
});
