import React from "react";
import Header from "./components/header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import HomePage from "./pages/home";
import PackageForm from "./pages/packageform";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/packageform",
          element: <PackageForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
