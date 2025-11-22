## SQL JOINs – Interview Cheat Sheet

📌 **What is a JOIN?**  
A `JOIN` `combines rows` from `two or more tables` based on a related column (typically a foreign key).

---

## 🔗 Types of SQL JOINs

| JOIN Type         | Description                                                                           |
| ----------------- | ------------------------------------------------------------------------------------- |
| `INNER JOIN`      | Returns only matching rows from both tables                                           |
| `LEFT JOIN`       | Returns all rows from the left table + matched rows from the right (NULL if no match) |
| `RIGHT JOIN`      | Returns all rows from the right table + matched rows from the left (NULL if no match) |
| `FULL OUTER JOIN` | Returns all rows from both tables, with NULLs where no match exists                   |
| `CROSS JOIN`      | Returns Cartesian product (all combinations)                                          |
| `SELF JOIN`       | Table joins with itself (used in hierarchical or comparative data)                    |

---

## 🔍 SQL JOIN Comparison

| JOIN Type         | Includes Rows From  | Matching Required | NULLs Possible             |
| ----------------- | ------------------- | ----------------- | -------------------------- |
| `INNER JOIN`      | Both (only matches) | ✅ Yes            | ❌ No                      |
| `LEFT JOIN`       | Left + matches      | ❌ No             | ✅ Right side if unmatched |
| `RIGHT JOIN`      | Right + matches     | ❌ No             | ✅ Left side if unmatched  |
| `FULL OUTER JOIN` | Both (all rows)     | ❌ No             | ✅ Both sides if unmatched |
| `CROSS JOIN`      | All combinations    | ❌ No             | ❌ Not applicable          |
| `SELF JOIN`       | Same table          | Depends           | Depends on join type used  |

---

## 🔢 Visual Summary

- **INNER JOIN** → `A ∩ B` (Only matching rows)
- **LEFT JOIN** → `A ⟕ B` (All from A, matched from B)
- **RIGHT JOIN** → `A ⟖ B` (All from B, matched from A)
- **FULL OUTER JOIN** → `A ∪ B` (All from both, matched + unmatched)
- **CROSS JOIN** → `A × B` (Every combination)

---

## 💡 INNER vs OUTER JOINs

| Feature        | INNER JOIN     | OUTER JOIN (LEFT/RIGHT/FULL)       |
| -------------- | -------------- | ---------------------------------- |
| Requires Match | ✅ Yes         | ❌ No (can include unmatched rows) |
| Includes NULLs | ❌ No          | ✅ Yes                             |
| Use Case       | Strict filters | Retain all data, even if no match  |

---

## ✅ Interview Tips & Best Practices

- 🔍 **Join on indexed columns** for performance.
- 🧩 Use **table aliases** for readability (`A`, `B`, etc.).
- ⚠️ `FULL OUTER JOIN` is not supported in some databases like MySQL (workaround: `UNION` of `LEFT` and `RIGHT`).
- 🧭 Use `SELF JOIN` for:
  - Comparing rows in the same table
  - Navigating hierarchical structures (e.g., org charts)

---

## 🧠 Quick Recap

- Use `INNER JOIN` for **exact matches**
- Use `LEFT` / `RIGHT JOIN` when one table is **primary**
- Use `FULL OUTER JOIN` for **complete dataset coverage**
- Use `CROSS JOIN` for **testing or combinations**
- Use `SELF JOIN` for **self-referencing structures**

---

📎 **Example Queries:**  
[🧪 See SQL Examples →](../../code-snippets/query.sql#L251)
