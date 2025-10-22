## 📌 SQL Index – Interview Cheat Sheet

### ✅ What is an Index?

An **index** is a **database object** that **speeds up data retrieval**.  
Works like a **book index** – jumps directly to data without scanning every row.

---

### ⚙️ How It Works

- Uses structures like **B-Trees** or **Hash Tables**.
- Reduces search from **O(n)** to **O(log n)**.
- Helps queries using `WHERE`, `JOIN`, `ORDER BY`, etc.

---

### 🚀 Common Types of Indexes

| Type              | Description                                            |
| ----------------- | ------------------------------------------------------ |
| **Primary**       | Auto-created on `PRIMARY KEY`. Ensures uniqueness.     |
| **Unique**        | Prevents duplicate values in a column.                 |
| **Clustered**     | Sorts actual data rows. Only one per table.            |
| **Non-Clustered** | Separate structure pointing to data. Multiple allowed. |
| **Composite**     | On multiple columns. Useful for multi-column filters.  |
| **Full-Text**     | For searching large text fields.                       |
| **Hash**          | Fast exact-match lookup. Used in NoSQL like Redis.     |

---

### 🧪 Quick SQL Examples

```sql
-- Basic index
CREATE INDEX idx_name ON users(name);

-- Unique index
CREATE UNIQUE INDEX idx_email ON users(email);

-- Composite index
CREATE INDEX idx_name_city ON users(name, city);
```

### ⚖️ Pros & Cons

- ✅ Pros:
  - Faster SELECT queries
  - Speeds up JOINs, filtering, sorting
  - Enforces uniqueness (with Unique Index)
- ❌ Cons:
  - Slows down INSERT/UPDATE/DELETE
  - Takes extra storage
  - Too many indexes = overhead

> Indexes = Speed for Reads, Cost for Writes. Use them smartly.
