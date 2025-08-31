import React from "react";
import panner1 from "../../assets/Paneer3.png";
import panner2 from "../../assets/paneer2.png";
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
       <img src={panner3} alt='Slider 1' className='w-full h-[500px] object-cover'/>
       <img src={panner2} alt='Slider 2' className='w-full h-[500px] object-cover'/>
       <img src={panner1} alt='Slider 3' className='w-full h-[500px] object-cover'/>
    </Slider>
       
            </div>
        
    );
}

export default HomeSlider;
