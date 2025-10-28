# 📊 MongoDB Aggregation Pipeline – Cheat Sheet & Interview Notes

---

## 🔹 What Is Aggregation?

Aggregation is used for advanced data processing like:

- Filtering
- Grouping
- Sorting
- Joining
- Reshaping documents

Think of it as MongoDB’s version of SQL’s `GROUP BY`, `JOIN`, `ORDER BY`, etc.

---

## 🔹 Syntax

```
db.collection.aggregate([
  { stage1 },
  { stage2 },
  ...
])
```

## 🔧 Common Aggregation Stages

| Stage        | Description                                     |
| ------------ | ----------------------------------------------- |
| `$match`     | Filter documents (like `find`)                  |
| `$group`     | Group by a field and calculate aggregate values |
| `$project`   | Include/exclude/rename fields                   |
| `$sort`      | Sort documents                                  |
| `$limit`     | Limit number of results                         |
| `$skip`      | Skip number of results                          |
| `$count`     | Count number of documents                       |
| `$lookup`    | Join with another collection                    |
| `$unwind`    | Deconstruct arrays into multiple documents      |
| `$addFields` | Add or modify fields in output                  |

## 📘 Must-Know Aggregation Examples

### 1. 🧮 Total Order Amount by Customer

- $ = field
- \_id: null, // to make all at one

```
db.orders.aggregate([
  {
    $group: {
      _id: "$customerId",
      totalSpent: { $sum: "$amount" }
      users: {
					$push: "$$ROOT",
			},
    }
  }
])
```

### 2. 🔎 Filter + Group + Sort

```
db.orders.aggregate([
  { $match: { status: "completed" } },
  {
    $group: {
      _id: "$customerId",
      total: { $sum: "$amount" }
    }
  },
  { $sort: { total: -1 } }
])
```

### 3. 🧾 Project Specific Fields

```
db.users.aggregate([
  {
    $project: {
      name: 1,
      email: 1,
      _id: 0
    }
  }
])
```

### 4. 🔗 Join Collections with $lookup

```
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userInfo"
    }
  }
])
```

### 5. 🎯 Unwind Array Field

```
db.products.aggregate([
  { $unwind: "$tags" },
  {
    $group: {
      _id: "$tags",
      count: { $sum: 1 }
    }
  }
])
```

## 🧠 Interview Tips

- Start with $match early to filter before processing.
- Use $group for aggregation: $sum, $avg, $min, $max, etc.
- $lookup is powerful but expensive — use with care.
- Understand pipelines with multiple stages — often asked in interviews.
- Know how to transform and reshape documents using $project and $addFields.

## Real-World Use Cases

| Use Case                | Pipeline Pattern                       |
| ----------------------- | -------------------------------------- |
| Monthly sales report    | `$match` → `$group` → `$sort`          |
| Dashboard metrics       | `$group` + `$project`                  |
| Product tag analysis    | `$unwind` + `$group`                   |
| User purchase history   | `$lookup` between `orders` and `users` |
| Filtering nested arrays | `$unwind` + `$match`                   |
