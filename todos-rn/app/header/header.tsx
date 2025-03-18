import { StyleSheet, Text, View } from "react-native";

interface Props {
  name: string;
}

export default function Header({ name }: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{name}'s Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 8,
  },
});
