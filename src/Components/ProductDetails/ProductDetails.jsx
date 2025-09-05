import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";
import { useCart } from "../../Context/CartContext";

<<<<<<< HEAD
function ProductDetailsModal({ productId, onClose, setSelectedProduct }) {
  const { cart, addToCart, removeFromCart, clearCart, plus, minus, total } =
    useCart();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
=======
function ProductDetailsModal({ productId, product, onClose }) {
  const [productData, setProductData] = useState(product || null);
  const [loading, setLoading] = useState(false);
>>>>>>> d8cf3f6eb2e0b665e1d7ba400aa3538839f2eef1

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

<<<<<<< HEAD
  if (!product) return null;
  const isInCart = cart.some((item) => item.id === product.id);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div
        className="bg-black opacity-50 absolute inset-0"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-sm max-h-[90vh] overflow-auto p-6 max-w-4xl w-full relative products-modal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-black"
=======
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
>>>>>>> d8cf3f6eb2e0b665e1d7ba400aa3538839f2eef1
        >
          Close
        </button>
<<<<<<< HEAD

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
              <Swiper spaceBetween={10} slidesPerView={3} className="mt-4">
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
            <h2 className=" text-base sm:text-lg md:text-2xl font-medium mt-4">
              {product.name}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-brand-main font-bold mt-4">
              ${product.price}
            </p>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p
              className={`mt-2 text-xs md:text-sm uppercase font-semibold ${
                product.stock ? "text-brand-green" : "text-brand-red"
              }`}
            >
              {product.stock ? "In stock" : "Out of stock"}
            </p>
            <div className="flex justify-center items-center gap-3 mt-4  bg-brand-grey rounded-sm">
              <span
                className="flex-1 flex justify-end items-center text-base sm:text-xl py-3 px-2 rounded-l-sm transition-all duration-200 bg-brand-grey hover:bg-brand-light"
                onClick={() => {
                  minus(product.id);
                }}
              >
                <i className="fa-solid fa-minus"></i>
              </span>
              <span className="block font-semibold text-base sm:text-xl">
                {isInCart
                  ? cart.find((item) => item.id === product.id).quantity
                  : 0}
              </span>
              <span
                className="flex-1 flex justify-start items-center text-base sm:text-xl py-3 px-2 rounded-r-sm transition-all duration-200 bg-brand-grey hover:bg-brand-light"
                onClick={() => {
                  plus(product.id, product.price);
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
            <button
              className={`mt-4 py-2 w-full bg-brand-main ${
                isInCart ? "hover:bg-brand-red" : "hover:bg-brand-green"
              } text-white rounded-sm block transition-all duration-300`}
              onClick={() => {
                isInCart
                  ? removeFromCart(product.id)
                  : addToCart(product.id, product.price);
              }}
            >
              <i className="fa-solid fa-bag-shopping"></i>{" "}
              {isInCart ? "Remove from" : "Add to"} Cart
            </button>
          </div>
        </div>

        {/* 🟢 منتجات مشابهة */}
        {related.length > 0 && (
          <div className="mt-6">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">
              Related Products
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {related.map((r) => (
                <div
                  key={r.id}
                  className="rounded-lg p-2 cursor-pointer hover:shadow-2xl relative"
                  onClick={() => setSelectedProduct(r.id)}
                >
                  <div className="relative">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="block relative mx-auto h-32 object-cover rounded"
                    />
                    {r.discount_price ? (
                      <span className="absolute top-1 left-1 bg-brand-main text-white text-xs rounded-xl uppercase py-1 px-2">
                        on sale
                      </span>
                    ) : null}
                    <span className="absolute right-1 bottom-1 text-white bg-brand-main p-1 text-xs rounded-full size-6 flex justify-center items-center">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </div>
                  <p className="text-brand-main text-sm">
                    <span className="line-through text-brand-light">
                      ${r.discount_price}
                    </span>{" "}
                    ${r.price}
                  </p>
                  <h4 className="font-semibold text-sm">{r.name}</h4>
                </div>
              ))}
            </div>
          </div>
        )}
=======
>>>>>>> d8cf3f6eb2e0b665e1d7ba400aa3538839f2eef1
      </div>
    </div>
  );
}

export default ProductDetailsModal;
