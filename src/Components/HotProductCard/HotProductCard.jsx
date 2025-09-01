import React from "react";
import hotproduct from "../../assets/hotproduct.png";

function HotProductCard() {
  return (
    <div className="relative border border-[#D51243] rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full">
      
      {/* Product image wrapper */}
      <div className="relative w-full sm:w-1/4 flex items-center justify-center">
        {/* Badge discount */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#ED174A] text-white text-sm sm:text-md font-bold w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center">
          18%
        </div>

        {/* Product image */}
        <img
          src={hotproduct}
          alt="Product"
          className="w-1/2 sm:w-full h-32 sm:h-40 object-contain"
        />
      </div>

      {/* Product details */}
      <div className="flex-1 text-center sm:text-left">
        {/* Price */}
        <div className="flex justify-center sm:justify-start items-center gap-2">
          <span className="text-gray-400 line-through text-sm sm:text-base">$5.49</span>
          <span className="text-[#D51243] font-bold text-base sm:text-lg">$4.49</span>
        </div>

        {/* Name */}
        <h3 className="font-semibold text-sm sm:text-md mt-2">
          Chobani Complete Vanilla Greek Yogurt
        </h3>

        {/* Stock */}
        <p className="text-[#00B853] text-xs sm:text-sm font-semibold mt-2">IN STOCK</p>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div className="h-2 rounded-full bg-gradient-to-r from-[#D51243] to-[#FFCD00] w-3/4"></div>
        </div>

        {/* Timer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mt-3">
          <div className="flex justify-center sm:justify-start gap-1">
            <span className="bg-gray-200 px-2 py-1 text-xs sm:text-sm font-mono">70</span>:
            <span className="bg-gray-200 px-2 py-1 text-xs sm:text-sm font-mono">14</span>:
            <span className="bg-gray-200 px-2 py-1 text-xs sm:text-sm font-mono">44</span>:
            <span className="bg-gray-200 px-2 py-1 text-xs sm:text-sm font-mono">54</span>
          </div>
          <span className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">
            Remains until the end <br className="sm:hidden"/> of the offer
          </span>
        </div>
      </div>
    </div>
  );
}

export default HotProductCard;
