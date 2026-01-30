import { useState } from "react";
import { FaShop } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useCart } from "../../Context/CartContext";
import { NavLink, useNavigate } from "react-router";
import { FaRegUser } from "react-icons/fa";
import Register from "../../Pages/Form/Register";

export default function Navbar() {
  const [openForm, setOpenForm] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const navLinks = [
    { id: 1, link: "Shop", to: "/" },
    { id: 2, link: "About", to: "/About" },
    { id: 3, link: "Contact", to: "/Contact" },
  ];

  const { cart, removeFromCart, clearCart, total } = useCart();
  const navigate = useNavigate();

  const handleBtnCheckout = () => {
    navigate("/Checkout");
    setOpenCart(false);
  };

  const handleBtnHome = () => navigate("/");
  const handleBtnForm = () => setOpenForm(!openForm);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-around items-center bg-gray-200/80 backdrop-blur-3xl shadow-md fixed w-full top-0 min-h-20 z-90">
        <div className="logo">
          <h2
            className="text-[30px] font-semibold cursor-pointer"
            onClick={handleBtnHome}
          >
            Ecomm
          </h2>
        </div>

        <ul className="flex space-x-6">
          {navLinks.map((ele) => (
            <li
              key={ele.id}
              className="text-[20px] font-medium cursor-pointer hover:-translate-y-1 transition-all duration-150"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-3 border-orange-300 text-orange-500 pb-2"
                    : "pb-2"
                }
                to={ele.to}
              >
                {ele.link}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="icons flex space-x-5">
          <FaShop
            size={30}
            className="cursor-pointer"
            onClick={() => setOpenCart(!openCart)}
          />
          <FaRegUser
            size={30}
            className="cursor-pointer"
            onClick={handleBtnForm}
          />
        </div>
      </nav>

      {/* ================= CART ================= */}
      <div
        className={`fixed top-0 bottom-0 min-h-screen
        bg-gray-200 backdrop-blur-3xl shadow-lg
        transition-all duration-300 ease-in-out z-50
        ${openCart ? "w-95 lg:w-80 right-0 z-99" : "w-0 -right-100 opacity-0"}`}
      >
        <div className="relative min-h-full flex flex-col">

          {/* top-cart */}
          <div className="py-4 border-b shadow-sm">
            <IoCloseCircleSharp
              size={30}
              className="mx-5 cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
            <h3 className="text-[22px] font-semibold text-center text-gray-800">
              Cart Items
            </h3>

            <button
              className="bg-gray-300 hover:bg-gray-400 transition cursor-pointer block mx-auto py-1 px-5 mt-5 rounded"
              onClick={() => {
                if (confirm("are you sure ?")) {
                  clearCart();
                }
              }}
            >
              Clear items
            </button>
          </div>

          {/* cart items */}
          <div className="px-4 py-6 space-y-4 overflow-y-auto max-h-[58vh]">
            {cart.length === 0 && (
              <p className="text-center text-gray-700 font-medium bg-green-400 min-h-full">
                Cart Is Empty 👜
              </p>
            )}

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-white/70 p-3 rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-contain bg-white p-1 rounded"
                />

                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    ${item.price} × {item.qty}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 text-lg"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>

          {/* bottom-cart */}
          <div className="py-3 px-5 border-t shadow-md absolute bottom-0 right-0 left-0">
            <button
              className="bg-orange-400 hover:bg-orange-500 transition cursor-pointer text-white px-6 py-2 rounded-md block mx-auto"
              onClick={handleBtnCheckout}
            >
              Checkout
            </button>

            <p className="font-semibold text-center mt-5 text-[20px]">
              Total :{" "}
              <span className="font-bold text-orange-500">{total} DH</span>
            </p>
          </div>

        </div>
      </div>

      {/* ================= FORM ================= */}
      <div className="form">
        {openForm && <Register closeForm={handleBtnForm} />}
      </div>
    </>
  );
}
