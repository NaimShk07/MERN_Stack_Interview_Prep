# 📘 MongoDB Interview-Crucial Operators — Query + Aggregation

This cheat sheet covers the **18 most important and commonly asked MongoDB operators** for interviews and real-world practice. Based on realistic data in collections like `users`, `products`, `orders`, `posts`.

---

## 🔍 Query Operators (Filtering Data)

### 1. `$eq` — Equal To

```js
db.products.find({ price: { $eq: 19.99 } });
```

### 2. `$ne` — Not Equal To

```js
db.orders.find({ status: { $ne: "cancelled" } });
```

### 3. `$gt`, `$gte` — Greater Than / Greater Than or Equal

```js
db.users.find({ age: { $gt: 30 } });
db.products.find({ price: { $gte: 50 } });
```

### 4. `$lt`, `$lte` — Less Than / Less Than or Equal

```js
db.products.find({ price: { $lte: 20 } });
```

### 5. `$in` — Match Any Value in Array

```js
db.products.find({ category: { $in: ["kitchen", "travel"] } });
```

### 6. `$nin` — Not in Array

```js
db.users.find({ "address.state": { $nin: ["CA", "OR"] } });
```

### 7. `$and`, `$or` — Logical Combinations

```js
db.users.find({
	$and: [{ active: true }, { age: { $gte: 30 } }],
});

db.products.find({
	$or: [{ category: "kitchen" }, { price: { $lt: 20 } }],
});
```

### 8. `$exists` — Field Exists or Not

```js
db.users.find({ referrals: { $exists: true } });
```

### 9. `$elemMatch` — Match on Array of Objects

```js
db.products.find({
	variants: {
		$elemMatch: { stock: { $lt: 10 } },
	},
});
```

### 10. `$regex` — Pattern Match (Like SQL LIKE)

```js
db.products.find({ price: { $eq: 19.99 } });
```

## 📊 Aggregation Pipeline Operators

### 11. `$match` — Filter Stage

```js
db.orders.aggregate([{ $match: { total: { $gt: 50 } } }]);
```

### 12. `$project` — Select or Compute Fields

```js
db.users.aggregate([
	{
		$project: {
			name: 1,
			email: 1,
			yearJoined: { $year: "$createdAt" },
		},
	},
]);
```

### 13. `$group` — Aggregate by Field(s)

```js
db.orders.aggregate([
	{
		$group: {
			_id: "$userId",
			totalSpent: { $sum: "$total" },
			orders: { $sum: 1 },
		},
	},
]);
```

### 14. `$sort` and `$limit` — Order + Pagination

```js
db.products.aggregate([{ $sort: { rating: -1 } }, { $limit: 3 }]);
```

### 15. `$unwind` — Flatten Array Fields

```js
db.orders.aggregate([
	{ $unwind: "$items" },
	{
		$project: {
			productId: "$items.productId",
			qty: "$items.qty",
		},
	},
]);
```

### 16. `$lookup` — Join Collections (like SQL JOIN)

```js
db.orders.aggregate([
	{
		$lookup: {
			from: "users",
			localField: "userId",
			foreignField: "_id",
			as: "user",
		},
	},
	{ $unwind: "$user" },
	{
		$project: {
			total: 1,
			"user.email": 1,
		},
	},
]);
```

### 17. `$addFields` — Add/Compute Extra Fields

```js
db.orders.aggregate([
	{
		$addFields: {
			year: { $year: "$createdAt" },
		},
	},
]);
```

### 18. `$count` — Count Documents

```js
db.orders.aggregate([
	{ $match: { status: "shipped" } },
	{ $count: "shippedOrders" },
]);
```

## 🧠 Bonus: Advanced Operators for Deeper Interviews

### `$facet` — Run Multiple Pipelines

```js
db.orders.aggregate([
	{
		$facet: {
			total: [{ $count: "count" }],
			byStatus: [{ $group: { _id: "$status", count: { $sum: 1 } } }],
		},
	},
]);
```

### `$replaceRoot` — Replace Document with Subdocument

```js
db.posts.aggregate([
	{ $unwind: "$comments" },
	{ $replaceRoot: { newRoot: "$comments" } },
]);
```
