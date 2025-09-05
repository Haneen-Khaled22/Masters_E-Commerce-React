import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // ⬆️ أول ما يتغير الـ path الشاشة تطلع فوق
  }, [pathname]);

  return null;
}
