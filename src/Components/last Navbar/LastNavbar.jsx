import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
            <div className="absolute top-full left-0 mt-2 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 text-md text-gray-700 dark:text-gray-400">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Arabic
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    English
                  </a>
                </li>
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
