// app/[locale]/favorites/page.tsx
"use client";

import React from "react";
import useFavorites from "@/hooks/useFavorites";
import { useTranslations } from "next-intl";
import ProductCard from "@/components/custom/ProductCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

const FavoritesPage = () => {
  const { data: session } = useSession();
  const { favorites } = useFavorites();
  const t = useTranslations("FavoritesPage");
  console.log("FAVORITES:", favorites);

  if (!session) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-md w-full space-y-6 text-center">
          <h2 className="text-3xl font-bold">Вы не авторизованы</h2>
          <p className="text-lg text-gray-600">
            Войдите, чтобы просматривать профиль и заказы.
          </p>
          <Button
            className="bg-gray-800 w-50 text-white hover:bg-white hover:text-black border border-black rounded-xl font-semibold cursor-pointer "
            onClick={() => signIn()}
          >
            Войти
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-[1250px] mx-auto p-4"
    >
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">{t("empty")}</p>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {favorites.map((cloth: any, i: any) => (
            <ProductCard key={i} cloth={cloth} />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default FavoritesPage;
