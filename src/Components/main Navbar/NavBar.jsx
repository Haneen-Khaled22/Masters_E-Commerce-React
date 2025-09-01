import React from "react";
import logo from "../../assets/Link - Bacola Store.png";

function NavBar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900  border-t-1">
        <div className="mt-1 max-w-screen-xl flex items-center justify-between mx-auto p-2 gap-2">
          
          {/* Left: Logo */}
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-12" alt="Logo" />
          </a>

          {/* Center: Search */}
         <div className="flex flex-1 justify-center">
            <div className="relative w-3/4 md:w-[50%]">
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-3 pr-10 text-sm text-gray-900 border 
                           border-gray-300 rounded-lg bg-gray-50 
                           focus:ring-blue-500 focus:border-blue-500 
                           dark:bg-gray-700 dark:border-gray-600 
                           dark:placeholder-gray-400 dark:text-white 
                           dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="search for products,fruit,meat,eggs,etc,..."
              />
              {/* Search Icon at the END */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Icons (Cart, Profile, etc.) */}
  <div className="flex items-center space-x-3">
  {/* Profile Icon */}
  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">
    <i className="fa-regular fa-user text-[17px]"></i>
  </div>

<span className="font-normal">0.00$</span>
  {/* Cart Icon */}
  <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-red-400 hover:bg-gray-200 cursor-pointer">
    <i className="fa-solid fa-bag-shopping text-[17px]"></i>
    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5 w-4 h-4">
      0
    </span>
  </div>
</div>





        </div>
      </nav>
    </div>
  );
}

export default NavBar;
