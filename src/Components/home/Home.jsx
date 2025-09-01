import React from "react";
import HomeSlider from "../HomeSlider/HomeSlider";
import BestSellers from "../Best sellers/BestSellers";
import sidepanner1 from "../../assets/SidePanner1 (2).png";
import sidepanner2 from "../../assets/SidePanner2 (2).png";
import pannerBox from "../../assets/banner-box2.png";
import HotProductCard from "../HotProductCard/HotProductCard";
import NewProducts from "../NewProducts/NewProducts";
import download from "../../assets/download.png";
import WeekendDiscount from "../WeekendDiscount/WeekendDiscount";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
function Home() {
  return (
    // <div>home</div>
    <div>
      <HomeSlider />
      <div className="mt-5 flex gap-3 max-w-7xl justify-center">
        <div className="w-1/4 ml-8 hidden lg:block">
          {/* {panners} */}
          <div className="relative w-3/4 h-[400px] mt-4 mb-6">
            <img
              src={sidepanner1}
              alt="side panner"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center rounded-lg">
              <h2 className="text-base sm:text-lg md:text-xl">
                only-from{" "}
                <h2 className="text-base sm:text-lg md:text-xl text-[#D51243] font-bold">
                  $7.99
                </h2>
              </h2>
            </div>
          </div>

          <div className="relative w-3/4 h-[400px] mt-4">
            <img
              src={sidepanner2}
              alt="side panner"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center rounded-lg">
              <h2 className="text-base sm:text-lg md:text-xl">
                only-from{" "}
                <h2 className="text-base sm:text-lg md:text-xl text-[#D51243] font-bold">
                  $7.99
                </h2>
              </h2>
              <button className="flex items-center gap-1 mt-3 bg-[#35AFA0] text-white px-2 sm:px-3 py-1.5 sm:py-2 cursor-pointer rounded-full hover:bg-[#5CC0B3] transition text-xs sm:text-sm">
                Shop Now
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          {/* download */}

          <div className="border border-gray-400 rounded-lg p-4 mt-4 w-3/4">
            <ul>
              <li className="mb-4">
                <div className="flex items-center gap-3">
                  <img src={download} />
                  <h2>Download the Bacola App to your Phone.</h2>
                </div>
                <hr className="w-full border-gray-300 mt-2" />
              </li>

              <li className="mb-4">
                <div className="flex items-center gap-3">
                  <img src={download} />
                  <h2>Download the Bacola App to your Phone.</h2>
                </div>
                <hr className="w-full border-gray-300 mt-2" />
              </li>

              <li className="mb-4">
                <div className="flex items-center gap-3">
                  <img src={download} />
                  <h2>Download the Bacola App to your Phone.</h2>
                </div>
              </li>
            </ul>
          </div>
          {/* trending search */}
          <TrendingProducts />
          {/* customer comment */}
          <div></div>
        </div>

        <div className="w-3/4">
          <BestSellers />
          {/* PANNER WITH IMAGE */}
          <div className="relative bg-[#F8EFEA] h-[150px] mt-4 mb-6 rounded-lg flex justify-end items-center">
            <div className="absolute left-8">
              <p className="text-gray-500">Always taking care</p>
              <p className="text-[#71778E] font-bold">
                In store or online your health & safety is our top priority.
              </p>
            </div>

            <img
              src={pannerBox}
              alt="panner"
              className="hidden md:block w-1/2 h-[150px] rounded-lg"
            />
          </div>

          {/* HOT PRODUCTS */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold mt-3">HOT PRODUCTS FOR THIS WEEK</h1>
              <p className="text-gray-400 text-sm mb-3">
                Don't miss this opportunity at a special discount just for this
                week..
              </p>
            </div>
            <button className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-500 border border-gray-400 rounded-3xl px-3 py-1.5 sm:px-4 sm:py-2 cursor-pointer hover:bg-gray-400 hover:text-white transition">
              View all
              <span className="transition">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
          <HotProductCard />
          {/* pink div */}
          <div className="bg-[#FFEEF2]  text-[#ED174A] px-4 py-3 rounded-lg flex flex-col md:flex-row items-center justify-center gap-2 text-sm md:text-base mt-3">
            <p className="text-center">
              Super discount for your{" "}
              <span className="font-semibold underline ml-1">
                first purchase.
              </span>
            </p>

            <span className="border border-dashed border-red-300 px-3 py-1 rounded-full text-red-600 font-semibold text-xs md:text-sm">
              FREE25BAC
            </span>

            <p className="text-gray-400 text-xs md:text-sm">
              Use discount code in checkout!
            </p>
          </div>
          <NewProducts />
          <WeekendDiscount />
        </div>
      </div>
    </div>
  );
}

export default Home;
