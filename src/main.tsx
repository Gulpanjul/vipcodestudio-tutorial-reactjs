import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import LoginPage from "./pages/login.tsx";
import RegisterPage from "./pages/register.tsx";
import ErrorPage from "./pages/404.tsx";
import ProductPage from "./pages/products.tsx";
import ProfilePage from "./pages/profile.tsx";
import DetailProductPage from "./pages/detailProduct.tsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Layouts/Navbar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
