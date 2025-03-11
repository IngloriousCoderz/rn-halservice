import { useRef, useState } from "react";
import { TextInput } from "react-native";

import FormComponent from "./form";

interface Props {
  onAdd: (text: string) => void;
}

export default function Form({ onAdd }: Props) {
  const [text, setText] = useState("");

  const textInput = useRef<TextInput>(null);

  const handleChangeText = (text: string) => setText(text);

  const handleSubmit = () => {
    onAdd(text);
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
