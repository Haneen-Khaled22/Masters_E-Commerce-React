import React, { useState } from 'react'
import handicon from "../../assets/Icon.png"
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../Context/LanguageContext';

function FirstNavbar() {

    const { language, toggleLanguage } = useLanguage();

    const [open, setOpen] = useState(false);
    return (
        <div>
          

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 ">
   
    <div>
        <ul className='flex space-x-6 text-sm font-normal '>
            <li><NavLink to={'/aboutus'}>About us</NavLink></li>
            <li>Compare</li>
            <li>Wishlist</li>
        </ul>
    </div>
    <div className='hidden md:block'>
        <ul className='flex space-x-6 text-sm font-normal'>
         <li className="flex items-center gap-2 border-r-1 border-gray-300 pe-4">
  <img src={handicon} alt="secure delivery" className="w-5 h-5" />
  <span>100% Secure delivery without contacting the courier</span>
</li>

           
  <li className="border-r-1 border-gray-300 pe-4">Need help? Call Us:<span className="text-[#35AFA0] font-bold"> +0020500</span></li>
  <li className="relative">
      {/* زرار اللغة */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm cursor-pointer md:border-0 md:p-0 md:w-auto dark:text-white"
      >
        {language === "en" ? "English" : "العربية"}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
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

      {/* القائمة */}
      {open && (
        <div className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
            <li>
              <button
                onClick={() => {
                  toggleLanguage(); // ✅ يغير اللغة
                  setOpen(false); // ✅ يقفل القائمة
                }}
                className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {language === "en" ? "Arabic" : "English"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </li>
    <li className="relative">
      <button
       
        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm cursor-pointer md:border-0  md:p-0 md:w-auto dark:text-white"
      >
        USD
        <svg
          className="w-2.5 h-2.5 ms-2.5"
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

      
    </li>


        </ul>
    </div>
  </div>
</nav>


        </div>
    )
}

export default FirstNavbar
