import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./Components/layout/Layout";
import Home from "./Components/home/Home";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from "./Components/about/About";
import Shop from "./Components/shop/Shop";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Checkout from "./Components/Checkout/Checkout";
import NotFound from "./Components/NotFound/NotFound";
import "flowbite";

// ✅ استدعاء الـ Context
// import {  } from "./context/AuthContext";
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

import CategoryDetails from "./Components/CategoryDetails/CategoryDetails";
import ProductDetailsModal from "./Components/ProductDetails/ProductDetails";
import { LanguageProvider } from "./Context/LanguageContext";
import Wishlist from "./Components/WishList/wishlist";
import { WishListProvider } from "./Context/WishListContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "aboutus", element: <About /> },
        { path: "shop", element: <Shop /> },
        { path: "blog", element: <Blog /> },
        { path: "contact", element: <Contact /> },
        { path: "productdetails/:id", element: <ProductDetailsModal /> },
        { path: "categorydetails/:id", element: <CategoryDetails /> },
        { path: "blog", element: <Blog /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "checkout", element:<ProtectedRoute><Checkout /></ProtectedRoute>  },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <WishListProvider>
            <LanguageProvider>
              <RouterProvider router={router} />
            </LanguageProvider>
          </WishListProvider>
          <Toaster />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
