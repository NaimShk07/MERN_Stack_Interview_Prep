import mongoose from "mongoose";
import app from "./app.js";

mongoose
	.connect(
		"mongodb+srv://nayemuddinshaikh:nayemuddin123@cluster0.thumj3x.mongodb.net/mongodbpractice"
	)
	.then((value) => {
		console.log("DB connected host: ", value.connection.host);

		app.listen(3000, () => {
			console.log("Server is running on port: ", 3000);
		});
	})
	.catch((error) => {
		console.log("MongoDB connection error: ", error);
	});
