## 1. Polymorphism in db

## 2. What is React query and TanStack , it's use

## 3. Can We Use a Normal Function to Update Redux State?

📌 **No, we should not use a normal function to directly update Redux state.**  
Redux state must be updated **only via reducers** to maintain predictability and a single source of truth.

---

### 📌 Key Points

- Redux state is **immutable**; direct mutation breaks state tracking
- State updates must be **pure and predictable**
- All changes go through **dispatching actions → reducer → new state**
- Normal functions can mutate state but **bypass Redux flow**, breaking DevTools, middleware, and debugging

### ✅ Why Not Normal Functions?

- ❌ Direct mutation loses time-travel debugging
- ❌ Breaks predictable state updates
- ❌ Hard to maintain or test
- ✅ Reducers enforce pure, centralized, traceable state management

> Redux enforces a unidirectional data flow: actions → reducers → new state. Normal functions can’t replace reducers because they break immutability and predictability.

## 4. Optimizing Search in a Database

📌 **Optimizing search means improving query speed and reducing resource usage when retrieving data.**  
Focus is on indexing, query design, and database structure.

---

### 📌 Key Points

- Use **indexes** (B-Tree, Full-Text, Hash, Columnstore) on frequently searched columns
- Avoid `SELECT *`; select only **needed columns**
- Use **WHERE** clauses efficiently with indexed columns
- Use **JOINs carefully**; avoid unnecessary table scans
- Consider **denormalization** for read-heavy systems
- Use **query caching** or **materialized views** for repeated queries
- For text search, use **Full-Text Indexes** or external search engines (Elasticsearch, Algolia)

### ✅ Advantages / Uses

- ⚡ Faster query execution
- 📊 Better performance for large datasets
- 🔄 Reduced load on DB for repeated searches
- 🧪 Essential for analytics, reporting, and high-traffic apps

> Use EXPLAIN to check query plan

## 5. Web hook

## 6. Engine-Level Index Types (MySQL)

📌 **Engine-level index types define how the database physically stores and accesses data for faster searches.**  
These are selected when creating an index and are different from logical types like `primary` or `unique`.

---

### 📌 Key Index Types

- **B-Tree Index** ✅  
  Standard index for most queries; supports equality and range searches.
- **Full-Text Index** 🔍  
  Optimized for text search using `MATCH ... AGAINST`.
- **Hash Index** ⚡  
  Fast lookups for exact matches; mainly for MEMORY tables.
- **Spatial Index** 🗺️  
  For `geometry` or `geography` data types.
- **Columnstore Index** 📊  
  Optimized for analytical queries on large datasets.
- **XML Index** 📄  
  For indexing XML columns (primary + secondary indexes).

---

### 🔧 Example: Creating a B-Tree Index

```sql
CREATE INDEX idx_users_name ON users(name);
```

### ✅ Advantages / Uses

- ⚡ Faster data retrieval
- 📊 Optimized for different query types (text, spatial, analytical)
- 🧪 Enables large-scale and complex query performance
- 🔄 Reduces table scans and improves sorting/search efficiency

## 7. Axios Interceptor

## 8. Queue

## 8.1 Event Queue

## 8.2 Message Queue

## 9. Universal Time Zone (UTC)

📌 **UTC (Coordinated Universal Time) is the primary time standard used worldwide to regulate clocks and time.**  
It does **not** change with seasons (no daylight savings) and serves as the base for all global time zones.

## 10. useEffect vs useLayoutEffect

## 11. Local Storage vs Session Storage vs IndexedDB vs Cookies

## 12. Finding the Longest Common Prefix (LCP)

📌 **The longest common prefix is the longest starting substring shared by all strings in a list.**

```js
function longestCommonPrefix(strs) {
	if (!strs.length) return "";

	strs.sort();
	const first = strs[0];
	const last = strs[strs.length - 1];
	let i = 0;

	while (i < first.length && i < last.length && first[i] === last[i]) {
		i++;
	}

	return first.slice(0, i);
}
console.log(longestCommonPrefix(["aebcv", "aeq", "aeml", "aeiyt"]));
```

## 13. Move element 0 to last

```js
function moveZerosToEnd(arr) {
	let nonZeroIndex = 0;

	// Move non-zero elements forward
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			arr[nonZeroIndex] = arr[i];
			nonZeroIndex++;
		}
	}

	// Fill the rest with zeros
	for (let i = nonZeroIndex; i < arr.length; i++) {
		arr[i] = 0;
	}

	return arr;
}

console.log(moveZerosToEnd([1, 2, 0, 4, 5, 0, 3]));
```

## 14. Salary question

```sql
SELECT *
FROM employee
WHERE salary = (
   SELECT MAX(salary)
   FROM employee
   WHERE salary < (SELECT MAX(salary) FROM employee)
);
```

## 15. Polling, Long Polling, Server-Sent Events, and WebSockets
