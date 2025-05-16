"use client";

import { CartItem, useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";

const CartItemCard = ({ cloth }: { cloth: CartItem }) => {
  const router = useRouter();
  const { addItem, removeItem } = useCart();

  return (
    <>
      <div className="flex flex-col gap-2">
        <div
          key={cloth.id}
          className="bg-white h-full p-4 border-1 hover:border-2 box-border flex flex-col cursor-pointer shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            onClick={() => router.push(`products/${cloth.id}`)}
            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            src={cloth.Image}
            alt={cloth.name}
          />
          <div className="p-5 flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-gray-800">
              {cloth.name}
            </h2>
            <p className="text-gray-600">{cloth.description}</p>
          </div>
          <div>
            <p>{cloth.price} сум</p>
            <div className="flex gap-1 items-center">
              <button
                className="cursor-pointer text-xl"
                onClick={() => {
                  removeItem(cloth.id);
                }}
              >
                -
              </button>
              <p>{cloth.quantity}</p>
              <button
                className="cursor-pointer text-xl"
                onClick={() => {
                  addItem({
                    id: cloth.id,
                    name: cloth.name,
                    Image: cloth.Image,
                    price: cloth.price,
                    quantity: 1,
                    description: cloth.description,
                    gender: cloth.gender,
                    authorId: cloth.authorId,
                  });
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemCard;
