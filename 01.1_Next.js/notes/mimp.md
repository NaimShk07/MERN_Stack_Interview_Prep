## 1. 📘 What is Next.js?

A **React framework** for building **server-side rendered** and **static websites** with great performance and SEO.

- Built on top of React
- Supports SSR (Server Side Rendering) and SSG (Static Site Generation)
- Full-stack capabilities (API routes, middleware)

---

## 2.🚀 Pages & Routing

Next.js uses **file-based routing** — each file in `pages/` becomes a route.

```js
// pages/about.js
export default function About() {
	return <h1>About Page</h1>;
}
```

### ✅ Key Points

- Dynamic routing with `[param].js`
- Nested routes via folder structure
- `pages/404.js` for custom 404

---

## 3. 🔄 Data Fetching

Next.js supports **3 types of data fetching**:

### 📌 `getStaticProps` – Static Generation

For static pages generated at build time.

```js
export async function getStaticProps() {
	return { props: { data: "static data" } };
}
```

### ⚡ `getServerSideProps` – Server-Side Rendering

Runs on every request (SSR).

```js
export async function getServerSideProps() {
	return { props: { data: "server data" } };
}
```

### 🧪 `getStaticPaths` – Dynamic Static Pages

Used with dynamic routes to pre-render pages.

```js
export async function getStaticPaths() {
	return {
		paths: [{ params: { id: "1" } }],
		fallback: false,
	};
}
```

---

## 4. 🧩 API Routes

Next.js allows creating **backend endpoints** inside the `pages/api` folder.

```js
// pages/api/hello.js
export default function handler(req, res) {
	res.status(200).json({ message: "Hello API!" });
}
```

### ✅ Use Cases

- Form handling
- Auth endpoints
- Backend logic without separate server

---

## 5. 🎯 Middleware

Middleware runs **before a request is completed** — useful for redirects, auth, logging.

```js
// middleware.js
export function middleware(req) {
	return NextResponse.redirect(new URL("/login", req.url));
}
```

### ⚡ Features

- Runs at the edge
- Modify requests/responses
- Add conditions (e.g., auth)

---

## 6. 📦 Static Site Generation (SSG)

Pages are generated at **build time** and cached.

- Use `getStaticProps` / `getStaticPaths`
- Super fast ⚡
- Great for blogs, marketing pages

---

## 7. 🧠 Server Side Rendering (SSR)

Pages are rendered **on each request**.

- Use `getServerSideProps`
- Good for real-time data
- SEO-friendly ✅

---

## 8. 🌐 Head Management

Next.js uses the `next/head` component for managing `<head>` tags.

```js
import Head from "next/head";

<Head>
	<title>Home Page</title>
	<meta name="description" content="My app" />
</Head>;
```

---

## 9. 🎨 Styling in Next.js

Supports:

- CSS Modules (`.module.css`)
- Global CSS
- Tailwind CSS (popular choice)
- Styled-components / Emotion

```js
import styles from "./Home.module.css";

<div className={styles.title}>Hello</div>;
```

---

## 10. ✨ Image Optimization

Next.js provides the `<Image />` component with automatic optimization.

```js
import Image from "next/image";

<Image src="/logo.png" alt="Logo" width={100} height={100} />;
```

### ✅ Features

- Lazy loading
- Resize, format, optimize
- CDN support

---

## 11. 📁 Public vs Static Folder

- `public/` → Static assets, accessible directly (e.g., `/logo.png`)
- `static/` is deprecated (don’t use)

---

## 12. 🧾 next.config.js

Configuration file for Next.js project.

```js
// next.config.js
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["example.com"],
	},
};
```

### ⚙️ Uses

- Custom webpack config
- Redirects/rewrite rules
- Environment variables

---

## 13. ⚙️ Environment Variables

Defined in `.env.local`, `.env.production`, etc.

```env
NEXT_PUBLIC_API_URL=https://api.example.com

```

- Prefix with `NEXT_PUBLIC_` to expose to browser
- Access via `process.env.NEXT_PUBLIC_API_URL`

---

## 14. 🛣️ Redirects & Rewrites

Defined in `next.config.js`

```js
// next.config.js
module.exports = {
	async redirects() {
		return [{ source: "/old", destination: "/new", permanent: true }];
	},
};
```

---

## 15. 🧪 Testing in Next.js

Common tools:

- Jest (unit testing)
- React Testing Library (component testing)
- Cypress / Playwright (E2E testing)

---

## 16. 📈 Advantages of Next.js

- ⚡ Fast performance (SSR + SSG)
- ✅ SEO-friendly
- 📦 Full-stack (API + Frontend)
- 🌍 Built-in routing, image optimization, code splitting
- 🔧 Great developer experience

---
