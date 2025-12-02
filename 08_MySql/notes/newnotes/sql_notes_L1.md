# 📘 SQL & Database Interview Questions (Normal)

---

## ✅ Basic SQL & Database Concepts

### 🧩 Core Concepts

#### 1. What is MySQL? How is it different from SQL?

**MySQL** is a popular open-source **Relational Database Management System (`RDBMS`)**.  
**SQL** (Structured Query Language) is the **language** used to interact with MySQL and other RDBMS.

📌 **Key Differences:**

| Feature         | SQL                                   | MySQL                                        |
| --------------- | ------------------------------------- | -------------------------------------------- |
| What it is      | A query **language**                  | A **software/system** that uses SQL          |
| Purpose         | Defines how to access/manipulate data | Stores, manages, and organizes data          |
| Standardization | ANSI/ISO standard                     | Implementation of SQL (with custom features) |
| Examples        | `SELECT`, `INSERT`, `DELETE`          | MySQL server, client, tools                  |

✅ Key Points:

- 🧠 SQL is the "language" — like grammar
- 💾 MySQL is the "system" — like the database engine that speaks SQL
- 🌐 MySQL supports SQL with some MySQL-specific extensions

#### 2. What is a NoSQL Database? How is data stored in it?

A **NoSQL database** is a `non-relational database` that stores data in **flexible, schema-less formats**.

📌 **Key Points:**

- Does **not use tables** like SQL
- Supports **unstructured/semi-structured** data
- Built for **scalability** and **high performance**

📦 **Types of NoSQL Storage:**

- 🗂️ **Document** → JSON-like (e.g., MongoDB)
- 🔑 **Key-Value** → Simple pairs (e.g., Redis)
- 📊 **Column-Based** → Large-scale data (e.g., Cassandra)
- 🌐 **Graph** → Nodes + edges (e.g., Neo4j)

✅ **Use When:**

- Schema is dynamic
- Data is huge or distributed
- Speed and flexibility are prioritiesNot a replacement for SQL\*\* — best used where relational models fall short

#### 3. What is a Tuple in a database?

A **tuple** is a single **row** in a database table, representing **one record** of data.

#### 4. How do you apply constraints in a table?

