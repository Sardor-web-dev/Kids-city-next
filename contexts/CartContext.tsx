"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type CartItem = {
  id: number;
  name: string;
  Image: string;
  description: string;
  price: number;
  quantity: number;
  gender: string;
  authorId: number;
  selectedSize: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartProvider is missing");
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // 🟡 Загружаем корзину из localStorage при старте
  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  // 🔵 Сохраняем корзину в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: number) => {
    setItems((prev) => {
      const target = prev.find((i) => i.id === id);
      if (target && target.quantity > 1) {
        return prev.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  const removeFromCart = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
