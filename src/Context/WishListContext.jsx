import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const { user } = useAuth();



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
   if (!user) {
      toast((t) => (
        <span className="flex gap-2 capitalize items-center">
          <span className="text-brand-yellow">
            <i className="fa-solid fa-warning"></i>
          </span>
          <a
            className="text-brand-main underline uppercase font-semibold"
            href="/login"
          >
            login
          </a>{" "}
          to add items to wishList
          <button
            onClick={() => toast.dismiss(t.id)}
            className="text-brand-red"
          >
            <i className="fa-solid fa-close"></i>
          </button>
        </span>
      ));
      return;
    }
    
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
