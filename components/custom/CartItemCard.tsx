'use client';

import { CartItem, useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';

const CartItemCard = ({ cloth }: { cloth: CartItem }) => {
  const router = useRouter();
  const { addItem, removeItem, removeFromCart } = useCart();
  console.log(cloth.selectedSize);

  return (
    <div className="flex flex-col gap-2">
      <div className="box-border flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white p-1 shadow-md transition-shadow duration-300 hover:border-2 hover:shadow-xl">
        <img
          onClick={() => router.push(`/products/${cloth.id}`)}
          className="h-60 w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
          src={cloth.Image}
          alt={cloth.name}
        />

        <div className="flex flex-col gap-2 p-5">
          <h2 className="text-xl font-semibold text-gray-800">{cloth.name}</h2>
          <p className="text-sm text-gray-600">{cloth.description}</p>
          <p className="mb-2 text-base font-medium">Размер: {cloth.selectedSize} см</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium">{cloth.price.toLocaleString()} сум</p>
            <div className="flex items-center gap-3">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-lg text-white"
                onClick={() => {
                  removeItem(cloth.id);
                }}
              >
                -
              </button>
              <p className="text-base font-medium">{cloth.quantity}</p>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-lg text-white"
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
          <div
            onClick={() => removeFromCart(cloth.id)}
            className="mt-4 flex items-center justify-center gap-4"
          >
            Удалить из корзины
            <FaTrash size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
