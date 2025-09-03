import React, { useEffect, useState } from 'react'
import { supabase } from "../../Helper/supabase-client"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router-dom';

function BestSellers() {

  const [loading,setLoading] = useState(false)


    

    
     var settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    arrows:true,
    responsive: [
    {
      breakpoint: 1280, // screens < 1280px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1024, // screens < 1024px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, // screens < 640px (mobile)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // optional (cleaner on mobile)
      },
    },
  ],
  };
  const [bestSellers, setBestSellers] = useState([]);

  async function getBestSellers() {
    setLoading(true)
    let { data, error } = await supabase.from("products").select("*")
     .lt("price", 20);
     setLoading(false)

    if (error) {
      console.error("Error fetching products:", error.message);
      return [];
    }
    return data;
  }

  useEffect(() => {
    async function fetchData() {
      const result = await getBestSellers();
      setBestSellers(result);
      console.log("result:", result);
    }
    fetchData();
  }, []);

  let navigate = useNavigate();
   function navigateToShop(){
    navigate("/shop")
  }


  return (
    <div >
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-bold mt-3'>Best Sellers</h1>
      <p className='text-gray-400 text-sm mb-3'>Do not miss the current offers until the end of March.</p>

        </div>
       <button onClick={navigateToShop} className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-500 border border-gray-400 rounded-3xl px-3 py-1.5 sm:px-4 sm:py-2 cursor-pointer hover:bg-gray-400 hover:text-white transition">
  View all
  <span className="transition">
    <i className="fa-solid fa-arrow-right"></i>
  </span>
</button>

        

      </div>
      
{loading ? <div className="flex justify-center items-center min-h-screen">
    <span className="loader"></span>
  </div>:
<div className="best-sellers-slider border border-gray-200 p-4 rounded-lg">
   <Slider {...settings} className='w-full px-2'>
  {bestSellers.map((p, index) => (
   <div
  key={p.id}
  className={`bg-white relative flex flex-col h-[350px] px-3 py-3 justify-between w-40
    ${index !== bestSellers.length - 1 ? "border-r border-gray-200" : ""}`}
>
  {/* خصم */}
  {p.offer && (
    <div className=" cursor-pointer absolute top-2 left-2 bg-[#35AFA0] text-white text-xs font-bold px-2 py-1 rounded">
      {p.offer}%
    </div>
  )}

<Link to={`/productdetails/${p.id}`}>

  {/* المحتوى */}
  <div className="flex flex-col flex-grow space-y-2">
    {/* صورة المنتج */}
    <img
      src={p.image}
      alt={p.name}
      className="w-full h-36 object-contain mx-auto"
    />

    {/* الاسم */}
   <h2 className="text-sm mt-2 line-clamp-2 flex-grow min-h-[2.5rem]">
  {p.name}
</h2>


    {/* الحالة */}
    <p
      className={`text-xs font-bold ${
        p.stock > 0 ? "text-[#00B853]" : "text-[#D51243]"
      }`}
    >
      {p.stock > 0 ? "IN STOCK" : "OUT OF STOCK"}
    </p>

    {/* النجوم */}
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

    {/* السعر */}
    <div className="mt-1">
      {p.discount_price && (
        <span className="line-through text-gray-400 text-sm mr-2">
          ${p.discount_price}
        </span>
      )}
      <span className="text-[#D51243] font-bold">${p.price}</span>
    </div>
  </div>

  {/* أزرار الكمية (تحت ثابتة) */}
  <div className="mt-4 flex items-center justify-between border rounded-3xl border-gray-200">
    <button className="bg-gray-200 rounded-tl-full rounded-bl-full w-9 h-9 flex items-center justify-center text-lg">
      -
    </button>
    <span className="text-md">{p.quantity}</span>
    <button className="bg-yellow-400 rounded-tr-full rounded-br-full w-9 h-9 flex items-center justify-center text-lg">
      +
    </button>
  </div>
  </Link>
</div>

  ))}
</Slider>



</div>}
     
     
        
      </div>
      
    // </div>
  )
}

export default BestSellers
