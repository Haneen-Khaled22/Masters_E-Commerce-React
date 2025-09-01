import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";

function TrendingProducts() {
  const [products, setProducts] = useState([]);

  const getTrendingProducts = async () => {
    let { data, error } = await supabase
      .from("trending_products")
      .select("*")
      .eq("is_active", true)
      .order("position", { ascending: true });

    if (error) {
      console.error("Error fetching trending products:", error.message);
      return;
    }
    setProducts(data);
  };

  useEffect(() => {
    getTrendingProducts();
  }, []);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-[#202435] uppercase tracking-tight">
          Trending Products
        </h2>
      </div>

      <div className="space-y-5">
        {products.map((p, index) => (
          <div
            key={p.id}
            className={`flex items-center gap-4 pb-5 ${
              index !== products.length - 1 ? "border-b border-[#EDEEF5]" : ""
            }`}
          >
            <img
              src={p.image_url}
              alt={p.name}
              className="w-20 h-20 object-contain rounded"
            />

            <div className="flex flex-col">
              <h3 className="text-sm font-medium text-[#3E445A] line-clamp-2">
                {p.name}
              </h3>

              <div className="mt-1">
                {p.old_price && (
                  <span className="line-through text-gray-400 text-xs mr-2">
                    ${p.old_price}
                  </span>
                )}
                <span className="text-[#D51243] font-bold text-sm">
                  ${p.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingProducts;
