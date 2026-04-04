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
          className="w-full cursor-pointer rounded-[1rem] sm:rounded-[1.25rem] bg-primary py-2.5 sm:py-3 md:py-3.5 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-primary/95 active:scale-95 text-sm sm:text-base"
          onClick={handleAdd}
        >
          <FaCartPlus className="mr-1.5 sm:mr-2" size={14} className="sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Добавить в</span> корзину
        </Button>
      ) : (
        <Button
          className="w-full cursor-pointer rounded-[1rem] sm:rounded-[1.25rem] border border-destructive/40 bg-destructive/12 py-2.5 sm:py-3 md:py-3.5 font-semibold text-destructive transition-all duration-300 hover:bg-destructive/20 hover:border-destructive/60 active:scale-95 text-sm sm:text-base"
          onClick={handleRemove}
        >
          <MdDelete className="mr-1.5 sm:mr-2" size={14} className="sm:w-4 sm:h-4" />
          Убрать
        </Button>
      )}
    </>
  );
};

export default ButtonCart;
