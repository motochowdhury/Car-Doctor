import { createBrowserRouter } from "react-router-dom";
import Auth from "../layout/Auth";
import Main from "../layout/Main";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home/Home";
import Orders from "../pages/Orders";
import RequireAuth from "./RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkout/${params.id}`),
        element: (
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        ),
      },
      {
        path: "/orders",
        element: (
          <RequireAuth>
            <Orders />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "",
    element: <Auth />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
