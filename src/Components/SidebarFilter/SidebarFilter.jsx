// SidebarFilter.js
import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";
import sideimg from "../../assets/shop sidebar.png";

function SidebarFilter({ filters, setFilters }) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      const { data: catData, error: catError } = await supabase
        .from("categories")
        .select("*");
      if (catError) console.error("Error fetching categories:", catError.message);
      setCategories(catData || []);

      const { data: brandData, error: brandError } = await supabase
        .from("brands")
        .select("*");
      if (brandError) console.error("Error fetching brands:", brandError.message);
      setBrands(brandData || []);
    };
    fetchFilters();
  }, []);

  return (
    <div className="w-full p-4 mb-12">
      {/* Categories */}
      <h3 className="font-bold mb-4">PRODUCT CATEGORIES</h3>
      {categories.map((cat) => (
        <div key={cat.id} className="mb-2">
          <label>
            <input
  type="checkbox"
  checked={filters.categories.includes(cat.id)} // string
  onChange={(e) => {
    const id = String(cat.id);  // أو brand.id
 // خليه string زي ما هو
    if (e.target.checked) {
      setFilters({
        ...filters,
        categories: [...filters.categories, id],
      });
    } else {
      setFilters({
        ...filters,
        categories: filters.categories.filter((c) => c !== id),
      });
    }
  }}
/>
            <span className="ml-2 text-[#71778E]">{cat.name}</span>
          </label>
        </div>
      ))}

      {/* Brands */}
      <h3 className="font-bold mt-20 mb-2">BRANDS</h3>
      {brands.map((brand) => (
        <div key={brand.id}>
          <label>
           <input
  type="checkbox"
  checked={filters.brands.includes(brand.id)} // string
  onChange={(e) => {
    const id = brand.id; // string
    if (e.target.checked) {
      setFilters({
        ...filters,
        brands: [...filters.brands, id],
      });
    } else {
      setFilters({
        ...filters,
        brands: filters.brands.filter((b) => b !== id),
      });
    }
  }}
/>
            <span className="ml-2">{brand.name}</span>
          </label>
        </div>
      ))}

      {/* Price Filter */}
      <h3 className="font-bold mt-4 mb-6">PRICE</h3>
      <div className="flex space-x-2 items-end">
        <div>
          <p className="text-[#71778E] mb-2">From</p>
          <input
            type="number"
            placeholder="0"
            value={filters.minPrice ?? ""}
            onChange={(e) =>
              setFilters({
                ...filters,
                minPrice: e.target.value === "" ? null : Number(e.target.value),
              })
            }
            className="w-20 bg-[#F3F4F7] rounded px-3 py-1"
          />
        </div>

        <div className="text-lg px-3 text-[#71778E] self-end">-</div>

        <div>
          <p className="text-[#71778E] mb-2">To</p>
          <input
            type="number"
            placeholder="0"
            value={filters.maxPrice ?? ""}
            onChange={(e) =>
              setFilters({
                ...filters,
                maxPrice: e.target.value === "" ? null : Number(e.target.value),
              })
            }
            className="w-20 bg-[#F3F4F7] rounded px-3 py-1"
          />
        </div>
      </div>

      {/* Availability */}
      <h3 className="font-bold mt-4 mb-2">AVAILABILITY</h3>
      <label>
        <input
          type="radio"
          name="availability"
          checked={filters.availability === "in"}
          onChange={() => setFilters({ ...filters, availability: "in" })}
        />
        <span className="ml-2 text-[#71778E]">In Stock</span>
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="availability"
          checked={filters.availability === "out"}
          onChange={() => setFilters({ ...filters, availability: "out" })}
        />
        <span className="ml-2 text-[#71778E]">Out of Stock</span>
      </label>

      <img src={sideimg} className="w-full object-cover mt-6" />
    </div>
  );
}

export default SidebarFilter;
