import React, { useEffect, useState } from "react";
import { useCart } from "../../Context/CartContext";
import { supabase } from "../../Helper/supabase-client";

function Checkout() {
  const { cart, total } = useCart();
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    async function fetchCartProductsInfo() {
      try {
        let idsArray = cart.map((item) => item.id);
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .in("id", idsArray);
        setAllProducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCartProductsInfo();
  }, []);
  const subtotal = total;
  const finalTotal = subtotal; // no shipping added

  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 mt-20">
        {/* LEFT SIDE - FORM */}
        <div className="space-y-10 border-r border-gray-300 pr-8">
          {/* Contact Section */}
          <div>
            <div className="flex items-center justify-between mb-4 mt-8">
              <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
              <a
                href="#"
                className="text-blue-500 text-sm font-semibold underline hover:text-blue-700"
              >
                Log in
              </a>
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Delivery
            </h2>
            <div className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 bg-white">
              <p className="text-gray-400 text-sm">Country/Region</p>
              <p className="text-gray-800 font-medium">United States</p>
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
        <div className="space-y-6">
          {allProducts.map((product) => (
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
                  {cart.find((item) => item.id === product.id).quantity}
                </div>
              </div>
              <span>{product.name}</span>
              <div className="flex-1 text-sm">
                <p className="font-medium text-gray-800">{product.title}</p>
              </div>
              <p className="font-semibold text-sm text-gray-800">
                $
                {(
                  product.price *
                  cart.find((item) => item.id === product.id).quantity
                ).toFixed(2)}
              </p>
            </div>
          ))}

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
        </div>
      </div>
    </div>
  );
}

export default Checkout;
