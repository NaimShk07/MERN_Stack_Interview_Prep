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

## 4. What is React Concurrent Mode?

## 5. What is Suspense boundary?

## 6. What is hydration in React?

## 7. What is HOC (Higher Order Component)?

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

**Microtasks**

- Higher priority
- Executed immediately after the current operation
- Examples:
  - Promise callbacks
  - `queueMicrotask()`
  - `process.nextTick()` (even higher priority)

**Macrotasks**

- Executed according to event loop phases
- Examples:
  - `setTimeout`
  - `setInterval`
  - `setImmediate`
  - I/O callbacks

**Execution Order:**  
`process.nextTick()` → Microtasks → Macrotasks

---

## 3. How do you handle back pressure in node streams?

Backpressure occurs when the **consumer** of data cannot handle the speed of the **producer**.

Node.js handles this using **built-in flow control**:

- `stream.write()` returns `false` when the internal buffer is full.
- When `false` is returned, the producer must **pause** writing.
- Producer resumes only when the stream emits a `drain` event.

Example:

```js
function writeData(stream, data) {
	if (!stream.write(data)) {
		stream.once("drain", () => writeData(stream, data));
	}
}
```

## 4. What is memory leak?

A memory leak occurs when memory that is no longer needed is **not released**, causing the application’s memory usage to grow over time.  
In Node.js, this eventually leads to performance degradation and even process crashes (out of memory).

### **Common Causes**

- Unbounded in-memory caches
- Global variables that never reset
- Forgotten timers or intervals
- Event listeners not removed
- Closures retaining large objects
- Long-lived objects that reference each other (reference cycles)

### **How to Detect**

- Chrome DevTools Heap Snapshots
- `node --inspect` debugging
- `clinic.js` (Clinic Heap / Doctor / Flame)
- `heapdump`
- Monitoring tools (Datadog, NewRelic)

### **How to Fix**

- Limit cache sizes (use LRU cache)
- Clean up timers/listeners
- Avoid global state
- Validate memory usage over time

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

## 2. Can you tell me what is embedded data?

## 3. How about reference data?

## 4. Do you know what is MongoDB Change Stream?
