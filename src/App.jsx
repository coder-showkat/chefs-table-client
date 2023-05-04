import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Main from "./layouts/Main";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Recipes from "./pages/PrivateRoute/Recipes";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/recipes/:chef",
        element: (
          <PrivateRoute>
            <Recipes />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/api/recipes/${params.chef}`),
      },
      {
        path: "/blog",
        element: <Blogs />,
        loader: () => fetch("http://localhost:5001/api/blogs"),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
