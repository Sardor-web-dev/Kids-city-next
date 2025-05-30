# 🧸 Kids City — Admin Panel & Store

Полнофункциональный интернет-магазин детской одежды с административной панелью. Реализованы авторизация, корзина, оформление заказов, ролевое управление, мульти-язычность, загрузка изображений и многое другое.

---

## 📦 Tech Stack

- **Next.js (App Router)** – SSR и маршрутизация
- **Tailwind CSS** – стилизация
- **Prisma ORM + PostgreSQL (NeonDB)** – база данных и ORM
- **next-auth** – авторизация (GitHub, Google, Credentials)
- **UploadThing** – загрузка изображений
- **shadcn/ui** – готовые UI-компоненты
- **next-intl** – мультиязычность
- **Telegram Bot API** – уведомления о заказах

---

## 📂 Структура проекта

- `/app` – маршруты приложения (новый App Router)
  - `/app/(shop)` – публичные страницы
  - `/app/(admin)` – админ-панель
  - `/app/api/` – API-эндпоинты
- `/components` – переиспользуемые UI-компоненты
  - `/components/custom` – кастомные элементы (Navbar, Cards и т.д.)
- `/lib/prisma.ts` – подключение Prisma Client
- `/lib/utils.ts` – утилиты, форматирование
- `/middlewares.ts` – защита маршрутов (auth middleware)
- `/prisma/schema.prisma` – определение моделей
- `/public` – изображения и favicon
- `/types` – пользовательские типы TypeScript
- `/i18n.ts` – конфигурация локализации
- `/pages/api/cloth.ts` – API для товаров (для legacy-режима)

---

## ⚙️ Установка и запуск проекта

```bash
# Клонирование репозитория
git clone https://github.com/Sardor-web-dev/Kids-city-next.git
cd Kids-city-next

# Установка зависимостей
npm install

# Настройка окружения
cp .env.example .env
# Затем заполни .env своими значениями

# Генерация клиента Prisma и миграции
npx prisma generate
npx prisma db push

# Запуск проекта
npm run dev
```
