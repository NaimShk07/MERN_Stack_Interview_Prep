1. What is Node.js?

- Node.js is a runtime environment that allows you to run JavaScript on the server-side, outside the browser.
  - Built on Chrome’s V8 JavaScript engine
  - Supports non-blocking, event-driven architecture
  - Great for building scalable, real-time applications (e.g., APIs, chat apps)

2. Why use node.js, pros and cons
3. Event-driven architecture

- Node.js uses an event-driven architecture, meaning it reacts to events instead of following a strict step-by-step sequence.
- It listens for events (like user actions, file reads, HTTP requests) and runs callback functions when those events occur.

3. Blocking vs Non-blocking I/O

- Blocking I/O
  - Code waits (or blocks) until the operation completes.
  - Slows down execution – nothing else runs in the meantime.
- Non-Blocking I/O
  - Code does not wait — it moves on and handles result later via callback/promise.
  - Improves speed and scalability.
- readFileSync() | readFile() with callback

4. File system module, path module

- FS: Used to interact with the file system — read, write, delete, rename files, etc.
- Path: Used to work with file and directory paths. Helps write clean, cross-platform code.

5. Streams

- Streams allow reading or writing data piece-by-piece (chunks) instead of loading everything into memory at once.
- ex. youtube video

6. Buffers

- Buffer is a temporary storage for raw binary data especially useful for streams and binary file processing.
- ex. a small box that holds raw data temporarily until it's processed.

7. Streams & Buffers Work Together:

- When you read a file with streams, it loads data into a buffer first.
- Node.js then gives you each chunk from the buffer using .on('data').

8. CommonJS, ESModules, require, import, exports

- CommonJs
  - CommonJS is the original module system used in Node.js.
  - Uses require() to import and module.exports to export.
  - Synchronous loading of modules.
  - File extension: .js
- ESModules
  - ESModules is the modern JavaScript module system (used in browsers and Node.js).
  - Uses import and export keywords.
  - Asynchronous module loading.
  - File extension: .mjs (or .js with "type": "module" in package.json)

9.  Http module

- It's a core Node.js module for creating web servers.
- You can handle requests and responses directly without using any external libraries like Express.

10. Dev Vs Normal Dependencies

- Needed only during development, not in production. ex. cors, morgan
- Needed for your app to run in production. ex. prettier, nodemon

11. What is the event loop in Node.js?

- Node.js runs on a single thread, using an event loop to handle asynchronous tasks. It offloads I/O tasks to the background (libuv) and picks up the results later, allowing non-blocking execution.

12. Explain single-threaded nature of Node.js.

- Node.js uses a single-threaded event loop for handling requests, but internally it can use worker threads for heavy tasks like file I/O, so it scales with async operations.

13. How does asynchronous programming work in Node?

- Through callbacks, promises, and async/await. While the main thread executes, async tasks run in background and results are queued back to the event loop.

14. Difference between CommonJS and ES6 imports?

- CommonJS uses require/module.exports. ES6 uses import/export. ES6 is static and better optimized, CommonJS is dynamic.

15. How do you handle errors in async code?

- With try...catch in async/await, or .catch() in promises. Also global error handling middleware for Express.

16. What are streams in Node.js?

- Streams allow processing data in chunks instead of loading everything into memory (e.g., file upload/download, large data processing).

17. Express.js

18. What is Express.js and why use it?

- It’s a lightweight Node.js framework for building REST APIs. It simplifies routing, middleware, and request handling.

19. What are middleware functions?

- Functions that execute between request and response. Types:
  - Application-level (e.g., app.use() for all routes)
  - Router-level
  - Error-handling (4 params: err, req, res, next)

10. Difference between app.use() and app.get()?

- app.use() is for middleware (any HTTP method), app.get() handles only GET requests.

11. Difference between query params and route params?

- Query params: /users?name=Ali → req.query.name.
  Route params: /users/:id → req.params.id.

12. What happens if you don’t call next() in middleware?

- Request will hang since the chain doesn’t continue.

13. How do you secure REST APIs?

- Use JWT for authentication, bcrypt for password hashing, Helmet for setting secure headers, and CORS to control cross-origin requests.

14. What are HTTP methods?

- GET (read), POST (create), PUT (replace), PATCH (update partially), DELETE (remove).

15. PUT vs PATCH?

- PUT replaces the entire resource.
- PATCH updates only specific fields.

16. HTTP status codes examples?

- 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error.

17. What is idempotency?

- An operation that gives the same result no matter how many times you call it (e.g., PUT, DELETE are idempotent, POST is not).

18. Authentication vs Authorization?

- Authentication = verifying identity (login).
  Authorization = checking permissions (access control).

19. How does JWT work?

- User logs in → server generates JWT (with secret/private key) → client stores it → sends token in Authorization header → server verifies before allowing access.

20. Advanced Backend

21. What is caching?

- Storing frequently accessed data in memory (like Redis) to reduce DB calls and improve speed.

22. Horizontal vs vertical scaling?

- Vertical = add more power (RAM/CPU) to one server.
  Horizontal = add more servers to distribute load.

23. How do you deploy a MERN project?

- Backend: AWS/Heroku/DigitalOcean with Node.js.
  Frontend: Vercel/Netlify.
  Use NGINX/reverse proxy, manage env variables with dotenv.

24. How do you handle env variables?

- Store secrets in .env, use process.env.VARIABLE in Node.js, never push .env to Git.

25. Current version?
26. micorservices
