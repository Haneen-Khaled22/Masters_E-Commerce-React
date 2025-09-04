import { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
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
    setCart((prev) => [...prev, { id, price, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
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
      setCart((prev) => prev.filter((item) => item.quantity > 0));
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
