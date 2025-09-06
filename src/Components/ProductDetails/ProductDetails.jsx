import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";
import { useCart } from "../../Context/CartContext";
import { useWishList } from "../../Context/WishListContext";
import Zoom from "react-medium-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "react-medium-image-zoom/dist/styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
      if (productId && !product) {
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
    async function fetchRelatedProductsId() {
      if (!productData) return;
      const { data: catId, error: catError } = await supabase
        .from("product_categories")
        .select("category_id")
        .eq("product_id", productData.id);

      if (catError) {
        console.error(catError);
        return;
      }

      const { data: relatedIds, error: idsError } = await supabase
        .from("product_categories")
        .select("product_id")
        .eq("category_id", catId[0].category_id)
        .neq("product_id", productData.id)
        .limit(8);

      if (idsError) {
        console.error("Error fetching related IDs:", idsError);
        return;
      }

      if (relatedIds?.length) {
        const relatedIdsArr = relatedIds.map((item) => item.product_id);
        const { data: relatedProducts, error: productsError } = await supabase
          .from("products")
          .select("*")
          .in("id", relatedIdsArr);

        if (productsError) {
          console.error("Error fetching related products:", productsError);
          return;
        }

        setRelated(relatedProducts || []);
      } else {
        setRelated([]);
      }
    }
    fetchRelatedProductsId();
  }, [productData]);

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <span className="loader"></span>
      </div>
    );
  }

  if (!productData) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div
        className="bg-black opacity-50 absolute inset-0"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-sm max-h-[90vh] overflow-y-auto overflow-x-hidden p-6 max-w-4xl w-full relative products-modal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* 🟢 صور المنتج مع Zoom */}
          <div>
            <Zoom>
              <img
                src={productData.image}
                alt={productData.name}
                className="w-full h-70 object-contain rounded-lg"
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
            <h2 className=" text-base sm:text-lg md:text-2xl font-semibold mt-4">
              {productData.name}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-brand-main font-bold mt-4">
              <span className="text-gray-400 mr-0.5 font-normal">$</span>
              {productData.price}
            </p>
            <p className="text-gray-600 mt-2">{productData.description}</p>
            <p
              className={`mt-2 text-xs md:text-sm uppercase font-semibold ${
                productData.stock ? "text-[#00B853]" : "text-[#D51243]"
              }`}
            >
              {productData.stock ? "In stock" : "Out of stock"}
            </p>
            <div className="flex justify-center items-center gap-3 mt-4  bg-brand-grey rounded-sm">
              <span
                className="flex-1 flex text-sm justify-end items-center text-base  py-3 px-2 rounded-l-sm transition-all duration-200 bg-brand-grey hover:bg-gray-200"
                onClick={() => {
                  minus(productData.id);
                }}
              >
                <i className="fa-solid fa-minus"></i>
              </span>
              <span className="block font-semibold text-base ">
                {isInCart(productData.id)
                  ? cart.find((item) => item.id === productData.id).quantity
                  : 0}
              </span>
              <span
                className="flex-1 flex justify-start items-center text-base  py-3 px-2 rounded-r-sm transition-all duration-200 bg-brand-grey hover:bg-gray-200"
                onClick={() => {
                  plus(productData.id, productData.price);
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
            <button
              className={`mt-4 py-2 font-semibold tracking-widest w-full bg-brand-main ${
                isInCart(productData.id)
                  ? "hover:bg-brand-red"
                  : "hover:bg-[#2e9b8d]"
              } text-white rounded-sm block transition-all duration-300`}
              onClick={() => {
                isInCart(productData.id)
                  ? removeFromCart(productData.id)
                  : addToCart(productData.id, productData.price);
              }}
            >
              <i className="fa-solid fa-bag-shopping mr-2"></i>{" "}
              {isInCart(productData.id) ? "Remove from" : "Add to"} Cart
            </button>
            <div className="grid grid-cols-2 gap-4 my-2">
              <button
                className={`py-2 font-semibold tracking-widest text-black block rounded-lg border border-[#DEE5EA] transition-all duration-300 hover:bg-brand-main hover:text-white`}
                onClick={() => {
                  isInWishlist(productData.id)
                    ? removeFromWishList(productData.id)
                    : addToWishList(productData);
                }}
              >
                <i
                  className={`${
                    isInWishlist(productData.id)
                      ? "fa-solid text-brand-main"
                      : "fa-regular"
                  } fa-heart`}
                ></i>{" "}
                Wishlist
              </button>

              <button
                onClick={() => {
                  const productUrl = `${window.location.origin}/product/${productData.id}`;
                  if (navigator.share) {
                    navigator.share({
                      title: productData.name,
                      text: "Check this product!",
                      url: productUrl,
                    });
                  } else {
                    window.open(
                      `https://wa.me/?text=${encodeURIComponent(productUrl)}`,
                      "_blank"
                    );
                  }
                }}
                className="py-2 font-semibold tracking-widest text-black block rounded-lg border border-[#DEE5EA] transition-all duration-300 hover:bg-brand-main hover:text-white"
              >
                <i className="fa-solid fa-share"></i> Share
              </button>
            </div>
            {productData.description && (
              <div className="pt-8">
                <h4 className="font-semibold mb-3">Product Details</h4>
                <p className="font-normal text-sm leading-6">
                  {productData.description
                    ? productData.description
                    : "No description available. lorem ipsum dolor sit amet."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 🟢 منتجات مشابهة */}
        {related.length > 0 ? (
          <div className="mt-20 ">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">
              Related Products
            </h3>

            {related.length > 4 ? (
              <Splide
                options={{
                  type: "loop",
                  perPage: 4,
                  perMove: 1,
                  gap: "1rem",
                  pagination: false,
                  arrows: true,
                  breakpoints: {
                    1280: { perPage: 3 },
                    1024: { perPage: 2 },
                    640: { perPage: 1 },
                  },
                }}
                className="w-full px-2"
              >
                {related.map((r) => (
                  <SplideSlide key={r.id}>
                    <div className=" cursor-pointer relative border border-gray-200">
                      <div className="relative">
                        <img
                          src={r.image}
                          alt={r.name}
                          className="block relative mx-auto h-32 object-cover rounded"
                          onClick={() => setProductData(r)}
                        />
                        {r.discount_price ? (
                          <span className="absolute top-0 left-0 bg-brand-main text-white text-xs uppercase py-1 px-2">
                            {r.discount_price}%
                          </span>
                        ) : null}
                        <span
                          className={`absolute right-2 bottom-0 text-white z-40 transition-all duration-200 hover:bg-brand-main ${
                            isInCart(r.id) ? "bg-brand-main" : "bg-gray-400"
                          } text-xs rounded-full size-6 flex justify-center items-center`}
                          onClick={() => {
                            isInCart(r.id)
                              ? removeFromCart(r.id)
                              : addToCart(r.id, r.price);
                          }}
                        >
                          <i
                            className={`fa-solid ${
                              isInCart(r.id) ? "fa-minus" : "fa-plus"
                            }`}
                          ></i>
                        </span>
                      </div>
                      <div onClick={() => setProductData(r)}>
                        <p className="text-brand-main text-sm px-3">
                          {r.discount_price && (
                            <span className="line-through text-brand-light">
                              ${r.discount_price}
                            </span>
                          )}{" "}
                          ${r.price}
                        </p>
                        <h4 className="font-semibold text-sm px-3 mb-3">
                          {r.name}
                        </h4>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {related.map((r) => (
                  <div
                    key={r.id}
                    className=" cursor-pointer relative border border-gray-200"
                  >
                    <div className="relative">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="block relative mx-auto h-32 object-cover rounded"
                        onClick={() => setProductData(r)}
                      />
                      {r.discount_price ? (
                        <span className="absolute top-0 left-0 bg-brand-main text-white text-xs uppercase py-1 px-2">
                          {r.discount_price}%
                        </span>
                      ) : null}
                      <span
                        className={`absolute right-2 bottom-0 text-white z-40 transition-all duration-200 hover:bg-brand-main ${
                          isInCart(r.id) ? "bg-brand-main" : "bg-gray-400"
                        } text-xs rounded-full size-6 flex justify-center items-center`}
                        onClick={() => {
                          isInCart(r.id)
                            ? removeFromCart(r.id)
                            : addToCart(r.id, r.price);
                        }}
                      >
                        <i
                          className={`fa-solid ${
                            isInCart(r.id) ? "fa-minus" : "fa-plus"
                          }`}
                        ></i>
                      </span>
                    </div>
                    <div onClick={() => setProductData(r)}>
                      <p className="text-brand-main text-sm px-3">
                        {r.discount_price && (
                          <span className="line-through text-brand-light">
                            ${r.discount_price}
                          </span>
                        )}{" "}
                        ${r.price}
                      </p>
                      <h4 className="font-semibold text-sm px-3 mb-3">
                        {r.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProductDetailsModal;
