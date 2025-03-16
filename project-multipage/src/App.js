import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RouteLayout from "./pages/RouteLayout";
import Error from "./pages/Error";
import ProductsDetails from "./pages/ProductsDetails";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductsDetails /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
