import React, { useState, useEffect } from "react";
import { supabase } from "../../Helper/supabase-client";
import SidebarFilter from "../SidebarFilter/SidebarFilter";
import ProductDetailsModal from "../ProductDetails/ProductDetails";
import meal from ".././../assets/meals.png";
import { useCart } from "../../Context/CartContext";

function Shop() {
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    availability: "",
    minPrice: null,
    maxPrice: null,
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { cart, plus, minus } = useCart();
  const limit = 8;

  // 🟢 fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      let query = supabase.from("products").select("*", { count: "exact" });

      if (filters.categories.length > 0) {
        query = query.in("category_id", filters.categories);
      }

      if (filters.brands.length > 0) {
        query = query.in("brand_id", filters.brands);
      }

      if (filters.availability === "in") {
        query = query.gt("stock", 0);
      } else if (filters.availability === "out") {
        query = query.eq("stock", 0);
        
      }

      if (filters.minPrice) {
        query = query.gte("price", filters.minPrice);
      }

      if (filters.maxPrice) {
        query = query.lte("price", filters.maxPrice);
      }

      const from = (page - 1) * limit;
      const to = from + limit - 1;
      query = query.range(from, to);

      const { data, error, count } = await query;

      if (!error) {
        setProducts(data);
        setTotalProducts(count);
      } else {
        console.error("Error fetching products:", error.message);
      }

      setLoading(false);
    };

    fetchProducts();
  }, [filters, page]);

  const totalPages = Math.ceil(totalProducts / limit);
  const [showAside, setShowAside] = useState(false);
  return (
    <div className="flex container relative !pt-0">
      {/* Sidebar Filter */}
      <span
        className={`absolute md:hidden top-8 left-4 z-20 text-xl cursor-pointer hover:text-brand-main ${
          showAside ? "text-brand-red" : "text-brand-green"
        } transition-all duration-200`}
        onClick={() => setShowAside(!showAside)}
      >
        <i className="fas fa-bars text-brand-main"></i>
      </span>
      <div
        className={`absolute md:static md:min-w-60 ${
          showAside ? "w-64" : "w-0"
        } overflow-hidden pt-4 h-full bg-white transition-all duration-300 z-10 shadow-[2px_0_4px_0px_rgba(0,0,0,0.2)] md:shadow-none`}
      >
        <SidebarFilter filters={filters} setFilters={setFilters} />
      </div>

      {/* Products */}
      <div className="flex-grow-1 pt-8 p-4 flex flex-col items-center">
        <div className="w-full relative mb-8">
          <img
            src={meal}
            alt="shop"
            className="w-full max-h-[240px] object-cover rounded-sm"
          />
          <div className="absolute top-1/2 left-1/10 md:left-6 lg:left-1/6 -translate-y-1/2">
            <h2 className="text-base sm:text-xl md:text-2xl capitalize font-extralight text-[#202435]">
              Organic Meals Prepared
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Delivered to <span className="text-[#00B853]">your Home </span>
            </h1>
            <h2 className="text-xs sm:text-sm text-[#9B9BB4]">
              Fully prepared & delivered nationwide.
            </h2>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <span className="loader"></span>
          </div>
        ) :  products.length === 0 && filters.availability === "out" ? (
  <div className="flex justify-center items-center min-h-[200px] w-full">
    <p className="text-gray-500 text-lg font-semibold">
      No products found
    </p>
  </div>
) :(
          <div className="grid gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-gray-200 rounded-lg">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white relative flex flex-col h-[400px] py-5 px-3 pt-5 cursor-pointer 
             justify-between border-r border-b border-gray-200"
              >
                {p.discount_price && (
                  <div className="absolute top-4 left-2 bg-[#35AFA0] text-white text-xs font-bold px-2 py-1 rounded">
                    {Math.ceil(
                      ((p.discount_price - p.price) / p.discount_price) * 100
                    )}
                    %
                  </div>
                )}

                <div
                  className="flex flex-col flex-grow"
                  onClick={() => setSelectedProduct(p.id)}
                >
                  <div className="flex flex-col flex-grow space-y-2">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-36 object-contain mx-auto"
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

                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < p.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.23 3.78a1 1 0 00.95.69h3.98c.969 0 1.371 1.24.588 1.81l-3.222 2.34a1 1 0 00-.364 1.118l1.23 3.78c.3.921-.755 1.688-1.54 1.118l-3.222-2.34a1 1 0 00-1.175 0l-3.222 2.34c-.784.57-1.838-.197-1.539-1.118l1.23-3.78a1 1 0 00-.364-1.118L2.3 9.207c-.783-.57-.38-1.81.588-1.81h3.98a1 1 0 00.95-.69l1.23-3.78z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-xs text-[#71778E]">
                        {p.review} review
                      </span>
                    </div>

                    <div className="mt-1">
                      {p.discount_price && (
                        <span className="line-through text-gray-400 text-sm mr-2">
                          ${p.discount_price}
                        </span>
                      )}
                      <span className="text-[#D51243] font-bold">
                        ${p.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 🔽 الأزرار دايمًا تحت */}
                <div className="mt-4 flex items-center justify-between border rounded-3xl border-gray-200">
                  <button
                    className="bg-gray-200 rounded-tl-full rounded-bl-full w-9 h-9 flex items-center justify-center text-lg"
                    onClick={() => {
                      minus(p.id);
                    }}
                  >
                    -
                  </button>
                  <span className="text-md">
                    {cart.find((item) => item.id === p.id)
                      ? cart.find((item) => item.id === p.id).quantity
                      : 0}
                  </span>
                  <button
                    className="bg-yellow-400 rounded-tr-full rounded-br-full w-9 h-9 flex items-center justify-center text-lg"
                    onClick={() => {
                      plus(p.id, p.price);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {/* Pagination */}
        <div className="flex items-center space-x-2 mt-12">
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
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    page === pageNum
                      ? "bg-[#35AFA0] text-white font-bold"
                      : " text-gray-700 hover:bg-gray-200 font-bold"
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

        {/* Modal */}
        {selectedProduct && (
          <ProductDetailsModal
            productId={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Shop;
