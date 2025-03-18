import { useRef } from "react";
import { TextInput } from "react-native";

import FormComponent from "./form";
import { useDispatch, useSelector } from "react-redux";
import { selectText } from "@/store/todo-list-rtk/selectors";
import { addTask, setText } from "@/store/todo-list-rtk/action.creators";

export default function Form() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const textInput = useRef<TextInput>(null);

  const handleChangeText = (text: string) => dispatch(setText(text));

  const handleSubmit = () => {
    dispatch(addTask(text));
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
