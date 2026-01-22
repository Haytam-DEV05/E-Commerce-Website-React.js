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
      className="product bg-gray-300 cursor-pointer"
      onClick={() => {
        hanleBtnDetaille(product.id);
      }}
    >
      <div className="image w-full max-h-50 mb-10">
        <img src={product.image} alt="" className="h-50 mx-auto py-4" />
      </div>
      <div className="content px-5 py-2 bg-red-300">
        <h3 className="text-[18px] font-bold">{product.title}</h3>
        <p className="text-[20px]">{product.price}</p>
        <button
          className="bg-blue-400 py-1 px-5 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
