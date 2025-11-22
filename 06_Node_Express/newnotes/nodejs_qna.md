# 📘 Node.js – Complete Interview Questions & Concepts

---

## 🟢 Basic Level

### 🟦 Node.js Basics

#### 1. What is Node.js? Why use it?

- Node.js is a **runtime environment** that lets you run JavaScript **outside the browser**.
- Built on **Chrome’s V8 engine**.
- Uses **`event-driven, non-blocking I/O`**, ideal for scalable network apps.

---

### 💡 Why Use Node.js?

- Run JS on server-side.
- Build fast, scalable network applications (e.g. APIs, real-time apps).
- Has built-in **modules** (like `fs`, `http`, `path`)
- Use JavaScript across the **full stack** (frontend + backend).

#### 2. What are advantages and disadvantages of Node.js?

- Advantages of node.js

  - 🔹 **JavaScript everywhere** – same language on frontend & backend.
  - 🔹 **Fast performance** – built on Google’s V8 engine.
  - 🔹 **Non-blocking I/O** – handles many requests at once (good for APIs).
  - 🔹 **Huge package ecosystem** – via `npm`.
  - 🔹 **Great for real-time apps** – like chat apps, live dashboards.
  - 🔹 **Scalable** – good for microservices and large applications.

- Disadvantages of node.js

  - 🔸 **Not ideal for CPU-heavy tasks** – slows down due to single-threaded nature.
  - 🔸 **Callback hell** (though improved with Promises/async-await).
  - 🔸 **Less opinionated** – you have to choose and manage a lot of tools/libraries.
  - 🔸 **Asynchronous debugging** can be tricky for beginners.

#### 2.1 When to Avoid Using Node.js?

- Node.js isn’t ideal for **CPU-heavy**, **multi-threaded**, or **security-critical** applications.

Avoid Node.js when:

1. **CPU-Intensive Tasks**

   - **Examples:** Image/video processing, large computations.
   - Node’s single-threaded model struggles with heavy CPU workloads.

2. **Multi-threaded Operations**

   - Apps needing native multi-threading (e.g., banking, scientific systems) are better built with **Java**, **Go**, or **C++**.

3. **Relational-heavy Applications**

   - Systems relying on complex **SQL joins & transactions** (e.g., ERP) fit better with **Spring**, **.NET**, etc.

4. **Low-Latency, High-Security Systems**
   - **Examples:** FinTech, payment gateways — where synchronous execution and strict typing are critical.

#### 3. What is the current version of Node.js and its features?

- As of now, the **current stable version** is **Node.js 24.8.0**
- The **active LTS (Long Term Support)** version is **Node.js 22.x**

#### 4. How does Node.js differ from browser-based JavaScript?

**JavaScript** is a **programming language** primarily used for web development.  
**Node.js** is a **runtime environment** that allows JavaScript to run **outside the browser**, powered by the **V8 engine**.

---

### ⚙️ Key Differences

- 🌐 **JavaScript** → Runs in the **browser** (client-side)
- 🖥️ **Node.js** → Runs on the **server** (backend)
- 🚀 Node.js uses Google’s **V8 engine** for high performance
- 📁 Node.js can access the **file system**, **network**, and **OS modules**
- ❌ Browser JavaScript **cannot** access system-level resources

---

### 🔤 Example

```js
// Node.js (can access file system)
const fs = require("fs");
fs.writeFileSync("hello.txt", "Hello from Node");

// JavaScript (browser - can't access files)
console.log("Hello from browser JS");
```

---

### 📊 Comparison Table

| Feature            | JavaScript (Browser) 🌐            | Node.js 🖥️               |
| ------------------ | ---------------------------------- | ------------------------ |
| Environment        | Browser (client-side)              | Server-side runtime      |
| Engine             | JS engine (e.g., V8, SpiderMonkey) | V8 (Google)              |
| File System Access | ❌ No                              | ✅ Yes (via `fs` module) |
| Modules            | ES Modules                         | CommonJS + ES Modules    |
| DOM Access         | ✅ Yes                             | ❌ No                    |
| Primary Use        | UI & frontend interactivity        | Backend, APIs, tooling   |

---

### ✅ Quick Takeaways

- Node.js enables server-side JavaScript execution using the V8 engine
- JavaScript in browsers is limited to client-side logic
- Choose Node.js for backend, APIs, and CLI tools
- Choose browser JavaScript for UI and DOM manipulation

#### 5. What is the V8 JavaScript Engine and how does Node.js use it?

**V8** is Google’s open-source `JavaScript engine` written in C++, powering **Google Chrome** and **Node.js**.

