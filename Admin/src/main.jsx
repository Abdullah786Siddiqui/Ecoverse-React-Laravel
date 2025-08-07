// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import Adminhome from "./subComponents/Dashboard/Adminhome.jsx";
import ProductList from "./pages/Products/productlist.jsx";
import AddProduct from "./pages/Products/addProduct.jsx";
import UpdateProduct from "./pages/Products/updateProduct.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          {
            path: "/",
            element: <Adminhome />,
          },
          {
            path: "/productlist",
            element: <ProductList />,
          },
          {
            path: "/addProduct",
            element: <AddProduct />,
          },
           {
            path: "/updateProduct/:product_id",
            element: <UpdateProduct />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
