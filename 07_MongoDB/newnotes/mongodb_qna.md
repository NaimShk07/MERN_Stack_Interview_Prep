# MongoDB Interview Questions

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
