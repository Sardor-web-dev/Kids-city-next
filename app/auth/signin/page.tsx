'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  async function handleCredentialsSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError('Неверный логин или пароль');
    } else if (res?.ok) {
      window.location.href = '/';
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#333]">
          Вход в <span className="text-[#f97316]">Kids City</span>
        </h1>

        <form onSubmit={handleCredentialsSignIn} className="mb-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-center font-bold">
            <p>Для администраторов</p>
            <hr className="mb-4 border-1 border-black" />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border p-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Пароль"
              className="w-full rounded border p-2 pr-10"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && <p className="text-red-600">{error}</p>}
          <Button
            variant="outline"
            type="submit"
            className="w-full cursor-pointer rounded-md border-1 border-black bg-gray-800 font-bold text-white hover:bg-white hover:text-black"
          >
            Войти по email
          </Button>
        </form>
        <div className="flex flex-col gap-2 text-center font-bold">
          <p>Для пользователей</p>
          <hr className="mb-4 border-1 border-black" />
        </div>
        <div className="space-y-4">
          <Button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="flex w-full cursor-pointer items-center gap-2 border-1 border-black bg-gray-800 font-bold text-white hover:bg-white hover:text-black"
            variant="outline"
          >
            <FcGoogle className="text-xl" />
            Войти через Google
          </Button>

          <Button
            onClick={() => signIn('github', { callbackUrl: '/' })}
            className="flex w-full cursor-pointer items-center gap-2 border-1 border-black bg-gray-800 font-bold text-white hover:bg-white hover:text-black"
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
