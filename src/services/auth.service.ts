import axios from "axios";
import { jwtDecode } from "jwt-decode";

type User = {
  username: string;
  password: string;
};

export const login = (
  data: User,
  callback: (status: boolean, res) => void
) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const getUsername = (token: string) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};
