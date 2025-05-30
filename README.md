# Kids City — Admin Panel & Store

## 📦 Tech Stack

- Next.js (App Router)
- Tailwind CSS
- Prisma ORM + PostgreSQL (NeonDB)
- next-auth (GitHub, Google, Credentials)
- UploadThing (для изображений)
- shadcn/ui
- Мультиязычность: next-intl

## 📂 Структура

- `/app/admin` – админка
- `/components/custom` – кастомные компоненты
- `/lib/prisma.ts` – подключение Prisma
- `/pages/api/cloth.ts` – API товары
- `/prisma/schema.prisma` – модели
- `/middleware.ts` – защита маршрутов

## 🛠 Запуск проекта

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```
