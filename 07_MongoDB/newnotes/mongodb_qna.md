# MongoDB Interview Questions

[mongoDB](https://www.youtube.com/playlist?list=PLA3GkZPtsafZydhN4nP0h7hw7PQuLsBv1)

## Basics

#### 1. What is MongoDB and Why is it Used?

**MongoDB** is a **NoSQL, document-oriented database** that stores data in **JSON-like (BSON)** format.

📌 **Key Points:**

- Schema-less — flexible document structure
- Stores data in **collections** instead of tables
- Scales easily with **horizontal scaling (sharding)**
- Ideal for handling **large, unstructured, or rapidly changing data**

✅ **Used For:**  
Real-time analytics, content management, IoT apps, and high-volume data storage.

---

#### 2. When Would You Use MongoDB Over a Relational Database?

Use **MongoDB** when:

- Data is **unstructured or semi-structured**
- Schema changes frequently
- You need **high write performance** and **horizontal scalability**
- You’re building **JSON-based APIs** or **microservices**

Avoid MongoDB when:

- You require **complex transactions** or **strong ACID guarantees**

---

#### 3. What are the Pros and Cons of Using MongoDB?

**✅ Advantages**

- Schema-less and highly flexible
- Fast read/write performance
- Easy horizontal scaling
- JSON-style document storage (developer-friendly)
- Built-in replication and sharding

**⚠️ Disadvantages**

- Limited support for multi-document transactions (improved in newer versions)
- Higher memory usage
- Not ideal for complex joins or relational data

---

#### 4. What is the Difference Between SQL and NoSQL?

| Feature        | SQL (Relational)            | NoSQL (MongoDB)                   |
| -------------- | --------------------------- | --------------------------------- |
| Type           | Relational (table-based)    | NoSQL (document-based)            |
| Data Structure | Tables with rows & columns  | Collections with JSON documents   |
| Schema         | Fixed schema                | Dynamic schema                    |
| Query Language | SQL                         | MQL (MongoDB Query Language)      |
| Transactions   | Strong ACID compliance      | Eventual consistency (by default) |
| Scalability    | Vertical scaling            | Horizontal scaling (sharding)     |
| Use Case       | Structured, relational data | Flexible, unstructured data       |

---

#### 5. How Does MongoDB Differ from SQL Databases?

- MongoDB uses **collections & documents**; SQL uses **tables & rows**
- No need for predefined schema in MongoDB
- Supports **embedded/nested data** instead of joins
- Scales horizontally using **sharding**
- Optimized for **speed, flexibility, and developer agility**

✅ **In short:**  
MongoDB trades strict schema and complex joins for **scalability, flexibility, and speed** — ideal for modern, data-driven applications.

### 6 What is the current version of MongoDB?

The current major stable release of MongoDB is MongoDB `8.0`, released in October `2024`.

## Core Concepts

### 6. What is a collection in MongoDB?

### 7. What is a document in MongoDB?

### 8. What is a schema in MongoDB?

### 9. What is a model in MongoDB (Mongoose)?

### 10. What is an ObjectId in MongoDB?

## CRUD Operations

### 11. What is the difference between `insertOne()` and `insertMany()`?

### 12. What is the difference between `findOne()` and `find()`?

`find` and `findOne` are MongoDB methods used to query documents, but they return different types.

- findOne

  - Returns a `single document` that matches the query
  - If multiple documents match, it returns the first one found
  - Returns `null` if no match

- find
  - Returns a `cursor` or `array` of documents matching the query
  - Can return multiple documents
  - Returns `empty array` or `empty cursor` if no match

#### 🔤 Example

```js
// find returns a cursor (array after toArray())
const cursor = db.users.find({ age: 25 });
const users = await cursor.toArray(); // Array of documents

// findOne returns a single document
const user = await db.users.findOne({ age: 25 });
```

### 13. What is the difference between `updateOne()` and `replaceOne()`?

### 14. What precautions should you take before using `deleteMany()`?

### 15. What are the advantages of using `insertMany()`?

## Indexing & Performance

### 16. What is indexing in MongoDB?

### 17. How do indexes affect read performance?

### 18. How do you optimize MongoDB queries?

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

## Aggregation & Joins

### 19. What is the aggregation pipeline in MongoDB? Explain with an example.

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

### 20. What is the difference between `aggregate()` and `find()`?

**Find** and **Aggregation** are MongoDB queries used to retrieve data, but with different purposes and capabilities.

---

### 📌 Key Differences

- 🔍 **Find**: Retrieves documents matching simple filter criteria
- 🧩 **Aggregation**: Performs complex data processing and transformations (grouping, sorting, computing)

---

### 🔤 Example

```js
// Find query - get all users aged 25
db.users.find({ age: 25 });

// Aggregation query - group users by age and count
db.users.aggregate([{ $group: { _id: "$age", count: { $sum: 1 } } }]);
```

---

### 📊 Comparison Table

| Feature              | Find Query                | Aggregation Query                         |
| -------------------- | ------------------------- | ----------------------------------------- |
| Use case             | Simple data retrieval     | Complex data transformations              |
| Operations supported | Filtering, projection     | Grouping, sorting, calculating, reshaping |
| Performance          | Faster for simple queries | Can be slower, more powerful              |
| Output               | Documents                 | Transformed documents or computed results |

---

### ✅ Key Points

- Use **find** for basic queries with filters
- Use **aggregation** for reports, analytics, and complex data operations
- Aggregation pipeline supports multiple stages for flexible data processing

### 21. What is the difference between `$lookup` and SQL joins?

### 22. What is projection in MongoDB?

## Data Modeling

### 23. What is the difference between embedding and referencing documents?

### 24. How do you decide when to embed or reference?

- `Embedded`: When the "many" documents are few and tightly coupled.
- `Referenced`: When the "many" documents are many, large, or independent.

## Transactions & Consistency

### 25. Does MongoDB support transactions?

### 26. How does MongoDB handle transactions?

### 27. What does atomic mean in the context of MongoDB?

### 28. What is ACID compliance? Does MongoDB support it?

## Advanced Mongoose Concepts

### 29. What is the difference between `UserSchema.methods` and `UserSchema.statics`?

### 30. What is `populate` in MongoDB (Mongoose)?

**`populate`** is a Mongoose method used to **replace references (ObjectIds) with actual documents** from related collections.

---

### 🔗 Why use `populate`?

- MongoDB stores references between documents as ObjectIds
- `populate` fetches and injects the related documents automatically
- Makes querying related data simpler and cleaner

---

### 🧪 Example:

#### Schemas:

```js
const userSchema = new mongoose.Schema({
	name: String,
});

const postSchema = new mongoose.Schema({
	title: String,
	author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
```

#### Using `populate`:

```js
Post.find()
	.populate("author") // replaces author ObjectId with User document
	.then((posts) => {
		console.log(posts);
	});
```

---

### ✅ Key Points

- `populate` works only in Mongoose (Node.js ODM), not raw MongoDB
- Can populate multiple fields or nested documents
- Useful for handling relationships without manual joins

### 30.1 What is the difference between `populate()` and `$lookup` in MongoDB?

Both **`populate()`** and **`$lookup`** are used to perform **joins** between collections, but they work at different levels — one in **Mongoose** (application layer) and the other in **MongoDB** (database layer).

---

#### 📌 `populate()` (Mongoose)

- A **Mongoose feature** used after defining relationships with `ref` in schemas
- Performs a **separate query** behind the scenes to fetch related documents
- Easier to use but slightly slower for large datasets

```js
// user.model.js
const userSchema = new mongoose.Schema({
	name: String,
	posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

// Query
User.find().populate("posts").exec();
```

✅ Best For: Simpler relationships and when using Mongoose ORM.

#### 📌 $lookup (MongoDB Aggregation)

- A MongoDB aggregation operator used for joining collections at the database level
- Executes in a single aggregation pipeline — more efficient for complex queries
- Works directly in MongoDB, not dependent on Mongoose

🧪 Example:

```js
db.users.aggregate([
	{
		$lookup: {
			from: "posts",
			localField: "_id",
			foreignField: "userId",
			as: "posts",
		},
	},
	{
		$match: { "postInfo.0": { $exists: true } }, // filters out unmatched
	},
]);
```

✅ Best For: Large datasets, complex joins, or when working directly with MongoDB.

#### ⚖️ Summary

| Aspect      | `populate()` (Mongoose)          | `$lookup` (MongoDB)             |
| ----------- | -------------------------------- | ------------------------------- |
| Level       | Application (Mongoose ORM)       | Database (MongoDB Aggregation)  |
| Performance | Separate query per relation      | Single aggregation pipeline     |
| Use Case    | Simple references, quick lookups | Complex joins, heavy data loads |
| Flexibility | Easier to implement              | More control, but more verbose  |

> Use populate() for quick, simple relationships in Mongoose apps — use $lookup for efficient, complex joins directly in MongoDB.

### 31. how to handle one to many relationship in mongodb

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

### 32. MongoDB vs Mongoose

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

### 32. What is Binary JSON (BSON)?

📌 **Definition:**  
BSON (**Binary JSON**) is a **`binary-encoded` serialization** of JSON-like documents.  
It is primarily used by **MongoDB** to `store and transfer` data efficiently.

BSON stands for Binary JSON. It’s a `binary-encoded` format used by MongoDB to store documents more efficiently than plain JSON. Unlike JSON, BSON supports additional data types like Date, Binary, and ObjectId, and it’s faster for reading and writing due to its binary nature.

---

### ⚡ Key Points

1. **Binary format** – Faster to parse and smaller in size than plain JSON.
2. **Supports additional data types** – e.g., `Date`, `Binary`, `ObjectId` (not in standard JSON).
3. **Optimized for storage and network transfer** – Used internally by MongoDB.

---

### 🧪 Example

```js
// JSON document
const jsonDoc = { name: "Naim", age: 25, createdAt: new Date() };

// Stored as BSON in MongoDB
// Binary format includes types for each field for efficient storage
```

> In short: BSON = binary version of JSON with extra data types, used for efficiency in MongoDB.

---

### 33. What is Sharding in MongoDB?

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

### 34. Scaling in MongoDB

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

### 35. What is `upsert: true` in MongoDB?

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

### 36. asdf

### 32. asdf

### 32. asdf

### 32. asdf

### 32. asdf

### 32. asdf

### 32. asdf

### 32. asdf

### 32. asdf

### 32. asdf

### 32. asdf

### 32. asdf

### 32. asdf
