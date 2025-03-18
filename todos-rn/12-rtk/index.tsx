import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Hello world!</Text>
      <Link href="/login">Login</Link>
      <Link href="/todo-list">Todo List</Link>
    </View>
  );
}
