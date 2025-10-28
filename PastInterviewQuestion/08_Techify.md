## 1. Arrary methods

## 2. Arrow Function vs Normal Function

**Arrow functions** are a shorter syntax for writing functions in JavaScript, introduced in ES6.  
They differ from **normal functions** mainly in how they handle `this` and `arguments`.

---

### 📌 Key Differences

- ✅ Arrow functions do **not bind** their own `this`
- ⚠️ No `arguments` object in arrow functions
- ❌ Arrow functions **can't be used as constructors**
- 🔄 Normal functions bind `this` dynamically (at call time)

---

### 🔤 Example

```js
// Arrow Function
const add = (a, b) => a + b;

// Normal Function
function add(a, b) {
	return a + b;
}
```

---

### 📊 Comparison Table

| Feature            | Arrow Function      | Normal Function   |
| ------------------ | ------------------- | ----------------- |
| `this` binding     | Lexical (inherited) | Dynamic (runtime) |
| `arguments` object | Not available       | Available         |
| Constructor usage  | Not allowed         | Can be used       |
| Syntax             | Short & concise     | Verbose           |

---

### ✅ Key Points

- 📌 Use arrow functions for small utilities or callbacks
- ⚠️ Avoid in methods or constructors where dynamic `this` is needed
- 🔧 Great for functional programming patterns (e.g., `.map()`, `.filter()`)

## 3. Difference Between Node.js and JavaScript

