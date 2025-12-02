## 1. Polymorphism in db

## 2. What is React query and TanStack , it's use

📌 **React Query (now called TanStack Query) is a powerful data-fetching and caching library for React.**  
It manages server state (API calls) efficiently with caching, background updates, and syncing.

---

### 📌 Key Points

- Handles **server state**, not client state
- Provides **caching**, **refetching**, **pagination**, **infinite queries**, and **auto retries**
- Removes the need for manual `useEffect + fetch + useState` patterns
- Makes API calls **fast, consistent, and reliable**

---

### 🔧 Example Usage

```jsx
import { useQuery } from "@tanstack/react-query";

const fetchUsers = () => fetch("/api/users").then((res) => res.json());

export function Users() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
	});

	if (isLoading) return "Loading...";
	if (error) return "Error";

	return data.map((u) => <p key={u.id}>{u.name}</p>);
}
```

### ⭐ Why Use TanStack Query?

- ⚡ Automatic caching
- 🔄 Auto refetch on window focus
- 🔁 Retry failed requests
- 📊 Supports pagination & infinite scroll
- 🧪 Devtools for debugging queries
- 🧠 No need for Redux for API fetching
- ⏳ Background updates → smooth UI

## 3. Can We Use a Normal Function to Update Redux State?

📌 **No, we should not use a normal function to directly update Redux state.**  
Redux state must be updated **only via reducers** to maintain predictability and a single source of truth.

---

### 📌 Key Points

- Redux state is **immutable**; direct mutation breaks state tracking
- State updates must be **pure and predictable**
- All changes go through **dispatching actions → reducer → new state**
- Normal functions can mutate state but **bypass Redux flow**, breaking DevTools, middleware, and debugging

### ✅ Why Not Normal Functions?

- ❌ Direct mutation loses time-travel debugging
- ❌ Breaks predictable state updates
- ❌ Hard to maintain or test
- ✅ Reducers enforce pure, centralized, traceable state management

> Redux enforces a unidirectional data flow: actions → reducers → new state. Normal functions can’t replace reducers because they break immutability and predictability.

## 4. Optimizing Search in a Database

📌 **Optimizing search means improving query speed and reducing resource usage when retrieving data.**  
Focus is on indexing, query design, and database structure.

---

### 📌 Key Points

- Use **indexes** (B-Tree, Full-Text, Hash, Columnstore) on frequently searched columns
- Avoid `SELECT *`; select only **needed columns**
- Use **WHERE** clauses efficiently with indexed columns
- Use **JOINs carefully**; avoid unnecessary table scans
- Consider **denormalization** for read-heavy systems
- Use **query caching** or **materialized views** for repeated queries
- For text search, use **Full-Text Indexes** or external search engines (Elasticsearch, Algolia)

### ✅ Advantages / Uses

- ⚡ Faster query execution
- 📊 Better performance for large datasets
- 🔄 Reduced load on DB for repeated searches
- 🧪 Essential for analytics, reporting, and high-traffic apps

> Use EXPLAIN to check query plan

## 5. Web hook

📌 **A webhook is a way for an application to send real-time data to another application via HTTP callbacks.**  
It allows servers to **notify other systems automatically when an event occurs**.

---

### 📌 Key Points

- Triggered by **events** (e.g., new user signup, payment received)
- Sends **HTTP POST requests** to a pre-configured URL
- **Push-based**: unlike polling, data is sent immediately when event happens
- Commonly used in **APIs, integrations, and automation**

---

### 🔧 Example

```json
POST /webhook-endpoint HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "event": "user_signup",
  "user": {
    "id": 123,
    "name": "Alice"
  }
}
```

### ✅ Advantages / Uses

- ⚡ Real-time notifications between systems
- 🔄 Automates workflows without manual polling
- 📊 Used in payment gateways, GitHub, Slack, Stripe, etc.
- 🧪 Easy integration with external services

## 6. Engine-Level Index Types (MySQL)

📌 **Engine-level index types define how the database physically stores and accesses data for faster searches.**  
These are selected when creating an index and are different from logical types like `primary` or `unique`.

---

### 📌 Key Index Types

- **B-Tree Index** ✅  
  Standard index for most queries; supports equality and range searches.
- **Full-Text Index** 🔍  
  Optimized for text search using `MATCH ... AGAINST`.
- **Hash Index** ⚡  
  Fast lookups for exact matches; mainly for MEMORY tables.
- **Spatial Index** 🗺️  
  For `geometry` or `geography` data types.
- **Columnstore Index** 📊  
  Optimized for analytical queries on large datasets.
- **XML Index** 📄  
  For indexing XML columns (primary + secondary indexes).

---

### 🔧 Example: Creating a B-Tree Index

```sql
CREATE INDEX idx_users_name ON users(name);
```

### ✅ Advantages / Uses

- ⚡ Faster data retrieval
- 📊 Optimized for different query types (text, spatial, analytical)
- 🧪 Enables large-scale and complex query performance
- 🔄 Reduces table scans and improves sorting/search efficiency

## 7. ## Axios Interceptor

📌 **An Axios interceptor is a middleware-like function that runs before a request is sent or before a response is processed.**  
It allows you to **modify requests**, **handle errors**, or **transform responses** globally.

---

### 📌 Types of Interceptors

- **Request Interceptor**  
  Runs **before** the request is sent.  
  Used for adding headers, tokens, logging, etc.

- **Response Interceptor**  
  Runs **after** the server responds.  
  Used for error handling, refreshing tokens, transforming data, etc.

### ✅ Advantages / Uses

