// components/ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // أيقونة جاهزة (لو مركبة lucide-react)

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // نتابع وضع الاسكرول
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // نطلع لفوق
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // نزول ناعم
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-brand-main text-white shadow-lg hover:bg-[#268478] transition-all"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
