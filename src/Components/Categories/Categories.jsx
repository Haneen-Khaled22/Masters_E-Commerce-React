import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    let { data, error } = await supabase.from("categories").select("*");
    if (error) {
      console.log("error fetching categories", error.message);
      return [];
    }
    return data;
  }

  useEffect(() => {
    async function fetchData() {
      let result = await getCategories();
      console.log("category result :", result);
      setCategories(result);
    }
    fetchData();
  }, []);

  return (
    <div className="mt-5 flex justify-center px-2">
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden w-full max-w-7xl">
        
        {/* ✅ Mobile view (list style) */}
        <div className="grid grid-cols-1 gap-3 p-3 md:hidden">
          {categories.map((cat) => (
            <Link
            to={`/categorydetails/${cat.id}`}  
              key={cat.id}
              className="flex items-center gap-4 border-b border-gray-200 pb-2 cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-12 w-12 object-contain"
              />
              <div>
                <h2 className="text-gray-800 font-semibold text-sm line-clamp-1">
                  {cat.name}
                </h2>
                <p className="text-gray-500 text-xs">{cat.items} Items</p>
              </div>
            </Link>
          ))}
        </div>

        {/* ✅ Tablet & Desktop view (grid style) */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((cat, index) => (
            <Link
             to={`/categorydetails/${cat.id}`}
              key={cat.id}
              className={`border-b border-r border-gray-200 flex cursor-pointer ${
                index === 0
                  ? "p-4 flex-col items-center justify-center text-center row-span-2"
                  : "items-center gap-4 p-4"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className={`object-contain ${
                  index === 0
                    ? "h-28 w-28 lg:h-32 lg:w-32"
                    : "h-16 w-16 lg:h-20 lg:w-20"
                }`}
              />
              <div className={`${index === 0 ? "" : "flex flex-col flex-1"}`}>
                <h2 className="text-gray-800 font-semibold text-sm lg:text-base line-clamp-2 min-h-[2.5rem]">
                  {cat.name}
                </h2>
                <p className="text-gray-500 text-xs lg:text-sm">
                  {cat.items} Items
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Categories;
