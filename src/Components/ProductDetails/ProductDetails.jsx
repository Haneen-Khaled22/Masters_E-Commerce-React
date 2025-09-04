import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";

function ProductDetailsModal({ productId, product, onClose }) {
  const [productData, setProductData] = useState(product || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      if (productId && !product) { // لو جايب id بس
        setLoading(true);
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", productId)
          .single();
        setLoading(false);

        if (error) {
          console.error("Error fetching product:", error.message);
        } else {
          setProductData(data);
        }
      }
    }
    fetchProduct();
  }, [productId, product]);

  if (loading) {
    return <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <span className="loader"></span>
    </div>;
  }

  if (!productData) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-5 rounded-lg max-w-md w-full">
        <h2 className="text-lg font-bold">{productData.name}</h2>
        <p className="text-gray-600 mb-2">Price: ${productData.price}</p>
        <img src={productData.image} alt={productData.name} className="w-40 h-40 object-contain mx-auto" />
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
