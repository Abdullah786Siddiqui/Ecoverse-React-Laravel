// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import Products from "./pages/Products/products.jsx";
import DetailProduct from "./pages/Detail-Product/detailProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products/:subcategory_id", element: <Products /> },
      { path: "/detailproducts/:product_id", element: <DetailProduct /> }
      ,
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>
);
