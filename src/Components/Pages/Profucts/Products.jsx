import { useEffect, useState } from "react";
import Product from "./Product";
import Shop from "../Shop/Shop";

export default function Products() {
  const buttonsCategory = [
    { id: 1, category: "all", link: "All" },
    { id: 2, category: "men's clothing", link: "Men's clothing" },
    { id: 3, category: "women's clothing", link: "Women's clothing" },
    { id: 4, category: "jewelery", link: "Jewelery" },
    { id: 5, category: "electronics", link: "Electronics" },
  ];
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setProducts(data);
      });
  }, []);

  const handleBtnData = (param) => {
    param === "all"
      ? setProducts(allProducts)
      : setProducts(allProducts.filter((ele) => ele.category === param));
  };

  return (
    <>
      <Shop />
      <div className="max-w-275 mx-auto my-10">
        <div className="header">
          <h2 className="text-[40px] font-bold mb-10 border-b-2 border-orange-300 max-w-fit mx-auto">
            Our Products
          </h2>
          <div className="buttons-category grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-fit space-x-1 space-y-1 mx-auto my-10">
            {buttonsCategory.map((b) => {
              return (
                <button
                  key={b.id}
                  className="bg-orange-300 py-2 px-7 rounded-4xl cursor-pointer text-[15px] font-normal md:font-medium hover:bg-orange-500 transition-all duration-300"
                  onClick={() => handleBtnData(b.category)}
                >
                  {b.link}
                </button>
              );
            })}
          </div>
        </div>
        <div
          className="products-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          id="shop"
        >
          {products ? (
            products.map((p) => {
              return <Product product={p} key={p.id} />;
            })
          ) : (
            <h2 className="text-[20px] font-semibold">Loading ...</h2>
          )}
        </div>
      </div>
    </>
  );
}
