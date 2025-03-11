import { useRef, useState } from "react";
import { TextInput } from "react-native";

interface Options {
  onAdd: (text: string) => void;
}

export function useForm({ onAdd }: Options) {
  const [text, setText] = useState("");

  const textInput = useRef<TextInput>(null);

  const handleChangeText = (text: string) => setText(text);

  const handleSubmit = () => {
    onAdd(text);
    setText("");
    textInput.current?.focus();
  };

  return {
    text,
    onChangeText: handleChangeText,
    onSubmit: handleSubmit,
    textInput,
  };
}
