import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";
import { Link, useNavigate } from "react-router-dom";

function TrendingProducts() {


  let navigate = useNavigate();

     function navigateToShop(){
    navigate('/shop');
  }
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
    <>
      <h2 className="text-lg font-semibold text-[#202435] uppercase tracking-tight mb-4 mt-10">
        Trending Search
      </h2>
      <div className="mt-4 w-full bg-white border border-[#D9D9E9] rounded-lg p-4">
        <div className="space-y-4">
          {products?.map((p) => (
            <Link to={`/productdetails/${p.id}`}
             key={p.id}
             onClick={navigateToShop}
            className="flex items-center gap-3 cursor-pointer">
              <img
                src={p.image_url}
                alt={p.name}
                className="w-20 h-20 object-contain rounded"
              />

              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-[#202435] line-clamp-2 max-w-[180px]">
                  {p.name}
                </h3>

                <div className="mt-1 flex items-center gap-2">
                  {p.old_price && (
                    <span className="line-through text-gray-400 text-xs">
                      ${p.old_price}
                    </span>
                  )}
                  <span className="text-[#D51243] font-bold text-sm">
                    ${p.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrendingProducts;
