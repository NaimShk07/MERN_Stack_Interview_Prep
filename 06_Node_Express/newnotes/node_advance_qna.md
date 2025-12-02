# 🚀 Advanced Node.js Interview Questions & Answers (Top 15)

These questions go beyond basics and focus on internals, performance, architecture, and production-level Node.js knowledge.

---

## **1. Explain the Node.js Event Loop in detail and how it handles asynchronous operations.**

Node.js uses the **Event Loop**, powered by **libuv**, to handle asynchronous operations on a single thread.

### **Event Loop Phases**

1. **Timers** – executes `setTimeout` and `setInterval` callbacks
2. **Pending Callbacks** – executes I/O-related callbacks
3. **Idle/Prepare** – internal
4. **Poll** – retrieves new I/O events; executes I/O callbacks
5. **Check** – executes `setImmediate`
6. **Close Callbacks** – executes close events (e.g., socket close)

### **Microtasks (higher priority)**

- `process.nextTick()` queue
- Promise callbacks  
  These run **after each phase**, before the next macrotask.

### **Important Notes**

- Node.js is single-threaded, but libuv delegates I/O to the OS or threadpool.
- Only CPU-heavy tasks block the event loop.

---

## **2. What is the difference between `process.nextTick()`, microtasks, and macrotasks?**

### **Microtasks**

- Promise callbacks
- `queueMicrotask()`
- Run **immediately after a phase**, before moving on.

### **`process.nextTick()`**

- Runs **before microtasks**
- Runs **before the next event loop iteration**
- Overuse can starve the event loop → I/O starvation.

### **Macrotasks**

- `setTimeout`, `setInterval`
- `setImmediate`
- I/O callbacks

**Priority:**  
`process.nextTick()` ➝ Microtasks ➝ Macrotasks

---

## **3. How does Node.js handle concurrency if it is single-threaded?**

Node.js JavaScript runs on a single thread, but concurrency is achieved via:

### **1. Event Loop (async I/O)**

Non-blocking I/O handled by OS or libuv.

### **2. libuv Threadpool**

Used for:

- File system operations
- DNS lookups
- Crypto operations

### **3. Clustering**

Multiple Node processes running on multiple CPU cores.

### **4. Worker Threads**

Used for CPU-bound tasks (parallel execution).

---

## **4. When do you use Worker Threads vs Child Processes vs Clustering?**

### **Worker Threads**

- Same process, shared memory
- Ideal for **CPU-bound tasks**
- Faster IPC

### **Child Processes**

- Separate process with its own memory
- Used for running external commands (ffmpeg, python scripts)

### **Clustering**

- Spawns copies of the same Node server
- Used for **scaling HTTP servers**
- Utilizes all CPU cores

---

## **5. What are memory leaks in Node.js? How do you detect and fix them?**

### **Common Causes**

- Unbounded caches
- Forgotten timers
- Accumulated event listeners
- Global variables
- Closures retaining references

### **Detection Tools**

- Chrome DevTools Heap Snapshot
- `clinic.js`
- `node --inspect`
- `heapdump` package

### **Fixes**

- Manually remove listeners
- Use LRU cache
- Clear timers
- Avoid global/long-lived objects

---

## **6. Explain the internal architecture of Streams and backpressure.**

### **Streams Types**

- Readable
- Writable
- Duplex
- Transform

### **Backpressure**

Occurs when the receiving side cannot handle data fast enough.

### **How Streams Solve It**

- Uses `highWaterMark`
- `stream.write()` returns `false` → producer pauses
- Emits `drain` event when ready again  
  This prevents memory overflow.

---

## **7. How does Node.js garbage collection work?**

Node.js uses **V8 Garbage Collector**.

### **Memory Regions**

- **New Space** (young generation)
- **Old Space** (long-lived objects)

### **GC Algorithms**

- **Scavenge** (copying GC for new space)
- **Mark-Sweep** (old space)
- **Incremental & Concurrent marking**

### **Tuning**

```bash
node --max-old-space-size=4096 index.js
```

## **8. What is the event-driven, non-blocking I/O model? When does I/O actually block?**

**Non-blocking I/O**

- Most async functions delegate work to OS/libuv
- Node continues executing other tasks

**Blocking Situations**

- `fs.readFileSync`, `JSON.parse` of large data
- DNS lookups (if using sync versions)
- CPU-heavy JavaScript code

## **9. What is the difference between CommonJS and ES Modules in Node.js?**

| **Feature**     | **CommonJS (CJS)**     | **ES Modules (ESM)** |
| --------------- | ---------------------- | -------------------- |
| Loading         | Synchronous            | Asynchronous         |
| Syntax          | require/module.exports | import/export        |
| Scope           | Per file               | Per module           |
| Bindings        | Value copy             | Live bindings        |
| Top-level await | ❌                     | ✔                    |

## **10. How do you scale a Node.js application to millions of users?**

**Approaches**

1. Clustering
2. Load balancers – NGINX, HAProxy
3. Stateless architecture
4. Caching – Redis, CDN
5. Message queues – Kafka, RabbitMQ
6. Containers – Docker, Kubernetes
7. Database optimizations – indexing, sharding
8. Horizontal scaling – multiple Node instances

## **11. What are Node.js Buffers and how do they work internally?**

**Buffers**

- Used to handle binary data
- Represent raw memory allocated outside V8 heap
- Backed by C++ implementation

**Used for**

- File system I/O
- TCP/UDP socket data
- Streams

## **12. Why is Node.js bad for CPU-intensive tasks and how do you handle them?**

**Problem**

Heavy CPU calculations block the event loop → whole app freezes.

**Solutions**

- worker_threads
- cluster
- Native C++ Addons
- Offloading computation to microservices

## **13. Explain how JWT authentication works in Node.js and how to secure it.**

**How JWT Works**

1. User logs in
2. Server signs a token with secret/private key
3. Client stores token (usually in cookies/localStorage)
4. Sends token in Authorization header
5. Server verifies token

**Security Best Practices**

- Store tokens in httpOnly cookies
- Use short-lived access tokens
- Rotate refresh tokens
- Implement token blacklist
- Use HTTPS

## **14. What are Native Addons in Node.js and when would you write one?**

Native Addons are Node modules written in C/C++ using N-API or `node-addon-api`.

**Use cases**

- Heavy computation (crypto, image/video processing)
- Wrapping existing C/C++ libraries
- Performance-critical operations

They run faster than pure JS.

## **15. How do you debug performance bottlenecks in a Node.js application?**

**Tools**

- Chrome DevTools CPU Profiler
- clinic.js (Doctor, Flame, Bubbleprof)
- node --inspect
- 0x flame graph profiler

**Metrics**

- Event loop delay
- Heap usage
- GC pauses
- Throughput & latency

**Strategies**

- Avoid blocking code
- Use streams
- Cache heavy operations
- Split CPU-heavy logic into workers
