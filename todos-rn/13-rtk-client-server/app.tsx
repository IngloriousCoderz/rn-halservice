import Form from "./form";
import Header from "./header";
import List from "./list";

interface Props {
  name: string;
}

export default function App({ name }: Props) {
  return (
    <>
      <Header name={name} />
      <Form />
      <List />
    </>
  );
}
