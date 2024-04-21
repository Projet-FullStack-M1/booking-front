import Homepage from "./pages/homepage/homepage";
import Layout from "./pages/layout/layout";
import Listpage from "./pages/listpage/listpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Singlepage from "./pages/singlepage/singlepage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/list", element: <Listpage /> },
        { path: "/list/:id", element: <Singlepage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
