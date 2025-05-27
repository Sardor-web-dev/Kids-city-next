"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#333]">
          Вход в <span className="text-[#f97316]">Kids City</span>
        </h1>

        <div className="space-y-4">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center gap-2"
            variant="outline"
          >
            <FcGoogle className="text-xl" />
            Войти через Google
          </Button>

          <Button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="w-full flex items-center gap-2"
            variant="outline"
          >
            <FaGithub className="text-xl" />
            Войти через GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
