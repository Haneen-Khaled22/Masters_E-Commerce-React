import { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Components/layout/Layout';
import Home from './Components/home/Home';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from './Components/about/About';
import Shop from './Components/shop/Shop';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import 'flowbite';

// ✅ استدعاء الـ Context
// import {  } from "./context/AuthContext";
import {AuthProvider} from "./Context/AuthContext";
import {CartProvider} from "./Context/CartContext";
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  let router = createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {index:true,element:<Home/>},
        {path:"login",element:<Login/>},
        {path:"register",element:<Register/>},
        {path:"about",element:<About/>},
        {path:"shop",element:<Shop/>},
        {path:"blog",element:<Blog/>},
        {path:"contact",element:<Contact/>},
        {path:"productdetails",element:<ProductDetails/>},
        {path:"*",element:<NotFound/>},

      ]
    }
  ])
  

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
          <Toaster />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
