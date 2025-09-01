import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";

function TrendingProducts() {
  const [products, setProducts] = useState([]);

  const getTrendingProducts = async () => {
    let { data, error } = await supabase.from("trending_products").select("*");

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
          Trending Search
        </h2>
      </div>

      <div className="space-y-5 border border-[#D9D9E9] rounded pt-4">
        {products?.map((p) => (
          <div key={p.id} className={`flex items-center gap-2 pb-2 `}>
            <img
              src={p.image_url}
              alt={p.name}
              className="w-20 h-20 object-contain rounded"
            />

            <div className="flex flex-col">
              <h3 className="text-sm font-semibold text-[#202435] line-clamp-3 max-w-36">
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
