import React from "react";
import panner1 from "../../assets/Paneer3.png";
import panner2 from "../../assets/panneer2.png";
import panner3 from "../../assets/panner3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

function HomeSlider() {



  let navigate = useNavigate();
       var settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:true
  };
  
  function navigateToShop(){
    navigate('/shop');
  }


   
   
    return (
        <div className='w-full relative ml-auto rounded-lg overflow-hidden'>

    
       
     <Slider {...settings}>
  <div className="relative">
    <img src={panner3} alt="Slider 1" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" />
    <div className="absolute inset-0 flex flex-col left-4 sm:left-10 md:left-20 top-10 sm:top-20 md:top-30 px-4 sm:px-0">
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl">EXCLUSIVE OFFER <span className="text-[#038E42] bg-gradient-to-l from-[#20375800] to-[#00B85333] p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl ml-1 sm:ml-2 text-xs sm:text-sm md:text-base">-20% offer</span></h2>
      <h2 className="text-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-2 sm:mb-3 md:mb-4 mt-2 sm:mt-3 md:mt-4 leading-tight">Specialist in the <br/>grocery store</h2>
      
      <p className="mt-2 sm:mt-3 mb-1 sm:mb-2 text-sm sm:text-base">Only this week ,Don't miss..</p>
      <h2 className="text-base sm:text-lg md:text-xl">from <span className="text-base sm:text-lg md:text-xl text-[#D51243] font-bold">$7.99</span></h2>
      <button onClick={navigateToShop} className="flex items-center gap-2 mt-2 sm:mt-3 bg-[#35AFA0] text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 cursor-pointer rounded-full w-28 sm:w-32 md:w-35 hover:bg-[#5CC0B3] transition text-sm sm:text-base">Shop Now 
        <span>  <i className="fa-solid fa-arrow-right "></i></span>
      </button>
    </div>
  </div>

  <div className="relative">
    <img src={panner2} alt="Slider 2" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" />
    <div className="absolute inset-0 flex flex-col left-4 sm:left-10 md:left-20 top-10 sm:top-20 md:top-30 px-4 sm:px-0">
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl">EXCLUSIVE OFFER <span className="text-[#038E42] bg-gradient-to-l from-[#20375800] to-[#00B85333] p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl ml-1 sm:ml-2 text-xs sm:text-sm md:text-base">-20% offer</span></h2>
      <h2 className="text-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-2 sm:mb-3 md:mb-4 mt-2 sm:mt-3 md:mt-4 leading-tight">Everything is so fresh<br/>only in Bacola</h2>
      
      <p className="mt-2 sm:mt-3 mb-1 sm:mb-2 text-sm sm:text-base">Only this week ,Don't miss..</p>
      <h2 className="text-base sm:text-lg md:text-xl">from <span className="text-base sm:text-lg md:text-xl text-[#D51243] font-bold">$7.99</span></h2>
      <button className="flex items-center gap-2 mt-2 sm:mt-3 bg-[#35AFA0] text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 cursor-pointer rounded-full w-28 sm:w-32 md:w-35 hover:bg-[#5CC0B3] transition text-sm sm:text-base">Shop Now 
        <span>  <i className="fa-solid fa-arrow-right "></i></span>
      </button>
    </div>
    
  </div>

  <div className="relative">
    <img src={panner1} alt="Slider 3" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" />
    <div className="absolute inset-0 flex flex-col left-4 sm:left-10 md:left-20 top-10 sm:top-20 md:top-30 px-4 sm:px-0">
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl">EXCLUSIVE OFFER <span className="text-[#038E42] bg-gradient-to-l from-[#20375800] to-[#00B85333] p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl ml-1 sm:ml-2 text-xs sm:text-sm md:text-base">-20% offer</span></h2>
      <h2 className="text-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-2 sm:mb-3 md:mb-4 mt-2 sm:mt-3 md:mt-4 leading-tight">Feed your family <br/>the best</h2>
      
      <p className="mt-2 sm:mt-3 mb-1 sm:mb-2 text-sm sm:text-base">Only this week ,Don't miss..</p>
      <h2 className="text-base sm:text-lg md:text-xl">from <span className="text-base sm:text-lg md:text-xl text-[#D51243] font-bold">$7.99</span></h2>
      <button className="flex items-center gap-2 mt-2 sm:mt-3 bg-[#35AFA0] text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 cursor-pointer rounded-full w-28 sm:w-32 md:w-35 hover:bg-[#5CC0B3] transition text-sm sm:text-base">Shop Now 
        <span>  <i className="fa-solid fa-arrow-right "></i></span>
      </button>
    </div>
  </div>
</Slider>

            </div>
        
    );
}

export default HomeSlider;