[**Constraints**](../../code-snippets/query.sql#L234)

#### 5. Is SQL case-sensitive when creating tables?

SQL is **generally not case-sensitive**, but **behavior can vary** based on:

📌 **Key Points:**

- 🔠 **Keywords** like `SELECT`, `FROM`, `WHERE` → Not case-sensitive
- 🗃️ **Table/Column Names** Not case-sensitive
- 📄 **Data Values**: Case sensitivity depends on collation settings

✅ Tip: Always use consistent casing + quotes only when needed

#### 6. Can we restrict/enforce rules on the data types in a table?

✅ **Yes** — SQL lets you **restrict and enforce rules** on data using **data types** and **constraints** during table creation.

📌 **How Rules Are Enforced:**

- Declaring **data types** (e.g., `INT`, `VARCHAR`, `DATE`)
- Adding **constraints** (e.g., `NOT NULL`, `CHECK`, `DEFAULT`)

#### 7. What is a Stored Procedure?

A **Stored Procedure** is a `pre-written SQL program` saved in the database that performs a specific task or set of operations.

📌 **Key Points:**

- Can accept input/output parameters
- Encapsulates complex logic (loops, conditionals)
- Improves reusability and performance
- Executed with a simple call (`CALL` or `EXEC`)

✅ Uses:

- Automate repetitive tasks
- Enhance security by controlling access
- Reduce network traffic by executing logic on server

#### 8. What is a Function?

A **Function** is a `database object` that performs a `specific calculation` or `operation` and **returns a single value**.

📌 **Key Points:**

- Must return a value using `RETURN`
- Can be used in SQL queries (e.g., `SELECT`, `WHERE`)
- Typically used for `reusable calculations` or `data transformations`

✅ Uses:

- Simplify complex calculations
- Improve code reusability
- Can be called within queries and expressions

#### 8.1 Difference between Scalar and Table-Valued Functions?

Functions return data but differ in **what** they return.

📌 **Key Points:**

| Aspect  | Scalar Function                       | Table-Valued Function         |
| ------- | ------------------------------------- | ----------------------------- |
| Returns | Single value (e.g., INT, VARCHAR)     | A table (set of rows)         |
| Usage   | In expressions, SELECT, WHERE clauses | Like a table in `FROM` clause |
| Example | Calculate discount                    | Return filtered rows          |

🧪 **Scalar Function Example:**

```sql
CREATE FUNCTION GetTax(price DECIMAL)
RETURNS DECIMAL
BEGIN
  RETURN price * 0.1;
END;
```

🧪 **Table-Valued Function Example:**

```sql
CREATE FUNCTION GetUsersByAge(minAge INT)
RETURNS TABLE
AS
RETURN (
  SELECT * FROM Users WHERE age >= minAge
);
```

✅ Summary:

- Scalar → returns a single value
- Table-Valued → returns a table/result set

#### 9. What is a Trigger? What are its types?

A [**Trigger**](../../code-snippets/advanceQuery.sql#L81) is a `special stored procedure` that **automatically executes** in response to certain events on a table.

📌 **Key Points:**

- Runs **before** or **after** `INSERT`, `UPDATE`, or `DELETE`
- Used for **audit logging**, **validation**, or **cascading actions**
- Cannot be called directly by users

📦 Types of Triggers:

- 🔄 BEFORE Trigger — Executes before data modification
- ✅ AFTER Trigger — Executes after data modification
- 🔄 INSTEAD OF Trigger — Used on views to replace operations (supported in some DBMS)

✅ Uses:

- Enforce business rules automatically
- Maintain audit trails
- Synchronize tables or maintain derived data

#### 10. What are Events in SQL? What are their types?

[**Events**](../../code-snippets/advanceQuery.sql#L101) are `scheduled tasks` in SQL that run **automatically** at specified times or intervals.

📌 **Key Points:**

- `Automate` repetitive tasks (e.g., `backups`, `cleanups`)
- Similar to `cron jobs` but inside the database
- Supported in DBMS like MySQL (Event Scheduler)

📦 **Types of Events:**

- 🔁 Recurring Events — Run repeatedly at set intervals
- ⏰ One-Time Events — Run once at a specific time

✅ **Uses:**

- Automate maintenance tasks
- Schedule batch processing
- Improve database management efficiency

#### 11. What is a Delimiter in SQL?

A **Delimiter** is a `symbol` or `sequence` that marks the **end of a SQL statement**.

📌 **Key Points:**

- Default delimiter is usually `;`
- Needed to separate multiple statements in scripts or procedures
- Can be changed temporarily to define procedures or triggers containing `;`

✅ Why Use It?

- Allows defining complex statements with internal `;`
- Helps DBMS parse scripts correctly

#### 12. What is Index? What are the types (Clustered, Non-Clustered)?

[click here](indexes.md)

#### 13. What is a Materialized View?

A **Materialized View** is a **precomputed, `stored result`** of a query that can be refreshed periodically.

📌 **Key Points:**

- Stores data physically (unlike regular views)
- Improves query performance by avoiding repeated computation
- Needs manual or scheduled refresh to stay updated

🧪 **Example:**

```sql
CREATE MATERIALIZED VIEW SalesSummary AS
SELECT region, SUM(amount) AS total_sales
FROM Sales
GROUP BY region;
```

View

- A virtual table.
- SQL engine rewrites queries using the view definition at runtime.

Materialized View

- A real table storing query results.
- Can be indexed like a table.

✅ Uses:

- Speed up complex aggregations or joins
- Useful in reporting and analytics
- Trade-off between storage and query speed

#### 14. What are Aggregate Functions?

[**Aggregate functions**](../../code-snippets/query.sql#L324) perform calculations on a **set of values** and return a **single summary value**.

📌 **Key Points:**

- Operate on multiple rows (often with `GROUP BY`)
- Common examples: `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`

✅ Uses:

- Summarize data (totals, averages)
- Generate reports and insights
- Group and analyze data efficiently

#### 15. What are String Functions in SQL?

[**String functions**](../../code-snippets/query.sql#L347) are `built-in SQL functions` used to **manipulate and process text data**.

#### 16. What are Date and Time Functions?

[**Date & Time functions**](../../code-snippets/query.sql#L437) are used to **manipulate, extract, or format** date/time values in SQL.

### 📚 SQL Statement Types

#### 1. What SQL category does `SELECT` belong to? What about `CREATE TABLE`?

SQL statements are grouped into **categories** based on their purpose.

📌 **Categories:**

- 🔍 `SELECT` → **DQL** (Data Query Language)

  - Used to **retrieve** data from the database

- 🛠️ `CREATE TABLE` → **DDL** (Data Definition Language)
  - Used to **define or modify** the structure of database objects

---

### 🔗 Joins, Clauses & Operators

#### 1. What is FULL OUTER JOIN, CROSS JOIN, SELF JOIN?

#### 2. What is the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN?

#### 3. What is INTERSECT, MINUS, NOT EXISTS?

These are SQL set and conditional operators used to compare results from multiple queries.

📌 **1. INTERSECT**

- Returns **`common` rows** between two queries
- Both queries must have the **same columns and data types**

🧪 **Example:**

```sql
SELECT id FROM A
INTERSECT
SELECT id FROM B;
```

📌 **2. MINUS** (also known as `EXCEPT` in some DBMS)

- Returns rows from the `first query` that are not in the second
- Not supported in MySQL (use LEFT JOIN + IS NULL)

🧪 **Example:**

```sql
SELECT id FROM A
MINUS
SELECT id FROM B;
```

📌 **3. NOT EXISTS**

- `Returns rows` where a `subquery does NOT return` any result
- Efficient for `checking non-matching rows`

🧪 **Example:**

```sql
-- those who have not ordered
SELECT * FROM Customers C
WHERE NOT EXISTS (
  SELECT 1 FROM Orders O WHERE O.customer_id = C.id
);
```

---

## 🚀 Advanced SQL & Database Concepts

### 🧠 Intermediate to Expert Concepts

#### 1. What are the types of Subqueries?

A [**subquery**](../../code-snippets/query.sql#L376) is a query `nested inside another SQL query`. It returns data used by the main query.

📌 **Types of Subqueries:**

1. 🔄 **Single-row Subquery**

   - Returns **one value**
   - Used with operators like `=`, `<`, `>`

2. 📋 Multiple-row Subquery

   - Returns multiple values
   - Used with IN, ANY, ALL

3. 🧠 Correlated Subquery

   - Refers to columns in the outer query
   - Executed for each row of the outer query

4. 🧱 Nested Subquery

   - A subquery inside another subquery

✅ Tips:

- Use IN for multiple values, = for single value
- Correlated subqueries are powerful but can be slower
- Prefer subqueries in WHERE, FROM, or SELECT clauses

#### 2. How does `EXISTS` differ from `IN`?

`EXISTS`

- Checks whether at least one row exists that satisfies the condition.
- Returns TRUE if any row is found; stops searching immediately after the first match.
- Works on rows and is often used with correlated subqueries.
- Safe with NULL values — doesn’t get confused by them.
- More efficient for large data sets, since it can short-circuit early.

`IN`

- Checks whether a value is present in a list or subquery result.
- Compares scalar values, not rows.
- The subquery must return all results before evaluation.
- Can behave unpredictably when NULL values exist in the subquery result.
- More suitable for small, fixed lists (e.g., id IN (1,2,3)).

#### 3. Write a SQL query to:

- Find duplicate records
- Count the number of students
- Find the maximum value in a column

#### 6. What is a Pivot Table in SQL and how do you create one?

A **Pivot Table** reorganizes and **summarizes data** by turning unique values from one column into multiple columns.

📌 **Key Points:**

- Used to **rotate** rows into columns for easier analysis
- Not a built-in SQL standard feature, implemented differently per DBMS
- Common in reporting and data analysis

#### 7. How would you handle a many-to-many relationship in a relational DB?

A **many-to-many relationship** is handled using a **junction (bridge) table** that links the two related tables via foreign keys.

📌 **Key Points:**

- Direct many-to-many is **not allowed** in relational DBs
- Use a **third table** to break it into two one-to-many relationships

🧪 **Example:**

📁 Tables: `Students`, `Courses`  
🔗 Junction Table: `StudentCourses`

#### 8. How do you audit data changes in SQL (Change Tracking/Versioning)?

Auditing tracks **who changed what and when** in a database. It helps ensure **accountability and data integrity**.

📌 **Common Methods:**

1. 🧠 **Triggers + Audit Table**

   - Use `AFTER INSERT/UPDATE/DELETE` triggers
   - Store changes in a separate **audit table**

2. 📜 Manual Versioning
   - Add versioning columns like updated_at, updated_by
   - Track changes manually in your application logic

✅ Best Practices:

- Always include timestamp, user, and action
- Use dedicated audit tables to avoid bloating main tables
- Encrypt or protect audit logs to prevent tampering

#### 9. Will Auto Increment be affected by `UPDATE`, `DELETE`, `TRUNCATE`?

📌 **AUTO_INCREMENT** is only affected by some operations — here's how:

| Operation  | Affects AUTO_INCREMENT? | Explanation                                    |
| ---------- | ----------------------- | ---------------------------------------------- |
| `UPDATE`   | ❌ No                   | Doesn't insert or remove rows                  |
| `DELETE`   | ❌ No                   | Deletes rows but **does not reset counter**    |
| `TRUNCATE` | ✅ Yes                  | **Resets** the AUTO_INCREMENT value to initial |

✅ Tips:

- Use TRUNCATE only when you want a clean slate
- To reset manually:

  ```sql
  ALTER TABLE Users AUTO_INCREMENT = 1;
  ```

---

## 🏢 TCS-Specific Interview Questions

#### 1. How is data stored in non-relational DBMS compared to relational DBMS?

📌 **Relational DBMS (RDBMS):**

- Stores data in **tables (rows & columns)**
- Follows a **fixed schema**
- Uses **SQL** for querying

🧪 Example:

```text
Table: Users
+----+--------+------+
| id | name   | age  |
+----+--------+------+
| 1  | Alice  | 25   |
+----+--------+------+
```

📌 **Non-Relational DBMS (NoSQL):**

- Stores data in flexible formats like:

  - 🗂️ Documents (e.g., JSON) → MongoDB
  - 🔑 Key-Value pairs → Redis

- Schema-less or dynamic schema

🧪 Example (Document in MongoDB):

```js
{ "id": 1, "name": "Alice", "age": 25 }
```

✅ Key Differences:

- RDBMS = Structured, relational, normalized
- NoSQL = Flexible, unstructured or semi-structured
- Choose based on data model and scalability needs

#### 2. Name some RDBMS software you have worked with.

📌 **Relational Database Management Systems (RDBMS)** are used to store and manage structured data using SQL.

✅ **Common RDBMS Software:**

- 🐬 **MySQL** – Open-source, widely used for web apps
- 🐘 **PostgreSQL** – Open-source, highly extensible and standards-compliant
- 💼 **SQL Server** – Microsoft’s enterprise-grade RDBMS
- 🧮 **Oracle Database** – High-performance, commercial RDBMS used in large enterprises
- 🧑‍💼 **SQLite** – Lightweight, serverless DB used in embedded systems and testing

🧪 **Sample Mention (in Interview):**

> "I’ve primarily worked with MySQL and PostgreSQL for building web applications, writing complex queries, optimizing performance, and handling relational data efficiently."

#### 3. Data types

[click](../../code-snippets/query.sql#L135)

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

#### 3.1 Can any kind of data be stored in tables? How can we enforce data types?

VARCHAR vs CHAR

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

#### 3.2 Can any kind of data be stored in tables? How can we enforce data types?

📌 **Yes**, tables can store various types of data, but each column must have a **defined data type** to control what kind of data it holds.

🛡️ **How to Enforce Data Types:**

- Define data types during **table creation**
- Add **constraints** like `NOT NULL`, `CHECK`, etc.

✅ Benefits:

- Prevents invalid data entries
- Improves data integrity and consistency

#### 4. Can you write and explain a `CREATE TABLE` query?

Yes! `CREATE TABLE` is used to define a new table and its structure (columns, data types, constraints).

#### 5. What happens if you omit values for NOT NULL or PRIMARY KEY columns?

📌 **Omitting values** for `NOT NULL` or `PRIMARY KEY` columns causes **errors** during `INSERT`.

---

### 🚫 `NOT NULL` Column:

- You **must provide** a value.
- Omitting it ➝ ❌ **Error: Column cannot be null**

### 🚫 `PRIMARY KEY` Column:

- Must be unique and NOT NULL
- If omitted or duplicated ➝ ❌ Error: Null or duplicate key

#### 6. How do you check if a table exists or list all tables in a database?

📌 Use **`SHOW TABLES`** or query **`INFORMATION_SCHEMA`** in MySQL.

---

### 📋 List All Tables in Current Database:

```sql
SHOW TABLES;
```

### 🔍 Check If a Specific Table Exists:

```sql
SELECT COUNT(*) AS table_exists
FROM information_schema.tables
WHERE table_schema = DATABASE() -- current DB
  AND table_name = 'your_table_name';

```

- Returns 1 if exists, 0 if not.

#### 7. What is the command to select/use a specific database?

📌 In MySQL, use the `USE` command to switch to a specific database.

🧪 **Example:**

```sql
USE database_name;
```

- This sets the current database context for subsequent queries.
- You don’t need to specify the database name in table references after this.
