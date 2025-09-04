import { createContext, useState, useContext, useEffect } from "react";

// 1️⃣ إنشاء الكونتكست
const LanguageContext = createContext();

// 2️⃣ البروڤايدر اللي هيلف حوالين الابلكيشن
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en"); // default English

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

   useEffect(() => {
    if (language === "ar") {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl"; // من اليمين للشمال
    } else {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr"; // من الشمال لليمين
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 3️⃣ هوك جاهز للاستخدام
export function useLanguage() {
  return useContext(LanguageContext);
}
