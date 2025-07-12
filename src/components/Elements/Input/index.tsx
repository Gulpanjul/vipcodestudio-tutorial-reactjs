import Input from "./Input";
import Label from "./Label";

interface InputFormProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

const InputForm = ({ label, name, type, placeholder }: InputFormProps) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
      <br />
    </div>
  );
};

export default InputForm;
