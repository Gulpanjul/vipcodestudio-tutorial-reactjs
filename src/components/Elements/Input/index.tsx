import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

interface InputFormProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  (props: InputFormProps, ref) => {
    const { label, name, type, placeholder } = props;
    return (
      <div className="mb-6">
        <Label htmlFor={name}>{label}</Label>
        <Input name={name} type={type} placeholder={placeholder} ref={ref} />
        <br />
      </div>
    );
  }
);

export default InputForm;
