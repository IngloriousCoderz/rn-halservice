import { Provider } from "react-redux";
import App from "./app";
import { store } from "@/store/todo-list-slices";

export default function Index({ name = "User" }) {
  return (
    <Provider store={store}>
      <App name={name} />
    </Provider>
  );
}
