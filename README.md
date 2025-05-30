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

- `/app/admin` – админка
- `/components/custom` – кастомные компоненты
- `/lib/prisma.ts` – подключение Prisma
- `/pages/api/cloth.ts` – API товары
- `/prisma/schema.prisma` – модели
- `/middleware.ts` – защита маршрутов

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
