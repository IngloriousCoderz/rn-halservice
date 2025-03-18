import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { TextInput } from "react-native";

import FormComponent from "./form";

import { AppDispatch } from "@/store/todo-list-thunks";
import { addTask } from "@/store/todo-list-thunks/tasks.slice";

export default function Form() {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const textInput = useRef<TextInput>(null);

  const handleChangeText = (text: string) => setText(text);

  const handleSubmit = () => {
    dispatch(addTask(text));
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
