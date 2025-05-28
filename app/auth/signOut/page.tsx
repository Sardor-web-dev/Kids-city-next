"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignOutPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#333]">
          Выход из <span className="text-[#f97316]">Kids City</span>
        </h1>

        <Button
          onClick={() => {
            signOut();
            toast("Вы успешно вышли из аккаунта");
            window.location.href = "/";
          }}
          className="w-full cursor-pointer bg-gray-500 text-white border-1 border-black flex items-center gap-2"
          variant="outline"
        >
          Выйти из платформы
        </Button>
      </div>
    </div>
  );
}
