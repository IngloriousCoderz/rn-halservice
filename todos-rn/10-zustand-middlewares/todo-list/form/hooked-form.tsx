import FormComponent from "./form";
import { useForm } from "@/hooks/use-form";

interface Props {
  onAdd: (text: string) => void;
}

export default function Form(props: Props) {
  const innerProps = useForm(props);

  return <FormComponent {...innerProps} />;
}
