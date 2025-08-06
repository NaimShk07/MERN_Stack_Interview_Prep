import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import db from "./config/db.sql.js";
// import connectMongoDB from "./config/db.mongo.js";

const PORT = process.env.PORT || 3000;

// connectMongoDB();
const startServer = async () => {
	try {
		const [result] = await db.query("SELECT 1");
		console.log("🟢 Database connected successfully:", result);

		app.listen(PORT, () => {
			console.log(`🚀 Server running at http://localhost:${PORT}`);
		});
	} catch (err) {
		console.error("🔴 Failed to connect to the database:", err.message);
		process.exit(1);
	}
};

startServer();

// File system
import fs from "fs";
fs.writeFile("hello.txt", "Hello Naim!", (err) => {
	if (err) throw err;
	console.log("File created!");
});
fs.readFile("hello.txt", "utf8", (err, data) => {
	if (err) throw err;
	console.log("File content:", data);
});

// Path
const path = require("path");

const filePath = "/user/naim/files/notes.txt";

console.log("Base name:", path.basename(filePath)); // ➤ notes.txt
console.log("Directory:", path.dirname(filePath)); // ➤ /user/naim/files
console.log("Extension:", path.extname(filePath)); // ➤ .txt

const fullPath = path.join(__dirname, "folder", "file.txt");
console.log("Full path:", fullPath); // joins safely

// Streams
const fs = require("fs");

const readableStream = fs.createReadStream("largefile.txt", "utf8");

readableStream.on("data", (chunk) => {
	console.log("Received chunk:", chunk);
});

readableStream.on("end", () => {
	console.log("Done reading file");
});

// Buffer
const buffer = Buffer.from("Hello Naim");

console.log(buffer); // <Buffer 48 65 6c 6c 6f 20 4e 61 69 6d>
console.log(buffer.toString()); // "Hello Naim"

// http module
import http from "http";
const server = http.createServer((req, res) => {
	res.writeHead(200, { "content-type": "text/plain" });
	res.end("Hello World!!");
});

server.listen(3000, () => {
	console.log("server is running on http://localhost:3000");
});
