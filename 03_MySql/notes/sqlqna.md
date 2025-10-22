# 📘 SQL & Database Interview Questions

---

## ✅ Basic SQL & Database Concepts

### 🧩 Core Concepts

1. What is a Database?
2. What is a Database Management System (DBMS)?
3. What is a Relational Database (RDBMS)?
4. What is SQL? What does it do?
5. What is MySQL? How is it different from SQL?
6. What is a NoSQL Database? How is data stored in it?
7. What are CRUD operations? Can you explain each briefly?
8. What is a Tuple in a database?
9. What is a Key? What are Primary Key, Foreign Key, and Unique Key?
10. What are Constraints in SQL? (e.g., NOT NULL, PRIMARY KEY, FOREIGN KEY)
11. How do you apply constraints in a table?
12. What does NULL mean in SQL?
13. What is Normalization? What are its normal forms (1NF, 2NF, etc.)?
14. What is the difference between CHAR and VARCHAR?
15. What does VARCHAR(30) mean?
16. Is SQL case-sensitive when creating tables?
17. Can we restrict/enforce rules on the data types in a table?
18. What is a View? Why do we use it?
19. What is a Stored Procedure?
20. What is a Function? Difference between Scalar and Table-Valued Functions?
21. What is a Trigger? What are its types?
22. What are Events in SQL? What are their types?
23. What is a Delimiter in SQL?
24. What is Index? What are the types (Clustered, Non-Clustered)?
25. What is a Materialized View?
26. What are Aggregate Functions?
27. What are String Functions in SQL?
28. What are Date and Time Functions?

---

### 📚 SQL Statement Types

1. What are the different types of SQL statements?
   - **DDL** (Data Definition Language): `CREATE`, `ALTER`, `DROP`, `TRUNCATE`
   - **DML** (Data Manipulation Language): `INSERT`, `UPDATE`, `DELETE`
   - **DQL** (Data Query Language): `SELECT`
   - **DCL** (Data Control Language): `GRANT`, `REVOKE`
   - **TCL** (Transaction Control Language): `COMMIT`, `ROLLBACK`, `SAVEPOINT`, `START TRANSACTION`
2. What SQL category does `SELECT` belong to? What about `CREATE TABLE`?

---

### 🔗 Joins, Clauses & Operators

1. What is a Join? Explain different types:
   - INNER JOIN
   - LEFT JOIN
   - RIGHT JOIN
   - FULL OUTER JOIN
   - CROSS JOIN
   - SELF JOIN
2. What is the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN?
3. What is UNION, UNION ALL, INTERSECT, MINUS, NOT EXISTS?
4. What is the use of GROUP BY?
5. What is the difference between WHERE and HAVING?
6. What is an alias in SQL? Why is it used?
7. What is the ORDER BY clause? What is the default sort order?
8. What is the difference between `SELECT COUNT(column)` and `SELECT COUNT(*)`?

---

## 🚀 Advanced SQL & Database Concepts

### 🧠 Intermediate to Expert Concepts

1. What is a Subquery? What are the types? What is a Correlated Subquery?
2. What is a Common Table Expression (CTE)?
3. How does `EXISTS` differ from `IN`?
4. Write a SQL query to:
   - Find the second highest salary
   - Find duplicate records
   - Count the number of students
   - Find the maximum value in a column
5. How do you remove duplicate rows from a table?
6. Explain the use of Window Functions (`RANK()`, `DENSE_RANK()`, `ROW_NUMBER()`)
7. What is the difference between UNION and UNION ALL?
8. How do you optimize a slow-running query?
9. What is a Pivot Table in SQL and how do you create one?
10. What are Transactions in SQL? How do `COMMIT` and `ROLLBACK` work?
11. Explain ACID properties of a transaction.
12. How would you handle a many-to-many relationship in a relational DB?
13. How do you audit data changes in SQL (Change Tracking/Versioning)?
14. Will Auto Increment be affected by `UPDATE`, `DELETE`, `TRUNCATE`?

---

### 🔁 Control Structures & Comparison

1. What are loops in SQL? Differences between `LOOP`, `WHILE`, and `REPEAT`?
2. Comparison:
   - Function vs Stored Procedure vs Trigger
   - Loops vs While vs Repeat

---

## 🏢 TCS-Specific Interview Questions

1. What is the difference between a database and DBMS?
2. How is data stored in non-relational DBMS compared to relational DBMS?
3. Name some RDBMS software you have worked with.
4. Can any kind of data be stored in tables? How can we enforce data types?
5. Can you write and explain a `CREATE TABLE` query?
6. How do you insert data into a table? Is it possible to insert multiple records at once?
7. What happens if you omit values for NOT NULL or PRIMARY KEY columns?
8. How do you retrieve data? Write a `SELECT` query.
9. How do you check if a table exists or list all tables in a database?
10. What is the command to select/use a specific database?
