import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import User from "./routes/user";  
import Users from "./routes/users";
import ErrorPage from "./error-page";
import "./index.css";
import Posts from "./routes/posts";
import Post from "./routes/post";
import Spline from "./routes/splinegame";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/users",
//     element: <Users />,
//   },
//   {
//     path: "/users/:userId",
//     element: <User />,
//   },
//   {
//     path: "/posts",
//     element: <Posts />,
//   },
//   {
//     path: "/posts/:postId",
//     element: <Post />,
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
   
      <Route>
        <Route path="/" element={<App />} errorElement={<ErrorPage />}>
          <Route path="splinegame" element={<Spline />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<User />} />
          <Route path="posts" element={< Posts />} />
          <Route path="posts/:postId" element={<Post />} />
        </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);