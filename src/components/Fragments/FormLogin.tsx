import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // localStorage.setItem(
    //   "email",
    //   (event.currentTarget.elements.namedItem("email") as HTMLInputElement)
    //     .value
    // );
    // localStorage.setItem(
    //   "password",
    //   (event.currentTarget.elements.namedItem("password") as HTMLInputElement)
    //     .value
    // );
    // window.location.href = "/products";
    const data = {
      username: (
        event.currentTarget.elements.namedItem("username") as HTMLInputElement
      ).value,
      password: (
        event.currentTarget.elements.namedItem("password") as HTMLInputElement
      ).value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="Jhon doe"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
