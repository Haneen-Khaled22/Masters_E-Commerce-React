import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../../assets/Link - Bacola Store.png";
import userphoto from "../../assets/user.png"
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../../Context/CartContext";
import { useWishList } from "../../Context/WishListContext";

function NavBar({searchTerm,setsearchTerm}) {
  const { cart, total,clearCart } = useCart();
  const{clearWishList}=useWishList();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  let {user,logout} = useAuth();
  let navigate = useNavigate();


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleLogout(){
    await logout();
    navigate('/login');
    console.log('logged out');
    clearCart();
    clearWishList();
    toast.success('logged out successfully');
  }
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900  border-t-1">
        <div className="mt-1 max-w-screen-xl flex items-center justify-between mx-auto p-2 gap-2">
          
          {/* Left: Logo */}
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-12" alt="Logo" />
          </a>

          {/* Center: Search */}
         <div className="flex flex-1 justify-center">
            <div className="relative w-3/4 md:w-[50%]">
              <input
              value={searchTerm}
              onChange={(e)=> setsearchTerm(e.target.value)}
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-3 pr-10 text-sm text-gray-900 border 
                           border-gray-300 rounded-lg bg-gray-50 
                           focus:ring-blue-500 focus:border-blue-500 
                           dark:bg-gray-700 dark:border-gray-600 
                           dark:placeholder-gray-400 dark:text-white 
                           dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="search for products,fruit,meat,eggs,etc,..."
              />
              {/* Search Icon at the END */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Icons (Cart, Profile, etc.) */}
  <div className="flex items-center space-x-3">
  {/* Profile Icon */}
 <div className="relative" ref={menuRef}>
      {/* أيقونة المستخدم */}
      <div
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <i className="fa-regular fa-user text-[17px]"></i>
      </div>

      {/* القائمة */}
      {open && (
        <div className="absolute right-0  w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-2 flex flex-col items-center gap-3">
          {/* صورة البروفايل */}
          <img
            src={userphoto}
            alt="Profile photo"
            className="w-16 h-16 rounded-full object-cover"
          />

          {/* الإيميل */}
          <p className="text-sm text-gray-700 text-center">
           {user ? user.email :"Guest"}
          </p>

          {/* زرار اللوج آوت */}
          {user? <button onClick={handleLogout}
          className="w-full py-2 text-sm text-red-600 font-medium hover:bg-gray-100 rounded-md">
            Logout
          </button>:null}
        </div>
      )}
    </div>

<span className="font-normal">{total.toFixed(2)}$</span>
  {/* Cart Icon */}
  <div
              title="Check Out"
              className={`relative w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 ${
                cart
                  ? cart.length > 0
                    ? "text-red-400"
                    : "text-gray-400"
                  : "text-gray-400"
              } hover:bg-gray-200 cursor-pointer`}
            >
              <a href="/checkout">
                <i className="fa-solid fa-bag-shopping text-[17px]"></i>
              </a>
              <span
                className={`absolute -top-2 -right-2 &bg-red-600 ${
                  cart
                    ? cart.length > 0
                      ? "bg-red-400"
                      : "bg-gray-400"
                    : "bg-gray-400"
                } text-white text-xs rounded-full px-1.5 w-4 h-4`}
              >
                {cart ? cart.length : 0}
              </span>
            </div>
</div>





        </div>
      </nav>
    </div>
  );
}

export default NavBar;
