## 1. What is Webpack?

**Webpack** is a **module bundler** for JavaScript applications. It bundles JS files (and other assets) into a single or smaller number of files for efficient loading.

- 📦 Combines modules (JS, CSS, images) into bundles
- ⚙️ Uses loaders to process non-JS files (e.g., SCSS, TS)
- 🧩 Uses plugins for tasks like minification or HTML generation
- 🚀 Optimizes assets for production

```js
// basic webpack.config.js
module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist",
	},
	mode: "production",
};
```

### ✅ Key Points

- Improves performance by reducing file size & requests
- Enables modern JS features (via Babel loaders)
- Common in React, Angular, Vue projects

## 2. How to use JavaScript in HTML & how many ways?

JavaScript can be added to HTML in **three main ways**:

---

### 1️⃣ **Inline JavaScript**

- JS code written directly inside an HTML element's attribute

```html
<button onclick="alert('Hello')">Click Me</button>
```

---

### 2️⃣ **Internal JavaScript**

- JS code inside a `<script>` tag within the HTML file

```html
<script>
	console.log("Hello from internal JS");
</script>
```

---

### 3️⃣ **External JavaScript**

- JS code in a separate `.js` file and linked via `<script src="...">`

```html
<script src="main.js"></script>
```

---

### ✅ Key Points

- 📌 External JS is preferred for maintainability
- 🧼 Avoid inline JS for cleaner and more secure code
- 🚀 Internal JS is useful for quick tests or small pages

## 3. How to import a file in JS that is included in HTML?

To use `import` in a JS file that's linked in HTML, you must mark the `<script>` tag as a **module**.

---

### ✅ Steps:

1. Use `type="module"` in your HTML `<script>` tag
2. Use `import` statements inside your JS file
3. Make sure the file is served from a server (not just opened via `file://`)

---

### 📦 Example:

#### `index.html`

```html
<script type="module" src="main.js"></script>
```

#### `main.js`

```js
import { greet } from "./utils.js";
greet();
```

#### `utils.js`

```js
export function greet() {
	console.log("Hello from module!");
}
```

---

### ⚠️ Notes

- 🔐 Module scripts run in **strict mode by default**
- 🌍 Must use a **web server** (e.g., `Live Server`, `vite`, or `http-server`)
- 📌 Module imports must use **relative or absolute paths**

## 4. What is TypeScript?

**TypeScript** is a **superset of JavaScript** that adds **static typing** to the language.

- 📌 Written in `.ts` files, compiled to standard JavaScript
- ✅ Helps catch errors during development (at compile time)
- 🔍 Adds types, interfaces, enums, generics, etc.
- 💡 Great for large codebases and team projects

```ts
function greet(name: string): void {
	console.log("Hello, " + name);
}
greet("Alice"); // ✅ OK
greet(123); // ❌ Error: Argument of type 'number' is not assignable to 'string'
```

### ✅ Key Points

- Requires a compiler (`tsc`) to convert `.ts` → `.js`
- Fully supports modern JS + adds type safety
- Popular in frameworks like Angular, Next.js, etc.

## 4.1 JavaScript vs TypeScript

| Feature           | JavaScript         | TypeScript                               |
| ----------------- | ------------------ | ---------------------------------------- |
| 🔤 Typing         | Dynamic (no types) | Static (with optional types)             |
| 🧪 Error Checking | Runtime            | Compile-time                             |
| 🔧 Compilation    | Not required       | Compiled to JS using `tsc`               |
| 📦 File Extension | `.js`              | `.ts`                                    |
| 🧠 Learning Curve | Easy               | Slightly higher                          |
| 🛠️ Tooling        | Basic              | Rich IDE support (intellisense, linting) |

### ✅ Example

```ts
// TypeScript
function add(a: number, b: number): number {
	return a + b;
}
```

```js
// JavaScript
function add(a, b) {
	return a + b;
}
```

### 📌 Summary

- ✅ Use **JavaScript** for quick projects or when type safety isn’t needed
- ✅ Use **TypeScript** for large apps, better tooling, and early error detection

