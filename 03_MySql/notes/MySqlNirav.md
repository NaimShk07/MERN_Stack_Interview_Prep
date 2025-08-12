# MySQL Notes

## Server Types
- **XAMPP**: Cross-platform
- **WAMPP**: Windows
- **MAMP**: Mac
- **LAMP**: Linux

**Apache, MySQL, PHP/Perl**

---

## ER Diagram Example (Amazon)
### Admin
1. Login
2. Manage Category (Add, Update, Delete)
3. Manage Subcategory
4. Manage Products
5. View Cart
6. View Payment
7. View Orders
8. View Feedback
9. View Inquiry

### User
1. Registration  
   Fields: `id`, `name`, `email`, `password`, `mobile`, `address`
2. Login
3. View Category (`cat_id` PK, `cat_name`)
4. View Subcategory (`subcat_id` PK, `subcat_name`, `cate_id` FK)
5. View Products (`prd_id`, `prd_name`, `prd_img`, `prd_price`, `prd_desc_price`, `prd_details`, `sub_cate` FK)
6. Add to Cart (`cart_id`, product details from `products`, `cart_qty`)
7. Payment (`pay_id`, `pay_status`, `pay_mode`, `pay_amt`, `user_id` FK)
8. Orders (`ord_id`, `ord_amt`, `ord_name`, `ord_status`)
9. Feedback (`feedback_id`, `feedback_details`)
10. Inquiry (`inquiry_id`, `inquiry_details`)

---

## DBMS & SQL Basics
**DBMS**: Database Management System – manages data electronically using queries.  
**SQL**: Structured Query Language.

---

## 1. DDL (Data Definition Language)
Used to define and modify database structure.

### Create Database & Table
```sql
CREATE DATABASE dbName;
USE dbName;

CREATE TABLE tableName (
    col1 type(size),
    col2 type(size),
    col3 type(size)
);
```

### Alter Table
```sql
ALTER TABLE users ADD userPassword VARCHAR(300);
ALTER TABLE users CHANGE userAddres userAddress VARCHAR(300);
```

### Drop & Truncate
```sql
DROP DATABASE dbName;
DROP TABLE tableName;
TRUNCATE TABLE tableName;
```

---

## SQL Constraints
### Primary Key
- Uniquely identifies records.
- Only one PK per table.
- Cannot accept NULL values.

```sql
CREATE TABLE tableName (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);
```

### Foreign Key
- Creates relations between tables.
- Can have multiple per table.

```sql
CREATE TABLE subcategory (
    subcate_id INT PRIMARY KEY AUTO_INCREMENT,
    subcate_name VARCHAR(200),
    cate_id_fk INT,
    FOREIGN KEY (cate_id_fk) REFERENCES category (cate_id)
);
```

### Unique Key
- Uniquely identifies records.
- Can accept NULL values.
- Multiple allowed in a table.

---

## 2. DML (Data Manipulation Language)
Used to manipulate data.

### Insert
```sql
INSERT INTO tableName (col1, col2) VALUES ('val1', 'val2');
```

### Delete
```sql
DELETE FROM tableName WHERE colName = 'value';
```

### Update
```sql
UPDATE tableName SET colName = 'value' WHERE colName = 'oldValue';
```

---

## 3. DQL (Data Query Language)
Used to retrieve data.

### Select
```sql
SELECT * FROM products;
SELECT prd_name, prd_price FROM products WHERE prd_price >= 3000;
```

### Functions
```sql
SELECT SUM(prd_price) FROM products;
SELECT AVG(prd_price) FROM products;
SELECT MAX(prd_price) FROM products;
SELECT MIN(prd_price) FROM products;
SELECT COUNT(prd_price) FROM products;
```

### Alias
```sql
SELECT SUM(prd_price) AS Total_Price FROM products;
```

### Group By
```sql
SELECT cate_name FROM category GROUP BY cate_name;
```

### Order By
```sql
SELECT prd_name, prd_price FROM products ORDER BY prd_price DESC;
```

---

## Joins
### Inner Join
```sql
SELECT category.cate_name, subcategory.subcate_name
FROM category
INNER JOIN subcategory ON category.cate_id = subcategory.cate_id_fk;
```

### Multiple Joins
```sql
SELECT category.cate_name, subcategory.subcate_name, products.prd_name
FROM category
INNER JOIN subcategory ON category.cate_id = subcategory.cate_id_fk
INNER JOIN products ON category.cate_id = products.cate_id_fk;
```

### Left Join / Right Join
```sql
SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id;
SELECT * FROM table1 RIGHT JOIN table2 ON table1.id = table2.id;
```

### Full Join (MySQL doesn't support directly – use UNION)
```sql
SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id
UNION
SELECT * FROM table1 RIGHT JOIN table2 ON table1.id = table2.id;
```

---

## 4. DCL (Data Control Language)
- **GRANT**: Gives access.
- **REVOKE**: Removes access.

## 5. TCL (Transaction Control Language)
- **COMMIT**: Saves changes.
- **ROLLBACK**: Undoes changes.
- **SAVEPOINT**: Sets a point to rollback to.

---

## Extra Notes (Not in Original)
- **Indexing**: Use indexes on columns used in WHERE, JOIN, ORDER BY to improve query speed.  
  ```sql
  CREATE INDEX idx_name ON tableName(columnName);
  ```
- **CHAR vs VARCHAR**: `CHAR` has fixed length, `VARCHAR` has variable length (saves space).
- **HAVING vs WHERE**: `WHERE` filters rows before grouping, `HAVING` filters after grouping.
- **Default Value**:  
  ```sql
  ALTER TABLE tableName ALTER columnName SET DEFAULT 'value';
  ```
- **Check Constraint**:  
  ```sql
  ALTER TABLE tableName ADD CONSTRAINT chk_price CHECK (price > 0);
  ```
