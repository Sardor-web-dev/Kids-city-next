// app/[locale]/favorites/page.tsx
"use client";

import React from "react";
import useFavorites from "@/hooks/useFavorites";
import { useTranslations } from "next-intl";
import ProductCard from "@/components/custom/ProductCard";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const t = useTranslations("FavoritesPage");
  console.log("FAVORITES:", favorites);

  return (
    <div className="max-w-[1250px] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">{t("empty")}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((cloth: any, i: any) => (
            <ProductCard key={i} cloth={cloth}  />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
