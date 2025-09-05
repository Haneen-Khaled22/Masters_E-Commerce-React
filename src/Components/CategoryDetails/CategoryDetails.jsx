import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../../Helper/supabase-client';
import ProductDetailsModal from "../ProductDetails/ProductDetails";

function CategoryDetails() {

    const [loading,setLoading] = useState(false);
    const {id} = useParams();
    const [products,setProducts] = useState([]);
    const [category,setCategory] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    async function getProductsByCategory(){
      setLoading(true)
        let {data,error} = await supabase.from("products_with_categories")
  .select("*")
  .eq("category_id",id);
  setLoading(false);

        if (error) {
      console.log("Error fetching products:", error.message);
      return [];
    }
    return data;
    }

    async function getCategoryById(){
      setLoading(true)
        let {data,error} = await supabase.from("categories").select("*")
        .eq("id",id)
        .single();
        setLoading(false);

        if (error) {
      console.log("Error fetching products:", error.message);
      return [];
    }
    return data;

    }


    useEffect(()=>{
        async function fetchCategoryProducts(){
            let productsresult = await getProductsByCategory();
            setProducts(productsresult);
            console.log("productsresult :", productsresult);
        }
         async function fetchCategoryById(){
            let categoriesresult = await getCategoryById();
            setCategory(categoriesresult);
            console.log("categoriesresult :", categoriesresult);
        }
        fetchCategoryProducts();
        fetchCategoryById();

    },[id])




    return (
     <div className="my-5 container">
          {loading ? (<div className="flex justify-center items-center min-h-screen">
    <span className="loader"></span>
  </div> ) :  (
    <>
      <div className="flex justify-between items-center " >
        <div>
          {/* ✅ عرض اسم الكاتيجوري فوق */}
          <h1 className="font-bold mt-3 text-lg">
            {category ? category.name : "Loading..."}
          </h1>
          <p className="text-gray-400 text-sm mb-3 ">
            {category ? `Explore all ${category.name} products.` : ""}
          </p>
        </div>
      </div>

      <div className=" mt-6 grid gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelectedProduct(p)} 
            className="cursor-pointer bg-white relative flex flex-col h-[350px] px-4 pt-5 justify-between 
              border border-gray-200"
          >
            {p.offer && (
              <div className="absolute top-4 left-2 bg-[#35AFA0] text-white text-xs font-bold px-2 py-1 rounded">
                {p.offer}%
              </div>
            )}

            <div>
              <div className="flex flex-col flex-grow space-y-2">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-36 object-contain mx-auto"
                />

                <h2 className="text-sm mt-4 mb-1 line-clamp-2 min-h-[2rem] font-semibold">
                  {p.product_name}
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
                  <span className="text-[#D51243] font-bold">${p.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      </div>
      </>
      )}
    </div>
    )
}

export default CategoryDetails
