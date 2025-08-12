-- Select all records from a table named employees
SELECT * FROM person p WHERE p.firstname = 'naeem';

-- Find the second highest salary from the salaries table.
SELECT * from tyn t ORDER BY t.tynamount DESC LIMIT 1 OFFSET 1;

-- Count the number of employees in each department.
SELECT o.organizationname,COUNT(p.personid) FROM organization o 
inner JOIN organizationperson op on op.OrganizationID = o.organizationid and op.status = 'active'
inner JOIN person p ON op.PersonID = p.personid and p.status = 'active'
WHERE o.organizationtype = 'RMB Chapter' 
and o.status = 'active' GROUP BY o.organizationname;

-- List employees who joined after 2020.
SELECT * FROM person p WHERE YEAR(p.createdon) < '2020';

-- Get all customers who have never placed an order.
-- (Use LEFT JOIN with IS NULL)
SELECT p.firstname,p.lastname FROM person p
LEFT JOIN tyn  t ON t.createdby = p.personid
WHERE t.tynid IS NULL;

-- Find duplicate email addresses in a users table.
SELECT e.email, count(e.emailid) AS count 
FROM email e 
GROUP BY e.email
HAVING `count`>1;

-- Update the salary by 10% for employees in the 'Sales' department.

-- Delete records where last_login is older than 1 year.

-- Get the total number of orders placed each month.

-- Fetch the top 3 highest-paid employees from each department.
-- (Use ROW_NUMBER() or RANK())

-- top 3 organization with highest tyn
SELECT o.organizationname,Sum(t.tynamount) as sum  FROM organization o
inner JOIN organizationperson op on op.OrganizationID = o.organizationid
inner join person p on p.personid = op.PersonID
inner JOIN tyn t on t.createdby = p.personid
GROUP BY o.organizationname
ORDER by sum DESC
LIMIT 3;