interface ButtonProps {
  classname?: string;
  children?: React.ReactNode;
}

const Button = ({ children, classname = "bg-black" }: ButtonProps) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
