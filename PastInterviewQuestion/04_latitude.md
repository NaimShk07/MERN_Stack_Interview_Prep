## 1. Tell me about few project that you have worked on

### 1. Business Networking App

- **Tech Stack**: React, Node.js
- **Role**: Implemented key features like referrals, testimonials, and reporting system.
- **Impact**: Boosted user engagement and helped businesses generate quality leads.

---

### 2. EV Charging Station Admin Panel

- **Tech Stack**: Angular
- **Role**: Built dashboards, reports, and user management modules.
- **Impact**: Enabled real-time monitoring and improved operational efficiency for charging stations.

---

### 3. Gujarat Maheshwari Samaj – District-Wise Listing

- **Tech Stack**: React, Node.js
- **Role**: Developed a district-wise listing system with advanced filters & search functionality.
- **Impact**: Simplified community access to information and improved overall usability.

---

## 1.1 What is your responsibility in your current company

- **Full Stack Development**:  
  Work with React, Angular, Node.js, and SQL to build scalable web applications.

- **Frontend Focus**:  
  Develop responsive UI components, optimize performance, and ensure smooth user experience.

- **Backend Contribution**:  
  Collaborate on APIs, integrate databases, and handle data-driven features.

- **Project Ownership**:  
  Take end-to-end responsibility for modules — from understanding requirements to deployment.

- **Collaboration**:  
  Work closely with designers, QA, and team members to deliver features on time.

---

## 2. What is asynchronous

- Asynchronous means tasks don't wait for each other to complete — they run independently.
- In JavaScript, it's useful when dealing with `time-consuming` operations like API calls or reading files.
- It allows the code to continue running without getting blocked or frozen.
- Common async tools: Callbacks, Promises, async/await

## 3. callback vs promise vs async/await

1. Callback

   - A function passed as an argument, runs after task completes.
   - ❌ Can lead to "callback hell" with nested code.

2. Promise

   - Represents a future value (pending → resolved/rejected).
   - Helps avoid callback hell.

3. Async/Await

   - Syntactic sugar over Promises.
   - Looks like synchronous code, easier to read.

---

## 4. virtual dom vs real dom

- kerinfotech

---

## 5. how react handle virtual dom under the hood

- kerinfotech

---

## 6. Pure Component / Pure Function

- Pure Function
  - A function that **always returns the same output** for the **same input**.
  - It does **not change anything outside** itself (no side effects).
  - Easy to test and predict.
- Pure Component
  - React component that renders the same output for the same props/state.
  - Avoids unnecessary re-renders using shallow comparison.

---

## 7. Controlled vs uncontrolled component

- Controlled Component

  - Form data is handled by **React state**.
  - Input value comes from state, updated via `onChange`.
  - React has full control over input.

  ```jsx
  <input value={value} onChange={(e) => setValue(e.target.value)} />
  ```

- Uncontrolled Component
  - Form data handled by DOM itself.
  - Use refs to get input value when needed.
  - React doesn’t control input value directly.
  ```jsx
  <input ref={inputRef} />
  ```

---

## 8. React App is taking time to load What are the steps you will take to optimize

- kerinfotech 2.19

---

## 9. What is lazy loading

- Loading parts of an app **only when needed**, instead of all at once.

  - Improves initial load time.
  - Saves bandwidth by loading resources on demand.
  - Commonly used for images, components, or modules.

  ```js
  import { lazy, Suspense } from "react";

  const MyComponent = lazy(() => import("./MyComponent"));

  function App() {
  	return (
  		<>
  			<Suspense fallback={<div>Loading...</div>}>
  				<MyComponent />
  			</Suspense>
  		</>
  	);
  }
  ```

---

## 10. What is code spliting

- Code splitting means **breaking your app’s bundle into smaller chunks**.
  - Loads only the necessary code for the current page or feature.
  - Reduces initial load time and improves performance.
  - Often used with tools like Webpack or React.lazy.
  - same like above with out suspence

---

## 11. useEffect with cleanup and dependency array

- code

  ```js
  const [count, setCount] = useState(0);

  useEffect(() => {
  	console.log("🔁 useEffect ran! Count is:", count);

  	return () => {
  		console.log("🧹 Cleanup before next effect/unmount. Count was:", count);
  	};
  }, [count]);
  ```

