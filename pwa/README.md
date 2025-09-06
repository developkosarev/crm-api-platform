# Auth

http://localhost:3000/api/auth/signin
http://localhost:3000/api/auth/signout

http://localhost:3000/login
http://localhost:3000/logout

http://localhost:3000/partners/login
http://localhost:3000/partners/logout

## Build

```
docker build --tag crm-app-pwa:v0.0.1 --file Dockerfile .
docker build --tag crm-app-pwa:v0.0.1 --progress=plain --target builder --file Dockerfile .
```

# Progressive Web App1

Contains a [Next.js](https://nextjs.org/) project bootstrapped with [pnpm](https://pnpm.io/) and [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The `admin` page contains an API Platform Admin project (refer to its [documentation](https://api-platform.com/docs/admin)).

You can also generate your web app here by using the API Platform Client Generator (refer to its [documentation](https://api-platform.com/docs/client-generator/nextjs/)).

# Documentation

https://nextjs.org/learn/dashboard-app/getting-started
npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm

# Examples

1. TailAdmin Next.js
   Описание: Бесплатный шаблон админ-панели, построенный на Next.js и Tailwind CSS. Включает готовые компоненты, такие как навигационные меню, таблицы, формы и графики.

Особенности: Готовые навигационные меню
Компоненты для таблиц, форм и графиков
Адаптивный дизайн

Ссылка: https://github.com/rezamirzapour/nextjs-tailwindcss-dashboard

2. Next.js + Tailwind CSS + TypeScript Starter
   Описание: Современный стартовый шаблон с интеграцией TypeScript, Tailwind CSS и набором преднастроенных компонентов.

Особенности: Next.js 14 с App Router
Tailwind CSS 3 с переменными CSS
Преднастроенные компоненты, адаптирующиеся под брендовые цвета

Ссылка: https://github.com/theodorusclarence/ts-nextjs-tailwind-starter

3. PexT — Многостраничный лендинг на Next.js и Tailwind CSS
   Описание: Современный и адаптивный шаблон лендинга с продвинутой навигацией и настраиваемыми компонентами.

Особенности: Многостраничная структура

Анимации и плавная прокрутка
Компоненты: формы подписки, слайдеры отзывов, геро-секции с градиентами

Ссылка: https://github.com/iamOmarFaruk/PexT--Next-JS-and-tailwind-css-landing-page

4. Next.js 15 Starter с Shadcn/UI
   Описание: Мощный стартовый шаблон с интеграцией Shadcn UI, Stripe, NextAuth и Prisma.

Особенности: Next.js 15 и React 19

Tailwind CSS с поддержкой сортировки и слияния классов
Shadcn/UI — настраиваемые UI-компоненты
Интеграция с Stripe и NextAuth для платежей и аутентификации

Ссылка: https://github.com/Skolaczk/next-starter

5. Tailnext — Бесплатный шаблон на Next.js 14 и Tailwind CSS
   Описание: Открытый шаблон для создания сайтов с использованием Next.js и Tailwind CSS, учитывающий лучшие практики.

Особенности: Поддержка тёмной темы
Оптимизация изображений и шрифтов
SEO-дружественный блог
Генерация sitemap и robots.txt

Ссылка: https://github.com/onwidget/tailnext
