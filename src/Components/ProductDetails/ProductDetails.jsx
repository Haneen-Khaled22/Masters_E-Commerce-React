import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";
import { useCart } from "../../Context/CartContext";
import { useWishList } from "../../Context/WishListContext";
import Zoom from "react-medium-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "react-medium-image-zoom/dist/styles.css";


function ProductDetailsModal({ productId, product, onClose }) {
  const [productData, setProductData] = useState(product || null);
  const [loading, setLoading] = useState(false);
  const [related, setRelated] = useState([]);
  const { cart, addToCart, removeFromCart, plus, minus } = useCart();
  const { addToWishList, removeFromWishList, wishList } = useWishList();
  const isInCart = (id) => cart.some((item) => item.id === id);
  const isInWishlist = (id) => wishList.some((item) => item.id === id);
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

  useEffect(() => {
    async function fetchRelatedProducts() {
      if (productData) {
        const { data: relatedData } = await supabase
          .from("products")
          .select("*")
          .eq("category_id", productData.category_id)
          .neq("id", productData.id)
          .limit(6);
          setRelated(relatedData || []);
        
        }
      }
      fetchRelatedProducts();
  }, [productData]);

  if (loading) {
    return <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <span className="loader"></span>
    </div>;
  }

  if (!productData) return null;

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
        >
          ✖
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 🟢 صور المنتج مع Zoom */}
          <div>
            <Zoom>
              <img
                src={productData.image}
                alt={productData.name}
                className="w-full h-80 object-cover rounded-lg"
              />
            </Zoom>

            {/* 🟢 Slider لصور إضافية */}
            {productData.images && productData.images.length > 0 && (
              <Swiper spaceBetween={10} slidesPerView={3} className="mt-4">
                {productData.images.map((img, idx) => (
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
              {productData.name}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-brand-main font-bold mt-4">
              ${productData.price}
            </p>
            <p className="text-gray-600 mt-2">{productData.description}</p>
            <p
              className={`mt-2 text-xs md:text-sm uppercase font-semibold ${
                productData.stock ? "text-brand-green" : "text-brand-red"
              }`}
            >
              {productData.stock ? "In stock" : "Out of stock"}
            </p>
            <div className="flex justify-center items-center gap-3 mt-4  bg-brand-grey rounded-sm">
              <span
                className="flex-1 flex justify-end items-center text-base sm:text-xl py-3 px-2 rounded-l-sm transition-all duration-200 bg-brand-grey hover:bg-brand-light"
                onClick={() => {
                  minus(productData.id);
                }}
              >
                <i className="fa-solid fa-minus"></i>
              </span>
              <span className="block font-semibold text-base sm:text-xl">
                {isInCart(productData.id)
                  ? cart.find((item) => item.id === productData.id).quantity
                  : 0}
              </span>
              <span
                className="flex-1 flex justify-start items-center text-base sm:text-xl py-3 px-2 rounded-r-sm transition-all duration-200 bg-brand-grey hover:bg-brand-light"
                onClick={() => {
                  plus(productData.id, productData.price);
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
            <button
              className={`mt-4 py-4 font-semibold tracking-widest w-full bg-brand-main ${
                isInCart(productData.id) ? "hover:bg-brand-red" : "hover:bg-brand-green"
              } text-white rounded-sm block transition-all duration-300`}
              onClick={() => {
                isInCart(productData.id)
                  ? removeFromCart(productData.id)
                  : addToCart(productData.id, productData.price);
              }}
            >
              <i className="fa-solid fa-bag-shopping"></i>{" "}
              {isInCart(productData.id) ? "Remove from" : "Add to"} Cart
            </button>
            <div className="grid grid-cols-2 gap-4 my-2">
            <button
              className={`py-4 font-semibold tracking-widest bg-white text-black block rounded-xs border border-[#DEE5EA] transition-all duration-300 hover:border-brand-main`}
              onClick={() => {
                isInWishlist(productData.id)
                  ? removeFromWishList(productData.id)
                  : addToWishList(productData);
                }}
                >
              <i className={`${isInWishlist(productData.id)?'fa-solid text-brand-main':'fa-regular'} fa-heart`}></i>{" "}
              Wishlist
            </button>
            <button className={`py-4 font-semibold tracking-widest text-black block rounded-xs border border-[#DEE5EA] transition-all duration-300`}>
              <i className={`fa-solid fa-share`}></i>{" "}
              Share
            </button>
            </div>
            <div className="pt-8">
                <h4 className="font-semibold mb-3">Product Details</h4>
                <p className="font-normal text-sm leading-6">{productData.description ? productData.description : "No description available. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet."}</p>
            </div>
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
                >
                  <div className="relative">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="block relative mx-auto h-32 object-cover rounded"
                      onClick={() => setProductData(r)}
                    />
                    {r.discount_price ? (
                      <span className="absolute top-1 left-1 bg-brand-main text-white text-xs rounded-xl uppercase py-1 px-2">
                        on sale
                      </span>
                    ) : null}
                    <span className={`absolute right-1 bottom-1 text-white z-40 transition-all duration-200 hover:bg-brand-main ${isInCart(r.id) ? "bg-brand-red" : "bg-brand-green"} text-xs rounded-full size-6 flex justify-center items-center`}
                    onClick={()=>{
                      isInCart(r.id)
                      ? removeFromCart(r.id)
                      : addToCart(r.id, r.price);
                    }}>
                      <i className={`fa-solid ${isInCart(r.id) ? "fa-minus" : "fa-plus"}`}></i>
                    </span>
                  </div>
                  <div onClick={() => setProductData(r)}>
                  <p className="text-brand-main text-sm">
                    <span className="line-through text-brand-light">
                      ${r.discount_price}
                    </span>{" "}
                    ${r.price}
                  </p>
                  <h4 className="font-semibold text-sm">{r.name}
                  </h4>
                  </div>
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
