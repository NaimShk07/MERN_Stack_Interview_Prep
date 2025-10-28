# 📘 Most Important SQL & Database Interview Questions (mimp.md)

---

## ✅ Core Concepts & Basics

### 1. What is a Database?

A **database** is an organized collection of data that can be easily accessed, managed, and updated electronically.

📌 **Key Points:**

- Stores data in structured format (tables, documents, key-value, etc.)
- Managed using a **Database Management System (DBMS)**

### 2. What is SQL? What does it do?

**SQL (Structured Query Language)** is a standard language used to interact with relational databases.

📌 **Key Points:**

- Used to `query`, `insert`, `update`, and `delete` data
- Helps define and manage database structure (`DDL`, `DML`, `DCL`)
- Works with RDBMS like MySQL, PostgreSQL, SQL Server

### 3. What is a Database Management System (DBMS)?

A **DBMS** is `software` that allows users to `create`, `manage`, and `interact` with `databases` efficiently.

📌 **Key Points:**

- Manages data, schema, and access control
- Supports data consistency, integrity, and security
- Examples: `MySQL`, `MongoDB`, `Oracle`, `PostgreSQL`

🧪 **Example:**
Using a DBMS like MySQL to create a database:

```sql
CREATE DATABASE Company;
```

### 4. What is a Relational Database (RDBMS)?

An **RDBMS** is a `type` of DBMS based on the relational model, where data is stored in tables with rows and columns.

📌 **Key Points**:

- Uses SQL to manage and query data
- Tables are linked via keys (primary, foreign)
- Ensures data integrity using constraints

### 5. What is a Primary Key? What is a Foreign Key?

A **Primary Key** uniquely identifies each record in a table.  
A **Foreign Key** links records between two tables using a reference to the primary key of another table.

📌 **Key Points:**

- `Primary Key` = Unique + Not NULL
- `Foreign Key` = Creates relationship between tables
- Used to maintain **data integrity**

🧪 **Example:**

```sql
-- Primary Key in Users table
CREATE TABLE Users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

-- Foreign Key in Orders table
CREATE TABLE Orders (
  order_id INT,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES Users(id)
);
```

### 6. What is Normalization? Explain the first normal form (1NF).

**Normalization** is the process of organizing data in a database to reduce redundancy and improve data integrity.

📌 **Key Points:**

- Breaks large tables into smaller, related ones
- Removes duplicate and repeating data
- Follows multiple normal forms: 1NF, 2NF, 3NF, etc.

🔹 First Normal Form (1NF)

A table is in **1NF** if:

- All columns have **atomic (indivisible)** values
- Each columns contains values of same type
- Each record is **unique** (i.e., has a primary key)
- No repeating groups of columns

🧪 **Example: Before and After 1NF**

❌ **Not in 1NF**
| ID | Name | Hobbies |
|----|--------|------------------|
| 1 | Alice | Reading, Singing |

✅ **In 1NF**
| ID | Name | Hobby |
|----|--------|-----------|
| 1 | Alice | Reading |
| 1 | Alice | Singing |

✅ **Advantages / Uses:**

- 📦 Eliminates repeating groups
- 🎯 Ensures cleaner and more efficient data storage
- 🧩 Forms the base for higher normal forms (2NF, 3NF, etc.)

### 7. What is the difference between DELETE, TRUNCATE, and DROP?

These are SQL commands used to remove data or structures from a database, but they work differently.

📌 **Key Differences:**

| Command    | Removes       | Rollback Possible         | Affects Table Structure | Speed      |
| ---------- | ------------- | ------------------------- | ----------------------- | ---------- |
| `DELETE`   | Specific rows | ✅ Yes (with transaction) | ❌ No                   | 🐢 Slower  |
| `TRUNCATE` | All rows      | ❌ No                     | ❌ No                   | ⚡ Faster  |
| `DROP`     | Entire table  | ❌ No                     | ✅ Yes (table deleted)  | ⚡ Fastest |

🧪 **Example:**

```sql
DELETE FROM Users WHERE id = 1;
TRUNCATE TABLE Users;
DROP TABLE Users;
```

### 8. What is a View ? Why do we use it?

