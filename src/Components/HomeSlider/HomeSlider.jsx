import React from "react";
import panner1 from "../../assets/Paneer3.png";
import panner2 from "../../assets/panneer2.png";
import panner3 from "../../assets/panner3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HomeSlider() {
       var settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:true
  };


   
   
    return (
        <div className=' w-full relative ml-auto rounded-lg overflow-hidden '>

    
       
     <Slider {...settings}>
  <div className="relative">
    <img src={panner3} alt="Slider 1" className="w-full h-[500px] object-cover" />
    <div className="absolute inset-0 flex flex-col  left-20 top-30">
      <h2>EXCLUSIVE OFFER <span className="text-[#038E42] bg-gradient-to-l from-[#20375800] to-[#00B85333] p-4 rounded-3xl ml-2">-20% offer</span></h2>
      <h2 className="text-black text-6xl font-bold font-sans mb-4 mt-4">Specialist in the <br/>grocery store</h2>
      
      <p className="mt-3 mb-2">Only this week ,Don't miss..</p>
      <h2 className="text-xl">from <span className="text-xl text-[#D51243] font-bold">$7.99</span></h2>
      <button className="flex items-center gap-2 mt-3 bg-[#35AFA0] text-white px-5 py-3 cursor-pointer rounded-full w-35 hover:bg-[#5CC0B3] transition">Shop Now 
        <span>  <i className="fa-solid fa-arrow-right "></i></span>
      </button>
    </div>
  </div>

  <div className="relative">
    <img src={panner2} alt="Slider 2" className="w-full h-[500px] object-cover" />
    <div className="absolute inset-0 flex flex-col  left-20 top-30">
      <h2>EXCLUSIVE OFFER <span className="text-[#038E42] bg-gradient-to-l from-[#20375800] to-[#00B85333] p-4 rounded-3xl ml-2">-20% offer</span></h2>
      <h2 className="text-black text-6xl font-bold font-sans mb-4 mt-4">Everything is so fresh<br/>only in Bacola</h2>
      
      <p className="mt-3 mb-2">Only this week ,Don't miss..</p>
      <h2 className="text-xl">from <span className="text-xl text-[#D51243] font-bold">$7.99</span></h2>
      <button className="flex items-center gap-2 mt-3 bg-[#35AFA0] text-white px-5 py-3 cursor-pointer rounded-full w-35 hover:bg-[#5CC0B3] transition">Shop Now 
        <span>  <i className="fa-solid fa-arrow-right "></i></span>
      </button>
    </div>
    
  </div>

  <div className="relative">
    <img src={panner1} alt="Slider 3" className="w-full h-[500px] object-cover" />
    <div className="absolute inset-0 flex flex-col  left-20 top-30">
      <h2>EXCLUSIVE OFFER <span className="text-[#038E42] bg-gradient-to-l from-[#20375800] to-[#00B85333] p-4 rounded-3xl ml-2">-20% offer</span></h2>
      <h2 className="text-black text-6xl font-bold font-sans mb-4 mt-4">Feed your family <br/>the best</h2>
      
      <p className="mt-3 mb-2">Only this week ,Don't miss..</p>
      <h2 className="text-xl">from <span className="text-xl text-[#D51243] font-bold">$7.99</span></h2>
      <button className="flex items-center gap-2 mt-3 bg-[#35AFA0] text-white px-5 py-3 cursor-pointer rounded-full w-35 hover:bg-[#5CC0B3] transition">Shop Now 
        <span>  <i className="fa-solid fa-arrow-right "></i></span>
      </button>
    </div>
  </div>
</Slider>

            </div>
        
    );
}

export default HomeSlider;
