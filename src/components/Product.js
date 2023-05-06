import React, { useEffect } from "react";
import { useCartContext } from "../context/cartContext";
import axios from "axios";

const Product = () => {
  const { products, cart, addProducts, addToCart, removeFromCart } =
    useCartContext();

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    addProducts(response.data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-span-4 h-[100vh] overflow-y-auto">
      <div className="grid grid-cols-4 gap-8">
        {products.map((p) => (
          <div key={p.id} className="flex flex-col gap-4">
            <div className="w-full h-[200px]">
              <img
                src={p.thumbnail}
                alt="product_item"
                className="object-cover w-full h-full rounded"
              />
            </div>
            {cart.some((c) => c.id === p.id) ? (
              <button
                className="border bg-white text-slate-700 py-2"
                onClick={() => removeFromCart(p.id)}
              >
                Remove from cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart({
                    id: p.id,
                    thumbnail: p.thumbnail,
                    title: p.title,
                    qty: 1,
                    price: p.price,
                    description: p.description,
                  })
                }
                className="w-full bg-blue-600 text-gray-950 py-2"
              >
                Add to cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
