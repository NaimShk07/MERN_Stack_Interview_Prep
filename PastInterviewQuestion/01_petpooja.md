## 1. On which column should we add indexing?

- We should add indexing on columns used frequently in `WHERE`, `JOIN`, `ORDER BY`, or `GROUP BY` clauses.
- **Note:** Primary keys, foreign key and unique keys are automatically indexed.

## 2. Datatypes in SQL and Their Differences

| Data Type      | Description                                | Use Case                            |
| -------------- | ------------------------------------------ | ----------------------------------- |
| `INT`          | Whole numbers                              | IDs, counters, quantities           |
| `VARCHAR(n)`   | Variable-length string (up to `n` chars)   | Names, emails, descriptions         |
| `CHAR(n)`      | Fixed-length string (exactly `n` chars)    | Country codes, status codes         |
| `TEXT`         | Large variable-length text                 | Comments, articles, long content    |
| `DATE`         | Stores date (YYYY-MM-DD)                   | Birthdays, registration date        |
| `TIME`         | Stores time (HH:MM:SS)                     | Time of day fields                  |
| `DATETIME`     | Stores date and time                       | Timestamps for created/updated data |
| `TIMESTAMP`    | Date and time, often auto-updated          | Tracking changes                    |
| `BOOLEAN`      | True/false (often stored as 1/0)           | Flags like is_active, is_deleted    |
| `FLOAT`        | Approximate decimal numbers (binary float) | Scientific data, measurements       |
| `DECIMAL(p,s)` | Exact decimal numbers (precision, scale)   | Prices, financial calculations      |

## 3. VARCHAR vs CHAR

Both `CHAR` and `VARCHAR` are used to store **string data**, but they differ in **storage, performance, and usage**.

---

📌 **1. CHAR**

- **Fixed-length**: Always uses the same space, regardless of actual string size.
- **Faster** for retrieval since data length is constant.
- **Trailing spaces** are automatically removed.
- Ideal for **fixed-size data** like country codes (`'US'`, `'IN'`), PINs, or flags.

```sql
CHAR(10)  -- always reserves 10 bytes
```

🧩 **Example:**

| Value          | Stored Size                   |
| -------------- | ----------------------------- |
| `'ABC'`        | 10 bytes (padded with spaces) |
| `'ABCDEFGHIJ'` | 10 bytes                      |

📌 **2. VARCHAR**

- Variable-length: Stores only the actual string length + 1 or 2 bytes for length info.
- More space-efficient for varying text lengths.
- Slightly slower in updates due to length recalculation.
- Ideal for names, emails, or descriptions with unpredictable length.

```sql
VARCHAR(100) -- stores actual size + 1 or 2 bytes overhead
```

🧩 Example:

| Value          | Stored Size                |
| -------------- | -------------------------- |
| `'ABC'`        | 4 bytes (3 + 1 overhead)   |
| `'ABCDEFGHIJ'` | 11 bytes (10 + 1 overhead) |

📊 **Key Differences**

| Feature          | CHAR                  | VARCHAR                       |
| ---------------- | --------------------- | ----------------------------- |
| Storage Type     | Fixed length          | Variable length               |
| Performance      | Faster for fixed data | Better for variable data      |
| Space Usage      | May waste space       | Space efficient               |
| Trailing Spaces  | Removed automatically | Preserved                     |
| Typical Use Case | Codes, flags, IDs     | Names, descriptions, comments |

## 4. HAVING vs WHERE (and which column HAVING works on)

- `WHERE`: Filters rows **before** grouping.
- `HAVING`: Filters **after** grouping; works on **aggregated columns**.

## 5. LONGTEXT vs TEXT

- `TEXT`: Can store up to **65,535 characters (64 KB)** of text data.  
  Suitable for medium-sized content like comments or descriptions.

- `LONGTEXT`: Can store up to **4,294,967,295 characters (4 GB)** of text data.  
  Used for very large content like articles, logs, or documents.

📌 **Key Differences:**

- `LONGTEXT` supports **much larger data** than `TEXT`.
- Both are stored **outside the table row** (with pointers), unlike `VARCHAR`.
- Neither can have a **default value** in MySQL.

💬 **Tip:**

> Use `TEXT` for normal-length text and `LONGTEXT` for very large or unbounded text fields.

## 5. How to optimize timing in Express Node API

[click](../06_Node_Express/newnotes/optimize.md)

## 6. How to secure your protected route/API

[click](../06_Node_Express/newnotes/optimize.md#L82)

## 7. React.memo, useCallback, useMemo

- `React.memo`: Prevents re-rendering of **functional components** unless props change.
- `useCallback`: Memoizes **functions** to avoid unnecessary re-creations. use dependency []
- `useMemo`: Memoizes **values** to avoid recalculations.

## 8. INNER JOIN vs LEFT JOIN; behavior with NULL

- `INNER JOIN`: Returns only matching rows.
- `LEFT JOIN`: Returns **all rows from the left table** (e.g., if the left table has 5 rows, the result will have 5 rows),  
  and fills **NULL** in right table columns **where no match is found**.
- `RIGTH JOIN`: Returns **all rows from the right table** (e.g., if the right table has 5 rows, the result will have 5 rows),  
  and fills **NULL** in left table columns **where no match is found**.

If table2 has nulls and using INNER JOIN, those rows won’t be returned.

---

## 9. WHERE query starts with 'shi'

```sql
SELECT * FROM table WHERE column LIKE 'shi%';
```

---

## 10. MongoDB vs MySQL: Differences

[click](../07_MongoDB/newnotes/mongodb_qna.md#L54)

## 11. Primary vs Foreign vs Unique Key

- Primary Key: Uniquely identifies each row, no nulls.
- Foreign Key: References primary key in another table.
- Unique Key: Ensures uniqueness, allows one null (DB dependent).

---

## 12. arr[10] = 20, what is its length?

```javascript
let arr = [];
arr[10] = 20;
console.log(arr.length); // Output: 11
```

---

## 13. Do you have any questions for us?

- What technologies does the team work with day-to-day?
- What kind of `opportunities` are there for `developers` to `learn new technologies` or expand their skill set here?
- do the new or existing developer get training
- How does the company support career growth — for example, moving into senior or full-stack roles over time?

---

## 14. What are Hooks in React?

- Hooks are functions that let you use React features (like state and lifecycle methods) inside functional components.
- Examples: useState, useEffect, useMemo, useCallback.

---

## 15. deep copy vs shallow copy

## [click](./MostImp.md#L59)

## 16. local storage vs session storage

[click](../03_JavaScript/notes/javascript_qna.md#L396)

---

## 17. cors

- CORS (Cross-Origin Resource Sharing) is a browser mechanism that controls access to resources from different origins.
