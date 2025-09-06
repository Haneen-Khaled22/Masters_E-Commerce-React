import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const { user } = useAuth();
  // ✅ استرجاع البيانات من localStorage أول مرة
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [total, setTotal] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved
      ? JSON.parse(saved).reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        )
      : 0;
  });

  // ✅ حفظ أي تحديث في localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [cart]);

  const addToCart = (id, price) => {
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
          to add items to cart
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
    setCart((prev) => [...prev, { id, price, quantity: 1 }]);
    toast.success("Added to cart");
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error("Removed from cart");
  };

  const clearCart = () => {
    setCart([]);
  };
  const plus = (id, price) => {
    if (cart.find((item) => item.id === id))
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    else addToCart(id, price);
  };
  const minus = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
      if (cart.find((item) => item.id === id).quantity === 1) {
        removeFromCart(id);
      }
    }
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, plus, minus, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
