import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useCart } from "../../Context/CartContext";

export default function DetailleProduct() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentProduct(data);

        fetch(`https://fakestoreapi.com/products/category/${data.category}`)
          .then((res) => res.json())
          .then((data) => {
            setProductsCategory(data.filter((ele) => ele.id != id));
          });
      });
  }, [id]);

  const navigate = useNavigate();
  const handleBtnDetaile = (id) => {
    navigate(`/Detaille/${id}`);
  };

  const handleBtnPrev = () => {
    navigate("/");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <button
        onClick={handleBtnPrev}
        className="
      my-8
      text-sm
      text-gray-700
      hover:text-indigo-600
      transition
      font-medium
      cursor-pointer
    "
      >
        ← Retour
      </button>
      <div
        className="
      bg-white
      border border-gray-200
      rounded-3xl
      shadow-sm
      hover:shadow-lg
      transition
      md:flex
      items-center
      gap-10
      p-6
      max-w-[90%]
      md:max-w-[80%]
      mx-auto
    "
      >
        <div className="flex-1 bg-gray-50 rounded-2xl p-6">
          <img
            src={currentProduct.image}
            className="max-h-72 mx-auto object-contain"
            alt={currentProduct.title}
          />
        </div>

        <div className="flex-1 space-y-4 text-gray-800">
          <h2 className="text-2xl font-semibold">{currentProduct.title}</h2>

          <p className="text-gray-600 leading-relaxed line-clamp-5">
            {currentProduct.description}
          </p>

          <span className="text-2xl font-bold text-gray-900 block">
            {currentProduct.price} DH
          </span>

          <button
            onClick={() => addToCart(currentProduct)}
            className="
          bg-indigo-600
          hover:bg-indigo-700
          text-white
          px-6
          py-2
          rounded-lg
          transition
        "
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* PRODUCTS FROM SAME CATEGORY */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          Related Products
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productsCategory.map((p) => (
            <div
              key={p.id}
              onClick={() => handleBtnDetaile(p.id)}
              className="
            bg-white
            border border-gray-200
            rounded-xl
            shadow-sm
            hover:shadow-lg
            transition
            cursor-pointer
            overflow-hidden
          "
            >
              <div className="bg-gray-50 p-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-44 object-contain"
                />
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-gray-800 font-medium line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-lg font-bold text-gray-900">{p.price} DH</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
