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
          className="w-full cursor-pointer rounded-2xl bg-primary py-3 font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-primary/90"
          onClick={handleAdd}
        >
          <FaCartPlus className="mr-2" size={16} />
          В корзину
        </Button>
      ) : (
        <Button
          className="w-full cursor-pointer rounded-2xl border border-destructive/30 bg-destructive/8 py-3 font-medium text-destructive transition-all duration-300 hover:bg-destructive/15"
          onClick={handleRemove}
        >
          <MdDelete className="mr-2" size={16} />
          Удалить
        </Button>
      )}
    </>
  );
};

export default ButtonCart;
