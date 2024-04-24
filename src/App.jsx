import Homepage from "./pages/homepage/homepage";
import Layout from "./pages/layout/layout";
import Listpage from "./pages/listpage/listpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Singlepage from "./pages/singlepage/singlepage";
import Login from "./pages/auth/Login/login";
import Register from "./pages/auth/register/register";
import Contact from "./pages/contact/contact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/list", element: <Listpage /> },
        { path: "/list/:id", element: <Singlepage /> },
        { path: "/auth/login", element: <Login /> },
        { path: "/auth/register", element: <Register /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