- Compiles JS directly to **machine code** using **Just-In-Time (JIT)** compilation.
- Manages **memory** with `built-in garbage collection`.
- Cross-platform: runs on Windows, macOS, Linux.

---

### Why V8 Matters for Node.js

- Executes JavaScript **fast and efficiently outside the browser**.
- Enables Node.js’s **non-blocking, event-driven architecture**.
- Provides C++ bindings for system-level access (file system, network).
- Continuous V8 improvements boost Node.js speed and scalability.

---

#### 6. Explain Node.js architecture (event-driven, non-blocking I/O).

[clikc](architecture.md)

#### 7. What is single-threaded nature in Node.js?

[clikc](architecture.md)

#### 7.1 Is Node.js Single-threaded or Multi-threaded?

[clikc](architecture.md)

#### 8. What is the event loop in Node.js?

[clikc](architecture.md)

#### 9. What is the difference between synchronous and asynchronous code in Node.js?

[clikc](architecture.md)

#### 10. What is `this` in Node.js?

[`This`](this_in_node.md);

### 🧱 Core Modules & Built-ins

#### 1. What are Node.js core modules?

#### 2. What is the `fs` module? How to read/write files using it?

#### 3. What is the difference between `fs.readFileSync()` and `fs.readFile()`?

#### 4. What is the `path` module used for?

#### 5. What is the `http` module and how to use it to create a server?

The **`http` module** is a built-in Node.js module that allows you to create web servers and handle HTTP requests/responses.

- Provides methods to create an HTTP server
- Enables handling of incoming requests and sending responses
- Supports routing, headers, and streaming data

---

### Basic Example: Creating a Server

```js
const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("Hello from pure Node.js server!");
	} else {
		res.statusCode = 200;
		res.writeHead(404);
		res.setHeader("Content-Type", "text/plain");
		res.end();
	}
});

server.listen(3000, () => {
	console.log("Server running at http://localhost:3000/");
});
```

#### 6. What are `__dirname`, `__filename`, and `process`?

#### 7. What are global objects in Node.js?

### 📦 NPM & Package Management

[NPM](npm.md)

### 📁 Modules in Node.js

#### 1. What is a module in Node.js?

A **module** is a `reusable piece of code` in a separate file, encapsulated with its own scope, that can be imported or exported.

- Organizes code into manageable parts
- Every file is treated as a module
- Use `require` (CommonJS) or `import` (ESModules) to load modules

---

#### 2. What is the CommonJS module system?

CommonJS is Node.js’s `default module system` using `require()` for **synchronous** loading.

- Uses `module.exports` or `exports` to expose code
- Modules are loaded at runtime synchronously
- Designed primarily for server-side environments

---

#### 3. Difference between `require` and `import`?

| Aspect       | `require` (CommonJS)           | `import` (ESModules)                                           |
| ------------ | ------------------------------ | -------------------------------------------------------------- |
| Syntax       | `const x = require('module')`  | `import x from 'module'`                                       |
| Export style | `module.exports = ...`         | `export default` / `export {}`                                 |
| Loading      | Synchronous                    | Asynchronous / Static                                          |
| Usage Scope  | Can be called conditionally    | Must be at the top level                                       |
| Availability | Default in Node.js             | Needs `"type": "module"` in `package.json` or `.mjs` extension |
| When to use  | Legacy projects, simple setups | ES6 standard, Modern apps, frontend + backend                  |

---

#### 4. How to export functions or variables using CommonJS vs ESModules?

- **CommonJS:**

```js
// Export
module.exports = function add(a, b) {
	return a + b;
};

// Import
const add = require("./add");
```

#### 5. commonjs vs es modules

- CommonJS:
  - Synchronous loading
  - Supports dynamic require
  - Used mainly in Node.js (older standard)
  - Uses `require()` to import and `module.exports` to export
- ES Modules:
  - Static, asynchronous loading
  - Supports in browsers & Node.js (with .mjs or "type": "module")
  - Uses export/import syntax
  - Standardized in ES6, used in modern JS

#### 6. Execution Differs: Synchronous vs Asynchronous

- **CommonJS (`require`)**

  - Loads modules **synchronously**, blocking execution until fully loaded.
  - Immediate execution; waits at `require()` before proceeding.

  ```js
  const greet = require("./greet"); // blocks until loaded
  console.log("After require"); // runs after greet.js is loaded
  ```

- **ESModules (`import`)**
  - Loads modules asynchronously and statically, enabling parallel loading and better optimizations.
  - `import` is hoisted and non-blocking, allowing top-level `await` and deferred execution.
  ```js
  import { greet } from "./greet.js"; // loads asynchronously
  console.log("After import"); // may run before greet.js finishes loading
  ```

