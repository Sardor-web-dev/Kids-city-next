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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted px-4 py-8">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Добро пожаловать в <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Kids City</span>
          </h1>
          <p className="mt-2 text-sm text-foreground/60">Войдите, чтобы продолжить</p>
        </div>

        <form onSubmit={handleCredentialsSignIn} className="mb-8 flex flex-col gap-4">
          <div className="flex flex-col gap-3 rounded-lg bg-muted p-4">
            <p className="text-sm font-semibold text-foreground/80">Для администраторов</p>
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer text-foreground/50 transition-colors hover:text-foreground"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            {error && <p className="text-sm font-medium text-destructive">{error}</p>}
            <Button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-primary font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg"
            >
              Войти по email
            </Button>
          </div>
        </form>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex-1 border-t border-border" />
          <p className="text-xs font-medium text-foreground/60 uppercase">Или</p>
          <div className="flex-1 border-t border-border" />
        </div>

        <div className="space-y-3">
          <p className="text-center text-sm font-medium text-foreground/70">Вход для пользователей</p>
          <Button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-border bg-background font-semibold text-foreground transition-all duration-200 hover:bg-muted hover:border-primary py-2"
            type="button"
          >
            <FcGoogle className="text-2xl" />
            <span>Google</span>
          </Button>

          <Button
            onClick={() => signIn('github', { callbackUrl: '/' })}
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-border bg-background font-semibold text-foreground transition-all duration-200 hover:bg-muted hover:border-primary py-2"
            type="button"
          >
            <FaGithub className="text-xl text-foreground" />
            <span>GitHub</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
