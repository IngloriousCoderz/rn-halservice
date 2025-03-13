import { useRef, useState } from "react";
import { TextInput } from "react-native";

import FormComponent from "./form";
import { useTasksStore } from "@/stores/tasks.store";

export default function Form() {
  const addTask = useTasksStore(({ addTask }) => addTask);
  const [text, setText] = useState("");

  const textInput = useRef<TextInput>(null);

  const handleChangeText = (text: string) => setText(text);

  const handleSubmit = () => {
    addTask(text);
    setText("");
    textInput.current?.focus();
  };

  return (
    <FormComponent
      text={text}
      onChangeText={handleChangeText}
      onSubmit={handleSubmit}
      textInput={textInput}
    />
  );
}
