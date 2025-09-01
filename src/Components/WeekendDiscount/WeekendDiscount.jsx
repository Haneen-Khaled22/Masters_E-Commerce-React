import React from "react";
import bacolaImg1 from "../../assets/bacola-banner-01.jpg.png";
import eggsImg from "../../assets/bacola-banner-02.jpg.png";

export default function WeekendDiscount() {
  const banners = [
    {
      id: 1,
      discount: "WEEKEND DISCOUNT 40%",
      title: "Legumes & Cereals",
      description: "Feed your family the best",
      image: bacolaImg1,
    },
    {
      id: 2,
      discount: "WEEKEND DISCOUNT 40%",
      title: "Dairy & Eggs",
      description: "A different kind of grocery store",
      image: eggsImg,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="relative rounded-lg overflow-hidden h-44 md:h-52 lg:h-60 flex items-center"
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 p-6 bg-transparent space-y-2">
            <p className="font-[Dosis] font-semibold text-[14px] leading-[21px] uppercase text-[#00B853]">
              {banner.discount}
            </p>
            <h2 className="font-[Inter] font-semibold text-[20px] leading-[26px] tracking-[-0.8px] text-[#3E445A]">
              {banner.title}
            </h2>
            <p className="font-[Inter] font-normal text-[12px] leading-[18px] tracking-[-0.1px] text-[#9B9BB4]">
              {banner.description}
            </p>
            <button className="mt-3 w-[100px] h-[34px] rounded-full bg-[#C2C2D3] border border-[#C2C2D3] text-[#202435] text-[12px] font-medium font-[Inter] hover:bg-[#b3b3c9] transition cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
