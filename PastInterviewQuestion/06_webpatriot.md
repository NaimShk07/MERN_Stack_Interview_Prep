## 1. what is contructor

- A constructor is a special function used to **create and initialize objects**.  
  In JS, it can be written as a **constructor function** or inside a **class**.

---

**1. Constructor Function (old way):**

```js
function Person(name, age) {
	this.name = name;
	this.age = age;
}

const user = new Person("Naim", 25);
console.log(user.name); // "Naim"
```

**2. Class Constructor (ES6 way):**

```js
class Car {
	constructor(brand) {
		this.brand = brand;
	}
}

const car1 = new Car("Tesla");
console.log(car1.brand); // "Tesla"
```

---

## 2. 🗄️ What is ORM?

- ORM (**Object-Relational Mapping**) is a technique that maps **`database tables` to `objects`**.
- Lets developers interact with databases using **JavaScript objects instead of raw SQL queries**.
- Improves **readability, maintainability**, and speeds up development.
- Common ORMs in JS: **Sequelize, TypeORM**

---

### ⚖️ Benefits of ORM

1. `Cleaner` and more `readable` code
2. Database-agnostic (can switch DBs easily)
3. Built-in `validations` and `relations`
4. `Faster development` for CRUD apps

---

### 🧪 Example (Sequelize - SQL ORM)

```js
// Define model
const User = sequelize.define("User", {
	name: Sequelize.STRING,
	email: Sequelize.STRING,
});

// Insert
await User.create({ name: "Naim", email: "naim@example.com" });

// Fetch
const users = await User.findAll();
```

---

## 2.1 📜 What is ODM?

- ODM (**Object-Document Mapping**) is a technique that maps **NoSQL database documents** (like MongoDB) to JavaScript objects.
- Similar to ORM but works with **document-oriented databases** instead of relational tables.
- In JavaScript, the most popular ODM is **Mongoose**.

---

### ⚖️ Benefits of ODM

1. Abstracts MongoDB queries into simple JS methods
2. Provides **schema & validation** for collections
3. Supports `middleware/hooks` for pre & post operations
4. Easier to handle relationships (populate, refs)

---

### 🧪 Example (Mongoose - MongoDB ODM)

```js
// Define Schema & Model
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
});
const User = mongoose.model("User", userSchema);

// Insert
await User.create({ name: "Naim", email: "naim@example.com" });

// Fetch
const users = await User.find();
```

---

## 3. 🟢 Latest Version of Node.js

- As of now, the **current stable version** is **Node.js 24.8.0**
- The **active LTS (Long Term Support)** version is **Node.js 22.x**

> Use LTS for production, current/stable for trying latest features.

## 4. 📦 What is NPM?

[npm](../06_Node_Express/newnotes/npm.md)

---

## 5. 🔄 Require vs Import in Node.js

