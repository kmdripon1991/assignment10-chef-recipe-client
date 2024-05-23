import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import RecipeLayout from "../layout/RecipeLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "../pages/Blog/Blog";
import BlogLayout from "../layout/BlogLayout";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://assignment10-chef-recipe-server.vercel.app/chef-recipe"
          ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "chef-recipe",
    element: <RecipeLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment10-chef-recipe-server.vercel.app/chef-recipe/${params.id}`
          ),
      },
    ],
  },
  {
    path: "blog",
    element: <BlogLayout />,
    children: [
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
