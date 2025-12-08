# General / Personal Introduction

## 1. Can you tell me any of your best projects and some of the complex functionalities which you have created?

# React.js

## 1. Are you equally good on React and Node both or do you have any preference for frontend or backend?

## 2. Can you tell me what problem does React Fiber solve?

## React Fiber

**React Fiber** is a re-implementation of React’s reconciliation algorithm designed to make rendering **interruptible, incremental, and smoother** for complex UIs.

### 📌 Why Fiber? (What Problem It Solves)

- React’s old rendering was **synchronous** → long renders blocked the main thread ⛔
- No way to **pause, split, or abort** work once started
- Caused **janky UI**, slow updates, and poor responsiveness
- Fiber enables **prioritized, incremental rendering** → smoother apps ⚡

### ⚡ Key Points

- Allows React to **break rendering into small units (fibers)**
- Enables **scheduling + priority levels**
- Improves UI responsiveness by allowing React to **pause + resume work**
- Basis for features like **Concurrent Mode** & **Suspense**

### 🧪 Small Example (Conceptual)

```js
// React Fiber allows this update to be interrupted
setState({ value: slowCalculation() });

// UI stays responsive because React can pause/resume rendering
```

### ✅ Advantages / Uses

- Smoother animations & transitions 🎨
- Better handling of large component trees 🌲
- Prioritized updates (e.g., user input > background rendering)
- Foundation for modern React performance features 🚀

## 3. Why do we use keys in list?

Keys help React **identify which items in a list have changed, been added, or removed**.  
They make React's **reconciliation and diffing process faster and more accurate**.

### 📌 Key Points

- Keys should be **unique** among siblings
- Help React **track elements** between render cycles
- Prevent unnecessary re-renders
- Avoid bugs where DOM nodes get mixed or reused incorrectly
- Best practice: use **stable IDs**, not array indexes (when possible)

## 4. What is React Concurrent Mode?

**Concurrent Mode** (now simply called **Concurrent Features**) is a set of React capabilities that make UI rendering **interruptible**, **non-blocking**, and more **responsive**.

### 📌 Key Points

- Allows React to **pause, resume, or cancel** rendering work
- Makes UI feel smooth during heavy updates
- Prioritizes important updates (e.g., typing) over expensive ones
- Powered by **React Fiber** and the **scheduler**
- Used through features like:
  - `Suspense`
  - `useTransition`
  - `useDeferredValue`

### 🧪 Example (Using `useTransition`)

```jsx
const [isPending, startTransition] = useTransition();

function handleInput(e) {
	const value = e.target.value;

	startTransition(() => {
		setSearch(value); // low-priority update
	});
}
```

## 5. What is Suspense boundary?

A **Suspense boundary** is a React component (`<Suspense>`) that **wraps parts of the UI which may need to wait** for asynchronous data or lazy-loaded components.  
While waiting, React shows a **fallback UI** (like a loader or placeholder).

### 📌 Key Points

- Wraps async components or data-fetching logic
- Shows `fallback` until the content inside is ready
- Helps split UI into **independent loading sections**
- Works with features like **lazy loading**, **RSC**, and **data fetching**
- Prevents the entire UI from blocking during async operations

### 🧪 Example

```jsx
<Suspense fallback={<div>Loading...</div>}>
	<UserProfile /> {/* This component may suspend */}
</Suspense>
```

## 6. What is hydration in React?

**Hydration** is the process where React takes a **server-rendered HTML page** and **attaches event listeners + React state** to make it fully interactive in the browser.

### 📌 Key Points

- Used in **Server-Side Rendering (SSR)** and **React Server Components (RSC)**
- React matches the **existing HTML** with its **virtual DOM**
- Adds event handlers, turns static HTML into a live React app
- Faster initial load because HTML is already rendered
- Only updates mismatched parts during hydration

### 🧪 Example (Conceptual)

```jsx
// Server renders HTML
ReactDOMServer.renderToString(<App />);

// Browser hydrates it
ReactDOM.hydrateRoot(document.getElementById("root"), <App />);
```

## 7. What is HOC (Higher Order Component)?

A **Higher-Order Component (HOC)** is a **function that takes a component and returns a new enhanced component**.  
It is used to **reuse logic** across multiple components.

### 📌 Key Points

