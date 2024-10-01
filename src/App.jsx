import React from "react";
import Header from "./components/header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import HomePage from "./pages/home";
import PackageForm from "./pages/packageform";
import NewPackage from "./pages/newpackage";
import Map from "./components/map";
import CalculateRoute from "./components/map";

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
        {
          path: "/calculateroute",
          element: <CalculateRoute />,
        },
        {
          path: "/newpackage",
          element: <NewPackage />,
        },
        {
          path: "/map",
          element: <Map />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
