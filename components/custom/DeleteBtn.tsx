'use client';

import { useRouter } from 'next/navigation';

const DeleteBtn = ({ id }: { id: number }) => {
  const router = useRouter();

  async function DeleteProduct(id: number) {
    const res = await fetch(`/api/clothes/${id}`, { method: 'DELETE' });

    if (res.ok) {
      router.refresh(); // Обнови данные без перезагрузки страницы
    } else {
      alert('Ошибка при удалении товара');
    }
  }

  return (
    <button
      onClick={() => DeleteProduct(id)}
      className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-white"
    >
      Удалить
    </button>
  );
};

export default DeleteBtn;