- HOC = **Component → New Component**
- Commonly used for:
  - Authentication wrappers
  - Logging or analytics
  - Permission handling
  - Injecting props or behavior
- Should be **pure functions** (no side effects)
- Avoids code duplication by sharing logic between components

# Node.js / JavaScript

# Node.js / JavaScript – Advanced Q&A

## 1. Can you tell me what is Event Loop?

The Event Loop is the core mechanism in Node.js that allows JavaScript to be non-blocking despite being single-threaded.  
It works by delegating asynchronous operations (I/O, timers, network calls, file system) to **libuv**, which handles them in the background.  
Once operations finish, their callbacks are queued and executed during specific phases of the event loop.

The key phases include:

- **Timers** → executes `setTimeout` / `setInterval`
- **Pending Callbacks**
- **Idle/Prepare**
- **Poll** → processes I/O events
- **Check** → executes `setImmediate`
- **Close Callbacks**

Microtasks (Promises, `process.nextTick`) run **between** phases and have higher priority.

---

## 2. Difference between micro task and macro task.

Microtasks and macrotasks are two types of async tasks handled by the **Event Loop**, but they run in **different priority orders**.

---

### 📌 Microtasks

Tasks that run **immediately after the current call stack**, _before_ any macrotask.

**Examples:**

- `Promise.then()`
- `queueMicrotask()`
- `MutationObserver`

---

### 📌 Macrotasks

Tasks that run **after microtasks**, scheduled for the next Event Loop cycle.

**Examples:**

- `setTimeout`
- `setInterval`
- `setImmediate` (Node.js)
- DOM events
- I/O tasks

---

### ⚡ Key Differences

| Feature    | Microtask                     | Macrotask                |
| ---------- | ----------------------------- | ------------------------ |
| Priority   | Higher                        | Lower                    |
| Runs When? | Right after call stack clears | Next Event Loop tick     |
| Examples   | Promises, queueMicrotask      | setTimeout, setInterval  |
| Frequency  | Can run many in a row         | Runs once per loop cycle |

---

## 3. How do you handle back pressure in node streams?

**Backpressure** happens when the **Writable stream** can't consume data as fast as the **Readable stream** produces it.  
Node.js provides built-in mechanisms to **slow down producers** and prevent memory overload.

---

### 📌 Key Concepts

- Readable pushes data too fast → Writable overwhelmed
- Node streams signal backpressure using `write()` return value
- Proper handling ensures stable, memory-efficient streaming

---

## ✅ How to Handle Backpressure

### **1. Check `write()` Return Value**

If `write()` returns **false**, stop reading until the `"drain"` event fires.

### 🧪 Example

```javascript
const fs = require("fs");

const readable = fs.createReadStream("input.txt");
const writable = fs.createWriteStream("output.txt");

readable.on("data", (chunk) => {
	const canContinue = writable.write(chunk);

	if (!canContinue) {
		readable.pause(); // stop producing
		writable.once("drain", () => readable.resume()); // resume when ready
	}
});
```

### **2. Use `pipe()` (Recommended)**

Node’s `pipe()` automatically handles backpressure for you.

```javascript
fs.createReadStream("input.txt").pipe(fs.createWriteStream("output.txt"));
```

### **3. Use Async Iteration (Modern Approach)**

```javascript
for await (const chunk of readable) {
	const ok = writable.write(chunk);
	if (!ok) await once(writable, "drain");
}
```

## ⚡ Why Backpressure Handling Matters

- Prevents memory bloat
- Ensures stable streaming in production
- Keeps CPU and I/O balanced
- Essential in file streaming, HTTP servers, and real-time data pipelines

## 4. Memory Leak

A **memory leak** occurs when a program **holds onto memory that is no longer needed**, preventing the garbage collector from freeing it.  
Over time, this can **slow down the application or even crash it**.

---

## 📌 Key Points

- Occurs when objects are **still referenced but not used**
- Common in JavaScript/Node.js due to closures, global variables, or event listeners
- Symptoms: increasing memory usage, slow performance, crashes

---

## ⚡ Common Causes

- Forgotten timers (`setInterval`, `setTimeout`)
- Detached DOM nodes (in browsers)
- Global variables holding large data
- Event listeners not removed
- Closures retaining references unnecessarily

---

## ⚡ How to Detect

- Chrome DevTools Heap Snapshots
- `node --inspect` for memory profiling
- `clinic.js` (Heap / Doctor / Flame)
- `heapdump`
- Monitoring tools like Datadog or NewRelic

