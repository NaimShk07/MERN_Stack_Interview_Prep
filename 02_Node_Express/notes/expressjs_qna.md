1. What is Express.js

- Express.js is a lightweight and flexible Node.js web framework that simlifies:
- routing, middleware, handling request & response and Buidling rest apis
- It’s like a smarter version of the http module — saves you writing boilerplate code.

2. What is rest ful api

- REST stands for Representational State Transfer.
- A RESTful API is an API that follows REST principles using HTTP methods to perform CRUD operations
  - GET : Read : Fetch data
  - POST : Create : Add new data
  - PUT : Update : Modify existing data
  - DELETE : Delete : Remove data

3. Middleware (req, res, next)

- Middleware functions have access to (req, res, next)
- They run between the request and the final response, and can:
  - Middleware runs before your route handler.
  - Modify the request or response
  - End the request-response cycle
  - Call next() to pass control to the next middleware
  - You can use it to log, authenticate, validate, etc.

4. What is route handling?

- In Express.js, routes are used to define how your server should respond to different HTTP requests (GET, POST, etc.) on different URLs (paths).

5. What are Environment Variables?

- Environment variables are used to store sensitive or configuration data separately from your source code, like:
- Database passwords, API keys, Port, Secrets (JWT_SECRET, etc.),

6. CORS, helmet, morgan

- CORS: Allows or blocks requests coming from different domains.
- Useful when your frontend and backend are hosted on different origins
- e.g., React on port 3000, API on port 5000.
-
- helmet: Secures your app by setting various HTTP headers to protect from well-known vulnerabilities (XSS, clickjacking, etc.).
-
- morgan: Logs HTTP requests in the terminal (method, status code, time). Helpful for debugging and monitoring.

7. Route parameters and query

- '/users/:id' : req.params.id
- '/search?q=mern' : req.query.q

8. Nested routes

- Nested routes help you organize related routes in separate files or under a common parent path. They're useful for cleaner structure and modular code

```
  GET /posts              → Get all posts
  GET /posts/:postId      → Get single post
  GET /posts/:postId/comments → Get comments for a post
```

9. Router Modularization

- Router modularization is a way to break your routes into separate files using express.Router() to keep your code organized, clean, and scalable.

10. File uploads with multer

- Multer is a middleware for handling multipart/form-data, primarily used for uploading files in Node.js + Express.
- upload.single('fieldName'): for single file
- upload.array('fieldName', maxCount): for multiple files
- upload.fields([...]): for uploading multiple fields/files
