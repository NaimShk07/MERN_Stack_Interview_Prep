# ⚙️ Node.js Concurrency & Architecture Cheatsheet

## 🧵 What Does "Single-Threaded" Mean in Node.js?

- Node.js runs **JavaScript on a single main thread**.
- This thread executes code **sequentially** using the **Event Loop**.
- However, **non-blocking operations** (like I/O, file, network) are handled **asynchronously** in the background by **libuv**.
- This allows Node.js to manage **many concurrent requests efficiently** without using multiple JS threads.

> 💡 **In short:** Node.js is **single-threaded for JavaScript**, but **multi-threaded under the hood** for background operations.

---

## 🔁 Event Loop in JavaScript vs Node.js

The **Event Loop** manages how asynchronous tasks are executed — but it works **slightly differently** in browsers (JavaScript) and Node.js.

### 🧩 In the Browser (JavaScript)

- Focuses on **UI and web APIs**.
- The event loop manages:
  - **Microtasks:** `Promise`, `queueMicrotask`
  - **Macrotasks:** `setTimeout`, `setInterval`, DOM events, etc.
- The browser’s **Web APIs** (like `fetch`, `setTimeout`) handle async tasks and send callbacks back to the event queue.

📘 **Simplified Flow:**

```js
console.log("Start");
setTimeout(() => console.log("Macrotask"), 0);
Promise.resolve().then(() => console.log("Microtask"));
console.log("End");
```

output:

```js
Start;
End;
Microtask;
Macrotask;
```

The Flow (Simple Words)

1. Call Stack: Where synchronous JS code runs, line by line.
2. Web APIs: When JS encounters async tasks (timers, DOM events, fetch), it doesn’t block the main thread.

   - Timers (`setTimeout`, `setInterval`) → handled by browser timer APIs
   - DOM events → handled by browser event system
   - Network requests (`fetch`) → handled by browser networking APIs
   - Promises / `queueMicrotask` → go to microtask queue

3. Event Loop: Continuously checks if the call stack is empty.

   - If empty → takes the next callback from the queues and pushes it to the stack.
   - Microtasks (Promises) run before macrotasks (timers, events, network callbacks).

4. Result: JS in the browser can handle async operations without blocking the main thread.

> Microtasks (Promises) always run before macrotasks in browsers.

### 🧩 In Node.js

- The event loop is powered by libuv, which adds extra phases and a thread pool for I/O.
- Node.js event loop phases:

⚙️ 2. The Flow (Simple Words)

1. **Call Stack:** Where synchronous JS code runs, line by line.
2. **Async APIs:** When Node.js encounters async tasks (timers, I/O, promises), it doesn’t block the main thread.
   - Timers (`setTimeout`) → managed by event loop timer phase
   - File system / CPU-heavy work (`fs.readFile`, `crypto`) → offloaded to libuv thread pool
   - Network requests (`http`, `fetch`) → handled by the OS kernel
   - Promises / `process.nextTick` → go to microtask queue
3. **Event Loop:** Continuously checks if the call stack is empty.
   - If empty → takes the next callback from the queues and pushes it to the stack.
   - Microtasks (Promises) run before macrotasks (timers, I/O callbacks).
4. This is how Node.js can handle thousands of I/O operations without creating new threads for each task.

```
┌───────────────────────────────────────────────────────────────┐
│                    Node.js Runtime                            │
│                                                               │
│  ┌───────────────────────────────┐                            │
│  │           Your JS Code        │                            │
│  │         (Call Stack)          │ ← Runs synchronously       │
│  └──────────────┬────────────────┘                            │
│                 │                                             │
│     Event Loop  │   keeps checking if Call Stack is empty     │
│     🌀──────────┘                                             │
│          │                                                    │
│  ┌───────┴─────────────┐   ┌────────────────┐   ┌───────────┐ │
│  │ Microtask Queue     │   │   Task Queue   │   │ ThreadPool│ │
│  │ (Promises, nextTick)│   │ (Timers, I/O)  │   │ (libuv)   │ │
│  └───────┬─────────────┘   └───────┬────────┘   └──────┬────┘ │
│          │                         │                   │      │
│          │                         │   async work done │      │
│          │                         │◄──────────────────┘      │
│          │      Callbacks ready for Event Loop                │
└──────────┴────────────────────────────────────────────────────┘
```

