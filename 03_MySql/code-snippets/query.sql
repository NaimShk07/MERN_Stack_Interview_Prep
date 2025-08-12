-- *DDL*

-- Create: Defines and creates new database objects like tables, views, or databases.
CREATE TABLE employees (
   id INT PRIMARY KEY,
   name VARCHAR(100),
   salary DECIMAL(10, 2)
   departmentId INT,
);

CREATE DATABASE company_db;

CREATE INDEX idx_name ON employees(departmentId);

-- Drop: Permanently deletes existing database objects.
DROP TABLE employees;

DROP DATABASE company_db;

DROP INDEX idx_name ON employees;

-- Alter: Modifies the structure of an existing database object.
ALTER TABLE employees ADD COLUMN email VARCHAR(255);

ALTER TABLE employees DROP COLUMN salary;

ALTER TABLE employees RENAME TO staff;

ALTER TABLE employees MODIFY COLUMN name VARCHAR(150);

-- Truncate: Removes all records from a table without deleting its structure.
TRUNCATE TABLE employees;

-- Rename: Changes the name of a database object.
-- Some databases support RENAME TABLE directly:
RENAME TABLE employees TO staff;

-- In others, you might use ALTER:
ALTER TABLE employees RENAME TO staff;

-- Comment
COMMENT ON TABLE employees IS 'Stores employee details';

COMMENT ON COLUMN employees.salary IS 'Employee monthly salary in USD';


-- *DQL*

-- Select: Retrieves data from one or more tables or views in a database.
SELECT * FROM employees;

SELECT emp_id, first_name FROM employees;

SELECT *
FROM employees
WHERE
   emp_id = 101                                 -- Equals
   AND first_name <> 'John'                     -- Not equals
   AND last_name IS NOT NULL                    -- IS NOT NULL
   AND middle_name IS NULL                      -- IS NULL
   AND salary > 3000                            -- Greater than
   AND bonus <= 5000                            -- Less than or equal
   AND hire_date BETWEEN '2022-01-01' AND '2024-12-31' -- BETWEEN
   AND dept_id IN (1, 2, 3)                     -- IN
   AND role NOT IN ('Intern', 'Contractor')     -- NOT IN
   AND email LIKE '%@example.com'               -- LIKE (pattern match)
   AND phone NOT LIKE '999%'                    -- NOT LIKE (pattern mismatch);

SELECT DISTINCT
   e.emp_id AS employee_id,
   CONCAT(e.first_name, ' ', e.last_name) AS full_name,
   e.salary,
   d.dept_name,
   e.hire_date
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE
   e.salary BETWEEN 3000 AND 10000
   AND e.is_active = TRUE
   AND d.dept_name IN ('HR', 'IT', 'Finance')
   AND e.first_name LIKE 'ak%' -- '%ak', '%ak%'
ORDER BY e.salary DESC, e.experience DESC -- when salary is same, check exp
GROUP BY e.emp_id, e.first_name, e.last_name, e.salary, d.dept_name, e.hire_date
HAVING COUNT(e.emp_id) = 1
LIMIT 10 OFFSET 5; 
-- LIMIT 5, 10;

SELECT
   emp_id,
   first_name,
   last_name,

   -- COALESCE: If middle_name is NULL, use 'N/A'
   COALESCE(middle_name, 'N/A') AS middle_name,

   -- NULLIF: If bonus equals 0, treat it as NULL
   NULLIF(bonus, 0) AS adjusted_bonus,

   -- CASE: Set salary grade based on salary amount
   CASE
      WHEN salary >= 10000 THEN 'A'
      WHEN salary >= 5000 THEN 'B'
      WHEN salary >= 3000 THEN 'C'
      ELSE 'D'
   END AS salary_grade
FROM employees;

SET @total_salary = 50000;

-- *DML*

-- Insert: Adds new records (rows) into a table.
INSERT INTO employees (id, name, salary) 
VALUES 
(1, 'Alice', 50000),
(2, 'Bob','9000');

-- Update: Modifies existing records in a table.
UPDATE employees 
SET salary = 55000 
WHERE id = 1;

UPDATE employees 
SET salary = 55000 
WHERE id in (1, 2, 3, 4);

-- Delete: Removes specific records from a table.
DELETE FROM employees 
WHERE id = 2;

DELETE FROM employees 
WHERE salary < 30000;

