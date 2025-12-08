## 1. What is the Event Loop in JavaScript and Node.js, and how does it work?

[click](../06_Node_Express/newnotes/architecture.md#L3)

## 2. What is libuv, and how does it support Node.js's asynchronous operations?

[click](../06_Node_Express/newnotes/architecture.md#L3)

## 3. What is the difference between a Vanilla JavaScript application and a React application?

A **Vanilla JavaScript app** uses plain JS, HTML, and DOM APIs, while a **React app** uses a component-based library to build UI efficiently with virtual DOM.

### 📌 Key Differences

- **DOM Handling**

  - Vanilla JS: Direct DOM manipulation (`document.querySelector`, etc.)
  - React: Uses **Virtual DOM** → faster updates ⚡

- **Structure**

  - Vanilla JS: No predefined structure; you build everything manually
  - React: **Component-based architecture** → reusable UI pieces

- **State Management**

  - Vanilla JS: Manual state handling + DOM updates
  - React: Built-in **state**, hooks (`useState`, `useEffect`) 🧠

- **Scalability**

  - Vanilla JS: Harder to manage in large apps
  - React: Designed for large, interactive UIs

- **Tooling**
  - Vanilla JS: Minimal setup
  - React: Bundlers, JSX, dev tools, ecosystem

## 4. What are the latest features introduced in the most recent version of React?

A **few of the most recent improvements** in React (2024‑2025) that modernize how you build and deliver apps.

### 📌 Key New Features

- **`use()` API** — allows you to consume promises or context directly in render, letting React suspend rendering until data resolves.
- **More stable React Server Components (RSC)** — you can now render components on server, avoid sending unnecessary JS to clients, and improve load performance & bundle size.
- **New data‑mutation & form APIs**:
  - **“Actions”** — lets you define server‑side functions (e.g. for form submission or DB calls) that you can directly attach to components.
  - Hooks like **`useActionState`**, **`useFormStatus`** and **`useOptimistic`** — help manage asynchronous mutations, form states, and optimistic UI updates more cleanly.
- **Improved rendering & hydration strategies** — including streaming, partial hydration and smarter server‑to‑client transitions which lead to faster initial load and better performance.
- **Built‑in compiler / optimizations** — React now optimizes code more deeply under the hood, reducing need for explicit optimizations like `useMemo`, `useCallback`, or heavy manual tuning.

### ✅ Why React’s New Version Matters

- ⚡ Much faster — less JS on client, smarter rendering & hydration → better performance
- 🧑‍💻 Cleaner code — simpler data fetching, forms & server‑side logic with fewer boilerplates
- 🔄 Better SSR support — easier to build full‑stack React apps with seamless server ↔ client logic
- 📈 Scalable — modern features help maintain performance and clarity even for large, complex apps

## 5. Can you explain how React's Fiber architecture works and how it performs diffing of virtual DOM nodes?

**React Fiber** is a **reconciliation engine** introduced in `React 16` that allows React to **break rendering work into units** and prioritize updates efficiently.

### 📌 Key Points

- **Incremental Rendering:** Fiber splits rendering work into small units, allowing React to pause, resume, or abort work.
- **Prioritization:** Updates can be prioritized (e.g., user interactions > network updates).
- **Virtual DOM Diffing:** Fiber compares the **previous virtual DOM** with the **new virtual DOM** to determine minimal changes.
- **Concurrency Support:** Enables smoother animations, transitions, and better responsiveness.

### ⚡ How Diffing Works

1. **Tree Comparison:** React compares the new virtual DOM tree with the old one.
2. **Key Optimization:** Elements with `key` props are matched efficiently.
3. **Update Types:** React categorizes changes as:
   - **Placement** → Add new node
   - **Update** → Update existing node properties
   - **Deletion** → Remove node
4. **Reconciliation:** Only the changed parts of the DOM are updated, not the whole tree.

### 🧪 Example (Conceptual)

```jsx
// Old Virtual DOM
const oldVDOM = (
	<ul>
		<li key="1">A</li>
		<li key="2">B</li>
	</ul>
);

// New Virtual DOM
const newVDOM = (
	<ul>
		<li key="1">A</li>
		<li key="2">C</li>
	</ul>
);

// React Fiber diffing result:
// - Node with key "1": no change
// - Node with key "2": text updated from "B" to "C"
```

## 6. What is and what does `React.createElement` do under the hood?

## 6. React.createElement

`React.createElement` is a **core React API** that creates a **virtual DOM object** representing a React element.  
It is called internally by JSX during compilation.

### 📌 Key Points

- Converts JSX into plain JS objects (virtual DOM nodes)
- Takes **3 main arguments**:
  1. `type` → HTML tag or React component
  2. `props` → object with attributes/props
  3. `children` → nested elements or text
- The returned object is later used by **React Fiber** to render and diff efficiently

### 🧪 Example

```jsx
// JSX
const element = <h1 className="title">Hello, React!</h1>;

// Transpiled to React.createElement
const element2 = React.createElement(
	"h1",
	{ className: "title" },
	"Hello, React!"
);

console.log(element2);
/* Output:
{
  type: "h1",
  props: { className: "title", children: "Hello, React!" },
  key: null,
  ref: null
}
*/
```

### ✅ Key Points / Uses

- ⚡ JSX is just syntactic sugar for React.createElement
- 🧩 Creates lightweight virtual DOM objects instead of touching the real DOM
- 🔄 Used in rendering, diffing, and reconciliation by React Fiber

## 7. What is unwind, How does it work and how to use it in MongoDB?

`$unwind` is an **aggregation pipeline stage** in MongoDB that **deconstructs an array field from a document** into multiple documents, one per array element.

### 📌 Key Points

- Takes an array field and **creates separate documents** for each element
- Useful for **flattening arrays** for further aggregation
- Supports options like:
  - `preserveNullAndEmptyArrays: true` → keeps documents with empty/null arrays
  - `includeArrayIndex: "index"` → adds the array index to output

### 🧪 Example

```javascript
db.orders.aggregate([{ $unwind: "$items" }]);

/* Original Document:
{
  _id: 1,
  customer: "Alice",
  items: ["apple", "banana"]
}

After $unwind:
{ _id: 1, customer: "Alice", items: "apple" }
{ _id: 1, customer: "Alice", items: "banana" }
*/
```

## 8. What is group, How does it work and how to use it in MongoDB?

`$group` is an **aggregation pipeline stage** in MongoDB used to **group documents by a specified key** and perform **accumulations** like sum, average, min, max, etc.

### 📌 Key Points

- Groups documents based on `_id` (grouping key)
- Can compute **aggregates** with operators like:
  - `$sum`, `$avg`, `$min`, `$max`, `$push`, `$addToSet`
- Often combined with `$match`, `$project`, `$sort` for detailed analytics

### 🧪 Example

```javascript
db.orders.aggregate([
	{ $unwind: "$items" }, // Flatten array if needed
	{
		$group: {
			_id: "$customer", // Group by customer
			totalItems: { $sum: 1 }, // Count total items per customer
			itemsList: { $push: "$items" }, // Collect all items
		},
	},
]);

/* Sample Output:
{ _id: "Alice", totalItems: 2, itemsList: ["apple", "banana"] }
{ _id: "Bob", totalItems: 1, itemsList: ["orange"] }
*/
```

## 9. What is Replication in MongoDB, and why is it used?

**Replication** in MongoDB is the process of **duplicating data across multiple servers** to ensure **high availability and data redundancy**.

### 📌 Key Points

- Uses **Replica Sets**: a primary node + secondary nodes
- **Primary Node** → handles write operations
- **Secondary Nodes** → replicate data from primary and can serve read requests (optional)
- Automatic failover: if primary fails, a secondary can be elected as new primary
- Ensures **data durability** and **fault tolerance**

### 🧪 Example (Conceptual)

```javascript
// Connect to a replica set
const client = new MongoClient(
	"mongodb://host1,host2,host3/?replicaSet=myReplSet"
);
await client.connect();
```

## 10. What are some key optimization techniques in MongoDB?

Optimizing MongoDB ensures **faster queries, lower latency, and efficient resource usage**.

### 📌 Key Techniques

- **Indexing**

  - Create indexes on frequently queried fields (`single`, `compound`, `text`, `hashed`)
  - ⚡ Speeds up read operations and sort queries

- **Query Optimization**

  - Use **projections** to fetch only required fields
  - Avoid full collection scans; use indexes with `$match` and `$sort`

- **Aggregation Pipeline Optimization**

  - Use `$match` and `$project` **early** in the pipeline
  - Reduce the number of documents before heavy operations like `$group`

- **Sharding**

  - Horizontal scaling by distributing data across shards
  - Choose **good shard keys** for balanced distribution

- **Schema Design**

  - Embed documents for **read-heavy operations**
  - Reference documents for **write-heavy or large collections**

- **Connection Pooling & Caching**
  - Use connection pooling to reuse connections efficiently
  - Cache frequent queries in application layer or Redis

### ⚡ Example: Indexing

```javascript
// Create an index on 'username' field
db.users.createIndex({ username: 1 });

// Query uses index for faster search
db.users.find({ username: "alice" });
```

## 11. What is sharding in MongoDB, and why is it used?

[replication & sharding](https://www.youtube.com/watch?v=bSulWZtc2n8)
**Sharding** is a method of **horizontally scaling** a MongoDB database by distributing data across multiple servers or clusters called **shards**.

### 📌 Key Points

- Each shard holds a **subset of data**
- MongoDB uses a **shard key** to determine where a document is stored
- Components involved:
  - **Shards** → store the actual data
  - **Config Servers** → store metadata about the cluster
  - **Query Routers (mongos)** → route queries to the correct shard
- Supports **large datasets** and **high-throughput operations**

### 🧪 Example (Conceptual)

```javascript
// Enable sharding on a database
sh.enableSharding("myDatabase");

// Shard a collection on the 'userId' field
sh.shardCollection("myDatabase.users", { userId: 1 });
```

## 12. Can you explain the different stages of the MongoDB aggregation pipeline?

The **aggregation pipeline** processes documents step-by-step through **stages**, where each stage transforms the data.

### 📌 Common Aggregation Stages (Most Important)

- **`$match`**  
  Filters documents (like the `WHERE` clause).  
  ⚡ Best placed early for performance.

- **`$project`**  
  Selects specific fields, reshapes documents, adds computed fields.

- **`$group`**  
  Groups documents by `_id` and performs aggregations (`$sum`, `$avg`, etc.).

- **`$unwind`**  
  Deconstructs an array into multiple documents.

- **`$sort`**  
  Sorts documents (preferably after indexes or `$match`).

- **`$limit` / `$skip`**  
  Pagination and limiting output.

- **`$lookup`**  
  Performs a left outer join with another collection.

- **`$addFields`**  
  Adds new fields or modifies existing ones.

- **`$facet`**  
  Runs **multiple pipelines in parallel** and returns all results.

- **`$set` / `$unset`**  
  Add or remove fields from documents.

### 🧪 Example Pipeline

```javascript
db.orders.aggregate([
	{ $match: { status: "completed" } },
	{ $unwind: "$items" },
	{
		$group: {
			_id: "$customer",
			totalSpent: { $sum: "$items.price" },
		},
	},
	{ $sort: { totalSpent: -1 } },
]);
```