[click](../06_Node_Express/newnotes/nodejs_qna.md#L151)

> In short: require is older (CommonJS), import is modern (ESM). Today, ES Modules (import/export) are preferred for new projects.

---

## 6. 🔡 VARCHAR vs CHAR in SQL

- Both `CHAR` and `VARCHAR` are used to store **string/text data** in SQL.
- The difference is how they handle **storage and performance**.

---

### ⚖️ Differences

| Feature            | CHAR                                                        | VARCHAR                                             |
| ------------------ | ----------------------------------------------------------- | --------------------------------------------------- |
| Storage Type       | Fixed-length                                                | Variable-length                                     |
| Length Handling    | Always uses the defined size (padded with spaces)           | Uses only required size (no padding)                |
| Performance        | Faster (since fixed size)                                   | Slightly slower (handles variable length)           |
| Storage Efficiency | May waste space if data is small                            | Efficient storage, saves space                      |
| Use Case           | Good for fixed-size data (e.g., country codes, phone codes) | Good for variable-length data (e.g., names, emails) |

---

### 🧪 Example

```sql
-- CHAR(5): always 5 characters
CREATE TABLE codes (
  country_code CHAR(5)
);

-- VARCHAR(50): up to 50 characters, actual length varies
CREATE TABLE users (
  username VARCHAR(50)
);
```

> In short: CHAR is fixed-length and faster, VARCHAR is variable-length and space-efficient.

---

## 7. 🔗 Different Types of Joins in SQL

- Joins are used to **combine rows from two or more tables** based on a related column.

---

### ⚖️ Types of Joins

1. **INNER JOIN**

   - Returns rows that have **matching values** in both tables.

2. **LEFT JOIN (LEFT OUTER JOIN)**

   - Returns all rows from the left table, and matching rows from the right table.
   - If no match, NULL is returned for right table columns.

3. **RIGHT JOIN (RIGHT OUTER JOIN)**

   - Returns all rows from the right table, and matching rows from the left table.

4. **FULL JOIN (FULL OUTER JOIN)**

   - Returns all rows when there is a match in either left or right table.
   - If no match, NULLs are included.

   ```sql
   SELECT C.name, O.item
   FROM Customers C
   FULL OUTER JOIN Orders O
   ON C.customer_id = O.customer_id;
   ```

5. **CROSS JOIN**

   - Returns the Cartesian product of both tables (all possible combinations).

   ```sql
   SELECT users.id, orders.id
   FROM users
   CROSS JOIN orders;
   ```

> In short: INNER = only matches, LEFT/RIGHT = keep one side, FULL = everything, CROSS = all combinations.

## 8. 💳 What is a Transaction in SQL?

- A **transaction** is a `sequence` of one or more SQL operations executed as a **single unit of work**.
- Ensures **data integrity** even if errors or failures occur.
- Follows the **ACID properties**:
  - **A**tomicity → All or nothing
  - **C**onsistency → Keeps DB valid
  - **I**solation → Transactions don’t affect each other
  - **D**urability → Changes persist after commit

---

### 🧪 Example

```sql
BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;  -- or ROLLBACK if error
```

> In short: A transaction groups multiple queries so they succeed or fail together, maintaining database reliability.

## 9. 📜 What is a Stored Procedure in SQL?

- A **Stored Procedure** is a **`precompiled set of SQL statements`** stored in the database.
- Can take **inputs (parameters)**, execute queries, and return results.
- Used to **reuse logic, improve performance, and enhance security**.

---

### 🧪 Example

```sql
-- Create Stored Procedure
CREATE PROCEDURE GetUsersByCity(IN cityName VARCHAR(50))
BEGIN
  SELECT * FROM users WHERE city = cityName;
END;

-- Call Stored Procedure
CALL GetUsersByCity('Ahmedabad');
```

### Advantages:

- Faster execution (precompiled)
- Reduces code duplication
- Centralized business logic in DB
- Improves security (restrict direct table access)

> In short: A Stored Procedure is like a function in SQL that stores reusable queries inside the database.
> A function always returns a value and can be used inside SQL queries like SELECT statements, whereas a stored procedure doesn't have to return anything and is mainly used to perform actions like inserts, updates, or complex logic. Functions are more for computation; procedures are more for operations.

---

## 10. What is Trigger

📌 **Definition:**  
A trigger is a special type of stored procedure in SQL that **automatically executes** when a specific event (INSERT, UPDATE, DELETE) occurs on a table.

### ⚡ Key Points

- Executes **implicitly** (no need to call manually).
- Can be **BEFORE** or **AFTER** a DML operation.
- Useful for maintaining **data integrity** and **automation**.

### 🧪 Example

```sql
CREATE TRIGGER before_insert_user
BEFORE INSERT ON users
FOR EACH ROW
SET NEW.created_at = NOW();
```

### ✅ Uses

- Enforce business rules
- Maintain audit logs
- Automate field updates

## 11. 🗂️ What is an Index in SQL?

📌 **Definition:**  
An index is a **`database object`** that improves the **speed of data retrieval** on a table.  
It works like a **table of contents** in a book to quickly locate data without scanning the entire table.

---

### ⚡ Key Points

- Can be **unique** (no duplicate values) or **non-unique**.
- Speeds up **SELECT queries**, but may slow down **INSERT/UPDATE/DELETE**.
- Common types: **B-Tree**, **Hash**, **Composite**.

---

### 🧪 Example

```sql
-- Create index on username column
CREATE INDEX idx_username ON users(username);

-- Query using the index
SELECT * FROM users WHERE username = 'Naim';
```

> In short: Index = quick lookup tool for database tables, improving query performance.

## 11.1 🗂️ Types of Index in SQL

📌 **Definition:**  
Indexes help **speed up data retrieval** in SQL. Different types are used based on data and query patterns.

---

### ⚡ Common Types of Indexes

1. **Unique Index**

   - Ensures all values in the indexed column are **unique**.

   ```sql
   CREATE UNIQUE INDEX idx_email ON users(email);
   ```

2. Primary Key Index

   - Automatically created when a primary key is defined.
   - Enforces uniqueness and not null.

3. Composite Index (Multi-Column Index)

   - Created on multiple columns to optimize queries using all columns.

   ```sql
   CREATE INDEX idx_name_city ON users(name, city);
   ```

4. Full-Text Index

   - Used for text search in large text columns.

   ```sql
   CREATE FULLTEXT INDEX idx_content ON articles(content);
   ```

5. Clustered Index

   - Sorts and stores table rows physically based on the indexed column.
   - Only one per table.

6. Non-Clustered Index
   - Separate structure from table; points to table rows.
   - Can have multiple non-clustered indexes per table.

> In short: Indexes come in various types to optimize queries, enforce uniqueness, or support text search.

## 11.2 how does index work under the hood

## 11.3 ⚖️ Pros & Cons of Index in SQL

📌 **Definition:**  
Indexes improve query performance but come with trade-offs in storage and write operations.

---

### ✅ Pros

1. **Faster SELECT queries** – Direct access to rows.
2. **Supports uniqueness** – Unique indexes enforce no duplicates.
3. **Optimizes joins** – Quick lookups on foreign keys.
4. **Efficient sorting & filtering** – Index can speed up `ORDER BY` and `WHERE` clauses.

### ❌ Cons

1. **Extra storage** – Indexes take disk space.
2. **Slower writes** – INSERT, UPDATE, DELETE need index maintenance.
3. **Too many indexes = overhead** – Can hurt performance if overused.
4. **Complexity** – Needs careful planning for which columns to index.

---

> In short: **Indexes speed up reads but slow down writes and consume storage**. Use them wisely.

---

## 11.4 🧠 Should We Add Index on All Columns?

📌 **Answer (Short & Crisp):**  
No, adding indexes to all columns is **not a good idea**. Indexes improve read performance but **have trade-offs**.

---

### ⚡ Reasons

1. **Storage Overhead** – Each index consumes disk space.
2. **Slower Writes** – INSERT, UPDATE, DELETE operations need to update all indexes.
3. **Maintenance Complexity** – Too many indexes make the database harder to manage.
4. **Not Always Useful** – Indexing columns that are rarely used in queries provides no benefit.

---

### ✅ Best Practice

- Add indexes only on **columns frequently used** in `WHERE`, `JOIN`, `ORDER BY`, or `GROUP BY`.
- Use **composite indexes** for multiple-column queries instead of indexing each column individually.

---

> In short: **Index selectively**, not on every column. More indexes ≠ faster database.

---

## 12. 🗑️ DELETE vs TRUNCATE vs DROP in SQL

📌 **Definition:**  
All three are used to remove data, but they differ in **scope, speed, and rollback ability**.

> In short: DELETE = selective removal, TRUNCATE = all rows fast, DROP = remove table completely.

---

## 13. now vs current_date

📌 **Definition:**  
Both functions return date/time values, but they differ in **precision** and **format**.

### 🧪 Examples

```sql
SELECT NOW();          -- 2025-10-03 14:32:10
SELECT CURRENT_DATE;   -- 2025-10-03
```

> In short: NOW() = date + time, CURRENT_DATE = only date.

---

## 14. 🟦 What is Binary JSON (BSON)?

📌 **Definition:**  
BSON (**Binary JSON**) is a **`binary-encoded` serialization** of JSON-like documents.  
It is primarily used by **MongoDB** to `store and transfer` data efficiently.

BSON stands for Binary JSON. It’s a `binary-encoded` format used by MongoDB to store documents more efficiently than plain JSON. Unlike JSON, BSON supports additional data types like Date, Binary, and ObjectId, and it’s faster for reading and writing due to its binary nature.

---

### ⚡ Key Points

1. **Binary format** – Faster to parse and smaller in size than plain JSON.
2. **Supports additional data types** – e.g., `Date`, `Binary`, `ObjectId` (not in standard JSON).
3. **Optimized for storage and network transfer** – Used internally by MongoDB.

---

### 🧪 Example

```js
// JSON document
const jsonDoc = { name: "Naim", age: 25, createdAt: new Date() };

// Stored as BSON in MongoDB
// Binary format includes types for each field for efficient storage
```

> In short: BSON = binary version of JSON with extra data types, used for efficiency in MongoDB.

---

## 15. 🟢 Default Port of MongoDB

📌 **Definition:**  
MongoDB uses a **default TCP port** to listen for client connections.

---

### ⚡ Details

- **Default Port:** `27017`
- **Other Ports:**
  - `27018` → Used by **shard** in sharded clusters
  - `27019` → Used by **config servers** in sharded clusters

---

> In short: **Connect to MongoDB on port 27017 unless configured otherwise**.

---

## 16. ⚛️ Why We Use React?

📌 **Definition:**  
React is a **JavaScript library** for building **dynamic, fast, and reusable UI components**.

---

### ⚡ Key Reasons to Use React

1. **Component-Based** – Build reusable UI pieces.
2. **Virtual DOM** – Efficient updates and rendering for faster performance.
3. **Declarative** – Easy to understand UI states.
4. **Large Ecosystem** – Rich libraries, tools, and community support.
5. **Cross-Platform** – Can be used with React Native for mobile apps.

> In short: React makes building interactive UIs easier, faster, and maintainable.

---

## 17. ⚠️ Limitations of React

📌 **Definition:**  
While React is powerful, it has some **limitations and trade-offs** to consider.

---

### ⚡ Key Limitations

1. **Only UI Library** – Not a full framework; needs other libraries for routing, state management, etc.
2. **Learning Curve** – JSX, hooks, and state management can be tricky for beginners.
3. **Boilerplate** – Large apps may require lots of setup and tooling.
4. **SEO Challenges** – Single Page Applications (SPA) need extra setup for SEO (e.g., server-side rendering).
5. **Frequent Updates** – React ecosystem evolves quickly; keeping up can be tough.

---

> In short: React is **flexible and fast** but requires **additional tools and knowledge** for complete app development.

---

## 18. 🔑 What Are Keys in React?

📌 **Definition:**  
Keys are **unique identifiers** used by React to track elements in **lists** for efficient re-rendering.

---

### ⚡ Key Points

1. Helps React identify which items **changed, added, or removed**.
2. Must be **unique among siblings**, usually using IDs.
3. Improves **performance** by minimizing unnecessary DOM updates.
4. Should **not** use indexes as keys if list can change order.

---

## 19. 🔑 React Keys & What Happens If You Don’t Pass Them

- React **will still render the list**, but it will **warn in the console**:  
  `"Each child in a list should have a unique "key" prop."`
- Without keys, React may **re-render inefficiently**, causing:
  - Unnecessary DOM updates
  - Wrong component state being reused

> In short: Keys prevent warnings and ensure efficient list rendering. Always pass a unique key for list items.

---

## 20. 📝 How to Handle Forms in React

### ⚡ Key Points

- Use **controlled components**: form input values are stored in **React state**.
- Update state on **`onChange`** events.
- Handle submission via **`onSubmit`**, prevent default browser behavior with `e.preventDefault()`.
- Can use **`useState`** or form libraries like **Formik / React Hook Form** for complex forms.

---

## 21. how to toggle between dark and light mode in react

### ⚡ Key Points

- Use **React state** to track current theme (`dark` or `light`).
- Apply **conditional CSS classes** or **Inline CSS** based on state.
- Can store prefer

### 🧪 Example

```js
document.body.className = darkMode ? "dark" : "light";
// or
<div style={{ backgroundColor: darkMode ? "black" : "white" }}></div>;
```

---

## 22. ⚛️ What is JSX?

---

### ⚡ Key Points

- JSX (**JavaScript XML**) lets us write **HTML-like syntax** inside JavaScript.
- It gets **transpiled to `React.createElement`** calls under the hood.
- Makes code more **readable** and **intuitive** when building UI.

---

### 🧪 Example

```js
const element = <h1>Hello, JSX!</h1>;
// Transpiles to:
const element = React.createElement("h1", null, "Hello, JSX!");
```

> In short: JSX = HTML inside JavaScript, compiled to JS function calls.

---

## 22.1 📖 Expression vs Statement in JavaScript

---

### ⚡ Expression

- Produces a **value**.
- Can be used **`wherever a value is expected`** (inside JSX, assignment, etc.).
- Examples:
  ```js
  5 + 10; // → 15
  user.name; // → "Naim"
  isLoggedIn ? "Yes" : "No"; // → "Yes" or "No"
  ```

### ⚡ Statement

- Performs an action but `does not return a value` directly.
- Cannot be used directly inside JSX.
- Examples:

  ```js
  if (isLoggedIn) { ... }
  for (let i = 0; i < 5; i++) { ... }
  function greet() { ... }
  ```

---

## 22.2 why can't we use if else in jsx

### ⚡ Reason

- JSX is syntactic sugar for JavaScript expressions,
  and in JSX you can only use `expressions, not statements`.
- if-else is a statement, so it doesn’t work directly inside JSX.

> In short: Use ternary, &&, or helper functions instead of raw if-else inside JSX.

---

## 23. 📦 Rendering Arrays Directly in JSX

```jsx
const fruits = ["Apple", "Banana", undefined, null, "Mango"];
return <div>{fruits}</div>;
```

### ✅ Behavior

- Output → AppleBananaMango
- null, undefined, and boolean values are ignored.
- Numbers and strings are rendered.
- Plain objects → ❌ error (Objects are not valid as a React child).

### ⚡ Examples

```
["Hi", false, "Bye"]   // HiBye
["A", 0, "B"]          // A0B
["X", NaN, "Y"]        // XNaNY
```

> In JSX, undefined/null/boolean are ignored, numbers & strings render, objects throw error
