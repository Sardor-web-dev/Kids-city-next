'use client';

import { CartItem, useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';

const CartItemCard = ({ cloth }: { cloth: CartItem }) => {
  const router = useRouter();
  const { addItem, removeItem, removeFromCart } = useCart();
  console.log(cloth.selectedSize);

  return (
    <div className="flex flex-col gap-3">
      <div className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-border/30 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary">
        <img
          onClick={() => router.push(`/products/${cloth.id}`)}
          className="aspect-square h-auto w-full rounded-t-xl sm:rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-110"
          src={cloth.Image}
          alt={cloth.name}
        />

        <div className="flex flex-col gap-3 sm:gap-4 p-3 sm:p-5">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-foreground line-clamp-2">{cloth.name}</h2>
            <p className="mt-1 text-xs sm:text-sm text-foreground/60 line-clamp-2">{cloth.description}</p>
          </div>
          <p className="text-xs sm:text-sm font-medium text-foreground/70">Размер: <span className="text-primary font-semibold">{cloth.selectedSize} см</span></p>
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm sm:text-base font-bold text-primary">{cloth.price.toLocaleString()} сум</p>
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-border/40 bg-muted p-0.5 sm:p-1">
              <button
                className="flex h-6 sm:h-7 w-6 sm:w-7 items-center justify-center rounded-full bg-destructive/10 text-sm sm:text-lg text-destructive transition-all hover:bg-destructive hover:text-white"
                onClick={() => {
                  removeItem(cloth.id);
                }}
              >
                −
              </button>
              <p className="w-5 text-center text-xs sm:text-sm font-semibold">{cloth.quantity}</p>
              <button
                className="flex h-6 sm:h-7 w-6 sm:w-7 items-center justify-center rounded-full bg-primary/10 text-sm sm:text-lg text-primary transition-all hover:bg-primary hover:text-white"
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
          <button
            onClick={() => removeFromCart(cloth.id)}
            className="mt-1 sm:mt-2 flex items-center justify-center gap-2 rounded-lg bg-destructive/10 py-1.5 sm:py-2 font-medium text-xs sm:text-sm text-destructive transition-all duration-200 hover:bg-destructive hover:text-white"
          >
            Удалить
            <FaTrash size={12} className="sm:w-3.5 sm:h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