## 5. Can we use TypeScript in a Node.js project?

✅ Yes, you can use **TypeScript** in Node.js projects to write safer and more maintainable server-side code.

---

### 📦 Steps to set up:

1. **Initialize project**

```bash
npm init -y
```

2. **Install TypeScript & types**

```bash
npm install typescript ts-node @types/node --save-dev
```

3. **Create `tsconfig.json`**

```bash
npx tsc --init
```

4. **Write `.ts` files** instead of `.js`

```ts
// index.ts
const greet = (name: string): void => {
	console.log(`Hello, ${name}`);
};
greet("Node");
```

5. **Run using `ts-node`**

```bash
npx ts-node index.ts
```

---

### ✅ Key Points

- Requires transpilation: `.ts` → `.js` (use `tsc` or `ts-node`)
- Use `@types/...` packages for type definitions of Node/core modules
- Works well with Express, MongoDB, PostgreSQL, etc.
- Combine with tools like `nodemon` for auto-reload:

```bash
npx nodemon --watch src -e ts --exec "ts-node src/index.ts"
```

## 6. How to use TypeScript in a React project?

✅ TypeScript can be integrated with React to add static typing, better tooling, and safer code.

---

### 🛠️ 1. Create a React + TypeScript project

```bash
npx create-react-app my-app --template typescript
```

- This sets up everything: React, TypeScript, JSX support, type declarations

---

### 📦 2. File extensions

- Use `.tsx` for components (JSX + TS)
- Use `.ts` for utility/helper files (TS only)

---

### 🧱 3. Basic Component Example

```tsx
// App.tsx
type Props = {
	name: string;
};

const App = ({ name }: Props) => {
	return <h1>Hello, {name}</h1>;
};

export default App;
```

---

### 📌 Key Points

- ✅ React props & state can be typed using `interface` or `type`
- 🧩 IDE auto-completion and error hints improve significantly
- 🔍 Use `React.FC` or explicit prop typing as preferred

---

### 🧰 Common types to use

- `React.FC` → Function component
- `React.ChangeEvent<HTMLInputElement>` → Input change event
- `useState<number>()` → Typed state hook

```tsx
const [count, setCount] = useState<number>(0);
```

## 7. How to use TypeScript in a plain JavaScript project?

✅ You can gradually add TypeScript to an existing JS project without rewriting everything.

---

### 🛠️ Steps to integrate TypeScript

1. **Initialize your project (if not already):**

```bash
npm init -y
```

2. **Install TypeScript**

```bash
npm install typescript --save-dev
```

3. **Create a `tsconfig.json` file**

```bash
npx tsc --init
```

4. **Rename files gradually**

- Start renaming `.js` files to `.ts` or `.tsx` (for React)
- You can mix `.js` and `.ts` files in the same project

5. **Add type definitions (if needed):**

```bash
npm install --save-dev @types/node
```

---

### 🔧 Example: Convert JS to TS

#### Before (`math.js`)

```js
function add(a, b) {
	return a + b;
}
```

#### After (`math.ts`)

```ts
function add(a: number, b: number): number {
	return a + b;
}
```

---

### ✅ Key Points

- 🔄 Gradual migration is possible (no need to rewrite all at once)
- 📦 Use `@types/...` for existing libraries
- 🔐 Add types for safer, scalable code
- 🧪 Use `tsc` to compile:

```bash
npx tsc
```

---

## 8. How to manage state in React without Redux?

✅ React provides several built-in and external tools to manage state **without using Redux**.

---

### 🔹 1. **useState (Local State)**

Used for simple, component-level state.

```tsx
const [count, setCount] = useState(0);
```

---

### 🔹 2. **useContext (Global State)**

Share state across multiple components without prop drilling.

```tsx
const MyContext = React.createContext(null);

function App() {
	const [user, setUser] = useState("Alice");

	return (
		<MyContext.Provider value={{ user, setUser }}>
			<Profile />
		</MyContext.Provider>
	);
}

function Profile() {
	const { user } = useContext(MyContext);
	return <p>User: {user}</p>;
}
```

