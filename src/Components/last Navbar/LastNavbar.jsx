import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import beverages from "../../assets/beverages.svg";
import biscuits from "../../assets/biscuits.svg";
import breads from "../../assets/breads.svg";
import breakfast from "../../assets/breakfast.svg";
import frozen from "../../assets/frozenfood.svg";
import fruits from "../../assets/fruits.svg";
import grocery from "../../assets/grocery.svg";
import meats from "../../assets/meats.svg";
import house from "../../assets/householdicon.png";
import { supabase } from "../../Helper/supabase-client";

function LastNavbar() {
  const [open, setOpen] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const categoryImages = {
    Beverages: beverages,
    "Biscuits&Snacks": biscuits,
    "Breads&Bakery": breads,
    "Breakfast&Diary": breakfast,
    "Household Needs": house,
    "Frozen Foods": frozen,
    "Fruits&Vegetables": fruits,
    "Grocery&Staples": grocery,

    "Meats&Seafoods": meats,
  };

  useEffect(() => {
    async function fetchCategories() {
      let { data, error } = await supabase.from("categories").select("*");
      if (!error) setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:text-white relative px-10">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        {/* Dropdown button */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-2 bg-[#35AFA0] text-white  flex items-center gap-1 rounded-2xl cursor-pointer md:border-0 md:w-auto"
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
                      <img
                        src={categoryImages[cat.name]}
                        alt={cat.name}
                        className="w-5 h-5"
                      />
                      {cat.name}
                    </NavLink>
                  </li>
                ))}

                <hr className="text-gray-300 mt-2 mb-2" />
                <li className="px-4 py-2 hover:bg-gray-100">
                  Value of the day
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">Top 100 Offers</li>
                <li className="px-4 py-2 hover:bg-gray-100">New Arrivals</li>
              </ul>
            </div>
          )}
        </div>

        <ul className="hidden md:flex items-center gap-24 mx-auto cursor-pointe">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                ` font-medium transition-colors duration-200 
                ${
                  isActive
                    ? "text-[#35AFA0] border-b-2 border-[#35AFA0]"
                    : "text-gray-200"
                } 
                hover:text-[#35AFA0]`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                ` font-medium transition-colors duration-200 
                ${
                  isActive
                    ? "text-[#35AFA0] border-b-2 border-[#35AFA0]"
                    : "text-gray-200"
                } 
                hover:text-[#35AFA0]`
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                ` font-medium transition-colors duration-200 
                ${
                  isActive
                    ? "text-[#35AFA0] border-b-2 border-[#35AFA0]"
                    : "text-gray-200"
                } 
                hover:text-[#35AFA0]`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                ` font-medium transition-colors duration-200 
                ${
                  isActive
                    ? "text-[#35AFA0] border-b-2 border-[#35AFA0]"
                    : "text-gray-200"
                } 
                hover:text-[#35AFA0]`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LastNavbar;
