import { useEffect, useState, useTransition } from "react";
import axios from "axios";
import { Cloth } from "@/app/generated/prisma";
import { toast } from "sonner";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<Cloth[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    axios.get("/api/favorites").then((res) => {
      const validFavorites = res.data
        .map((item: any) => item.cloth)
        .filter(
          (cloth: Cloth | undefined) => cloth !== undefined && cloth !== null
        );
      setFavorites(validFavorites);
      setLoading(false);
    });
  }, []);

  const toggleFavorite = async (clothId: number) => {
    const exists = favorites.some((fav) => fav?.id === clothId);

    // Оптимистичное обновление UI
    if (exists) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== clothId));
    } else {
      // ⚠️ Добавим хоть какой-то объект, иначе сердечко не сработает
      setFavorites((prev) => [
        ...prev,
        {
          id: clothId,
          name: "",
          description: "",
          authorId: 0,
          Image: "",
          gender: "",
          price: 0,
          size: [],
        } as Cloth,
      ]);
    }

    try {
      if (exists) {
        await axios.delete(`/api/favorites/${clothId}`);
        toast("Товар был удален из избранных");
      } else {
        const { data: newFavorite } = await axios.post("/api/favorites/add", {
          clothId,
        });

        if (!newFavorite?.cloth) return;

        // 🛡 Защита от дублирования
        setFavorites((prev) => {
          // Если уже есть — не добавляем второй раз
          const alreadyExists = prev.some((fav) => fav.id === clothId);
          if (alreadyExists) return prev;

          return [...prev, newFavorite.cloth];
        });

        toast("Товар добавлен в избранные");
      }
    } catch (error) {
      console.error("Ошибка при обновлении избранного:", error);
      toast.error("Ошибка при изменении избранного");
    }
  };
  

  return { favorites, toggleFavorite, loading, isPending };
}
