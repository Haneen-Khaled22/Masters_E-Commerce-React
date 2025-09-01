import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import beverages from "../../assets/beverages.svg"
import biscuits from "../../assets/biscuits.svg"
import breads from "../../assets/breads.svg"
import breakfast from "../../assets/breakfast.svg"
import frozen from "../../assets/frozenfood.svg"
import fruits from "../../assets/fruits.svg"
import grocery from "../../assets/grocery.svg"
import meats from "../../assets/meats.svg"


function LastNavbar() {
  const [open, setOpen] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 mt-3 relative">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        
       
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-2 bg-[#35AFA0] text-white text-sm flex items-center gap-1 rounded-2xl cursor-pointer md:border-0 md:w-auto"
          >
            <i className="fas fa-bars text-md"></i>
            <span>ALL CATEGORIES</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {open && (
            <div className="absolute top-full left-0 mt-2 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-50 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 text-md text-gray-700 dark:text-gray-400">
                <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  
                    <img src={beverages}/>
                    Beverages
                
                </li>
                <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  
                    <img src={biscuits}/>
                    Biscuits & Snacks
                
                </li>
                <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  
                    <img src={breads}/>
                    Breads & Bakery
                
                </li>
                <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  
                    <img src={breakfast}/>
                    Breakfast & Dairy
                
                </li>
                <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  
                    <img src={frozen}/>
                    Frozen Foods
                
                </li>
                <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  
                    <img src={fruits}/>
                    Fruits & Vegetables
                
                </li>
                <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  
                    <img src={grocery}/>
Grocery & Staples                
                </li>
                <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  
                    <img src={meats}/>
Meats & Seafood               
                </li>
                <hr className="text-gray-300 mt-2 mb-2 "/>
                <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Value of the day</li>
                <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Top 100 Offers</li>
                <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">New Arrivals</li>
              </ul>
            </div>
          )}
        </div>

       
        <button
          className="md:hidden text-2xl text-[#35AFA0]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>

     
        <ul className="hidden md:flex items-center gap-24 mx-auto cursor-pointer">
          <li className="hover:text-[#2D978A] hover:bg-gray-100 p-2 rounded-lg">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="hover:text-[#2D978A] hover:bg-gray-100 p-2 rounded-lg">
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li className="hover:text-[#2D978A] hover:bg-gray-100 p-2 rounded-lg">
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          <li className="hover:text-[#2D978A] hover:bg-gray-100 p-2 rounded-lg">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>

      
      {menuOpen && (
        <ul className="flex flex-col md:hidden bg-gray-50 border-t border-gray-200 p-4 space-y-3 text-sm font-medium uppercase cursor-pointer">
          <li className="hover:text-[#2D978A] hover:bg-gray-100 p-2 rounded-lg">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="hover:text-[#2D978A] hover:bg-gray-100 p-2 rounded-lg">
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li className="hover:text-[#2D978A] hover:bg-gray-100 p-2 rounded-lg">
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          <li className="hover:text-[#2D978A] hover:bg-gray-100 p-2 rounded-lg">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default LastNavbar;
