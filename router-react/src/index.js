import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersList from "./routes/userslist";
import ErrorPage from "./error-page";
import UserDetail from "./routes/userdetail";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/userslist",
    element: <UsersList />,
  },
  {
    path: "/users",
    element: <h1>No bueno!</h1>,
  },
  {
    path: "/users/:details",
    element: <UserDetail />,
  }
  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