- ⚡ Add auth tokens automatically
- 🛡️ Global error handling
- 🔄 Auto-refresh access tokens
- 📊 Logging requests/responses
- 🧪 Modify or transform responses globally

## 8. Queue

## 9. Universal Time Zone (UTC)

📌 **UTC (Coordinated Universal Time) is the primary time standard used worldwide to regulate clocks and time.**  
It does **not** change with seasons (no daylight savings) and serves as the base for all global time zones.

## 10. useEffect vs useLayoutEffect

📌 **Both hooks run after a component renders, but the timing is different.**  
They affect how updates interact with the browser’s paint cycle.

---

### 🔹 useEffect (Async & Non-blocking)

- Runs **after** the UI is painted to the screen
- Does **not block** the browser paint
- Best for: data fetching, subscriptions, timers, logging

### 🔹 useLayoutEffect (Sync & Blocking)

- Runs before the browser paints the UI
- Blocks rendering until it finishes
- Best for: measuring DOM elements, synchronizing layout, preventing layout flicker

### ⚡ Interview Tip

> 📌 Use useEffect most of the time.

> 📌 Use useLayoutEffect only when you must measure or update the DOM before it flashes on screen.

## 11. Local Storage vs Session Storage vs IndexedDB vs Cookies

📌 These are browser-based storage mechanisms used to store data on the client side, each with different limits, lifetimes, and use cases.

---

### 1️⃣ Local Storage

📌 **Stores key–value data in the browser with no expiration.**

- Persistent until manually cleared
- Synchronous API
- Max size ~5–10MB
- Only stores **strings**

```js
localStorage.setItem("token", "abc123");
localStorage.getItem("token");
```

> Best for: Preferences, theme, small persistent data

### 2️⃣ Session Storage

📌 **Stores data for the duration of the page session (tab).**

- Cleared when tab/browser closes
- Separate per-tab
- Same size limits as localStorage (~5MB)
- Only strings

```js
sessionStorage.setItem("temp", "hello");
sessionStorage.getItem("temp");
```

> Best for: Temporary data, form steps, session-specific states

### 3️⃣ IndexedDB

📌 **A client-side NoSQL database for storing large structured data.**

- Asynchronous
- Stores objects, files, blobs
- Size: hundreds of MBs
- Complex queries possible

```js
const dbReq = indexedDB.open("myDB", 1);
```

> Best for: Offline apps, large datasets, caching API results

### 4️⃣ Cookies

📌 **Small pieces of data sent with every HTTP request.**

- Max size ~4KB
- Can have expiration time
- Sent automatically to server
- Often used for authentication sessions
- document.cookie = "user=John; path=/; max-age=3600";

> Best for: Authentication, sessions, server communication

### ⚡ Interview Tip

> Cookies for server communication,
> LocalStorage/SessionStorage for simple client-side data,
> IndexedDB for large offline or structured data.

## 12. Finding the Longest Common Prefix (LCP)

📌 **The longest common prefix is the longest starting substring shared by all strings in a list.**

```js
function longestCommonPrefix(strs) {
	if (!strs.length) return "";

	strs.sort();
	const first = strs[0];
	const last = strs[strs.length - 1];
	let i = 0;

	while (i < first.length && i < last.length && first[i] === last[i]) {
		i++;
	}

	return first.slice(0, i);
}
console.log(longestCommonPrefix(["aebcv", "aeq", "aeml", "aeiyt"]));
```

## 13. Move element 0 to last

```js
function moveZerosToEnd(arr) {
	let nonZeroIndex = 0;

	// Move non-zero elements forward
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			arr[nonZeroIndex] = arr[i];
			nonZeroIndex++;
		}
	}

	// Fill the rest with zeros
	for (let i = nonZeroIndex; i < arr.length; i++) {
		arr[i] = 0;
	}

	return arr;
}

console.log(moveZerosToEnd([1, 2, 0, 4, 5, 0, 3]));
```

## 14. Salary question

```sql
SELECT *
FROM employee 
WHERE salary = (
   SELECT MAX(salary)
   FROM employee
   WHERE salary < (SELECT MAX(salary) FROM employee)
);
```

## 15. ## Polling, Long Polling, Server-Sent Events, and WebSockets

📌 **These are techniques to get real-time or near-real-time data from a server.**  
They differ in how the client and server communicate and how efficiently updates are delivered.

---

### 1️⃣ Short Polling

📌 Client repeatedly requests the server at fixed intervals to check for updates.

```txt
Client: GET /data every 5s
Server: responds immediately
```

- Pros: Simple to implement
- Cons: Wasteful, high latency if interval is long, unnecessary server load

### 2️⃣ Long Polling

📌 Client sends a request; server holds it until new data is available or a timeout occurs.
Once responded, client immediately sends a new request.

```txt
Client: GET /updates
Server: waits until new data or timeout
Client: GET /updates again
```

- Pros: Near real-time updates, less wasted requests
- Cons: Each update still requires HTTP request, connection overhead

### 3️⃣ Server-Sent Events (SSE)

📌 Server can push updates to client over a single HTTP connection.
Client subscribes and receives continuous updates.

```txt
const evtSource = new EventSource('/events');
evtSource.onmessage = e => console.log(e.data);
```

- Pros: Simple, one-way real-time updates
- Cons: Only works server → client, not bi-directional

### 4️⃣ WebSockets

📌 Creates a persistent, full-duplex connection between client and server.
Both can send messages anytime.

```txt
const ws = new WebSocket('ws://example.com/socket');
ws.onmessage = e => console.log(e.data);
ws.send('Hello Server');
```

- Pros: True bi-directional real-time communication
- Cons: Slightly more complex, requires WebSocket support on server