---

### 🔹 3. **useReducer (Advanced local/global state)**

Similar to Redux but built into React.

```tsx
const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		default:
			return state;
	}
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

---

### 🔹 4. **Third-party alternatives**

- 🧠 `zustand` – minimal and easy global

## 9. Local Storage vs Session Storage

Both are part of the **Web Storage API** and used to store data in the browser, but they differ in lifespan and scope.

---

### 📦 Local Storage

- Persists even after the browser is closed
- Data stays until explicitly removed
- Available across tabs and windows (same origin)
- Max size ~5–10MB

```js
localStorage.setItem("name", "Alice");
localStorage.getItem("name"); // "Alice"
```

---

### 🕓 Session Storage

- Data is cleared when the **tab or window is closed**
- Only accessible in the **same tab**
- Also ~5MB per origin

```js
sessionStorage.setItem("token", "123abc");
sessionStorage.getItem("token"); // "123abc"
```

---

### ✅ Key Differences

| Feature     | Local Storage          | Session Storage            |
| ----------- | ---------------------- | -------------------------- |
| Lifespan    | Until manually cleared | Until tab is closed        |
| Scope       | Across all tabs        | Current tab only           |
| Persistence | Persistent             | Temporary                  |
| Use Case    | Remember users         | Temporary data (e.g. form) |

---

### ⚠️ Note

- ❌ Both are **not secure** for sensitive data (plain text)
- 🔐 Use `httpOnly` cookies or tokens for authentication

## 10. How to do INNER JOIN in MongoDB?

MongoDB doesn’t have SQL-style joins, but you can perform an **INNER JOIN-like** operation using the `$lookup` aggregation stage.

---

### 🔗 `$lookup` – Acts like a LEFT JOIN

To make it behave like an **INNER JOIN**, use `$lookup` with `$match` to filter out non-matching records.

---

### 🧱 Example:

#### `orders` collection:

```json
{ "_id": 1, "item": "Pen", "custId": 101 }
```

#### `customers` collection:

```json
{ "_id": 101, "name": "Alice" }
```

#### Aggregation with INNER JOIN logic:

```js
db.orders.aggregate([
	{
		$lookup: {
			from: "customers", // target collection
			localField: "custId", // field in orders
			foreignField: "_id", // field in customers
			as: "customerInfo",
		},
	},
	{
		$match: { "customerInfo.0": { $exists: true } }, // filters out unmatched
	},
	{
		$unwind: "$customerInfo", // optional: flatten array
	},
]);
```

---

### ✅ Key Points

- `$lookup` performs a LEFT JOIN by default
- Add `$match` to simulate INNER JOIN behavior
- Use `$unwind` to flatten the joined array

## 11. What is `populate` in MongoDB (Mongoose)?

**`populate`** is a Mongoose method used to **replace references (ObjectIds) with actual documents** from related collections.

---

### 🔗 Why use `populate`?

- MongoDB stores references between documents as ObjectIds
- `populate` fetches and injects the related documents automatically
- Makes querying related data simpler and cleaner

---

### 🧪 Example:

#### Schemas:

```js
const userSchema = new mongoose.Schema({
	name: String,
});