### 🌀 Asynchronous Programming

#### 1. What are callbacks, promises, and async/await?

#### 2. How does asynchronous programming work in Node.js?

#### 3. How to handle errors in Node.js?

[click](errorHandling.md);

---

## 🟡 Intermediate Level

### 🟦 Node.js Basics

#### 1. What is the role of Libuv in Node.js?

#### 2. What are the phases of the event loop?

#### 3. What is the difference between `process.nextTick()` and `Promise.resolve().then()`?

#### 4. What is concurrency in Node.js?

#### 5. What is a thread pool in Node.js?

#### 6. What is clustering?

**Clustering** is a `technique` to `run multiple instances` of a Node.js application across CPU cores to improve performance and reliability.

- Utilizes Node.js’s built-in **cluster module**
- Creates **worker processes** that share the same server port
- Helps handle **more concurrent requests** by parallelizing workload
- Master process manages and restarts workers if they crash

---

### Why Use Clustering?

- 📈 Improves **scalability** by leveraging multi-core CPUs
- 🔄 Increases **fault tolerance** with automatic worker restarts
- ✅ Maximizes resource utilization for high-traffic apps

### 🧱 Core Modules & Built-ins

#### 1. What is the `os` module?

#### 2. What is the `events` module and EventEmitter?

#### 3. What is the `crypto` module and its use cases?

#### 4. What is the `net` module and when to use it?

#### 5. What is the `tls`/SSL module in Node.js?

#### 6. What is the `child_process` module? Difference between `exec`, `spawn`, and `fork`?

#### 7. What is the `worker_threads` module?

### 📦 NPM & Package Management

#### 1. What are peerDependencies and optionalDependencies?

### 📁 Modules in Node.js

#### 1. What is the ESModule system?

#### 2. What is module caching in Node.js?

### 🌀 Asynchronous Programming

#### 1. What is the difference between parallel, asynchronous, and synchronous code?

#### 2. How does Node.js offload I/O operations?

#### 3. What is the role of the background thread pool?

### 🔄 Streams & Buffers

#### 1. What are streams in Node.js?

**Streams** are objects that allow you to **`read or write` data piece-by-piece** instead of loading it all into memory.

- Handle **large files** or **network data efficiently**
- Enable **data pipelining** between sources
- Work with **events**: `data`, `end`, `error`
- Help reduce memory usage and improve performance

**Example:**

```js
const readStream = fs.createReadStream("file.txt");
readStream.on("data", (chunk) => console.log(chunk.toString()));
```

> 💡 Ideal for large files to prevent memory overflow.

#### 2. Types of streams (Readable, Writable, Duplex, Transform)?

| Type          | Description                      | Example                  |
| ------------- | -------------------------------- | ------------------------ |
| **Readable**  | Can be read from                 | `fs.createReadStream()`  |
| **Writable**  | Can be written to                | `fs.createWriteStream()` |
| **Duplex**    | Both readable & writable         | `net.Socket`             |
| **Transform** | Duplex stream that modifies data | `zlib.createGzip()`      |

#### 3. What is a buffer and how is it used?

A Buffer is a `temporary storage` for binary data in Node.js.

- Temporary storage for binary data
- Works with raw streams from files, network, or other sources
- Lets you handle chunks of data efficiently

🧪 Example:

```js
const buf = Buffer.from("Hello");
console.log(buf); // <Buffer 48 65 6c 6c 6f>
```

#### 4. How do streams and buffers work together?

- Streams emit data in chunks, stored temporarily in buffers
- Buffers hold these chunks before processing or writing
- Prevents loading entire datasets into memory, improving efficiency

#### 5. How do you handle backpressure in streams?

Backpressure occurs when a writable stream cannot process incoming data quickly enough.

- Node.js automatically pauses the readable stream when needed
- Use stream.pipe() for automatic flow control
- Manual handling:
  - Check write() return value
  - Wait for 'drain' event if write() returns false

🧪 Example:

```js
const readStream = fs.createReadStream("large.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream); // handles backpressure automatically
```

> ✅ Streams + Buffers + Pipe = Efficient, memory-safe handling of large or continuous data

### 🔐 Security & Best Practices

#### 1. What are common security risks in Node.js and how to prevent them?