- output
  ```
  🔁 useEffect ran! Count is: 0     // on mount
  ---
  🧹 Cleanup before next effect/unmount. Count was: 0
  🔁 useEffect ran! Count is: 1     // after clicking increment
  ---
  🧹 Cleanup before next effect/unmount. Count was: 1
  🔁 useEffect ran! Count is: 2     // and so on...
  ```

---

## 12. What is debouncing

- Debouncing is a `technique` to **limit how often a function runs**.
  - It `waits` for a `pause` in user actions before running a function.
  - Commonly used in **search input, resize, scroll**, etc.
  - Helps improve performance and reduce API calls.

```js
const [searchTerm, setSearchTerm] = useState("");
const [debouncedValue, setDebouncedValue] = useState("");

useEffect(() => {
	const timer = setTimeout(() => {
		setDebouncedValue(searchTerm);
	}, 500);

	return () => clearTimeout(timer);
}, [searchTerm]);

useEffect(() => {
	if (debouncedValue) {
		console.log("Api called...");
	}
}, [debouncedValue]);
```

```js
function debounce(func, delay) {
	let timeout;

	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), delay);
	};
}

function handleInput(event) {
	console.log("Searching for:", event.target.value);
}

const debouncedInput = debounce(handleInput, 300);

document.getElementById("searchBox").addEventListener("input", debouncedInput);
```

---

## 13. Structure of redux

-- kerinfotech: 2:14

---

## 14. What is reducer in redux

-- kerinfotech: 2:14

---

## 15. commonjs vs es modules

- CommonJS (CJS)

  - Used mainly in Node.js (older standard)
  - Uses `require()` to import and `module.exports` to export
  - synchronous

- ES Modules (ESM)
  - Modern JS module system (ES6+)
  - Uses import/export syntax
  - Supported in browsers & Node.js (with .mjs or "type": "module")
  - asynchronous

## 16. Execution Differs: Synchronous vs Asynchronous

- CommonJS — Synchronous

  - Modules are loaded immediately and fully executed using require().
  - Blocking behavior — it waits until the module is loaded before moving to the next line.

  ```js
  const greet = require("./greet"); // <- waits here until loaded
  console.log("After require"); // runs after greet.js is fully loaded
  ```

- ✅ ES Modules — Asynchronous (Non-blocking)

  - import is hoisted and asynchronous under the hood.
  - It allows things like top-level await and deferred execution.
  - Modules are loaded in the background during parsing.

  ```js
  import { greet } from "./greet.js"; // loaded asynchronously
  console.log("After import"); // this may run before the module is fully loaded
  ```

---

## 17. 10 major features came in es6 module

1. **Import / Export Syntax**  
   Clean way to import/export functions, objects, variables.

2. **Named Exports**  
   Export multiple named values from a module.

3. **Default Exports**  
   Export a single default value per module.

4. **Arrow Functions**  
   Shorter syntax for writing functions and lexically binds `this`.

5. **let and const**  
   Block-scoped variable declarations replacing var with more predictable scoping.

6. **Template Literals**  
   Multi-line strings and string interpolation with backticks

7. **Default Parameters**  
   Functions can have default values for parameters.

8. **Destructuring Assignment**  
   Extract values from arrays or objects into variables easily.

9. **Rest and Spread Operators**  
   ... syntax to collect multiple elements into an array or spread elements out.

10. **Classes**  
    Syntactic sugar for constructor functions and prototype inheritance.

11. **Promises**  
    Built-in support for asynchronous operations and cleaner handling of async code.

12. **Enhanced Object Literals**  
     Simplified syntax for defining properties and methods.
    ```js
    const obj = {
    	name: name,
    	greet: function () {
    		console.log("Hello, my name is " + this.name);
    	},
    	name, // same as name: name
    	greet() {
    		// method shorthand
    		console.log(`Hello, my name is ${this.name}`);
    	},
    };
    ```

---

## 18. If we have Promises, why do we still need async/await?

- Makes code **look synchronous** — easier to read and write
- Helps avoid **callback chaining** and `.then().catch()` nesting
- Cleaner error handling using `try/catch`

---

## 19. output of 2 loop with setTimeout, one with var and other with let, reason

- 🔹 var

  - var is function-scoped, not block-scoped.
  - All iterations share the same i, which ends up being 3 after the loop.
  - By the time setTimeout runs, i is already 3.

