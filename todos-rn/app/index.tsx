import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

import Button from "./button";
import ListItem from "./list-item";

const INITIAL_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Learn React Native", completed: false },
  { id: 3, text: "Work!" },
];

export default function Index({ name = "User" }) {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleAdd = () => console.log("add!");

  const handleToggle = (id: number) => {
    // clone
    // setTasks((tasks) => {
    //   const clone = [...tasks];
    //   const index = clone.findIndex((task) => task.id === id);
    //   const newTask = { ...clone[index] };
    //   newTask.completed = !newTask.completed;
    //   clone[index] = newTask;
    //   return clone;
    // });

    // sandwich
    // setTasks((tasks) => {
    //   const index = tasks.findIndex((task) => task.id === id);
    //   return [
    //     ...tasks.slice(0, index),
    //     { ...tasks[index], completed: !tasks[index].completed },
    //     ...tasks.slice(index + 1),
    //   ];
    // });

    // array method
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    // clone
    // setTasks((tasks) => {
    //   const clone = [...tasks];
    //   const index = clone.findIndex((task) => task.id === id);
    //   clone.splice(index, 1);
    //   return clone;
    // });

    // sandwich
    // setTasks((tasks) => {
    //   const index = tasks.findIndex((task) => task.id === id);
    //   return [...tasks.slice(0, index), ...tasks.slice(index + 1)];
    // });

    // array method
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>{name}'s Todo List</Text>
      </View>

      <View style={styles.form}>
        <TextInput style={styles.input} />
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