> Node.js gives priority to process.nextTick() and Promises before moving to the next phase.
> Libuv provide eventloop functionality to Node.js

---

## 🧠 libuv — The Hidden Engine Behind Node.js

- libuv is a C library that powers Node.js’s asynchronous I/O.
- It manages the `thread pool`, `event loop`, and `I/O operations` (network, file system, DNS).
- When Node.js performs async tasks, libuv handles them in the background using native OS threads.

> 🧩 libuv = The engine that makes Node.js non-blocking.

---

## ⏳ Synchronous vs Asynchronous in Node.js

**Synchronous(Blocking)** : Executes one task at a time; next task waits. ex: `fs.readFileSync()`
**Asynchronous(Non-Blocking)** : Executes tasks concurrently; doesn’t wait for one to finish. ex: `fs.readFile()`

📘 Example:

```js
const fs = require("fs");

// Blocking
const data = fs.readFileSync("file.txt", "utf8");
console.log("Sync Done");

// Non-blocking
fs.readFile("file.txt", "utf8", () => console.log("Async Done"));
console.log("After Async Call");
```

## 🏗️ Explain Node.js Architecture (Event-Driven, Non-Blocking I/O)

Node.js follows an `event-driven`, `non-blocking I/O` architecture designed for high scalability.

### ⚙️ How It Works

1. `Client requests` are received by Node.js (single thread).
2. Each request is handled through `callbacks` and `events`, not threads.
3. `Blocking tasks` (like DB queries or file reads) are offloaded to `libuv’s thread pool`.
4. Once the task completes, the `callback` is added to the `Event Loop queue`.
5. The `Event Loop` executes these callbacks when the main thread is free.

### 🧩 Flow Diagram (Conceptually)

```vbnet
Client Request
→ Event Queue
→ Event Loop
→ (libuv handles I/O in background)
→ Callback returned 
→ Response Sent
```

### ✅ Benefits

- Highly scalable — handles thousands of requests concurrently.
- Lightweight — single-threaded, no thread-per-request overhead.
- Ideal for I/O-heavy apps like APIs, chat servers, or streaming.

> 💬 In short: Node.js uses an event-driven, non-blocking model where the Event Loop and libuv handle async operations efficiently — enabling concurrency without multiple threads.

## 📊 Summary Table

| Concept                         | Description                                                |
| ------------------------------- | ---------------------------------------------------------- |
| **Single-threaded**             | JS code runs on one main thread.                           |
| **Multi-threaded (internally)** | libuv uses multiple threads for async tasks.               |
| **Event Loop**                  | Manages execution order of async tasks.                    |
| **Browser vs Node.js**          | Node.js adds more loop phases and a thread pool via libuv. |
| **libuv**                       | Handles background I/O, thread pool, and event loop logic. |
| **Architecture**                | Event-driven & non-blocking I/O.                           |
| **Synchronous**                 | Blocking — one task at a time.                             |
| **Asynchronous**                | Non-blocking — tasks handled concurrently.                 |

## 🚀 Key Takeaways

- Node.js `executes JS on one thread` but uses `libuv’s thread pool` for async I/O.
- The `Event Loop` in Node.js has more phases and handles `setImmediate` & `process.nextTick` differently than browsers.
- `Asynchronous design` makes Node.js scalable for I/O-heavy applications.
- For `CPU-heavy work`, use `Worker Threads` or `Child Processes`.

> Node.js runs JavaScript on a single thread using an event loop powered by libuv, which internally uses multiple threads to handle asynchronous, non-blocking I/O — the event loop works differently from browsers
