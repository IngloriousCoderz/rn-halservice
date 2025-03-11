import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

interface Props {
  children: React.ReactNode;

  onPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export default function Button({ children, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.btnPressed : styles.button)}
    >
      <Text>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D3D3D3",
    borderWidth: 1,
    borderTopColor: "white",
    borderLeftColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  btnPressed: {
    backgroundColor: "#A1A1A1",
    borderWidth: 1,
    borderBottomColor: "white",
    borderRightColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