A **[View](../../code-snippets/advanceQuery.sql#L1)** is a virtual table based on the result of a SQL query. It does not store data itself but displays data from one or more tables.

📌 **Key Points:**

- Acts like a table but is **not physically stored**
- Can simplify complex queries
- Can be used to restrict data access

✅ Advantages / Uses:

- 🔒 Restrict access to sensitive columns
- 🔁 Reuse complex queries as simple views
- 🔄 Automatically reflects changes in base tables
- 📊 Useful for reporting and abstraction

### 9. What are CRUD operations? Explain briefly.

**[CRUD](../../code-snippets/query.sql#L111)** stands for the four basic operations performed on database records: **Create, Read, Update, Delete**.

📌 **Key Points:**

- Represent the lifecycle of data
- Common across databases and APIs
- Performed using SQL commands

### 10. What are Constraints in SQL? Name some and explain.

**[Constraints](../../code-snippets/query.sql#L234)** in SQL are rules applied to table columns to enforce data integrity and consistency.

📌 **Common SQL Constraints:**

- `PRIMARY KEY` – Uniquely identifies each record
- `FOREIGN KEY` – Links records between tables
- `NOT NULL` – Ensures a column cannot have NULL values
- `UNIQUE` – Ensures all values in a column are different
- `CHECK` – Validates values based on a condition
- `DEFAULT` – Sets a default value if none is provided

---

## 📚 SQL Statements & Queries

### 1. What are the different types of SQL statements?

SQL statements are categorized based on their purpose in managing data and database structures.

📌 **Main Types of SQL Statements:**
[Click here](../statements.md)

✅ Key Points:

- 📂 Organized by function: structure, data, access, and control
- 🔄 Frequently used together in real applications

### 2. Write a basic `SELECT` query.

The [`SELECT`](../../code-snippets/query.sql#L47) statement is used to **retrieve data** from one or more tables in a database.

### 3. How do you insert data into a table? Can you insert multiple records at once?

The [`INSERT INTO` ](../../code-snippets/query.sql#L113) statement is used to **add new records** to a table.  
Yes, you can insert **multiple records** in a single query.

✅ Key Points:

- ⚡ Multiple inserts = better performance
- 🚫 Ensure values match the column order
- 🔐 Constraints (like NOT NULL) must be satisfied

### 4. What is the `ORDER BY` clause? What is the default order?

The [`ORDER BY`](../../code-snippets/query.sql#L83) clause is used to **sort the result set** of a `SELECT` query by one or more columns.

📌 **Key Points:**

- Default order is **ascending (`ASC`)**
- Use `DESC` for descending order
- Can sort by one or multiple columns

✅ Uses:

- 📊 Useful for reports, rankings, or viewing sorted data
- 🔁 Combine with LIMIT to get top/bottom records

### 5. How do you count rows in a table? Difference between `COUNT(column)` and `COUNT(*)`.

The [`COUNT()`](../../code-snippets/query.sql#L325) function is used to **count the number of rows** in a result set.

📌 Key Differences:

| Function      | Counts                             |
| ------------- | ---------------------------------- |
| COUNT(\*)     | All rows, including NULLs          |
| COUNT(column) | Only rows where column is NOT NULL |

✅ Use:

- 🔢 Get totals, non-null values, or filtered counts
- 🧪 Often used with GROUP BY, WHERE, etc.

### 6. How do you find the maximum value in a column?

Use the [`MAX()`](../../code-snippets/query.sql#L333) function to **get the highest value** in a numeric or date column.

✅ Key Points:

- 📊 Works with numbers, dates, etc.
- 🔍 Can be combined with GROUP BY to find max per group
- 📌 Ignores NULL values by default

### 7. What is an alias in SQL? Why is it used?

An **alias** is a temporary name given to a table or column, using the `AS` keyword, to make queries **more readable or concise**.

📌 **Key Points:**

- Only exists during the execution of the query
- Can be used for columns or tables
- `AS` is optional but improves clarity

🧪 **Example:**

```sql
-- Column alias
SELECT name AS full_name FROM Users;

-- Table alias
SELECT u.name FROM Users AS u;
```

✅ Uses:

- 🧠 Improves readability of complex queries
- 🧩 Helpful in joins and nested queries
- 🔎 Used to rename results in reports or views

---

## 🔗 Joins & Clauses

### 1. What is a Join? Explain INNER JOIN, LEFT JOIN, and RIGHT JOIN.

A [**Join**](../../code-snippets/query.sql#L251) combines rows from two or more tables based on a related column between them.

📌 **Key Types:**

- **INNER JOIN:** Returns only matching rows from both tables
- **LEFT JOIN:** Returns all rows from the left table + matched rows from the right table (NULL if no match)
- **RIGHT JOIN:** Returns all rows from the right table + matched rows from the left table (NULL if no match)

### 2. What is the difference between INNER JOIN and OUTER JOIN?

**INNER JOIN** returns only rows with matching values in both tables.  
**OUTER JOIN** returns all `matching` rows **plus** `unmatched` rows from one or both tables.

### 3. What is UNION and UNION ALL?

[`UNION` and `UNION ALL`](../../code-snippets/query.sql#L296) are used to **combine results** from two or more `SELECT` statements.

📌 **Key Differences:**

| Clause      | Combines Results | Removes Duplicates | Performance |
| ----------- | ---------------- | ------------------ | ----------- |
| `UNION`     | ✅ Yes           | ✅ Yes             | 🐢 Slower   |
| `UNION ALL` | ✅ Yes           | ❌ No              | ⚡ Faster   |

✅ Key Points:

- 🧩 All SELECT queries must have the same number of columns and compatible types
- 🔍 Use UNION when unique results are needed
- 🚀 Use UNION ALL for better performance if duplicates are allowed

### 4. What is the difference between WHERE and HAVING clauses?

Both [`WHERE` and `HAVING`](../../code-snippets/query.sql#L78) are used to **filter results**, but they apply at different stages of query execution.

📌 **Key Differences:**

| Clause   | Filters On                 | Used With       | When It Executes  |
| -------- | -------------------------- | --------------- | ----------------- |
| `WHERE`  | Raw rows (before grouping) | Any query       | Before `GROUP BY` |
| `HAVING` | Aggregated data            | With `GROUP BY` | After `GROUP BY`  |

✅ Key Points:

- 🎯 Use WHERE for filtering individual rows
- 📊 Use HAVING for filtering aggregate/grouped results
- 💡 Both can be used in the same query when needed

### 5. What is the use of GROUP BY?

The [`GROUP BY`](../../code-snippets/query.sql#L337) clause is used to **group rows** that have the same values in specified columns and perform **aggregate functions** on each group.

📌 **Key Points:**

- Often used with functions like `COUNT()`, `SUM()`, `AVG()`, `MAX()`, `MIN()`
- Groups data by one or more columns
- Must select grouped columns or use aggregate functions

✅ Uses:

- 📊 Summarize data (e.g., total sales per region)
- 🔍 Analyze grouped patterns or trends
- 🧩 Can be combined with HAVING to filter groups

---

## 🚀 Advanced & Intermediate

### 1. What is a Subquery? What is a Correlated Subquery?

A [**Subquery**](../../code-snippets/query.sql#L376) is a SQL query nested inside another query to return data for use in the outer query.  
A **Correlated Subquery** is a subquery that **depends on a value from the outer query** for each row.

📌 **Types:**

- **Simple Subquery**: Executes once and returns a result to the main query
- **Correlated Subquery**: Executes once **per row** of the outer query

✅ Key Points:

- 🔁 Correlated subqueries run multiple times → can be slower
- 🎯 Useful for complex filtering or row-wise comparisons
- 📌 Enclosed in (), used in SELECT, WHERE, or FROM

### 2. What is a Common Table Expression (CTE)?

A **CTE (Common Table Expression)** is a temporary, named result set defined using `WITH`, used to simplify complex queries.

📌 **Key Points:**

- Improves **readability** and **modularity** of queries
- Can be **referenced multiple times** in the main query
- Exists only during the execution of the query
- Supports **recursion**

🧪 **Example: Basic CTE**

```sql
WITH HighSalary AS (
  SELECT name, salary FROM Employees WHERE salary > 80000
)
SELECT * FROM HighSalary;
```

✅ **Uses:**

- 🧠 Break down complex queries into logical blocks
- 🔁 Supports recursive queries (e.g., org charts, hierarchies)
- 🔍 Easier to debug and maintain than nested subqueries

### 3. Write a query to find the second highest salary from a table.

[Click here](../../practical/query.sql#L4)

### 4. How do you remove duplicate rows from a table?

```sql
DELETE FROM YourTable
WHERE id NOT IN (
  SELECT MIN(id)
  FROM YourTable
  GROUP BY columnA, columnB
);

```

### 5. What are Transactions? How do `COMMIT` and `ROLLBACK` work?

A **Transaction** is a sequence of one or more SQL operations executed as a single logical unit of work.

📌 **Key Properties (ACID):**

- **A**tomicity: All or nothing
- **C**onsistency: Keeps data valid
- **I**solation: Transactions don’t interfere
- **D**urability: Changes are permanent after `COMMIT`

🧪 **How COMMIT and ROLLBACK Work:**

- `COMMIT`: Saves all changes made during the transaction
- `ROLLBACK`: Undoes all changes since the start or last `SAVEPOINT`

🧪 **Example:**

```sql
BEGIN;

UPDATE Accounts SET balance = balance - 100 WHERE id = 1;
UPDATE Accounts SET balance = balance + 100 WHERE id = 2;

COMMIT; -- or ROLLBACK; to undo
```

### 6. Explain ACID properties of a transaction.

**ACID** is a set of properties that ensure reliable and consistent execution of database transactions.

📌 **ACID Stands For:**

1. **Atomicity**

   - 🎯 All operations in a transaction are completed or none at all
   - If one fails, the entire transaction is rolled back

2. **Consistency**

   - 🧩 Ensures the database moves from one valid state to another
   - Maintains rules like constraints, triggers, etc.

3. **Isolation**

   - 🔒 Transactions do not affect each other while executing concurrently
   - Prevents dirty reads, non-repeatable reads, etc.

4. **Durability**
   - 💾 Once committed, changes are permanent — even after system failure

✅ **Key Points:**

- 🔐 Guarantees data integrity and reliability
- ⚙️ Critical for multi-step operations and concurrent environments
- 💡 Supported by most modern RDBMS (MySQL, PostgreSQL, Oracle, etc.)

### 7. What are Indexes? What types exist?

[yt](https://www.youtube.com/watch?v=xXtig5uLQS4)

An **Index** is a database object that improves the **speed of data retrieval** on a table column by reducing the number of rows scanned.

📌 **Key Points:**

- Works like a **lookup** for faster searches
- Does not affect the actual data
- Can slow down `INSERT`, `UPDATE`, `DELETE` due to maintenance overhead

🧪 **Basic Index Example:**

```sql
CREATE INDEX idx_name ON Employees(name);
```

📦 Common Types of Indexes:

1. Single-column Index

- Created on one column
- E.g., `CREATE INDEX idx_salary ON Employees(salary);`

2. Composite (Multi-column) Index

- Covers two or more columns
- E.g., `CREATE INDEX idx_dept_role ON Employees(department, role);`

3. Unique Index

- Ensures all values in the column(s) are unique
- Automatically created with PRIMARY KEY or UNIQUE constraint

4. Full-text Index

- For fast searching of large text fields
- E.g., used in search engines

5. Clustered Index (Supported in some RDBMS like SQL Server)

- Sorts the actual data rows in the table
- Only one per table

✅ Uses:

- ⚡ Speeds up `SELECT`, `WHERE`, `JOIN`, and `ORDER BY`
- 📉 Reduces performance in write-heavy tables if overused
- 🧠 Choose wisely based on query patterns

### 8. How do you optimize a slow-running query?

Query optimization improves performance by reducing execution time and resource usage.

📌 **Common Optimization Techniques:**

1. **Use Indexes Wisely**

   - Add indexes on frequently filtered (`WHERE`), joined, or sorted (`ORDER BY`) columns

2. **Avoid SELECT \* **

   - Fetch only required columns to reduce I/O

3. **Use Joins Efficiently**

   - Ensure proper indexing on join keys
   - Prefer `INNER JOIN` over `OUTER JOIN` when possible

4. **Filter Early with WHERE**

   - Reduce result size before grouping or sorting

5. **Use `EXPLAIN` / `EXPLAIN PLAN`**

   - Analyze how the query is executed and spot bottlenecks

6. **Optimize Subqueries / Use CTEs**

   - Replace slow subqueries with joins or Common Table Expressions (CTEs)

7. **Limit Results**

   - Use `LIMIT` to avoid fetching unnecessary rows

8. **Avoid Functions on Indexed Columns**
   - Expressions like `WHERE UPPER(name)` can prevent index usage

✅ Key Tools & Tips:

- 🛠️ Use database tools like EXPLAIN, ANALYZE, or query profilers
- ⚙️ Tune DB config for large workloads (caching, connection pooling)
- 📉 Denormalize cautiously if joins are a major bottleneck

### 9. What are Window Functions (`RANK()`, `ROW_NUMBER()`)?

**Window functions** perform calculations across a **set of rows related to the current row**, without collapsing rows like `GROUP BY`.

📌 **Key Points:**

- Use `OVER()` clause to define the "window" of rows
- Rows remain **intact** in the result set
- Often used for **ranking**, **running totals**, **percentiles**, etc.

🧪 **Common Window Functions:**

- `ROW_NUMBER()`
- `RANK()`, `DENSE_RANK()`
- `SUM()`, `AVG()`, `COUNT()` as windowed aggregates
- `LAG()`, `LEAD()` (access previous/next row)

🧪 **Example 1: Ranking Employees by Salary in Each Department**

```sql
SELECT
  name,
  department,
  salary,
  RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank
FROM Employees;
```

🧪 **Example 2: `ROW_NUMBER()` to Uniquely Number Rows**

```sql
SELECT
  name,
  department,
  ROW_NUMBER() OVER (ORDER BY name) AS row_num
FROM Employees;
```

✅ Uses:

- 🥇 Ranking or numbering rows without grouping
- 📊 Calculating moving averages, percentiles
- 🔍 Accessing values from other rows in the result set

---

## 🔁 Functions & Procedures

### 1. What is the difference between a [Function](../../code-snippets/advanceQuery.sql#L49), [Stored Procedure](../../code-snippets/advanceQuery.sql#L138), and [Trigger](../../code-snippets/advanceQuery.sql#L81)?

These are database objects used to encapsulate logic, but each serves a different purpose.

📌 **Key Differences:**

| Feature      | Function                      | Stored Procedure                  | Trigger                                  |
| ------------ | ----------------------------- | --------------------------------- | ---------------------------------------- |
| Purpose      | Returns a value               | Executes logic (may return value) | Auto-executes on table events            |
| Called By    | SQL expressions, SELECT, etc. | Manual call via `CALL`/`EXEC`     | Automatically by DB engine               |
| Return Value | Must return a value           | Optional return                   | No return                                |
| Used In      | SELECT, WHERE, etc.           | Cannot be used in SELECT directly | Executes on `INSERT`, `UPDATE`, `DELETE` |
| Parameters   | Input only                    | Input, Output, INOUT              | No external call                         |

### 2. What are loops in SQL? Differences between `LOOP`, `WHILE`, and `REPEAT`.

[**Loops**](../../code-snippets/advanceQuery.sql#L160) in SQL are used in stored procedures/functions to repeatedly execute a block of code.

📌 **Types of Loops:**

| Type     | Condition Checked       | Executes At Least Once? | Syntax Simplicity        |
| -------- | ----------------------- | ----------------------- | ------------------------ |
| `LOOP`   | Manual exit via `LEAVE` | ❌ Not guaranteed       | 🟡 Basic loop, flexible  |
| `WHILE`  | Before each iteration   | ❌ Not guaranteed       | ✅ Common for conditions |
| `REPEAT` | After each iteration    | ✅ Yes (like do-while)  | ✅ Simple for fixed exit |

✅ Key Points:

- 🔁 Use WHILE for pre-checked conditions
- 🔂 Use REPEAT when the block must run at least once
- 🏷️ LOOP is most flexible, needs manual exit (LEAVE)
