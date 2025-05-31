"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleCredentialsSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Неверный логин или пароль");
    } else if (res?.ok) {
      window.location.href = "/";
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#333]">
          Вход в <span className="text-[#f97316]">Kids City</span>
        </h1>

        <form
          onSubmit={handleCredentialsSignIn}
          className="flex flex-col gap-4 mb-6"
        >
          <div className="text-center flex flex-col gap-2 font-bold">
            <p>Для администраторов</p>
            <hr className="border-1 border-black mb-4" />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              className="w-full border p-2 pr-10 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && <p className="text-red-600">{error}</p>}
          <Button
            variant="outline"
            type="submit"
            className="w-full bg-gray-800 text-white hover:bg-white border-1 border-black hover:text-black cursor-pointer rounded-md font-bold "
          >
            Войти по email
          </Button>
        </form>
        <div className="text-center flex flex-col gap-2 font-bold">
          <p>Для пользователей</p>
          <hr className="border-1 border-black mb-4" />
        </div>
        <div className="space-y-4">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center bg-gray-800 hover:bg-white hover:text-black border-1 border-black text-white font-bold  cursor-pointer gap-2"
            variant="outline"
          >
            <FcGoogle className="text-xl" />
            Войти через Google
          </Button>

          <Button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="w-full flex items-center bg-gray-800 hover:bg-white hover:text-black border-1 border-black  text-white font-bold cursor-pointer gap-2"
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
