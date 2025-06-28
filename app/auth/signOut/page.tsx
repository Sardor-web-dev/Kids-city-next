'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function SignOutPage() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#333]">
          Выход из <span className="text-[#f97316]">Kids City</span>
        </h1>

        <Button
          onClick={() => {
            signOut();
            toast('Вы успешно вышли из аккаунта');
            window.location.href = '/';
          }}
          className="flex w-full cursor-pointer items-center gap-2 border-1 border-black bg-gray-500 text-white"
          variant="outline"
        >
          Выйти из платформы
        </Button>
      </div>
    </div>
  );
}