[click](../06_Node_Express/newnotes/nodejs_qna.md#L69)

## 4. Is Node.js Single-threaded or Multi-threaded?

[click](../06_Node_Express/newnotes/architecture.md#L3)

## 5. Is Node.js Synchronous or Asynchronous?

[click](../06_Node_Express/newnotes/architecture.md#L92)

## 6. How Does Node.js Handle Multiple Requests at a Time?

[click](../06_Node_Express/newnotes/architecture.md#L113)

## 7. What is Helmet?

**Helmet** is a **Node.js middleware** that helps secure Express apps by setting various HTTP headers.

---

### 📌 Key Points

- 🛡️ Protects against common web vulnerabilities (e.g., XSS, clickjacking)
- ⚙️ Adds security-related headers like `Content-Security-Policy`, `X-Frame-Options`
- 🔧 Easy to configure and use with Express.js

---

### 🔤 Example

```js
const express = require("express");
const helmet = require("helmet");

const app = express();
app.use(helmet());

app.get("/", (req, res) => {
	res.send("Hello, secure world!");
});

app.listen(3000);
```

---

### ✅ Key Benefits

- Improves app security with minimal setup
- Helps prevent attacks by controlling HTTP headers
- Highly recommended for all Express-based applications

## 8. What Are Streams in Node.js?

[click](../06_Node_Express/newnotes/nodejs_qna.md#L370)

### 📌 Key Points

- ✅ Efficient for handling large data (files, network)
- ⚙️ Four types: **Readable**, **Writable**, **Duplex**, **Transform**
- 🔄 Work with events like `data`, `end`, `error` for async processing
- 🚀 Help reduce memory usage and improve performance

---

### 🔤 Example

```js
const fs = require("fs");

const readable = fs.createReadStream("large-file.txt");
const writable = fs.createWriteStream("copy.txt");

readable.pipe(writable); // Stream data from file to file efficiently
```

---

### 📊 Stream Types

| Stream Type | Description                      |
| ----------- | -------------------------------- |
| Readable    | Data can be read from it         |
| Writable    | Data can be written to it        |
| Duplex      | Can read and write               |
| Transform   | Duplex stream that modifies data |

---

### ✅ Key Takeaways

- Use streams for large or continuous data processing
- Prevents loading entire data into memory at once
- Essential for building fast, scalable Node.js apps

## 9. Find vs Aggregation Query (MongoDB)

[click](../07_MongoDB/newnotes/mongodb_qna.md/#L202)

## 10. Return Type of `find` and `findOne` (MongoDB)

`find` and `findOne` are MongoDB methods used to query documents, but they return different types.

[click](../07_MongoDB/newnotes/mongodb_qna.md/#L99)

## 11. What is Sharding in MongoDB?

**Sharding** is a method to **horizontally scale** a MongoDB database by distributing data across multiple servers.

---

### 📌 Key Points

- 📊 Distributes data into **shards** (separate database instances)
- ⚖️ Enables handling large datasets and high throughput
- 🔑 Uses a **shard key** to determine data placement
- 🚀 Improves read/write performance and storage capacity

---

### 🔤 Example (Conceptual)

```js
// Enable sharding on a database
sh.enableSharding("myDatabase");

// Shard a collection by shard key
sh.shardCollection("myDatabase.users", { userId: 1 });
```

---

### 📊 Benefits vs Replica Set

| Feature           | Sharding               | Replica Set              |
| ----------------- | ---------------------- | ------------------------ |
| Purpose           | Horizontal scaling     | High availability        |
| Data distribution | Across multiple shards | Copies of data on nodes  |
| Use case          | Large datasets         | Failover and backups     |
| Performance       | Improved write/read    | Read scaling (secondary) |

---

### ✅ Key Takeaways

- Sharding splits data for **scalability** and **performance**
- Requires careful shard key selection for balanced data distribution
- Often combined with replica sets for fault tolerance

## 12. Scaling in MongoDB

**Scaling** in MongoDB refers to increasing the database’s capacity to handle more data and traffic.

---

### 📌 Key Types of Scaling

- 🔼 **Vertical Scaling:** Increasing resources (CPU, RAM, storage) on a single server
- ↔️ **Horizontal Scaling (Sharding):** Distributing data across multiple servers (shards)

---

### 📊 Comparison Table

| Scaling Type       | Description                   | Pros                   | Cons                |
| ------------------ | ----------------------------- | ---------------------- | ------------------- |
| Vertical Scaling   | Upgrade existing server       | Simple to implement    | Limited by hardware |
| Horizontal Scaling | Add more servers via sharding | Handles large datasets | More complex setup  |

---

### ✅ Key Points

- Vertical scaling is easy but limited by machine capacity
- Horizontal scaling (sharding) improves performance and storage
- MongoDB uses **sharding** for horizontal scaling to support big data
- Combine with **replica sets** for fault tolerance and availability

## 13. What is `upsert: true` in MongoDB?

`upsert: true` is an option in MongoDB update operations that **inserts a new document if no matching document is found**.

---

### 📌 Key Points

- ✅ Combines **update** and **insert** in one operation
- 🔍 If a document matches the filter, it is updated
- ➕ If no match, a new document is created with the update data

---

### 🔤 Example

```js
db.users.updateOne(
	{ username: "alice" }, // filter
	{ $set: { age: 30 } }, // update
	{ upsert: true } // option
);
```

- If `"alice"` exists, update her age to 30
- If not, insert a new document `{ username: "alice", age: 30 }`

---

### ✅ Key Takeaways

- Use `upsert: true` to **ensure a document exists** after update
- Avoids separate find + insert logic
- Useful for caching, counters, or default data insertion

## 14. What is an Error Boundary in React?

An **Error Boundary** is a React component that **catches JavaScript errors in its child component tree** and displays a fallback UI instead of crashing the whole app.

---

### 📌 Key Points

- ✅ Catches errors during rendering, lifecycle methods, and constructors of child components
- ⚠️ Does **not** catch errors inside event handlers or async code
- 🔄 Implemented using `componentDidCatch` lifecycle method or `static getDerivedStateFromError`

---

### ✅ Key Takeaways

- Use Error Boundaries to **prevent entire app crashes**
- Wrap them around components that might throw errors
- Helps improve user experience with graceful error handling

## 15. Difference Between Axios and Fetch

**Axios** and **Fetch** are both used to make HTTP requests in JavaScript but have key differences.

---

### 📌 Key Differences

| Feature                  | Axios ✅                                | Fetch API 🌀                    |
| ------------------------ | --------------------------------------- | ------------------------------- |
| Browser Support          | Supports older browsers with polyfills  | Native in modern browsers only  |
| Syntax                   | Simple and concise                      | Requires more manual setup      |
| Response Handling        | Automatically parses JSON               | Needs `.json()` to parse JSON   |
| Request Cancellation     | Supports cancellation (via CancelToken) | No built-in cancellation        |
| Interceptors             | Supports request/response interceptors  | No built-in interceptors        |
| Error Handling           | Throws error for HTTP errors            | Only rejects on network failure |
| Default Timeout          | Supports timeout configuration          | No built-in timeout             |
| Upload/Download Progress | Supports progress events                | Limited support                 |

---

### 🔤 Example

**Axios:**

```js
axios
	.get("/api/data")
	.then((response) => console.log(response.data))
	.catch((error) => console.error(error));
```

**Fetch:**

```js
fetch("/api/data")
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch((err) => console.error(err));
```

---

### ✅ Key Takeaways

- Use **Axios** for more features, ease of use, and better error handling
- Use **Fetch** for native, lightweight requests in modern environments
- Axios simplifies many HTTP tasks with built-in utilities

## Q: How to Print 1 to 10 Without Loop?

You can use **recursion** to print numbers from 1 to 10 without using loops.

---

### 📌 Key Points

- Recursion calls the same function repeatedly with updated parameters
- Base case stops the recursion to prevent infinite calls

---

### 🔤 Example

```js
function printNumbers(n = 1, max = 10) {
	if (n > max) return;
	console.log(n);
	printNumbers(n + 1, max);
}

printNumbers(); // Prints 1 to 10
```

---

### ✅ Key Takeaways

- Recursion is a neat alternative to loops for repetitive tasks
- Always include a base case to avoid infinite recursion

## Q: What is the output of the following?

```js
const arr = [1, 2, 3, 4, 5];

const result = arr.map((value) => value === 2 || value === 4);

console.log(result);
```

---

### 📌 Explanation

- `map` applies the function to each element
- `value === 2 || value === 4` returns **`true`** if value is 2 or 4, else **`false`**

---

### 🔤 Output

```js
[false, true, false, true, false];
```

---

### ✅ Key Points

- The result is a **boolean array** indicating which elements matched
- `map` transforms each element, not filters them

## Q: What is the output of the following?

```js
console.log(a);
var a = 10;
console.log(a);

console.log(a);
let a = 10;
console.log(a);
```

---

### 📌 Explanation

- Variables declared with `var` are **hoisted** and initialized with `undefined`
- Variables declared with `let` are hoisted but **not initialized** (Temporal Dead Zone)

---

### 🔤 Output

```
undefined
10
ReferenceError: Cannot access 'a' before initialization
```

- First `console.log(a)` prints `undefined` (due to hoisting of `var a`)
- Second `console.log(a)` prints `10`
- Third `console.log(a)` throws `ReferenceError` because `a` is not accessible before `let` initialization

---

### ✅ Key Points

- `var` hoisting sets variables to `undefined` initially
- `let` and `const` have Temporal Dead Zone (TDZ), causing ReferenceError if accessed early
- Avoid accessing variables before declaration to prevent errors

## Q: What is the output of the following?

```js
let obj = { name: "ABC" };
obj.name = 123;

if (!typeof obj.name === "string") {
	console.log("Not a string");
} else {
	console.log("String");
}
```

---

### 📌 Explanation

- `typeof obj.name` returns `"number"` (since `obj.name = 123`)
- Operator precedence: `!typeof obj.name === "string"` is evaluated as `(!"number") === "string"`
- `!"number"` converts to `false` because `"number"` is a non-empty string
- So, `false === "string"` is `false`
- The `if` condition is `false`, so **`else` block runs**

---

### 🔤 Output

```
String
```

---

### ✅ Key Points

- `!typeof obj.name === "string"` does **not** check if type is not string
- Use parentheses for clarity: `!(typeof obj.name === "string")`
- Correct condition to check "not string":

```js
if (typeof obj.name !== "string") {
	console.log("Not a string");
} else {
	console.log("String");
}
```

## Q: What is the output of the following?

```js
console.log(1 + "1" + 1);
console.log(1 - "1" + 1);
```

---

### 🔍 Explanation:

1. **`1 + '1' + 1`**

- `+` operator with a **string** triggers **string concatenation**
- Step-by-step:
  - `1 + '1'` → `'11'` (number + string → string)
  - `'11' + 1` → `'111'` (string + number → string)

✅ **Output:** `'111'`

---

2. **`1 - '1' + 1`**

- `-` operator triggers **numeric conversion**
- Step-by-step:
  - `1 - '1'` → `0` (both treated as numbers)
  - `0 + 1` → `1`

✅ **Output:** `1`

---

### 🧠 Summary:

| Expression    | Result  | Why                              |
| ------------- | ------- | -------------------------------- |
| `1 + '1' + 1` | `'111'` | String concatenation             |
| `1 - '1' + 1` | `1`     | Numeric subtraction and addition |