[click](optimize.md#L82)

**Additional Tips:**

- Use `helmet` middleware for setting secure HTTP headers
- Always **keep Node.js and packages updated** to latest stable versions
- Sanitize all user input with libraries like `validator.js` or `DOMPurify`
- Monitor logs and implement alerting for suspicious activities

#### 2. How do you secure REST APIs in Express?

#### 3. What is Helmet and how does it improve security?

#### 4. What is CORS and when do you need it?

#### 5. What is cookie-parser used for?

#### 6. How does HTTPS work in Node.js?

#### 7. What are environment variables?

#### 8. How do you manage environment variables using dotenv?

#### 9. What is the difference between stateful and stateless authentication?

#### 10. What is rate limiting and how to implement it in Express?

#### 11. How do you protect against NoSQL/SQL injection in Node.js?

---

## 🔴 Advanced Level

### 🟦 Node.js Basics

#### 1. (No extra advanced questions here; basics covered above)

### 🧱 Core Modules & Built-ins

#### 1. (All core module questions already covered)

### 🔐 Authentication & Authorization

#### 1. What is authentication vs authorization?

#### 2. How does JWT authentication work in Node.js?

**JWT (JSON Web Token)** is a compact, URL-safe token used for securely transmitting user identity between client and server.

📌 **Key Points:**

- JWT = **Header + Payload + Signature**
- The server issues a token after successful login
- Client stores the token (usually in localStorage or cookies)
- Each subsequent request includes the token in the `Authorization` header (`Bearer <token>`)
- Server verifies the token’s signature using a **secret key** or **public key** on protected routes.

🧪 **Example :**

```js
// Generate token
const token = jwt.sign({ userId: 101 }, "SECRET_KEY", { expiresIn: "1h" });

// Verify token
jwt.verify(token, "SECRET_KEY", (err, user) => {
	if (err) return res.sendStatus(403);
	req.user = user;
	next();
});
```

#### 3. What are cookies and how are they used for auth?

#### 4. How do you manage sessions in Express?

### 🧪 Testing & Debugging

#### 1. How do you debug a Node.js application?

#### 2. What tools are available for profiling Node.js apps?

#### 3. How do you detect memory leaks in Node.js?

#### 4. What are common logging libraries used in Node.js?

#### 5. How do you unit test a Node.js module?

#### 6. What are integration vs end-to-end tests?

#### 7. What tools/libraries are used for testing Node.js/Express apps? (e.g., Jest, Mocha, Supertest)

### 🧠 Architecture & Design

#### 1. What is the MVC architecture?

#### 2. What is CSR vs SSR?

#### 3. How do you structure a large Node.js/Express app?

#### 4. How do you scale a Node.js application?

#### 5. Vertical vs horizontal scaling?

**Scaling** means increasing a `system’s capacity` to `handle more load` by adding resources.

- **Vertical Scaling** (Scaling Up): Adding more power (CPU, RAM) to a single machine
- **Horizontal Scaling** (Scaling Out): Adding more machines or nodes to distribute the load

---

### Vertical vs Horizontal Scaling

| Aspect          | Vertical Scaling                 | Horizontal Scaling                     |
| --------------- | -------------------------------- | -------------------------------------- |
| Approach        | Upgrade existing hardware        | Add more servers or instances          |
| Cost            | Often expensive and limited      | Can be cost-effective and flexible     |
| Downtime        | Possible downtime during upgrade | Minimal/no downtime                    |
| Fault Tolerance | Single point of failure          | Better fault tolerance with redundancy |

✅ Use vertical scaling for **simple upgrades**; horizontal scaling for **large-scale, distributed systems**.

#### 6. What is API versioning and how do you implement it?

#### 7. What are microservices?

### 🌐 Deployment & DevOps

#### 1. How do you deploy a MERN stack application?

#### 2. How do you use environment variables in production securely?

#### 3. What is a reverse proxy and why use it (e.g., NGINX)?

#### 4. What is PM2 and how is it used?

#### 5. What is load balancing in Node.js?

### 🧰 Tools & Utilities

#### 1. What is Morgan and why is it used?

#### 2. What is Multer and how to handle file uploads?

#### 3. What is Nodemon?

#### 4. What is Postman and how is it used in API development?

### 🔄 Alternatives & Integrations

#### 1. What is the difference between REST and GraphQL?

#### 2. When to use REST vs GraphQL in Node.js?

#### 3. What is WebSockets ? why use it ?

#### 3.1 Can Node.js be used with WebSockets?

#### 3.2 Difference between websockets and http?

#### 4. What is Socket.io
- io.on
- socket.on()
- socket.emit()
- socket.broadcast.emit
- socket.to().emit
- socket.join()

#### 5. Use of app.use(express.static("/public"));

### 📌 Miscellaneous

#### 1. What is the current LTS version of Node.js?

#### 2. How often should Node.js be updated?

#### 3. How does Node.js handle large file uploads?

#### 4. What is an event-driven model?

#### 5. How does Node.js differ from other backend technologies (e.g., Django, Rails, Spring)?

---
