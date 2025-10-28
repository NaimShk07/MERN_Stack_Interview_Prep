-- *VIEWS*

-- Create
CREATE VIEW recent_orders AS
SELECT *
FROM orders
WHERE order_date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY);

-- Get data from view
SELECT * FROM recent_orders;

-- Update
CREATE OR REPLACE VIEW view_name AS
-- new SELECT query

-- Delete
DROP VIEW view_name;

-- Get all the views from db
SHOW FULL TABLE WHERE Table_type = "VIEW"

-- Insert & Update
CREATE TABLE employees (
   id INT PRIMARY KEY,
   name VARCHAR(50),
   salary DECIMAL(10,2)
);

CREATE VIEW employee_salaries AS
SELECT id, name, salary
FROM employees;

INSERT INTO employee_salaries (id, name, salary)
VALUES (4, 'David', 60000);

UPDATE employee_salaries
SET salary = 65000
WHERE name = 'David';

-- With check option
CREATE VIEW high_earners AS
SELECT * FROM employees
WHERE salary > 50000
WITH CHECK OPTION;

INSERT INTO high_earners (id, name, salary)
VALUES (5, 'Eve', 40000);  -- ❌ rejected because salary < 50000

-- *FUNCTIONS*

-- Create
DELIMITER $$

CREATE FUNCTION get_avg_salary()
RETURNS DECIMAL(10,2)
DETERMINISTIC             -- Helps the optimizer know if results can be cached
READS SQL DATA            -- To get data from the table
BEGIN
   DECLARE avg_sal DECIMAL(10,2);

   SELECT AVG(salary) INTO avg_sal
   FROM employees;

   RETURN avg_sal;
END$$

DELIMITER ;

SELECT get_avg_salary();  -- e.g. returns 55000.00

-- Drop
DROP FUNCTION IF EXISTS get_avg_salary;

-- Show all function
SHOW FUNCTION STATUS
WHERE Db = 'your_database_name';

-- Show specific function
SHOW CREATE FUNCTION get_avg_salary;

-- *TRIGGER*

-- Create
DELIMITER $$

CREATE TRIGGER after_salary_update
AFTER/BEFORE INSERT/UPDATE/DELETE ON employees
FOR EACH ROW
BEGIN
   IF OLD.salary != NEW.salary THEN
      INSERT INTO salary_audit(emp_id, old_salary, new_salary, changed_at)
      VALUES (OLD.id, OLD.salary, NEW.salary, NOW());
   END IF;
END$$

DELIMITER ;

-- Show all trigger
SHOW TRIGGERS;

-- *EVENTS*

-- To start events
SET GLOBAL event_scheduler = ON;
SHOW VARIABLES LIKE 'event_scheduler';

CREATE EVENT event_name
ON SCHEDULE EVERY 1 DAY 
-- ON SCHEDULE EVERY 1 DAY STARTS CURRENT_TIMESTAMP
-- ON SCHEDULE AT '2025-08-20 10:00:00'
DO
BEGIN
   -- your SQL code here
END;

-- Show event
SHOW EVENTS;
SHOW CREATE EVENT event_name;

-- Disable/Enable event
ALTER TABLE event_name DISABLE/ENABLE;

-- Delete event
DROP EVENT IF EXISTS event_name;

-- *INDEX*

-- Create
CREATE INDEX idx_name_salary
ON employees (name, salary);

-- Show
SHOW INDEX FROM employees;

-- Delete
DROP INDEX idx_employee_name ON employees;

-- *PROCEDURE* 

-- Create
DELIMITER $$

CREATE PROCEDURE get_total_employees(IN emp_id INT,OUT total INT)
BEGIN
   SELECT COUNT(*) INTO total FROM employees;
END$$

DELIMITER ;

-- Usage:
CALL get_total_employees(2, @total);
SELECT @total;

-- Show procedure
SHOW PROCEDURE STATUS WHERE Db = DB_NAME

-- Delete
DROP PROCEDURE IF EXISTS get_all_employees;

-- *LOOPS*
DECLARE x INT DEFAULT 1;

loop_label: LOOP
   IF x > 5 THEN
      LEAVE loop_label;
   END IF;

   SELECT x;
   SET x = x + 1;
END LOOP;

-- *WHILE*
DECLARE i INT DEFAULT 1;

WHILE i <= 5 DO
   SELECT i;
   SET i = i + 1;
END WHILE;

-- *REPEAT*
DECLARE i INT DEFAULT 1;

REPEAT
   SELECT i;
   SET i = i + 1;
UNTIL i > 5
END REPEAT;

-- *REMAINING*

-- *CURSORS*
-- *IF/ELSE*
-- *LEAVE*
-- *TRANSACTIONS*
-- *WINDOW FUNCTION*
-- *WITH CLAUSE*
-- *RECURSIVE QUERY - CTE*
-- *QUERY OPTIMIZATION*
