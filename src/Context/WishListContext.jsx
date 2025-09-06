import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  // ✅ استرجاع البيانات من localStorage أول مرة
  const [wishList, setWishList] = useState(() => {
    const saved = localStorage.getItem("wishList");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ حفظ أي تحديث في localStorage
  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  const addToWishList = (item) => {
    setWishList((prev) => [...prev, item]);
    toast.success("Added to wishlist");
  };

  const removeFromWishList = (id) => {
    setWishList((prev) => prev.filter((item) => item.id !== id));
    toast.error("Removed from wishlist");
  };

  const clearWishList = () => {
    setWishList([]);
  };

  return (
    <WishListContext.Provider
      value={{ wishList, addToWishList, removeFromWishList, clearWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => useContext(WishListContext);
