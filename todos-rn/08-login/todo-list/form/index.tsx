import { useContext, useRef, useState } from "react";
import { TextInput } from "react-native";

import FormComponent from "./form";
import { TasksContext } from "@/contexts/tasks.context";

export default function Form() {
  const { addTask } = useContext(TasksContext);
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