---

## ⚡ How to Fix

- Remove unnecessary references, timers, and listeners
- Break closures retaining large objects
- Use weak references (`WeakMap`, `WeakSet`) when appropriate
- Limit cache sizes (e.g., LRU cache)
- Avoid excessive global state
- Monitor memory usage over time

---

## 5. How do you secure node APIs from attackers?

### Example: Protection against **brute-force attacks**

Brute force attacks target login or verification endpoints by sending repeated requests.

### **Primary Defense Techniques**

- **Rate Limiting**  
  Limit number of attempts per IP/user.
- **IP Blocking / Temporary Bans**
- **Account Lockout**  
  Lock user after repeated failures.
- **Add Delays After Failures**  
  Increase delay for each wrong attempt.
- **Use Strong Authentication**  
  JWT + short TTL, OAuth, API keys.
- **Request Logging + Monitoring**  
  Detect patterns and throttle.

### **Popular Libraries**

- `express-rate-limit`
- `rate-limiter-flexible` (supports Redis, best for distributed systems)

---

## 6. Anything else apart from rate limiting?

Yes, several **additional security layers**:

### **1. WAF (Web Application Firewall)**

Blocks malicious requests like SQL injection, XSS, bots.

### **2. CAPTCHA or Bot Protection**

Prevents most automated attacks.

### **3. Device Fingerprinting**

Identify devices using cookies, headers, browser characteristics.

### **4. IP Reputation Filtering**

Block TOR exit nodes, known proxies, VPNs, or bad IPs.

### **5. Behavioral Analysis**

Analyze:

- Request frequency
- Request patterns
- Geo location mismatch
- Suspicious endpoints

### **6. Request Throttling**

Slow down requests instead of blocking to reduce load.

### **7. Using Reverse Proxy**

NGINX / Cloudflare as a front layer to block attacks before reaching Node.js.

---

## 7. How about captcha? Does it solve that issue?

CAPTCHA helps but **does not completely solve** brute-force and bot attacks.

### ✔ What CAPTCHA Helps With

- Stops basic bots
- Adds friction to automated attacks
- Good for login, signup, forgotten password endpoints

### ✘ CAPTCHA Limitations

- Attackers use **CAPTCHA-solving services** (very cheap)
- ML-based bots can bypass simple CAPTCHAs
- Does not stop **distributed botnets**
- Can hurt user experience
- Doesn't address abuse targeting non-UI endpoints (API-only attacks)

### **Best Practice**

Use CAPTCHA **as one layer**, combined with:

- Rate limiting
- IP reputation scoring
- Device fingerprinting
- WAF
- Login attempt monitoring

Together these provide strong bot and brute-force protection.

---

# MongoDB

## 1. What is TTL index?

A **TTL (Time-To-Live) index** in MongoDB automatically **removes documents after a specified amount of time**, helping manage **temporary or expiring data**.

---

### 📌 Key Points

- Created on a **date field**
- Documents expire after **`expireAfterSeconds`**
- Useful for: session data, cache, logs, temporary tokens
- MongoDB runs a **background thread** to delete expired documents

---

### 🧪 Example

```javascript
// Create a TTL index on "createdAt" to expire documents after 3600 seconds (1 hour)
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });

// Insert a document
db.sessions.insertOne({ user: "Alice", createdAt: new Date() });
```

## 2. Can you tell me what is embedded data?

## 3. How about reference data?

## 4. Do you know what is MongoDB Change Stream?

**Change Streams** allow applications to **listen to real-time changes** (insert, update, delete, replace) in a MongoDB collection, database, or cluster.  
They provide a **reactive way** to respond to data changes without polling.

---

### 📌 Key Points

- Introduced in **MongoDB 3.6+**
- Works with **replica sets** and **sharded clusters**
- Returns a **stream of change events** (`insert`, `update`, `delete`, `replace`)
- Can filter changes using **aggregation pipelines**
- Useful for **real-time analytics, notifications, caching, and event-driven architectures**

---

### 🧪 Example (Node.js)

```javascript
async function watchChanges() {
	const db = client.db("myDB");
	const collection = db.collection("users");

	const changeStream = collection.watch();

	changeStream.on("change", (change) => {
		console.log("Detected change:", change);
	});
}

watchChanges();
```
