# Node.js API Optimization & Security Cheatsheet

---

## API Optimization

### 1. Use Asynchronous, Non-blocking Code

- Use `async/await` for cleaner async flows.
- Avoid blocking operations (e.g., sync file access, heavy loops).
- Use streaming for large data transfers (uploads/downloads).

### 2. Optimize Database Queries (MongoDB, SQL)

- Use proper `indexes` on frequently queried fields.
- Avoid **N+1 queries** by batching requests.
- Use **projection** to fetch only necessary fields.
- Implement **pagination** with `limit` and `skip` to avoid large payloads.

### 3. Payload & Response Optimization

- Limit payload size by returning only needed data.
- Use **gzip compression** (e.g., `compression` middleware).
- Apply pagination to large datasets.

### 7. Enable & Configure CORS Properly

- Use the `cors` middleware in Express to control which origins can access your API.
- Avoid setting `Access-Control-Allow-Origin: *` for sensitive APIs.
- Whitelist only trusted domains to prevent unauthorized cross-origin requests.

```js
const allowedOrigins = ["https://yourdomain.com", "https://trustedpartner.com"];

app.use(
	cors({
		origin: function (origin, callback) {
			// allow non-browser requests like Postman
			if (!origin) return callback(null, true);
			if (!allowedOrigins.includes(origin)) {
				return callback(new Error("Not allowed by CORS"), false);
			}
			return callback(null, true);
		},
	})
);
```

### 4. Caching Strategies

- Use **Redis** or in-memory caches for frequent/repeated API responses.
- Cache semi-static data like dropdowns, stats.
- Serve static assets via CDN or cache proxies.

### 5. Connection Handling & Resource Management

- Use **connection pooling** for database connections.
- Avoid query queues and long waits.
- Use **clustering** or process managers (e.g., PM2) to utilize all CPU cores.

### 6. Handling High Load on Limited Resources

- Enable aggressive caching.
- Apply **rate limiting** to prevent abuse.
- Use a **load balancer or reverse proxy** (Nginx, HAProxy) for compression and queuing.
- Offload heavy or async jobs to message queues (RabbitMQ, Bull).
- Serve static files through CDNs (Cloudflare, S3 + CloudFront).
- Scale horizontally with Node.js clustering:

```js
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
	for (let i = 0; i < os.cpus().length; i++) {
		cluster.fork();
	}
}
```

## API Security

### 1. Authentication & Authorization

- Use JWT, API keys, or sessions to authenticate users.
- Implement authorization checks to restrict user actions.

### 2. Hide Sensitive Info

- Don’t expose passwords, tokens, or error details in responses.

### 3. Rate Limiting

- Prevent `brute-force` or `spam` with express-rate-limit or similar:

```js
const rateLimit = require("express-rate-limit");
app.use(
	rateLimit({
		windowMs: 1000, // 1 second
		max: 100, // limit each IP to 100 requests per window
	})
);
```

### 3. Use CORS(Cross-Origin Resource Sharing) properly

- Restrict which domains can access your APIs.

### 3. Environment Variables

- Store secrets (DB URI, JWT keys) in `.env`
- Never hardcode credentials

### 3. Secure HTTP Headers

- Use `helmet` middleware
- Sets security-related HTTP headers

### 3. Error Handling

- Never expose full error stack traces to clients
- Log errors securely (e.g., Winston, Sentry)

### 4. HTTPS Enforcement

- Always serve APIs over HTTPS to prevent MITM attacks.
- Encrypts data in transit — protects against data leaks/sniffing.

### 5. Minimize Public Exposure

- Do not expose sensitive endpoints publicly.
- Restrict access to critical APIs via authentication.

### 6. Backend Security Enforcement

- Do not rely on frontend checks alone.
- Enforce security (auth, rate limiting, input validation) on the backend.

### 7. Input Validation & Sanitization

- Validate all inputs strictly.
- Sanitize inputs to prevent injection (SQL, NoSQL, XSS).

## Summary: How to Speed Up a Slow API (Step-by-step)

### 1. Analyze API logic

- Identify blocking code, large payloads, or unnecessary loops.
- Use profiling (console.time(), profilers).

### 2. Optimize DB queries

- Add indexes, use projection, batch queries.
- Implement pagination.

### 3. Add caching layer

- Cache frequent or semi-static data with Redis or memory.

### 4. Ensure async, non-blocking code

- Use async/await correctly.
- Avoid sync operations in request lifecycle.

### 5. Manage connections efficiently

- Use connection pooling.
- Avoid DB query queueing.

### 6. Handle high load with limited resources

- Rate limit aggressively.
- Use clustering and load balancers.
- Offload heavy jobs to queues.
- Serve static content via CDN.

> Pro Tip: Always profile your API to identify bottlenecks before optimizing. Use a combination of async coding, caching, indexing, and resource management for best performance and security.
