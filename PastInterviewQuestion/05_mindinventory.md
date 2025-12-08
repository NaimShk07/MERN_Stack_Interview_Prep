## 1. What challenges did you face in your project?

1. State Management & Performance:
   - In the networking app with multiple features like referrals and testimonials, managing state across modules was challenging.
   - I implemented Redux Toolkit with proper slicing and memoization, which improved performance and scalability.

## 2. JSON vs Object – What are the differences?

## 3. How does reference vs value work in JavaScript?

## 4. What is Git?

## 5. merge vs batch

- **Merge** is a Git operation that integrates changes from one branch into another, combining histories and creating a new commit (merge commit).
- **Batch** is not a standard Git term but often refers to **batching multiple changes/commands together**, e.g., staging multiple files or running multiple commits in a sequence via scripts.

---

### Merge:

- Combines branches, preserving history.
- Can create a merge commit if branches have diverged.
- Useful for integrating feature branches into main or develop.

```bash
git checkout main
git merge feature-branch
```

### Batch (Conceptual):

- Grouping multiple operations (like commits, pushes) into one action.
- Often done via scripting or tools to automate repetitive Git tasks.
- Not a native Git command but a workflow practice.

## 6. how will you merge specific commit from the multiple commits

- Use `git cherry-pick` to **merge a specific commit** (not the entire branch) into your current branch.

---

### ✅ Steps:

```bash
# 1. Checkout to the target branch (where you want the commit)
git checkout main

# 2. Cherry-pick the specific commit using its hash
git cherry-pick <commit-hash>
```

## 7. Explain the difference between spread and rest operators.

## 8. What is the difference between interfaces and types?

**`interface`** and **`type`** are both used to define `object` shapes in TypeScript, but have different capabilities and use-cases.

- `interface` is best for defining object structures
- `type` is more flexible: supports primitives, unions, intersections
- `interface` supports declaration merging; `type` does not
- Both can be extended, but in slightly different ways

```ts
// interface / type
interface / type User {
	name: string;
	age: number;
}
```

### ✅ Key Points

- 📌 Use `interface` for class-based and extendable structures
- ⚡ Use `type` for unions (`|`), intersections (`&`), and primitives
- 🧪 `type` is more versatile, but `interface` is better for consistent object modeling

## 9. How do you identify which component re-renders most in the component hierarchy? How do you debug it?

Use **React Developer Tools** and **profiling techniques** to detect unnecessary or frequent re-renders in your component tree.

- 🧪 Use **React Profiler** tab in React DevTools
- ⚡ Wrap components with `React.memo()` to test re-renders
- 🛠️ Use custom `console.log` or `why-did-you-render` for debugging

```tsx
// Enable profiling in React DevTools
// Example: Adding React.memo to reduce re-renders
const MyComponent = React.memo(function MyComponent({ value }) {
	console.log("Rendered:", value);
	return <div>{value}</div>;
});
```

### ✅ Key Points

- 📌 Use React DevTools Profiler to record and inspect re-renders
- 🔍 Look for components with high "Render duration" or frequent re-renders
- 🧰 Use `why-did-you-render` (3rd-party lib) to track unnecessary renders
- 🧼 Optimize with `memo`, `useMemo`, `useCallback` to avoid prop-based re-renders

## 10. What is the difference between deep copy and shallow copy?

## 11. What are JavaScript Objects and their methods?

## 12. How do you make a secure and robust application from:

### 🔐 Frontend?

- ✅ Use **HTTPS** to encrypt communication
- 🔑 Store sensitive data (like tokens) in **httpOnly cookies**, not `localStorage`
- 🧱 Implement **input validation** and sanitize user input
- 🚫 Avoid exposing secrets in frontend code or `.env` files
- 🔒 Use **Content Security Policy (CSP)** and **helmet** for protection against XSS
- 🔁 Handle errors gracefully and avoid leaking stack traces

```js
// Example: escaping user input to prevent XSS
const safeInput = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
```

---

### 🛡️ Backend?

- ✅ Validate and sanitize all incoming data (e.g. `express-validator`)
- 🔐 Use **authentication (JWT, OAuth)** and **authorization checks**
- 🛠️ Handle errors and rate limit APIs (`express-rate-limit`)
- ⚠️ Avoid logging sensitive data (passwords, tokens)
- 🔒 Use HTTPS and CORS properly
- 📦 Keep dependencies updated and monitor vulnerabilities

