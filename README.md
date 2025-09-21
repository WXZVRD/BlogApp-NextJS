# 🗂 BlogApp-Ultra Frontend

![Next.js](https://img.shields.io/badge/Frontend-Next.js-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript)
![React](https://img.shields.io/badge/Framework-React-61DAFB?logo=react)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?logo=tailwindcss)
![Radix UI](https://img.shields.io/badge/UI-Radix_UI-161618?logo=radix-ui)
![Framer Motion](https://img.shields.io/badge/Animation-Framer_Motion-0055FF?logo=framer)
![TanStack Query](https://img.shields.io/badge/State-TanStack_Query-FF4154?logo=reactquery)
![React Hook Form](https://img.shields.io/badge/Forms-React_Hook_Form-EC5990?logo=reacthookform)
![Zod](https://img.shields.io/badge/Validation-Zod-3068B7?logo=zod)
![Socket.IO](https://img.shields.io/badge/Websockets-Socket.IO-010101?logo=socketdotio)
![Axios](https://img.shields.io/badge/HTTP-Axios-5A29E4?logo=axios)
![Markdown](https://img.shields.io/badge/Markdown-MD_Editor-000000?logo=markdown)
![Next Themes](https://img.shields.io/badge/Themes-Next_Themes-111111?logo=vercel)
![ESLint](https://img.shields.io/badge/Lint-ESLint-4B32C3?logo=eslint)
![Prettier](https://img.shields.io/badge/Format-Prettier-F7B93E?logo=prettier)

> **Русский:** Платформа для рецензий на фильмы, книги и мультфильмы с поддержкой markdown-разметки, комментариев, лайков и рейтингов. Встроенная админ-панель обеспечивает управление пользователями и контентом.

> **English:** A review platform for movies, books, and animations with markdown support, comments, likes, and ratings. The integrated admin panel enables full control over users and content.

---

## 🎬 Демонстрация функций / Project Demo

| GIF                                           | Описание / Description |
|-----------------------------------------------|------------------------|
| ![OAuth](./assets/BlogApp-Auth.gif)           | 🇷🇺 OAuth авторизация. <br><br> 🇺🇸 OAuth authorization. |
| ![Main Overview](./assets/BlogApp-Main1.gif) | 🇷🇺 Основной обзор приложения: главная панель управления, страницы рецензий, комментариев и пользователей. <br> 🇺🇸 Main overview of the app: dashboard, review pages, comments, and user management. |
| ![Comments & Likes](./assets/BlogApp-Comments.gif) | 🇷🇺 Создание комментариев и лайков с мгновенной синхронизацией через WebSocket. <br><br> 🇺🇸 Adding comments and likes with real-time synchronization via WebSocket. |
| ![Main Overview](./assets/BlogApp-Main2.gif) | 🇷🇺 Управление рецензиями и пользователями: редактирование, сортировка и навигация по разделам. <br><br> 🇺🇸 Managing reviews and users: editing, sorting, and navigating through sections. |
| ![Create Review](./assets/BlogApp-Create.gif) | 🇷🇺 Создание новой рецензии с поддержкой markdown и загрузки изображений. <br><br> 🇺🇸 Creating a new review with markdown support and image upload. |

## 🔹 Полное описание / Full Description

🇷🇺 Русский:
> Фронтенд ReviewApp реализован на Next.js с использованием TypeScript и Tailwind CSS. Поддерживает современный дизайн, адаптивный интерфейс и удобный пользовательский опыт. В приложении доступны: создание и редактирование рецензий с поддержкой markdown, загрузка изображений, система комментариев и лайков с синхронизацией в реальном времени через WebSocket. Реализованы тёмная/светлая темы, локализация интерфейса и анимации для плавного UX.

🇺🇸 English:
> The ReviewApp frontend is built with Next.js, TypeScript, and Tailwind CSS. It delivers a modern design, responsive UI, and smooth user experience. Features include creating and editing reviews with markdown support, image uploads, comments and likes with real-time WebSocket synchronization. The app supports light/dark themes, interface localization, and animated transitions for enhanced UX
---

## 📌 Основные фичи / Features

🇷🇺 Русский:

📝 Рецензии: создание, редактирование и удаление с markdown-редактором <br>
🖼 Загрузка изображений в рецензии и аватары пользователей<br>
💬 Комментарии с редактированием и удалением<br>
👍 Лайки для рецензий и комментариев<br>
🔄 Реальное время: обновление лайков и комментариев через WebSocket<br>
🎨 Темы: светлая и тёмная, переключение в интерфейсе<br>
🌍 Локализация (i18n) интерфейса<br>
⚡ Быстрый отклик благодаря React Query (кеширование и синхронизация данных)<br>
🎭 Анимации и плавные переходы через Framer Motion<br>
🔔 Уведомления через библиотеку Sonner<br>
📱 Полностью адаптивный интерфейс<br>

🇺🇸 English:

📝 Reviews: create, edit, and delete with a markdown editor<br>
🖼 Image upload for reviews and user avatars<br>
💬 Comments with edit and delete options<br>
👍 Likes for reviews and comments<br>
🔄 Real-time updates of likes and comments via WebSocket<br>
🎨 Themes: light & dark, switchable in UI<br>
🌍 Interface localization (i18n)<br>
⚡ Fast responses with React Query (caching and data sync)<br>
🎭 Animations and smooth transitions with Framer Motion<br>
🔔 Notifications powered by Sonner<br>
📱 Fully responsive design<br>

---

## 🛠 Технологии / Technologies & Tools

| Компонент / Component          | Технология / Technology                           |
| ------------------------------ | ------------------------------------------------- |
| 🌐 Фреймворк / Framework       | Next.js (App Router)                              |
| ⚛️ UI & State                  | React, React Hook Form, Zod                       |
| 🎨 Стили / Styling             | Tailwind CSS, tailwind-merge, clsx                |
| 📝 Markdown Editor             | @uiw/react-md-editor, @uiw/react-markdown-preview |
| ⚡ Data fetching & Caching      | React Query (@tanstack)                           |
| 🔄 Реальное время / Real-time  | Socket.IO client                                  |
| 🎭 Анимации / Animations       | Framer Motion, tw-animate-css                     |
| 🎨 UI-компоненты               | Radix UI (Dropdown, Dialog, Tooltip, etc.)        |
| 🌍 Темы и i18n                 | next-themes, локализация                          |
| 🔔 Уведомления / Notifications | Sonner                                            |
| 📡 API-запросы                 | Axios                                             |
| 🛡 Валидация / Validation      | React Hook Form, Zod                              |
| ⚙️ Дополнительно / Additional  | Lucide React (icons)                              |

