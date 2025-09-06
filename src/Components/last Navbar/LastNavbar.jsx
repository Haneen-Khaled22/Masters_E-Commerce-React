import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { supabase } from "../../Helper/supabase-client";

function LastNavbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      let { data, error } = await supabase.from("categories").select("*");
      if (!error) setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:text-white relative px-4 md:px-10">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        {/* زرار All Categories */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-2 bg-[#35AFA0] text-white flex items-center gap-1 rounded-2xl cursor-pointer"
          >
            <i className="fas fa-bars text-md"></i>
            <span>ALL CATEGORIES</span>
          </button>

          {/* Dropdown list */}
          {open && (
            <div className="absolute top-full left-0 mt-2 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-56 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 text-md text-gray-700 dark:text-gray-400">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <NavLink
                      to={`/categorydetails/${cat.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {cat.name}
                    </NavLink>
                  </li>
                ))}
                <hr className="text-gray-300 mt-2 mb-2" />
                <li className="px-4 py-2 hover:bg-gray-100">Value of the day</li>
                <li className="px-4 py-2 hover:bg-gray-100">Top 100 Offers</li>
                <li className="px-4 py-2 hover:bg-gray-100">New Arrivals</li>
              </ul>
            </div>
          )}
        </div>

        {/* لينكات للشاشات الكبيرة */}
        <ul className="hidden md:flex items-center gap-24 mx-auto cursor-pointer">
          {["Home", "Shop", "Blog", "Contact"].map((link) => (
            <li key={link}>
              <NavLink
                to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#35AFA0] border-b-2 border-[#35AFA0]"
                      : "text-black"
                  } hover:text-[#35AFA0]`
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* زرار منيو للموبايل */}
        <button
          className="md:hidden text-black dark:text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars text-brand-main"></i>
        </button>
      </div>

      {/* منيو الموبايل */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-3">
          <ul className="flex flex-col gap-4">
            {["Home", "Shop", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <NavLink
                  to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block font-medium transition-colors duration-200 ${
                      isActive ? "text-[#35AFA0]" : "text-black"
                    } hover:text-[#35AFA0]`
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default LastNavbar;
