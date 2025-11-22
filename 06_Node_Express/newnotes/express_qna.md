# 📘 Express – Interview Questions & Concepts

## 🚀 Express.js Essentials

#### 1. What is Express.js? Why use it?

- **Express.js** is a **minimal and flexible Node.js web framework**.
- Simplifies building **web applications and REST APIs**.
- Built on top of **Node.js HTTP module** for easier server development.

why use ?

- 🔹 Handles **routing**, **requests**, **responses**, and **middleware** efficiently.
- 🔹 Reduces **boilerplate code**, making backend development faster and cleaner.
- 🔹 Easy creation of **RESTful APIs**
- 🔹 Works seamlessly with databases (e.g., MongoDB) and frontend frameworks (e.g., React).

🧪 **Example: Simple Server**

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, Express!"));

app.listen(3000, () => console.log("Server running on port 3000"));
```

#### 1.1 What are advantages and disadvantages of Express.js?

Advantages ✅

- Easy and fast development
- Clean routing and middleware support
- Large **npm ecosystem** and community support
- Reduces boilerplate and improves **developer productivity**
- Integrates easily with databases and authentication

Disadvantages ⚠️

- Minimalistic → requires extra libraries for advanced features
- Can lead to **callback-heavy code** if middleware is nested poorly
- No built-in project structure — can get messy for large apps
- Single-threaded — inherits Node.js limitations

#### 1.2 What is the current version of Express.js?

- Current stable version: v5.1.0

#### 1.3 Why should we use it Express.js over Node.js?

- Node.js provides low-level HTTP methods; Express abstracts them for faster, cleaner development
- Built-in support for routing, middleware, and templates
- Easier to maintain large projects with modular architecture
- Reduces boilerplate code, improving developer productivity

| Aspect        | Node.js                       | Express.js                                  |
| ------------- | ----------------------------- | ------------------------------------------- |
| Type          | Runtime environment           | Framework built on Node.js                  |
| Purpose       | Executes JavaScript on server | Simplifies backend development              |
| HTTP Handling | Basic low-level HTTP methods  | Built-in routing, middleware, and templates |
| Productivity  | Requires more boilerplate     | Faster, cleaner, modular code               |

#### 2. Why use Express over the native `http` module?

about question

#### 3. How to create an Express server?

#### 4. What is routing in Express?

#### 5. What is a RESTful API?

- Representational State Transfer
- A RESTful API follows **REST principles** to `handle communication` between `client and server`.
- It uses:
  - 🔹 **HTTP methods**: GET, POST, PUT, PATCH, DELETE
  - 🔹 **URLs as resources**: `/users`, `/products/:id`

#### 6. HTTP methods: GET, POST, PUT, PATCH, DELETE

#### 7. What is idempotency in REST?

#### 8. What is the difference between PUT and PATCH?

**PUT** and **PATCH** are HTTP methods used to update resources but differ in scope and behavior.

- **PUT** replaces the **entire** resource with the data provided
- **PATCH** updates **only the specified fields**, leaving others unchanged

#### 9. How do you handle environment variables in an Express app?

- Environment variables are used to store sensitive or configuration data separately from your source code, like:
- Database passwords, API keys, Port, Secrets (JWT_SECRET, etc.),

#### 10. How can you serve static files in Express?

#### 11. What is the role of the `package.json` file in an Express project?

#### 12. How do you handle asynchronous code in Express routes?

---

## 🧩 Middleware in Express

#### 1. What is middleware in Express.js?

- Middleware functions have access to (req, res, next)
- Middleware function runs **between** the request and response.
- it can
  - 🔹 Modify the `req` or `res` object
  - 🔹 End the request–response cycle
  - 🔹 Call `next()` to move to the next middleware
  - 🔹 Run code (e.g., logging, auth)

#### 2. How does middleware work? `(req, res, next)`

#### 3. Types of middleware (application-level, router-level, built-in, third-party, error-handling)?

#### 4. Difference between `app.use()` and `app.get()`?

#### 5. What is the purpose of `app.route()`?

#### 6. What happens if `next()` is not called in middleware?

If `next()` is **not called**, the request will **hang**.

#### 7. What is error-handling middleware?

#### 8. How do you create custom middleware in Express?

#### 9. How do you use third-party middleware like `body-parser` or `cors`?

#### 10. How to handle CORS in an Express app?

#### 11. How does Express handle JSON and URL-encoded form data by default?

---

## 🔁 Routing in Express

#### 1. What are route parameters (`/users/:id`)?

#### 2. What are query parameters (`/search?q=mern`)?

#### 3. Difference between route params and query params?

#### 4. How do you modularize routes using `express.Router()`?

#### 5. What are nested routes and why use them?

- Nested routes help you `organize related routes` in separate files or under a common parent path. They're useful for cleaner structure and modular code

```
  GET /posts              → Get all posts
  GET /posts/:postId      → Get single post
  GET /posts/:postId/comments → Get comments for a post
```

#### 6. What is the default port for an Express app, and how to change it?

#### 7. Difference between `res.send()` and `res.json()`?

#### 8. How do you handle 404 errors for routes that don't exist?

#### 9. How to implement route-level middleware?

#### 10. How can you protect routes (authentication/authorization) in Express?

#### 11. What is the difference between `res.redirect()` and `res.render()`?

---

## 🛠️ Error Handling and Debugging

#### 1. How to handle synchronous vs asynchronous errors in Express?

#### 2. How do you use the `next` function to propagate errors?

#### 3. What tools or techniques do you use for debugging Express apps?

---

## 🔐 Security in Express

#### 1. What are some common security best practices in Express apps?

#### 2. How do you prevent SQL Injection or XSS attacks in Express?

#### 3. How can Helmet.js be used to enhance security?

---

## 📦 Performance and Scalability

#### 1. How do you scale an Express app?

#### 2. What is clustering and how can it be implemented in Express?

#### 3. How to handle large file uploads efficiently in Express?