- 🔹 let
  - let is block-scoped.
  - JavaScript creates a new copy of i for every loop cycle.
  - For each loop iteration, JavaScript creates a new block scope.
  - The setTimeout function is created inside that scope, and it remembers ( the value of i from that iteration. because of closures.
  ```js
  {
  	let i = 2;
  	setTimeout(() => console.log(i), 1000);
  }
  ```

## 20. JavaScript Scopes: Global vs Function vs Block

### Global Scope

- Variables declared **outside** any function or block.
- Accessible **anywhere** in the code.

### Function Scope

- Variables declared with var inside a function.
- Accessible only inside that function.

### Block Scope

- Variables declared with let or const inside {} (if, for, etc.)
- Accessible only within that block

---

## 21. let vs const vs var

| Feature                       | `var`                | `let`      | `const`        |
| ----------------------------- | -------------------- | ---------- | -------------- |
| Scope                         | Function             | Block      | Block          |
| Hoisted                       | Yes (as `undefined`) | Yes (TDZ)  | Yes (TDZ)      |
| Re-declaration                | ✅ Allowed           | ❌ Error   | ❌ Error       |
| Re-assignment                 | ✅ Allowed           | ✅ Allowed | ❌ Not allowed |
| Attached to `window` (global) | ✅ Yes               | ❌ No      | ❌ No          |

---

## 22. can i create server without express

- Yes — you can create a server without Express using pure Node.js!

  - Express is just a wrapper built on top of Node’s native http module to make things easier. But Node itself can handle HTTP requests directly.

  ```js
  const http = require("http");

  const server = http.createServer((req, res) => {
  	if (req.url === "/") {
  		res.write("Hello from pure Node.js server!");
  	} else {
  		res.writeHead(404);
  		res.write("Page not found");
  	}
  	res.end();
  });

  server.listen(3000, () => {
  	console.log("Server running at http://localhost:3000");
  });
  ```

---

## 23. What is middleware

- kerinfotech

- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

- Middleware functions can perform the following tasks:
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

---

## 24. What is aggregation and aggregation pipeline

- Aggregation is a way to **process and transform data** in MongoDB.
  - Similar to SQL's `GROUP BY`, `JOIN`, `SUM`, etc.
  - Used to **analyze**, **filter**, **group**, or **combine** documents.
- A pipeline is a **sequence of `stages`** that process data **step-by-step**.
  - Each stage transforms the data and passes it to the next.

### Common Stages:

- `$match` → Filter documents (like `WHERE`)
- `$group` → Group data (like `GROUP BY`)
- `$sort` → Sort results
- `$project` → Select specific fields
- `$limit` / `$skip` → Pagination

```js
db.orders.aggregate([
	{
		$match: { year: 2023 },
	},
	{
		$group: {
			_id: "$customerName",
			totalSpent: { $sum: "$orderAmount" },
			ordersCount: { $sum: 1 },
		},
	},
	// Sort by totalSpent (highest first)
	{
		$sort: { totalSpent: -1 },
	},
	{
		$skip: 5,
	},
	{
		$limit: 5,
	},
	{
		$project: {
			_id: 0,
			customer: "$_id",
			totalSpent: 1,
			ordersCount: 1,
		},
	},
]);
```

---

## 25. how to handle one to many relationship in mongodb

- A single document is related to multiple documents.

  - `Embedded`: When the "many" documents are few and tightly coupled.

  ```js
   { name: "User", posts: [ { title: "Post1" }, { title: "Post2" } ] }
  ```

  - `Referenced`: When the "many" documents are many, large, or independent.

  ```js
   // UserD
   { _id: 1, name: "User" }
   // Posts
   { title: "Post1", user_id: 1 }
  ```

---

## 26. write aggregation query to join 2 collection

- You have two collections:

  - 🧾 `orders` collection:

  ```js
  {
    _id: 1,
    customerId: 101,
    amount: 500
  }
  ```

  - 🧾 `customers` collection:

  ```js
  {
    _id: 101,
    name: "Meet Shah",
    email: "meet@example.com"
  }
  ```

- 🔍 Aggregation Query to Join orders with customers:

```js
db.orders.aggregate([
	{
		$lookup: {
			from: "customers", // 👈 Collection to join
			localField: "customerId", // 👈 Field in 'orders'
			foreignField: "_id", // 👈 Field in 'customers'
			as: "customerDetails", // 👈 Output array field
		},
	},
]);
```

---

## 27. What is populate

- populate is a `Mongoose method` that simplifies the `process of referencing` documents from different collections.
- Makes querying related data easier without writing manual $lookup or multiple queries.
- It automatically replaces the referenced document IDs with the actual documents.

```javacript
Post.find().populate('author').then(posts => {
  console.log(posts);
});
```

---

## 28. findOne and find

- findOne

  - Returns a single document that matches the query
  - If multiple documents match, it returns the first one found
  - Returns null if no match

- find
  - Returns a cursor or array of documents matching the query
  - Can return multiple documents
  - Returns empty array or empty cursor if no match

---

## 29. User.findById vs db.collection('users').findById

- User.findById

  - Mongoose method
  - Finds a user by ID with schema validation
  - Returns a Mongoose document with extra features (like .populate())
  - Easier to use with Node.js apps using Mongoose

- db.collection('users').findById
  - Native MongoDB driver method
  - Directly accesses the users collection
  - Returns plain JavaScript objects (no validation or extras)
  - More control but less convenience

---

## 30. MongoDB vs Mongoose

### 🍃 MongoDB

- A **NoSQL database**
- Stores data in **JSON-like documents**
- Provides native **CRUD operations**
- Querying is done using the **MongoDB query language**
- Can be used with or without Mongoose

```js
// Native MongoDB query
db.users.find({ age: { $gt: 18 } });
```

### 📦 Mongoose

- An ODM (Object Data Modeling) library for Node.js
- Works on top of MongoDB
- Provides:
  - Schema-based modeling
  - Validation
  - Middleware
  - Virtuals & population (joins)
- Simplifies working with MongoDB in Node.js apps

```js
// Mongoose model + query
const User = mongoose.model("User", userSchema);
User.find({ age: { $gt: 18 } });
```

---

## 31. What is event loops

- js qna 13

---

## 32. How to secure your node js application

### ✅ 1. Environment Variables

- Store secrets (DB URI, JWT keys) in `.env`
- Never hardcode credentials

### ✅ 2. Secure HTTP Headers

- Use `helmet` middleware
- Sets security-related HTTP headers

### ✅ 3. Error Handling

- Never expose full error stack traces to clients
- Log errors securely (e.g., Winston, Sentry)

### kerinfotech 3:10

---

## 33. How to optimize api in node and mongodb

### 1️⃣ Node.js Optimization

#### ✅ Use Asynchronous Code

- Use `async/await` and non-blocking I/O
- Avoid blocking operations (e.g., heavy loops, sync file access)

#### ✅ Use Pagination

- Limit data returned with `limit` and `skip` instead of sending all records

#### ✅ Enable GZIP Compression

- Use `compression` middleware to reduce response size

#### ✅ Use Caching

- Cache frequent API responses using Redis or memory (e.g., NodeCache)

#### ✅ Avoid Unnecessary Work

- Only parse/process what's needed per request

#### ✅ Use Clustering

- Use `cluster` module to utilize all CPU cores

---

### 2️⃣ MongoDB Optimization

#### ✅ Use Indexes

- Create indexes on fields used in `find`, `sort`, `match`, etc.
- Check performance with `.explain()`

#### ✅ Project Only Needed Fields

- Use `.select()` or `$project` to fetch only required data

#### ✅ Limit & Paginate Results

- Avoid returning large datasets in one go
- Use `limit`, `skip`, or cursor-based pagination

#### ✅ Optimize Aggregation Pipeline

- Use `$match` early in the pipeline
- Use `$project` to remove unused fields

#### ✅ Avoid N+1 Queries

- Use `$lookup` or `.populate()` smartly (not in loops)

---

## 34. how to join collection with populate and aggregation

- check above

---

## 35. How to do error handling in node js

### ✅ 1. Try-Catch (for async/await)

```js
app.get("/user", async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.json(user);
	} catch (err) {
		res.status(500).json({ message: "Server Error" });
	}
});
```

### ✅ 2. Express Error-Handling Middleware

```js
// Error handler middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: "Something went wrong!" });
});
```

### ✅ 3. asyncHandler Utility

```js
const asyncHandler = (reqHandler) => {
	return (req, res, next) => {
		Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
	};
};
```

---

## 36. How to make global error handling middleware

```js
const errorHandler = (err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";

	res.status(statusCode).json({
		success: false,
		message,
		stack: process.env.NODE_ENV === "development" ? err.stack : "🚫",
	});
};

app.use(errorHandler);
```

---

## 37. Which third party you use prisma, sequilize

---
