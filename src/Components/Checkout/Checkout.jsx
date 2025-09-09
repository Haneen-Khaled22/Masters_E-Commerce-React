import React, { useEffect, useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import { supabase } from "../../Helper/supabase-client";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

function Checkout() {
  const { cart, total,removeFromCart,plus,minus } = useCart();
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Track login state
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check current session
    const checkSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error.message);
      }

      setUser(session?.user || null);
    };

    checkSession();

    // Listen to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    async function fetchCartProductsInfo() {
      try {
        let idsArray = cart.map((item) => item.id);
        const { data } = await supabase
          .from("products")
          .select("*")
          .in("id", idsArray);
        setAllProducts(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    if (cart.length > 0) {
      fetchCartProductsInfo();
    } else {
      setLoading(false);
    }
    
  }, [cart]);

  const subtotal = total;
  const finalTotal = subtotal; // no shipping added

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-8 px-2 sm:px-4 md:px-8 lg:px-12">
      <div className="w-full lg:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mt-6">
        {/* LEFT SIDE - FORM */}
        <div className="space-y-8 lg:space-y-10 lg:border-r border-gray-300 lg:pr-8">
          {/* Contact Section */}
          <div>
            <div className="flex items-center justify-between mb-4 mt-8">
              <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>

              {/* ✅ Show login link only if NOT logged in */}
              {!user ? (
                <Link
                  to="/login"
                  className="text-blue-500 text-sm font-semibold underline hover:text-blue-700"
                >
                  Log in
                </Link>
              ) : (
                <span className="text-gray-500 text-sm">You are logged in</span>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Email or mobile phone number"
                className="w-full border border-blue-500 px-4 py-2 rounded-md focus:outline-none focus:border-blue-700"
              />
            </div>
            <label className="flex items-center mt-2 text-sm text-gray-600">
              <input type="checkbox" />
              <span className="ml-2">Email me with news and offers</span>
            </label>
          </div>

          {/* Delivery Section */}
          <div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Delivery
              </h2>
              <div className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 bg-white">
                <p className="text-gray-400 text-sm">Country/Region</p>
                <p className="text-gray-800 font-medium">United States</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name (optional)"
                className="border border-gray-300 px-4 py-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 px-4 py-2 rounded-md mt-4"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full border border-gray-300 px-4 py-2 rounded-md mt-4"
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Postal code (optional)"
                className="border border-gray-300 px-4 py-2 rounded-md"
              />
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>
            <label className="flex items-center mt-4 text-sm text-gray-600">
              <input type="checkbox" />
              <span className="ml-2">Save this information for next time</span>
            </label>
          </div>

          {/* Shipping Method Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Shipping method
            </h2>
            <div className="w-full flex items-center justify-between px-4 py-2 rounded-md mb-6 bg-blue-50 border border-blue-600">
              <span>Standard</span>
              <span className="font-semibold text-black">FREE</span>
            </div>
          </div>

          {/* Payment Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Payment
            </h2>
            <p className="text-xs text-gray-500 mb-4">
              All transactions are secure and encrypted.
            </p>
            <div className="flex flex-col items-center justify-center mb-4 border border-gray-100 bg-gray-50 p-4 rounded">
              {/* Payment SVG Icon */}
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2"
              >
                <path
                  d="M44.0936 29.1082H5.33098C3.29177 29.1082 1.63867 30.7613 1.63867 32.8005V52.3278C1.63867 54.3671 3.29177 56.0202 5.33098 56.0202H44.0936C46.1329 56.0202 47.786 54.3671 47.786 52.3278V32.8005C47.786 30.7613 46.1329 29.1082 44.0936 29.1082Z"
                  fill="#FAFAFA"
                  stroke="#B3B3B3"
                  strokeWidth="3.28205"
                />
              </svg>
              <p className="text-gray-500 text-center">
                This store can't accept payments right now.
              </p>
            </div>
            <button
              className="w-full py-2 border border-gray-100 bg-gray-50 text-gray-500 rounded font-semibold cursor-not-allowed"
              disabled
            >
              Pay now
            </button>
          </div>

          {/* Privacy Policy Link */}
          <div className="text-xs mt-6 text-blue-500 hover:text-blue-700 underline cursor-pointer">
            Privacy policy
          </div>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
              <div>
                <div className="text-2xl font-semibold text-gray-800">Your Cart</div>
        {cart.length > 0? <div className="space-y-6">
       
          {
          allProducts?.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            if (!cartItem) return null;
            return(
              
            <div key={product.id} className="flex items-center gap-4 mb-6 mt-8">
              <div
                className="relative border border-gray-200 p-4 rounded-md"
                style={{
                  boxShadow:
                    "inset 0 5px 5px -4px rgba(0, 0, 0, 0.15), inset 0 -5px 5px -4px rgba(0, 0, 0, 0.15)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-contain rounded-md"
                />
                <div className="absolute top-[-8px] left-[-8px] bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {cart.find((item) => item.id === product.id)?.quantity || 0}
                </div>
              </div>
              <span className="truncate flex-1">{product.name}</span>
              <div className="text-sm flex gap-2 justify-end">
                <button className="size-8 flex justify-center items-center rounded-md bg-brand-grey hover:opacity-80 transition-all duration-300"
                onClick={()=>{minus(product.id)}}><i className="fa-solid fa-minus"></i></button>
                <button className="size-8 flex justify-center items-center rounded-md bg-brand-grey hover:opacity-80 transition-all duration-300"
                onClick={()=>{plus(product.id,product.price)}}><i className="fa-solid fa-plus"></i></button>
                <button className="py-2 px-4 bg-brand-red rounded-md text-white uppercase font-semibold tracking-wider hover:opacity-80 transition-all duration-300"
                onClick={()=>{removeFromCart(product.id)}}>Remove</button>
              </div>
              <p className="font-semibold text-sm w-8 text-gray-800">
                $
                {(
                  product.price *
                  cart.find((item) => item.id === product.id).quantity
                ).toFixed(2)}
              </p>
            </div>
            );
})}

          {/* Summary totals */}
          <div className="pt-6 space-y-2 text-sm">
            <div className="flex justify-between mb-2">
              <span>
                Subtotal <span className="ml-2">{cart.length} items</span>
              </span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span className="font-semibold text-black">FREE</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-5">
              <span>Total</span>
              <span>
                <span className="text-sm text-gray-500">USD</span> $
                {finalTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Including $2.46 in taxes</span>
            </div>
          </div>
        </div>: <div className=" mt-12">No products in the cart yet</div>}

              </div>
                 
      </div>
    </div>
  );
}

export default Checkout;
