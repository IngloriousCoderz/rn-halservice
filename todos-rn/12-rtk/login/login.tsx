import { Button, Text, TextInput, View, StyleSheet } from "react-native";

interface Props {
  username: string;
  password: string;
  onUsernameChange: (username: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: () => void;
}

export default function Login({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
}: Props) {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={onUsernameChange}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={onPasswordChange}
      />
      <Button title="Login" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 16,
    gap: 16,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    // flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});
