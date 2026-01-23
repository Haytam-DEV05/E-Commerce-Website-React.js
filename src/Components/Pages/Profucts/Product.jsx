import { useNavigate } from "react-router";
import { useCart } from "../../Context/CartContext";

export default function Product({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const hanleBtnDetaille = (id) => {
    navigate(`/Detaille/${id}`);
  };
  return (
    <div
      onClick={() => hanleBtnDetaille(product.id)}
      className="
    product
    bg-white
    rounded-xl
    border border-gray-200
    shadow-sm
    hover:shadow-lg
    transition-all duration-300
    cursor-pointer
    overflow-hidden
  "
    >
      <div className="w-full h-56 flex items-center justify-center bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-44 object-contain"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-gray-800 text-[16px] font-semibold line-clamp-1">
          {product.title}
        </h3>

        <p className="text-lg font-bold text-gray-900">${product.price}</p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="
        w-full
        mt-2
        bg-indigo-600
        hover:bg-indigo-700
        text-white
        py-2
        rounded-lg
        transition
      "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
