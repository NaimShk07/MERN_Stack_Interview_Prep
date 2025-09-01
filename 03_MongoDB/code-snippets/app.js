import express, { urlencoded } from "express";
import userRoute from "./routes/user.route.js";
import logReqRes from "./middlewares/logger.middleware.js";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(logReqRes("Log.txt"));

// routes
app.use("/api/v1/user", userRoute);

export default app;
