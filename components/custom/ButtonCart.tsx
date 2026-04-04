'use client';
import { useCart } from '@/contexts/CartContext';
import { Button } from '../ui/button';
import { FaCartPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { toast } from 'sonner';

const ButtonCart = ({ cloth, selectedSize }: any) => {
  const { items, removeItem, addItem } = useCart();
  const isInCart = items.some(item => item.id === cloth.id);

  const handleAdd = () => {
    if (!selectedSize) {
      toast.error('Выберите размер перед добавлением в корзину');
      return;
    }
    addItem({
      id: cloth.id,
      name: cloth.name,
      Image: cloth.Image,
      price: cloth.price,
      quantity: 1,
      description: cloth.description,
      gender: cloth.gender,
      authorId: cloth.authorId,
      selectedSize,
    });
  };

  const handleRemove = () => {
    removeItem(cloth.id);
  };

  return (
    <>
      {!isInCart ? (
        <Button
          className="w-full cursor-pointer rounded-[1.25rem] bg-primary py-3.5 font-semibold text-primary-foreground shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-primary/95 active:scale-95"
          onClick={handleAdd}
        >
          <FaCartPlus className="mr-2.5" size={16} />
          Добавить в корзину
        </Button>
      ) : (
        <Button
          className="w-full cursor-pointer rounded-[1.25rem] border border-destructive/40 bg-destructive/12 py-3.5 font-semibold text-destructive transition-all duration-300 hover:bg-destructive/20 hover:border-destructive/60 active:scale-95"
          onClick={handleRemove}
        >
          <MdDelete className="mr-2.5" size={16} />
          Убрать из корзины
        </Button>
      )}
    </>
  );
};

export default ButtonCart;
