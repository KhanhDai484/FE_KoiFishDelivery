import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import HomePage from "./pages/home";
import PackageForm from "./pages/packageform";
import NewPackage from "./pages/newpackage";
import Map from "./components/map";
import CalculateRoute from "./components/map";
import RegisterPage from "./pages/register/register";
import Header from "./components/header"; // Đảm bảo Header được import

const Layout = () => {
  return (
    <>
      <Header /> {/* Đảm bảo Header luôn hiển thị */}
      <div className="content">
        <Outlet /> {/* Outlet dùng để hiển thị các trang con */}
      </div>
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Layout bao gồm Header và Outlet
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
          path: "/register", // Trang Register
          element: <RegisterPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
