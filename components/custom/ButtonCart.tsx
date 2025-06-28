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
          className="cursor-pointer border-1 border-white bg-black text-white transition-all hover:bg-gray-500"
          onClick={handleAdd}
        >
          Добавить в корзину <FaCartPlus />
        </Button>
      ) : (
        <Button
          className="cursor-pointer border-1 border-black bg-white text-black transition-all hover:bg-gray-500"
          onClick={handleRemove}
        >
          Удалить из корзины <MdDelete />
        </Button>
      )}
    </>
  );
};

export default ButtonCart;
