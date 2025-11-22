import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// handle all socket.io

// socket = clients
io.on("connection", (socket) => {
	// console.log("a new user has connected", socket.id);
	socket.on("user-message", (message) =>
		// console.log("A new message from user: ", message)
		io.emit("server-message", message)
	);
});

// http request handling : express

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
	return res.sendFile("/public/index.html");
});

server.listen(3000, () => {
	console.log("server is running of prot 3000");
});
