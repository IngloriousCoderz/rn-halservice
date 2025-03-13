import { RefObject } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import Button from "@/components/button";

interface Props {
  text: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  textInput: RefObject<TextInput>;
}

export default function Form({
  text,
  onChangeText,
  onSubmit,
  textInput,
}: Props) {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder="What next?"
        autoFocus
        onSubmitEditing={onSubmit}
        submitBehavior="submit"
        ref={textInput}
      />
      <Button isEnabled={!!text.length} onPress={onSubmit}>
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
