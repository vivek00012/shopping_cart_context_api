import React, { useMemo } from "react";
import { useCartContext } from "../context/cartContext";

const Cart = () => {
  const { cart, addToCart, updateCart, removeFromCart } = useCartContext();

  const total = useMemo(() => {
    return cart.reduce((acc, curr) => (acc + curr.price) * curr.qty, 0);
  });

  return (
    <div className="col-span-2 mr-2 pb-2">
      <div className="h-screen bg-gray-500 px-2 py-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between items-center">
            <span>Items on cart</span>
            <div className="flex flex-col gap-2">
              <span>Total</span>
              <span>$ {total}</span>
            </div>
          </div>
          <hr />
          <div className="max-h-[600px] overflow-y-auto px-2 mt-2">
            {cart.map((c) => (
              <div
                key={c.id}
                className="px-2 py-2 mt-2 rounded bg-white flex flex-row justify-between"
              >
                <div className="flex flex-col gap-2">
                  <div className="w-[80px] h-[80px]">
                    <img
                      src={c.thumbnail}
                      alt="cart_item"
                      className="object-fill w-full h-full"
                    />
                  </div>
                  <span>Price: ${c.price}</span>
                </div>
                <div className="flex flex-row gap-2 justify-evenly items-center">
                  <button
                    className=" border-2 px-[10px] py-[2px] font-bold   border-slate-900 rounded-full"
                    onClick={() => updateCart(c.id, c.qty - 1)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span className="text-small text-gray-900">{c.qty}</span>
                  <button
                    className="border-2 px-[8px] py-[2px] font-bold   border-slate-900 rounded-full"
                    onClick={() => updateCart(c.id, c.qty + 1)}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
