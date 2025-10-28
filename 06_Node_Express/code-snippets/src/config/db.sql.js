import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
	host: process.env.SQL_DB_HOST,
	user: process.env.SQL_DB_USER,
	password: process.env.SQL_DB_PASS,
	database: process.env.SQL_DB_NAME,
	multipleStatements: true,
	connectionLimit: 5000,
	waitForConnections: true,
	queueLimit: 0,
});

export default pool;
