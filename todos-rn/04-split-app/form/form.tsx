import { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import Button from "@/components/button";

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
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleChangeText}
        placeholder="What next?"
        autoFocus
        onSubmitEditing={handleSubmit}
        submitBehavior="submit"
        ref={textInput}
      />
      <Button isEnabled={!!text.length} onPress={handleSubmit}>
        Add
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
