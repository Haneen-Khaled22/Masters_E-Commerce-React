import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";
import { Link } from "react-router-dom";

function NewProducts() {
  const [NewProducts, setNewProducts] = useState([]);

  async function getNewProducts() {
    let { data, error } = await supabase.from("products").select("*");

    if (error) {
      console.error("Error fetching products:", error.message);
      return [];
    }
    return data;
  }

  useEffect(() => {
    async function fetchData() {
      const result = await getNewProducts();
      setNewProducts(result);
      //   console.log("result:", result);
    }
    fetchData();
  }, []);

  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold mt-3">New Products</h1>
          <p className="text-gray-400 text-sm mb-3">
            New products with updated stocks.
          </p>
        </div>
        <div>
          <Link to="/shop">
            <button className="group flex items-center gap-2 px-5 py-2 text-[#9B9BB4] border border-[#D9D9E9] rounded-full hover:bg-[#D9D9E9] hover:text-[#202435] transition cursor-pointer text-[12px] font-medium font-['Inter'] leading-[18px] -tracking-[0.1px]">
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      <div className="grid gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-gray-200 rounded-lg">
        {NewProducts.map((p) => (
          <div
            key={p.id}
            className={`bg-white relative flex flex-col h-[350px] px-3 pt-5 justify-between 
              border-r border-b border-gray-200`}
          >
            {p.offer && (
              <div className="absolute top-4 left-2 bg-[#35AFA0] text-white text-xs font-bold px-2 py-1 rounded">
                {p.offer}%
              </div>
            )}

            <div className="flex flex-col flex-grow space-y-2">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-36 object-contain mx-auto"
              />

              <h2 className="text-sm mt-4 mb-1 line-clamp-2  min-h-[2rem] font-semibold">
                {p.name}
              </h2>

              <p
                className={`text-xs font-bold ${
                  p.stock > 0 ? "text-[#00B853]" : "text-[#D51243]"
                }`}
              >
                {p.stock > 0 ? `${p.stock} IN STOCK` : "OUT OF STOCK"}
              </p>

              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < p.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.23 3.78a1 1 0 00.95.69h3.98c.969 0 1.371 1.24.588 1.81l-3.222 2.34a1 1 0 00-.364 1.118l1.23 3.78c.3.921-.755 1.688-1.54 1.118l-3.222-2.34a1 1 0 00-1.175 0l-3.222 2.34c-.784.57-1.838-.197-1.539-1.118l1.23-3.78a1 1 0 00-.364-1.118L2.3 9.207c-.783-.57-.38-1.81.588-1.81h3.98a1 1 0 00.95-.69l1.23-3.78z" />
                  </svg>
                ))}
                <span className="ml-1 text-xs text-[#71778E]">
                  {p.review} review
                </span>
              </div>

              <div className="mt-1">
                {p.discount_price && (
                  <span className="line-through text-gray-400 text-sm mr-2">
                    ${p.discount_price}
                  </span>
                )}
                <span className="text-[#D51243] font-bold">${p.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewProducts;
