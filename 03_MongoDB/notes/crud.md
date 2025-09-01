# MongoDB CRUD Operations & Interview Notes

## 🔹 1. CREATE

### ➤ insertOne()

```js
db.users.insertOne({
	name: "Alice",
	age: 28,
	email: "alice@example.com",
});
```

### ➤ insertMany()

```
db.users.insertMany([
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
])
```

#### Interview Tip:

- insertMany() is more efficient for bulk inserts.
- Collections are auto-created when you insert.

## 🔹 2. READ

### ➤ find()

```
db.users.find({ age: { $gt: 25 } })
```

### ➤ findOne()

```
db.users.findOne({ name: "Alice" })
```

### ➤ Query Operators

```
{ age: { $gt: 25 } }
{ age: { $lt: 25 } }
{ age: { $gte: 25 } }
{ name: { $in: ["Alice", "Bob"] } }
{ $or: [ { age: 25 }, { age: 30 } ] }
{ $and: [ { name: "naim" }, { age: 30 } ] }
```

### ➤ Projection

```
db.users.find(
  { age: { $gt: 25 } },
  { name: 1, email: 1, _id: 0 }
)
```

### ➤ Sorting, Limiting, Skipping

```
db.users.find()
.sort({ age: -1 }) // desc
.limit(5)
.skip(2)
```

#### Interview Tip:

- Always combine filters with indexes for better performance.
- Projection helps reduce network load by limiting returned fields.

## 🔹 3. UPDATE

### ➤ updateOne()

```
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 29 } }
)
```

### ➤ updateMany()

```
db.users.updateMany(
  { age: { $lt: 25 } },
  { $inc: { age: 1 } }
)
```

### ➤ replaceOne()

```
db.users.replaceOne(
  { name: "Bob" },
  { name: "Bob", age: 40, email: "bob@example.com" }
)
```

### ➤ Update Operators

- $set: Set or update a field
- $inc: Increment a field
- $unset: Remove a field
- $push: Add to an array
- $pull: Remove from an array

#### Interview Tip:

- updateOne() is atomic for a single document.
- Use $set instead of replacing entire documents.
- Prefer updateMany() when applying bulk logic.

## 🔹 4. DELETE

### ➤ deleteOne()

```
db.users.deleteOne({ name: "Alice" })
```

### ➤ deleteMany()

```
db.users.deleteMany({ age: { $lt: 20 } })
```

#### Interview Tip:

- Always verify the filter before deleting.
- Use isDeleted: true for soft deletes in apps that require audit trails.