-- *Data Types*
CREATE TABLE employees (
   -- Numeric Types
     employee_id    INT             -- 101
     col_tinyint    TINYINT         -- 1
   , col_smallint   SMALLINT        -- 32767
   , col_bigint     BIGINT          -- 9876543210
   , col_numeric    NUMERIC(8, 2)   -- 12345.67
   , salary         DECIMAL(10,2)   -- 65000.50
   , bonus          FLOAT           -- 5000.75

   -- Boolean / Bit
   , is_active      BOOLEAN         -- TRUE
   , col_bit        BIT             -- b'1'

   -- String Types
   , first_name     VARCHAR(50)     -- 'Alice'
   , phone          CHAR(10)        -- '9876543210'
   , col_text       TEXT            -- 'This is a short description.'
   , col_longtext   LONGTEXT        -- 'This is a very long text used for documents.'

   -- Date & Time Types
   , date_of_birth  DATE            -- '1990-05-15'
   , hire_date      DATETIME        -- '2020-08-01 09:30:00'
   , col_time       TIME            -- '14:30:00'
   , col_timestamp  TIMESTAMP       -- '2024-12-31 14:30:00'
   , col_year       YEAR            -- 2025

   -- Binary Types
   , col_binary     BINARY(4)       -- 0xDEADBEEF
   , col_varbinary  VARBINARY(8)    -- 0xCAFEBABE

   -- Special Types
   , col_enum       ENUM('small', 'medium', 'large')  -- 'medium'
   , col_set        SET('a', 'b', 'c', 'd')           -- 'a,b'

   -- JSON (if supported)
   , extra_info     JSON            -- '{"department": "HR", "level": "Senior"}'
);

-- *KEYS*
-- !Primary Key

-- During table creation
CREATE TABLE employees (
   emp_id INT PRIMARY KEY,
   name VARCHAR(100)
);

-- Composite primary key
CREATE TABLE project_assignments (
   emp_id INT,
   project_id INT,
   PRIMARY KEY (emp_id, project_id)
);

-- Adding later
ALTER TABLE employees
ADD PRIMARY KEY (emp_id);

-- !Foreign Key

-- Creating two related tables
CREATE TABLE departments (
   dept_id INT PRIMARY KEY,
   dept_name VARCHAR(100)
);

CREATE TABLE employees (
   emp_id INT PRIMARY KEY,
   name VARCHAR(100),
   dept_id INT,
   FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

-- Adding foreign key later
ALTER TABLE employees
ADD CONSTRAINT fk_dept
FOREIGN KEY (dept_id) REFERENCES departments(dept_id);

-- !Unique Key

-- Unique column
CREATE TABLE users (
   user_id INT PRIMARY KEY,
   email VARCHAR(100) UNIQUE
);

-- Composite unique constraint
CREATE TABLE login (
   username VARCHAR(50),
   email VARCHAR(100),
   UNIQUE (username, email)
);

-- Adding later
ALTER TABLE users
ADD CONSTRAINT unique_email UNIQUE (email);

-- *CONSTRAINTS*

-- Created a table using all constraints
CREATE TABLE employees (
   emp_id INT PRIMARY KEY AUTO_INCREMENT,         -- PRIMARY KEY + AUTO_INCREMENT
   first_name VARCHAR(50) NOT NULL,               -- NOT NULL
   last_name VARCHAR(50) NOT NULL,                -- NOT NULL
   email VARCHAR(100) UNIQUE NOT NULL,            -- UNIQUE + NOT NULL
   salary DECIMAL(10, 2) CHECK (salary >= 3000),  -- CHECK
   hire_date DATE DEFAULT CURRENT_DATE,           -- DEFAULT
   dept_id INT,                                   -- Will be linked with FOREIGN KEY
   is_active BOOLEAN DEFAULT TRUE,                -- DEFAULT

   -- FOREIGN KEY constraint
   FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

-- *JOINS*

-- INNER JOIN
SELECT e.emp_id, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- LEFT JOIN
SELECT e.emp_id, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;

-- RIGHT JOIN
SELECT e.emp_id, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id;

-- FULL OUTER JOIN
SELECT e.emp_id, d.dept_name
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.dept_id;


SELECT e.emp_id, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id
UNION
SELECT e.emp_id, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id;

-- CROSS JOIN
SELECT c.color, s.size
FROM colors c
CROSS JOIN sizes s;

-- SELF JOIN
SELECT e.emp_id, e.first_name, m.first_name AS manager_name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.emp_id;

SELECT e.emp_id, e.first_name, m.first_name AS manager_name
FROM employees e, employees m
where e.manager_id = m.emp_id;

-- UNOIN
SELECT emp_id FROM employees
UNION
SELECT emp_id FROM managers;

-- UNOIN ALL
SELECT emp_id FROM employees
UNION ALL
SELECT emp_id FROM managers;

-- INTERSECT
SELECT e.emp_id
FROM employees e
INNER JOIN managers m ON e.emp_id = m.emp_id;

-- MINUS
SELECT e.emp_id
FROM employees e
LEFT JOIN managers m ON e.emp_id = m.emp_id
WHERE m.emp_id IS NULL;

-- NOT EXISTS
SELECT emp_id, first_name
FROM employees e
WHERE NOT EXISTS (
   SELECT 1 FROM managers m WHERE e.emp_id = m.emp_id
);