const postSchema = new mongoose.Schema({
	title: String,
	author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
```

#### Using `populate`:

```js
Post.find()
	.populate("author") // replaces author ObjectId with User document
	.then((posts) => {
		console.log(posts);
	});
```

---

### ✅ Key Points

- `populate` works only in Mongoose (Node.js ODM), not raw MongoDB
- Can populate multiple fields or nested documents
- Useful for handling relationships without manual joins

## 11. What is a JWT Token?

**JWT (JSON Web Token)** is a compact, URL-safe token format used for **secure information exchange** between parties.

- 📦 Contains **JSON data** (claims) encoded and signed
- 🔐 Used mainly for authentication & authorization
- 🕒 Can include expiry and user data in the token itself

---

### 🧱 Structure of JWT

```
HEADER.PAYLOAD.SIGNATURE
```

- **Header:** Token type & signing algorithm
- **Payload:** Claims (user info, expiry, etc.)
- **Signature:** Verifies token integrity

---

### 🧪 Example:

```js
// Payload example (decoded)
{
  "sub": "1234567890",
  "name": "Alice",
  "iat": 1516239022,
  "exp": 1516242622
}
```

---

### ✅ Key Points

- JWTs are **stateless** (no server storage needed)
- Used in APIs, single-page apps for secure access
- Can be signed with **HMAC** or **RSA keys**
- Keep tokens **secure**; store carefully (e.g., HttpOnly cookies)

## 12. How to secure API keys in a React application (without using `.env`)?

⚠️ Important: **Never expose secret API keys directly in frontend code** — React apps run in the browser, so keys can be viewed.

---

### Recommended Approaches:

### 1️⃣ Use a **Backend Proxy**

- Create a backend server to **handle API requests**
- Store API keys securely on the backend
- Frontend calls backend API endpoints, not third-party API directly

```js
// Frontend calls your backend
fetch("/api/data")
	.then((res) => res.json())
	.then((data) => console.log(data));
```

---

### 2️⃣ Use **Serverless Functions**

- Use platforms like Vercel, Netlify, AWS Lambda
- Serverless functions keep API keys hidden from the client

---

### 3️⃣ Restrict API Key Usage

- Configure API key restrictions (e.g., domain, IP whitelist) on provider side
- Limits misuse if key is leaked

---

### 4️⃣ Use **OAuth / Token-based Auth**

- Instead of API keys, use tokens that expire and can be revoked

---

### ❌ What **NOT** to do:

- Don’t hardcode keys in React source code
- Don’t expose keys in public GitHub repos
- `.env` files only protect keys at build time, but keys end up in bundled code

---

### ✅ Summary:

- Keep secret keys on server/backend
- Frontend talks to your secure backend or serverless functions
- Use API key restrictions & rotate keys regularly

## 13. How to send promotional/discount emails to multiple customers in Node.js without crashing the server?

Sending bulk emails requires careful handling to avoid server overload or getting blocked by email providers.

---

### ✅ Best Practices:

### 1️⃣ Use **Batching / Throttling**

- Send emails in small batches (e.g., 50-100 at a time)
- Add delays between batches to prevent spamming and server overload

```js
const BATCH_SIZE = 50;

async function sendEmails(customers) {
	for (let i = 0; i < customers.length; i += BATCH_SIZE) {
		const batch = customers.slice(i, i + BATCH_SIZE);
		await Promise.all(batch.map(sendEmail)); // send batch in parallel
		await sleep(2000); // wait 2 seconds before next batch
	}
}
```

---

### 2️⃣ Use **Queue System**

- Use tools like **Bull**, **RabbitMQ**, or **AWS SQS** to queue emails
- Workers process emails asynchronously, controlling load

---

### 3️⃣ Use **Third-party Email Services**

- Services like **SendGrid**, **Mailgun**, **AWS SES** handle bulk emailing and rate limits
- Use their APIs for reliability and better deliverability

---

### 4️⃣ Store Customers in a Table/DB

| id  | name  | email             | subscribed | lastSentDate |
| --- | ----- | ----------------- | ---------- | ------------ |
| 1   | Alice | alice@example.com | true       | 2025-10-01   |

- Query only subscribed customers
- Track last sent date to avoid resending too often

---

### 5️⃣ Handle Errors and Retries

- Log failed email sends
- Retry failures with exponential backoff

---

### 🧰 Tools/Modules

- `nodemailer` – for sending emails
- `bull` or `agenda` – for job queues
- `dotenv` – for managing email credentials

---

### Summary:

- **Batch emails + delays** to avoid overload
- Use **queues** for scalable processing
- Prefer **third-party email services** for deliverability
- Maintain **customer table** with subscription and send status

## 14. how to upload file in nodejs

- multer
