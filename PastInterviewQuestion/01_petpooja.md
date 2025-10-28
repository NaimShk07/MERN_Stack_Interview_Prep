## 1. On which column should we add indexing?

- We should add indexing on columns used frequently in `WHERE`, `JOIN`, `ORDER BY`, or `GROUP BY` clauses.
- **Note:** Primary keys and unique keys are automatically indexed.

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

- `VARCHAR`: Variable-length, efficient for varying-size text.
- `CHAR`: Fixed-length, faster for fixed-size strings but may waste space.

## 4. HAVING vs WHERE (and which column HAVING works on)

- `WHERE`: Filters rows **before** grouping.
- `HAVING`: Filters **after** grouping; works on **aggregated columns**.

## 5. How to optimize timing in Express Node API

[click](../06_Node_Express/newnotes/optimize.md)

## 6. How to secure your protected route/API

[click](../06_Node_Express/newnotes/optimize.md#L82)

## 7. useMemo, React.memo, and useCallback

- `useMemo`: Memoizes **values** to avoid recalculations.
- `React.memo`: Prevents re-rendering of **functional components** unless props change.
- `useCallback`: Memoizes **functions** to avoid unnecessary re-creations.

## 8. INNER JOIN vs LEFT JOIN; behavior with NULL

- `INNER JOIN`: Returns only matching rows.
- `LEFT JOIN`: Returns all rows from the left table, with `NULL` in right-side columns if no match.

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

- "What technologies does the team work with day-to-day?"

---

## 14. What are Hooks in React?

- Hooks are functions that let you use React features (like state and lifecycle methods) inside functional components.
- Examples: useState, useEffect, useMemo, useCallback.

---

## 15. deep copy vs shallow copy

- Shallow Copy (changes) : Copies only references to nested objects.
- Deep Copy (dont changes) : Recursively copies all levels of an object.

---

## 16. local storage vs session storage

| Feature         | Local Storage          | Session Storage         |
| --------------- | ---------------------- | ----------------------- |
| Lifetime        | Until manually cleared | Until tab/window closed |
| Capacity        | \~5–10MB               | \~5MB                   |
| Accessible From | Same origin            | Same tab + origin       |

---

## 17. cors

- CORS (Cross-Origin Resource Sharing) is a browser mechanism that controls access to resources from different origins.