```js
// Example: using helmet and rate limit middleware in Express
app.use(require("helmet")());
app.use(require("express-rate-limit")({ windowMs: 60000, max: 100 }));
```

---

### 🗄️ Database?

- 🔐 Use **parameterized queries / ORM** to prevent SQL injection
- 🛡️ Limit DB user permissions (principle of least privilege)
- 🔒 Encrypt sensitive fields (e.g. passwords with bcrypt)
- 📊 Monitor slow queries and performance issues
- 🔁 Backup regularly and apply patches
- ✅ Use environment variables for DB credentials

```js
// Example: parameterized query (safe)
db.query("SELECT * FROM users WHERE id = ?", [userId]);
```

---

### ✅ Key Points

- 🔐 Security is **end-to-end**: frontend, backend, and DB must all be hardened
- 🚀 Robustness = secure code + validation + error handling + performance
- 🧪 Always test with tools like **OWASP ZAP**, **Postman**, or **Burp Suite**

## 13. What is XML and how is it used?

**XML (eXtensible Markup Language)** is a markup language used to store and transport data in a structured, readable format.

- 📦 Data is stored in a **tag-based tree structure**
- 🔄 Commonly used for **data exchange** between systems (especially older APIs)
- 🧩 Similar to HTML, but user-defined tags
- 💬 Used in config files, SOAP APIs, RSS feeds, etc.

```xml
<!-- Example XML -->
<user>
  <name>Alice</name>
  <age>25</age>
</user>
```

### ✅ Key Points

- 🔍 XML is **strict** with structure and requires closing tags
- 🛠️ Parsed using DOM parsers or libraries (e.g. `xml2js` in Node.js)
- 🔁 Still used in enterprise systems and legacy integrations
- ⚠️ Larger and more verbose than JSON

## 14. JSX vs JS – What are the differences?

## 15. How can you hide payload of API in browser network tab ?

You **cannot fully hide** network payloads in the browser — client-side requests are visible to users/devtools. Instead, minimize exposure and make payloads useless to attackers via server-side design and cryptographic measures.

- ⚠️ **Impossible to completely hide** requests/responses from browser DevTools or a user with access to the client machine
- ✅ Move sensitive work/data to the **server** (do not send secrets to client)
- 🔐 Use `HTTPS` (TLS) so eavesdroppers on the network cannot read payloads
- 🧾 Send **opaque tokens** (session id/JWT) instead of raw secrets or sensitive data
- 🔁 Use server-side lookup: client sends token → server returns only what client is authorised to see
- 🔒 If client-side encryption is required, use **public-key encryption** (encrypt with server public key) — but remember the client still can see ciphertext in devtools

```js
// Example: browser encrypts small payload with server public key (Web Crypto API)
// Note: this obfuscates the payload in transit, but the request itself is still visible in DevTools.
async function encryptAndSend(publicKeyJwk, dataObj, url) {
	const enc = new TextEncoder();
	const publicKey = await crypto.subtle.importKey(
		"jwk",
		publicKeyJwk,
		{ name: "RSA-OAEP", hash: "SHA-256" },
		false,
		["encrypt"]
	);
	const ciphertext = await crypto.subtle.encrypt(
		{ name: "RSA-OAEP" },
		publicKey,
		enc.encode(JSON.stringify(dataObj))
	);
	await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/octet-stream" },
		body: new Uint8Array(ciphertext), // visible in Network tab (ciphertext only)
	});
}
```

### ✅ Key Points / Best Practices

- 📌 **Don’t store secrets** in frontend (`localStorage`, JS bundles) — use `httpOnly` cookies for session tokens
- 📌 Prefer **server-side authorization and data assembly** — client only requests identifiers/tokens
- 📌 **HTTPS always**; keep server validation strict (rate-limit, revoke tokens)
- ⚡ Avoid security by obscurity (minifying/obfuscating JS is NOT secure)
- 🛡️ For native apps, additional protections (certificate pinning, secure enclave) help, but for web apps DevTools can still inspect requests

✅ Bottom line: make payloads **non-sensitive** on the client and rely on server-side controls — that's the robust, practical solution.

## 16. forEach vs map, what both return?
