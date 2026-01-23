import { useEffect, useState } from "react";
import Product from "./Product";
import Shop from "../Shop/Shop";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  if (!products);
  return (
    <>
    <Shop />
    <div className="max-w-275 mx-auto my-10">
      <div className="products-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
