import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

// app.use(cors()); // allow all origins
app.use(
	cors({
		origin: "http://localhost:3000", // allow only frontend
		methods: ["GET", "POST"],
	})
);
app.use(express.json());
app.use("/api", routes);

// Global error handler
app.use(errorHandler);

export default app;
