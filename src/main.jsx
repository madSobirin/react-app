import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Book from "./pages/Book.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/books",
    element: <Book />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthLayout>
      <RouterProvider router={router} />
    </AuthLayout>
  </StrictMode>
);
