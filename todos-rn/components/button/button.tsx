import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

interface Props {
  children: React.ReactNode;
  isEnabled?: boolean;
  onPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export default function Button({ children, isEnabled = true, onPress }: Props) {
  return (
    <Pressable
      disabled={!isEnabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        !isEnabled && styles.disabled,
        pressed && styles.btnPressed,
      ]}
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
    borderBottomColor: "grey",
    borderRightColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  disabled: {
    opacity: 0.5,
  },
  btnPressed: {
    backgroundColor: "#A1A1A1",
    borderTopColor: "grey",
    borderLeftColor: "grey",
    borderBottomColor: "white",
    borderRightColor: "white",
  },
});
