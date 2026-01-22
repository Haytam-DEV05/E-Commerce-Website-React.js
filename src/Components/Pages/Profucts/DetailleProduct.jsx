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
    <div className="max-w-250 mx-auto">
      <button
        className="bg-blue-400 text-white text-[20px] font-light py-1 px-5 cursor-pointer my-10 rounded"
        onClick={handleBtnPrev}
      >
        retourn
      </button>
      <div className="product bg-gray-400 md:flex items-center gap-10 max-w-[90%] md:max-w-[80%] mx-auto p-5 my-5 rounded-3xl">
        <div className="image">
          <img
            src={currentProduct.image}
            className="max-h-50 mx-auto md:max-h-full"
          />
        </div>
        <div className="info-content text-white">
          <h2 className="text-[22px] font-semibold">{currentProduct.title}</h2>
          <p className="text-[18px] my-5 line-clamp-3 md:line-clamp-5 lg:line-clamp-none">
            {currentProduct.description}
          </p>
          <span className="text-[20px]">{currentProduct.price}DH</span>
          <button
            className="bg-gray-300 cursor-pointer py-1 px-5 block mt-3"
            onClick={() => addToCart(currentProduct)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      {/* PRODUCTS FROM THE SAME CATEGORY */}
      <div className="container-products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {productsCategory.map((p) => {
          return (
            <div
              className="product bg-gray-300 p-5 rounded-md shadow-md cursor-pointer mb-5"
              key={p.id}
              onClick={() => handleBtnDetaile(p.id)}
            >
              <div className="image p-4">
                <img
                  src={p.image}
                  alt={p.title}
                  aria-label="picture-product"
                  className="w-full h-50 object-contain"
                />
              </div>
              <div className="info-content">
                <h3 className="text-[25px] font-semibold">{p.title}</h3>
                <p className="text-[20px] font-black">{p.price} DH</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
