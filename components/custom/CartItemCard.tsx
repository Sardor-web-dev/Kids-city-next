"use client";

import { CartItem, useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

const CartItemCard = ({ cloth }: { cloth: CartItem }) => {
  const router = useRouter();
  const { addItem, removeItem, removeFromCart } = useCart();
  console.log(cloth.selectedSize);

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white h-full p-1 border hover:border-2 box-border flex flex-col cursor-pointer shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img
          onClick={() => router.push(`/products/${cloth.id}`)}
          className="w-full h-60 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
          src={cloth.Image}
          alt={cloth.name}
        />

        <div className="p-5 flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-gray-800">{cloth.name}</h2>
          <p className="text-gray-600 text-sm">{cloth.description}</p>
          <p className="text-base font-medium mb-2">
            Размер: {cloth.selectedSize} см
          </p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium">
              {cloth.price.toLocaleString()} сум
            </p>
            <div className="flex gap-3 items-center">
              <button
                className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-lg"
                onClick={() => {
                  removeItem(cloth.id);
                }}
              >
                -
              </button>
              <p className="text-base font-medium">{cloth.quantity}</p>
              <button
                className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-lg"
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
                    selectedSize: cloth.selectedSize,
                  });
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            Удалить из корзины
            <FaTrash size={15} onClick={() => removeFromCart(cloth.id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
