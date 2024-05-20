import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import RecipeLayout from "../layout/RecipeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=>fetch('http://localhost:5000/chef-recipe')
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "error",
        element: <Error></Error>,
      },
    ],
  },
  {
    path:'chef-recipe',
    element:<RecipeLayout/>,
    children:[
      {
        path:':id',
        element:<RecipeDetails/>,
        loader:({params})=>fetch(`http://localhost:5000/chef-recipe/${params.id}`)
      }
    ]
  }
]);

export default router;
