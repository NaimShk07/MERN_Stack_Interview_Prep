## 📌 SQL Index – Interview Cheat Sheet

### ✅ What is an Index?

An [**index**](https://www.youtube.com/watch?v=xXtig5uLQS4) is a **database object** that **speeds up data retrieval**. Works like a **book index** – jumps directly to data without scanning every row.

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

### ⚙️ How Indexing Works Internally

- Indexes use data structures like **B-Trees** or **Hash Tables**.
- Instead of scanning the full table, the DB uses the index to **jump directly** to the matching record.

---

#### 🧠 Example:

Without index:  
🔍 Full table scan → checks **every row**.

With index:  
📚 Uses **tree traversal** to quickly find matching rows.

---

#### ⚡ Why It's Faster:

- Reduces **search space** (e.g., O(log n) instead of O(n)).
- Only accesses relevant rows — improves **query time**, especially on large tables.

> Indexes use structures like B-Trees to reduce search time. Instead of scanning every row, the DB quickly jumps to relevant data — that’s what makes queries much faster.

### Can We Add Index to All Columns?

- Technically, **yes**, but **not recommended**.

---

### ⚠️ Why Not:

- 📉 **Write Performance Drops**  
  Every insert/update/delete must update all indexes.

- 💾 **High Storage Usage**  
  Indexes consume extra disk space.

- ⚙️ **Slower Maintenance**  
  More indexes = slower migrations and table updates.

- ❌ **May Not Improve Queries**  
  Not all columns are used in filters/sorts — indexing them is wasteful.

> We can, but we shouldn't. Indexing every column hurts write performance and storage. Only index columns used in filtering or joining.

#### ✅ Best Practice:

- Index only columns used in:
  - `WHERE`, `JOIN`, `ORDER BY`, `GROUP BY`
  - Frequently searched or filtered queries
