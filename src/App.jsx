import React from "react";
import Header from "./components/header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import HomePage from "./pages/home";
import PackageForm from "./pages/packageform";
import NewPackage from "./pages/newpackage";
import Map from "./components/map";
import CalculateRoute from "./components/map";
import ManageOrder from "./pages/manageOrder";
import ManageConfirmOrder from "./pages/manageConfirmOrder";

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
        {
          path: "/manageorder",
          element: <ManageOrder />,
        },
        {
          path: "/manageconfirmorder",
          element: <ManageConfirmOrder />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
