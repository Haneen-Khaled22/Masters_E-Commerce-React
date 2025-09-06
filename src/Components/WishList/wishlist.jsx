import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";
import ProductDetailsModal from "../ProductDetails/ProductDetails";

function Wishlist() {
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishproducts, setWishProducts] = useState([]);

  // pagination states
  const [page, setPage] = useState(1);
  const productsPerPage = 8;

  async function getWishListProducts() {
    setLoading(true);
    const { data, error } = await supabase.from("products").select("*");
    setLoading(false);

    if (error) {
      console.error("Error fetching products:", error.message);
      return [];
    }
    return data;
  }

  useEffect(() => {
    async function fetchData() {
      const products = await getWishListProducts();
      setWishProducts(products);
    }
    fetchData();
  }, []);

  // حساب عدد الصفحات
  const totalPages = Math.ceil(wishproducts.length / productsPerPage);

  // تحديد بداية ونهاية الصفحة
  const indexOfLast = page * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = wishproducts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="my-5 container">
      <div className="flex justify-between items-center">
        <h1 className="font-bold mt-3 mb-4">Wish List</h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <span className="loader"></span>
        </div>
      ) : wishproducts.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No products found.</p>
      ) : (
        <>
          {/* Products Grid */}
          <div className="grid gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-gray-200 rounded-lg">
            {currentProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProduct(p)}
                className="bg-white relative flex flex-col h-[340px] px-3 pt-2 pb-3 justify-between cursor-pointer border-r border-b border-gray-200"
              >
                {/* Offer Badge */}
                {p.offer && (
                  <div className="absolute top-4 left-2 bg-[#35AFA0] text-white text-xs font-bold px-2 py-1 rounded">
                    {p.offer}%
                  </div>
                )}

                {/* Product Content */}
                <div className="flex flex-col flex-grow space-y-2">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-30 object-contain mx-auto"
                  />

                  <h2 className="text-sm mt-4 mb-1 line-clamp-2 min-h-[2rem] font-semibold">
                    {p.name}
                  </h2>

                  <p
                    className={`text-xs font-bold ${
                      p.stock > 0 ? "text-[#00B853]" : "text-[#D51243]"
                    }`}
                  >
                    {p.stock > 0 ? `${p.stock} IN STOCK` : "OUT OF STOCK"}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < (p.rating || 0)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.23 3.78a1 1 0 00.95.69h3.98c.969 0 1.371 1.24.588 1.81l-3.222 2.34a1 1 0 00-.364 1.118l1.23 3.78c.3.921-.755 1.688-1.54 1.118l-3.222-2.34a1 1 0 00-1.175 0l-3.222 2.34c-.784.57-1.838-.197-1.539-1.118l1.23-3.78a1 1 0 00-.364-1.118L2.3 9.207c-.783-.57-.38-1.81.588-1.81h3.98a1 1 0 00.95-.69l1.23-3.78z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-xs text-[#71778E]">
                      {p.review} {p.review === 1 ? "review" : "reviews"}
                    </span>
                  </div>

                  {/* Price + Heart */}
                  <div className="mt-1 flex items-center justify-between">
                    <div>
                      {p.discount_price && (
                        <span className="line-through text-gray-400 text-sm mr-2">
                          ${p.discount_price}
                        </span>
                      )}
                      <span className="text-[#D51243] font-bold">
                        ${p.price || p.discount_price}
                      </span>
                    </div>

                    {/* Favorite Icon */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setWishProducts((prev) =>
                          prev.filter((item) => item.id !== p.id)
                        );
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#D51243"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-7 h-7 cursor-pointer hover:scale-110 transition"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.099 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button (with spacing) */}
                <div className="mt-4 mb-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Added to cart:", p);
                    }}
                    className="w-full bg-[#35AFA0] text-white text-sm font-bold py-2 rounded hover:bg-[#2a897d]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center space-x-2 mt-12">
            {/* زرار Previous */}
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded-full text-gray-500 disabled:opacity-40"
            >
              &lt;
            </button>

            {/* الصفحات */}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (num) =>
                  num === 1 || // أول صفحة
                  num === totalPages || // آخر صفحة
                  (num >= page - 1 && num <= page + 1) // الصفحات القريبة
              )
              .map((pageNum, idx, arr) => (
                <React.Fragment key={pageNum}>
                  {/* النقاط ... */}
                  {idx > 0 && pageNum - arr[idx - 1] > 1 && (
                    <span className="px-2">...</span>
                  )}
                  <button
                    onClick={() => setPage(pageNum)}
                    className={`px-3 py-1 rounded-full ${
                      page === pageNum
                        ? "bg-[#35AFA0] text-white"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {pageNum}
                  </button>
                </React.Fragment>
              ))}

            {/* زرار Next */}
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded-full text-gray-500 disabled:opacity-40"
            >
              &gt;
            </button>
          </div>
        </>
      )}

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default Wishlist;
