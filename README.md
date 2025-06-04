# KIDS-CITY-NEXT

_Empowering Kids’ Fashion, One Click at a Time_

[![Built with React](https://img.shields.io/badge/Built%20with-React-blue.svg)]()
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()

Built with the tools and technologies:

![Next](https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?logo=prisma&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

---

## 📑 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)

---

## 📦 Overview

Kids-city-next is a powerful e-commerce platform designed specifically for children's clothing, built with modern web technologies to deliver a seamless shopping experience.

### Why Kids-city-next?

This project empowers developers to create a dynamic online store, leveraging cutting-edge technologies for an engaging user experience. The core features include:

- **Next.js Framework**: Provides a robust architecture for building responsive web applications, enhancing developer productivity.
- **Prisma Integration**: Simplifies database management with type-safe queries, reducing boilerplate code and improving maintainability.
- **Internationalization Support**: Facilitates multi-language capabilities, making the application accessible to a global audience.
- **Admin Panel**: Streamlines user and order management, enhancing administrative efficiency.
- **Tailwind CSS**: Offers utility-first styling for rapid UI development, ensuring design consistency and responsiveness.

---

## 🚀 Getting Started

### 🔧 Prerequisites

This project requires the following dependencies:

- **Programming Language**: TypeScript
- **Package Manager**: npm
- **Database**: PostgreSQL
- **Node.js**: v18+

---

### 🛠 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Sardor-web-dev/kids-city-next
   ```

2. **Navigate to the project directory**:

   ```bash
    cd kids-city-next
   ```

3. **Install dependencies**:

   ```bash
    npm install
   ```

4. **Set up environment variables**:

**Create a .env file and add your database and authentication credentials**:

```
DATABASE_URL=your_postgres_url
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
```

4. **Push the Prisma schema to your database**:

   `npx prisma db push`

5. **(Optional): Seed the database**:

`bash npx prisma db seed`

6. **▶️ Usage**
   To run the development server:

`bash npm run dev `

Open http://localhost:3000 with your browser to see the result.
