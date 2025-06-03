import { useEffect, useState } from "react";
import axios from "axios";
import { Cloth } from "@/app/generated/prisma";

export default function useFavorites() {
  // useFavorites
  const [favorites, setFavorites] = useState<Cloth[]>([]);
  const [loading, setLoading] = useState(true);
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
    try {
        const exists = favorites.some((fav) => fav?.id === clothId);

      if (exists) {
        await axios.delete(`/api/favorites/${clothId}`);
        setFavorites((prev) => prev.filter((fav) => fav.id !== clothId));
      } else {
        const { data: newFavorite } = await axios.post("/api/favorites/add", {
          clothId,
        });
        setFavorites((prev) => [...prev, newFavorite.cloth]);
      }
    } catch (error) {
      console.error("Ошибка при обновлении избранного:", error);
    }
  };
  

  return { favorites, toggleFavorite, loading };
}
