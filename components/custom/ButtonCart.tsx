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
          className="bg-primary text-primary-foreground hover:bg-primary/95 w-full cursor-pointer rounded-[1rem] py-2.5 text-sm font-semibold shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95 sm:rounded-[1.25rem] sm:py-3 sm:text-base md:py-3.5"
          onClick={handleAdd}
        >
          <FaCartPlus className="mr-1.5 sm:mr-2 sm:h-4 sm:w-4" size={14} />
          <span className="hidden sm:inline">Добавить в</span> корзину
        </Button>
      ) : (
        <Button
          className="border-destructive/40 bg-destructive/12 text-destructive hover:bg-destructive/20 hover:border-destructive/60 w-full cursor-pointer rounded-[1rem] border py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 sm:rounded-[1.25rem] sm:py-3 sm:text-base md:py-3.5"
          onClick={handleRemove}
        >
          <MdDelete className="mr-1.5 sm:mr-2 sm:h-4 sm:w-4" size={14} />
          Убрать
        </Button>
      )}
    </>
  );
};

export default ButtonCart;
