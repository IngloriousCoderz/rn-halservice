import App from "./app";

export default function Index({ name = "User" }) {
  return <App name={name} />;
}
