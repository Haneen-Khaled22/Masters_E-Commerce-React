import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";
import { Link, useNavigate } from "react-router-dom";
import ProductDetailsModal from "../ProductDetails/ProductDetails";


function TrendingProducts() {


  const[loading,setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  let navigate = useNavigate();

     function navigateToShop(){
    navigate('/shop');
  }
  const [products, setProducts] = useState([]);

  const getTrendingProducts = async () => {
    setLoading(true);
    let { data, error } = await supabase.from("products").select("*").gte("price", 20)
    .limit(5);
    setLoading(false)

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
      {loading ? <div className="flex justify-center items-center min-h-screen">
    <span className="loader"></span>
  </div> :
      <div className="mt-4 w-full bg-white border border-[#D9D9E9] rounded-lg p-4">
        <div className="space-y-4">
          {products?.map((p) => (
            <div
            onClick={() => setSelectedProduct(p.id)} 
             key={p.id}
             
            className="flex items-center gap-3 cursor-pointer">
              <img
                src={p.image}
                alt={p.name}
                className="w-20 h-20 object-contain rounded"
              />

              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-[#202435] line-clamp-2 max-w-[180px]">
                  {p.name}
                </h3>

                <div className="mt-1 flex items-center gap-2">
                  {p.discount_price && (
                    <span className="line-through text-gray-400 text-xs">
                      ${p.discount_price}
                    </span>
                  )}
                  <span className="text-[#D51243] font-bold text-sm">
                    ${p.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
           {selectedProduct && (
        <ProductDetailsModal
          productId={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
        </div>
      </div>
      
      }
        
    </>
  );
}

export default TrendingProducts;
