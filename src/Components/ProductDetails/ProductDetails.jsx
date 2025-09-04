import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { supabase } from "../../Helper/supabase-client";


function ProductDetailsModal({ productId, onClose }) {
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", productId)
        .single();

      if (!error) {
        setProduct(data);

        // 🟢 منتجات مشابهة من نفس الفئة
        const { data: relatedData } = await supabase
          .from("products")
          .select("*")
          .eq("category_id", data.category_id)
          .neq("id", data.id)
          .limit(6);

        setRelated(relatedData || []);
      }
    };

    if (productId) fetchProduct();
  }, [productId]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-4xl w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 🟢 صور المنتج مع Zoom */}
          <div>
            <Zoom>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg"
              />
            </Zoom>

            {/* 🟢 Slider لصور إضافية */}
            {product.images && product.images.length > 0 && (
              <Swiper
                spaceBetween={10}
                slidesPerView={3}
                className="mt-4"
              >
                {product.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`product-${idx}`}
                      className="w-full h-24 object-cover rounded cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          {/* 🟢 تفاصيل المنتج */}
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-xl text-[#35AFA0] font-semibold mt-4">
              ${product.price}
            </p>
            <p
              className={`mt-2 ${
                product.stock? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock ? "In stock" : "Out of stock"}
            </p>

            <button className="mt-4 px-6 py-2 bg-[#35AFA0] text-white rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>

        {/* 🟢 منتجات مشابهة */}
        {related.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Related Products</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <div
                  key={r.id}
                  className="border rounded-lg p-2 cursor-pointer hover:shadow"
                  onClick={() => (window.location.href = `/product/${r.id}`)}
                >
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-32 object-cover rounded"
                  />
                  <h4 className="font-semibold mt-2 text-sm">{r.name}</h4>
                  <p className="text-gray-500 text-sm">${r.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailsModal;
