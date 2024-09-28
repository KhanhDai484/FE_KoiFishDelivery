import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import HomePage from "./pages/home";
import RegisterPage from "./pages/register/register";
import Header from "./components/header"; // Đảm bảo Header luôn hiển thị

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Outlet cho phép hiển thị các trang con */}
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Layout bao gồm Header và nội dung trang
      children: [
        {
          path: "/", // Trang Home
          element: <HomePage />,
        },
        {
          path: "/login", // Trang Login
          element: <Login />,
        },
        {
          path: "/register", // Trang Register
          element: <RegisterPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
