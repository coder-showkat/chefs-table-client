import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Main from "./layouts/Main";
import Blogs from "./pages/Blogs";
import FavoriteRecipes from "./pages/FavoriteRecipes";
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
          fetch(
            `https://chefs-table-server-dun.vercel.app/api/recipes/${params.chef}`
          ),
      },
      {
        path: "/blog",
        element: <Blogs />,
        loader: () =>
          fetch("https://chefs-table-server-dun.vercel.app/api/blogs"),
      },
      {
        path: "/favorite-recipe",
        element: <FavoriteRecipes />,
        loader: () =>
          fetch("https://chefs-table-server-dun.vercel.app/api/chef"),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
