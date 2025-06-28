# KIDS-CITY-NEXT

_Empowering Kids’ Fashion, One Click at a Time_

[![Built with React](https://img.shields.io/badge/Built%20with-React-blue.svg)]()
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()

**Built with:**

![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?logo=prisma&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#-installation)
  - [Usage](#️-usage)

---

## 📦 Overview

**Kids-city-next** — это современная e-commerce платформа для детской одежды, разработанная с использованием передовых веб-технологий для обеспечения плавного и приятного пользовательского опыта.

### 💡 Почему Kids-city-next?

Проект предназначен для быстрого запуска современного интернет-магазина с продуманным функционалом:

- **Next.js** — мощный фреймворк для создания реактивных веб-приложений.
- **Prisma ORM** — типобезопасный доступ к базе данных без лишнего бойлерплейта.
- **Интернационализация** — встроенная поддержка мультиязычности.
- **Админ-панель** — управление товарами, заказами и пользователями.
- **Tailwind CSS** — современный подход к стилизации через утилиты.

---

## 🚀 Getting Started

### 🔧 Prerequisites

Убедись, что у тебя установлены:

- **Node.js**: v18+
- **npm**
- **PostgreSQL**
- **TypeScript**

---

### 🛠 Installation

1. **Клонируй репозиторий:**

```bash
git clone https://github.com/Sardor-web-dev/kids-city-next
```

2. **Перейди в папку проекта:**

```bash
cd kids-city-next
```

3. **Установи зависимости:**

```bash
npm install
```

4. **Создай файл `.env` и заполни его данными:**

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
GITHUB_ID= id
GITHUB_SECRET= secret
GOOGLE_ID= id
GOOGLE_SECRET=secret
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=your_url of db
UPLOADTHING_TOKEN=your tokeen
NEXT_PUBLIC_TELEGRAM_TOKEN=token tg
NEXT_PUBLIC_TELEGRAM_CHAT_IDS= ids
```

5. **Сгенерируй схему Prisma:**

```bash
npx prisma generate
```

6. **(Опционально) Засейдь базу данных:**

```bash
npx prisma db seed
```

---

### ▶️ Usage

Запусти дев-сервер:

```bash
npm run dev
```

Затем открой в браузере: [http://localhost:3000](http://localhost:3000)
