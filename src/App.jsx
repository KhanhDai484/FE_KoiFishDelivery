import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import HomePage from "./pages/home";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
