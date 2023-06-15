DB_PORT=5432
DB_PASSWORD='8225991'

# ИНТРО

[x] - Обзор проэкта

# BACKEND

[x] - Создание проэкта
[x] - Создание всех модулей
[x] - Подключение к базе данных PostgresQl + Typeorm и создание всех таблиц
[x] - Регистрация пользователя
[x] - Auth Module + стратегии (local, jwt)
[x] - Category Module
[x] - Transaction Module
[x] - Сщздание Guard'a для проверки владельца транзакций

# Frontend

[x] - Создание проэкта Vite, настройка Tailwind и создание всех страниц и компоннентов
[x] - Роутинг + ErroPage + Header
[x] - Создание instance axios и внедрение авторизации
[x] - Защищенный Route + useAuth
[x] - Страница Catigories
[x] - Страница Transactions

# Заключение

[x] - Заключительное

<!-- https://dbeaver.io/download/ для просмотра транзакций-->

<!-- npm i --save @nestjs/config Для доступ к .ENV файлам -->

<!-- npm install --save @nestjs/typeorm typeorm pg    Интеграция TypeORM-->

<!-- npm i --save class-validator class-transformer -->

<!-- npm i argon2 хешировать пароль -->

<!-- npm install --save @nestjs/passport passport passport-local
  -- npm install --save-dev @types/passport-local
 из документации https://docs.nestjs.com/recipes/passport#:~:text=%24%20npm%20install%20%2D%2Dsave%20%40nestjs/passport%20passport%20passport%2Dlocal -->

 <!-- npm install --save @nestjs/jwt passport-jwt
 npm install --save-dev @types/passport-jwt 
 https://docs.nestjs.com/recipes/passport#:~:text=npm%20install%20%2D%2Dsave%20%40nestjs/jwt%20passport%2Djwt-->

 <!-- "useTabs": true -->

 <!-- return await this.transactionRepository.save(newTransaction) -->

 <!-- //=================================================================== -->

Ссылка на видео https://www.youtube.com/watch?v=Wk2I17jgSUw

<!-- https://vitejs.dev/guide/ -->

<!--==== 1 ====
 npm create vite@latest ./  -->

==================================

<!--==== 2 ====
npm instal -->

==================================

<!--==== 3 ====
на этой странице https://tailwindcss.com/docs/installation/framework-guides
НУЖНО выбрать Vite -->

====================================

<!-- Пункт 2
Install Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p -->

<!-- Пункт 3

в конфиге добавляем
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], -->

<!-- Лункт 4

в index.css добовляем дерективы стилей
@tailwind base;
@tailwind components;
@tailwind utilities; -->

<!-- Пункт 5

Добовляем
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

и Перезапускаем проэкт -->

=============================================

<!-- ==== 4 ====
подключаем шрифты
выбираем шрифты копируем ссылку
и вставляем index.html

а tailwind.confif.js прописываем следующие только немного по свойму font-family: 'Roboto', sans-serif;

extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      } -->

<!-- ==== 5 ====
ставим плагин для форм
https://github.com/tailwindlabs/tailwindcss-forms // ссылка была на сайте tailwind
npm install -D @tailwindcss/forms -->

<!-- ==== 6 ====
npm install -D prettier prettier-plugin-tailwindcss // 5:35 минуте об этом говорит
чтоб автоматически классы сортировались -->

<!-- ==== 7 ====
React-Icons
npm install react-icons --save -->
