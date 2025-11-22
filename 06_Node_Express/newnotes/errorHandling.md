# Node.js Error Handling Cheatsheet

A clean, production-ready summary for handling errors in Node.js and Express — concise, professional, and interviewer-impressive.

---

## ✅ 1. Handle Errors in Async Code

Use **try-catch** blocks to handle errors in `async/await` functions gracefully.

```js
app.get("/user/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.json(user);
	} catch (err) {
		res.status(500).json({ message: "Server Error" });
	}
});
```

> 🧠 Pro Tip: Always validate inputs before hitting the database to prevent unnecessary exceptions.

## ✅ 2. Express Error-Handling Middleware

Centralize error handling to avoid repetitive try-catch blocks.

```js
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: "Something went wrong!" });
});
```

- Keeps controllers clean.
- Automatically handles errors thrown in async functions when passed via next(err).

## ✅ 3. Async Handler Utility

Wrap async route handlers to catch unhandled promise rejections automatically.

```js
const asyncHandler = (reqHandler) => {
	return (req, res, next) => {
		Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
	};
};

// Usage
app.get(
	"/products",
	asyncHandler(async (req, res) => {
		const products = await Product.find();
		res.json(products);
	})
);
```

## ✅ 4. Global Error Handling Middleware

Create a **global** error handler for all routes — ideal for scalable apps.

```js
const errorHandler = (err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";

	res.status(statusCode).json({
		success: false,
		message,
		stack:
			process.env.NODE_ENV === "development"
				? err.stack
				: "🚫 Hidden for security",
	});
};

// after all routes
app.use(errorHandler);
```

- Hide stack traces in production for security.
- Send meaningful error messages to clients.
- Supports custom error classes (e.g., ValidationError, AuthError).

## ✅ 5. Bonus: Custom Error Class (Clean Architecture)

Create reusable error types for different failure cases.

```js
class AppError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
		this.isOperational = true;
	}
}

// Example usage
throw new AppError("User not found", 404);
```

### 🧩 Best Practices Summary

| Practice                        | Why It’s Important                                        |
| ------------------------------- | --------------------------------------------------------- |
| Use `asyncHandler`              | Avoid repetitive try-catch in each route                  |
| Centralize errors in middleware | Cleaner, maintainable code                                |
| Hide stack traces in production | Prevent sensitive info leaks                              |
| Use custom error classes        | More descriptive and controllable errors                  |
| Log errors smartly              | Helps with debugging and monitoring (e.g., Winston, Pino) |
