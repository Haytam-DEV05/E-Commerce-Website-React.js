import { useState } from "react";
import { FaShop } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useCart } from "../../Context/CartContext";
import { NavLink, useNavigate } from "react-router";

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const { cart, removeFromCart, clearCart, total } = useCart();
  const navigate = useNavigate();
  const handleBtnCheckout = () => {
    navigate("/Checkout");
    setOpenCart(false);
  };
  const handleBtnHome = () => {
    navigate("/");
  };
  return (
    <nav className="flex justify-around items-center bg-gray-200 shadow-md fixed w-full backdrop-blur-3xl top-0 min-h-20">
      <div className="logo">
        <h2
          className="text-[30px] font-semibold cursor-pointer"
          onClick={handleBtnHome}
        >
          Ecomm
        </h2>
      </div>
      <ul className="flex space-x-6">
        <li className="text-[20px] font-medium cursor-pointer hover:-translate-y-1 transition-all duration-150">
          <NavLink to="/">Shop</NavLink>
        </li>
        <li className="text-[20px] font-medium cursor-pointer hover:-translate-y-1 transition-all duration-150">
          <NavLink to="/About">About</NavLink>
        </li>
        <li className="text-[20px] font-medium cursor-pointer hover:-translate-y-1 transition-all duration-150">
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
      <div className="icon">
        <FaShop
          size={30}
          className="cursor-pointer"
          onClick={() => setOpenCart(!openCart)}
        />
        <div
          className={`cart bg-red-300 min-h-screen fixed top-0 bottom-0 ${openCart ? "min-w-95 lg:min-w-80  right-0 block" : "min-w-0 -right-100 hidden"}`}
        >
          <div className="container-cart relative min-h-full">
            {/* top-cart */}
            <div className="top-cart bg-blue-600 py-3">
              <IoCloseCircleSharp
                size={30}
                className="mx-5 cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
              <h3 className="text-[25px] font-semibold text-center">
                Cart-Items
              </h3>
              <button
                className="bg-blue-300 cursor-pointer block mx-auto py-1 px-5 mt-5"
                onClick={() => {
                  if (confirm("are you sure ?")) {
                    clearCart();
                  }
                }}
              >
                clear items
              </button>
            </div>
            {/* top-cart */}
            {/* ================= */}
            {/* header { PRODUCT DYAL USER } */}
            <div className="header-cart px-4 py-10 space-y-4 overflow-y-auto max-h-[80vh]">
              {cart.length === 0 && (
                <p className="text-center text-gray-700 font-medium">
                  Cart is empty 🛒
                </p>
              )}

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-sm max-w-full"
                >
                  {/* image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-contain bg-white p-1 rounded"
                  />

                  {/* info */}
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-800 line-clamp-1 max-w-[70%]">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      ${item.price} × {item.qty}
                    </p>
                  </div>

                  {/* remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 text-lg"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
            {/* header { PRODUCT DYAL USER }*/}
            {/* ================= */}
            {/* bottom-cart */}
            <div className="bottom-cart absolute bottom-0 py-5 px-5 bg-blue-600 w-full">
              <button
                className="bg-blue-400 cursor-pointer text-white px-5 py-1 block mx-auto"
                onClick={handleBtnCheckout}
              >
                checkout
              </button>
              <p className="font-semibold text-center mt-5 text-[25px]">
                Total :{" "}
                <span className="font-bold text-white text-[20px]">
                  {total} DH
                </span>
              </p>
            </div>
            {/* bottom-cart */}
          </div>
        </div>
      </div>
    </nav>
  );
}
