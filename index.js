import ReactDOM from "react-dom/client";
import AppLayout from "./src/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./src/Home";
import Login from "./src/components/auth/Login";
import Register from "./src/components/auth/Register";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
