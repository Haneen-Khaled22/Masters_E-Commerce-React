import React from "react";
import { Calendar, User } from "lucide-react";
import { GoChevronRight } from "react-icons/go";
import { FaFacebookF, FaPinterestP, FaReddit, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

import blog1 from "../../assets/blog-3.jpg.png";
import blog2 from "../../assets/blog-5.jpg.png";
import blog3 from "../../assets/sidebar-banner.gif.png";
import blog4 from "../../assets/Link.png";
import blog5 from "../../assets/Link2.png";
import blog6 from "../../assets/Link3.png";

const BlogPage = () => {
  return (
    <div className="min-h-screen mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-2/3">
            {/* First Blog Post */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img src={blog1} alt="img" />
              </div>
              <div className="p-6">
                <div className="w-[855px] h-5 rotate-0 opacity-100 text-sm text-gray-500 mb-4 space-x-4">Grocery</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                But I must explain to you how all this mistaken
idea</h2>
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Jan 13 2025

                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    Sinan ISIK
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,
vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...
                </p>
              </div>
            </article>

            {/* Second Blog Post */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img src={blog2} alt="img" />
              </div>
              <div className="p-6">
                <div className="w-[855px] h-5 rotate-0 opacity-100 text-sm text-gray-500 mb-4 space-x-4">Grocery</div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                 The Problem With Typefaces on the Web
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Jan 13 2025
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    Sinan ISIK
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                 Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,
vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...
                </p>
              </div>
            </article>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <div className="w-8 h-8 text-black rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <GoChevronRight size={18} />
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                RECENT POSTS
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center relative">
  {/* Badge */}
  <div className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full border-2 border-white bg-[#35AFA0] text-xs text-white font-medium">
    1
  </div>

  {/* Avatar Image */}
  <img
    src={blog4}
    alt="img"
    className="rounded-full w-full h-full object-cover"
  />
</div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 leading-tight">
                      But I must explain to
you how all this
mistaken idea
                    </h4>
                    
                  </div>
                </div>

                <div className="flex items-start space-x-3">
   <div className="w-12 h-12 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center relative">
  {/* Badge */}
  <div className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full border-2 border-white bg-[#35AFA0] text-xs text-white font-medium">
    2
  </div>

  {/* Avatar Image */}
  <img
    src={blog5}
    alt="img"
    className="rounded-full w-full h-full object-cover"
  />
</div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 leading-tight">
                     The Problem With
Typefaces on the Web
                    </h4>
                
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center relative">
  {/* Badge */}
  <div className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full border-2 border-white bg-[#35AFA0] text-xs text-white font-medium">
    3
  </div>

  {/* Avatar Image */}
  <img
    src={blog6}
    alt="img"
    className="rounded-full w-full h-full object-cover"
  />
</div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 leading-tight">
                      English Breakfast Tea
With Tasty Donut
Desserts
                    </h4>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                SOCIAL MEDIA
              </h3>
              <div className="space-y-1 uppercase">
                <div className="flex">
                  <div className="bg-blue-600 text-white px-4 py-3 text-sm font-medium flex-1 flex items-center tracking-wider rounded-md">
                    <FaFacebookF className="w-4 h-4 mr-2" />
                    Facebook
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-pink-500 text-white px-4 py-3 text-sm font-medium flex-1 flex items-center tracking-wider rounded-md">
                    <IoLogoInstagram className="w-4 h-4 mr-2" />
                    Instagram
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-400 text-white px-4 py-3 text-sm font-medium flex-1 flex items-center tracking-wider rounded-md">
                    <FaTwitter className="w-4 h-4 mr-2" />
                    Twitter
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-orange-500 text-white px-4 py-3 text-sm font-medium flex-1 flex items-center tracking-wider rounded-md">
                    <FaReddit className="w-4 h-4 mr-2" />
                    Reddit
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-red-600 text-white px-4 py-3 text-sm font-medium flex-1 flex items-center tracking-wider rounded-md">
                    <FaPinterestP className="w-4 h-4 mr-2" />
                    Pinterest
                  </div>
                </div>
              </div>
            </div>

            {/* Happy Hour Promo */}
            <div className=" rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                WEDGET BANNER
              </h3>

              <img src={blog3} alt="img" />
            </div>

            {/* Tags */}
            <div className=" rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                TAGS
              </h3>
              <div className="flex flex-wrap gap-2">
                <p className="border border-gray-100 w-fit px-2 py-1">
                  ecommerce
                </p>
                <p className="border border-gray-100 w-fit px-2 py-1">food</p>
                <p className="border border-gray-100 w-fit px-2 py-1">
                  clothes
                </p>
                <p className="border border-gray-100 w-fit px-2 py-1">
                  klbtheme
                </p>
                <p className="border border-gray-100 w-fit px-2 py-1">
                  cotton
                </p>
                <p className="border border-gray-100 w-fit px-2 py-1">shop</p>
                <p className="border border-gray-100 w-fit px-2 py-1">
                  shopify
                </p>
                <p className="border border-gray-100 w-fit px-2 py-1">store</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;