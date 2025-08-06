// import mongoose from "mongoose";

// const connectMongoDB = async () => {
// 	try {
// 		const conn = await mongoose.connect(process.env.MONGO_URI, {
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 			// useCreateIndex: true,        // Optional: only if needed
// 			// useFindAndModify: false      // Optional: deprecated in Mongoose 6+
// 		});

// 		console.log(`🟢 MongoDB connected: ${conn.connection.host}`);
// 	} catch (err) {
// 		console.error("🔴 MongoDB connection error:", err.message);
// 		process.exit(1); // Exit process with failure
// 	}
// };

// export default connectMongoDB;
