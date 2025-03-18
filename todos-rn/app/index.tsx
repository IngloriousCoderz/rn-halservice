import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Form, Field } from "react-final-form";

interface Values {
  username: string;
  password: string;
}

interface Errors {
  username?: string;
  password?: string;
}

export default function Index() {
  const handleSubmit = (values: Values) => console.log(values);

  const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.username) {
      errors.username = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  return (
    <Form
      onSubmit={handleSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <View style={styles.form}>
          <Text style={styles.title}>Login</Text>
          <Field name="username">
            {({ input, meta }) => (
              <>
                <TextInput
                  placeholder="Username"
                  style={styles.input}
                  {...input}
                />
                {meta.touched && <Text style={styles.error}>{meta.error}</Text>}
              </>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <>
                <TextInput
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.input}
                  {...input}
                />
                {meta.touched && <Text style={styles.error}>{meta.error}</Text>}
              </>
            )}
          </Field>
          <Button title="Login" onPress={handleSubmit} />
        </View>
      )}
    />
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
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  error: {
    color: "red",
  },
});
