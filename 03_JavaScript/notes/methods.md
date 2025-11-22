# JavaScript Methods

## 📦 JavaScript Object Methods

**Objects store key-value pairs and support various built-in methods.**

### 📌 Common Methods:

- `Object.create(null)` → to create a object
- `Object.keys(obj)` → returns array of keys
- `Object.values(obj)` → returns array of values
- `Object.entries(obj)` → returns array of `[key, value]` pairs
- `Object.assign(target, source)` → copies properties
- `Object.freeze(obj)` → ❄️ make object immutable but its shallow use deepFreeze
- `Object.hasOwn(obj, key)` → checks key existence
- `obj.hasOwnProperty("city")` → checks key existence

### 🧪 Example:

```js
const user = { name: "John", age: 30 };
console.log(Object.keys(user)); // ["name", "age"]
```

### ✅ Uses:

- Iterating over properties
- Cloning or merging objects
- Checking or extracting metadata

## 🧩 JavaScript Array Methods

**Arrays hold ordered elements and come with powerful methods.**

### 📌 Common Methods:

- `push()` / `pop()` → add/remove from end
- `shift()` / `unshift()` → add/remove from start
- `map()` → transforms and returns new array
- `filter()` → filters and returns new array
- `reduce()` → reduces to single value
- `forEach()` → loops but returns undefined

### 🧪 Example:

```js
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2); // [2, 4, 6]
```

### ✅ Uses:

- Data transformation
- Aggregation
- Search/filter operations

## 🔤 JavaScript String Methods

**Strings are immutable sequences of characters with useful methods.**

### 📌 Common Methods:

- `charAt(index)` → character at index
- `slice(start, end)` → substring
- `toUpperCase()` / `toLowerCase()`
- `includes(substr)` → boolean check
- `split(delimiter)` → array of substrings
- `trim()` → removes whitespace

### 🧪 Example:

```js
const msg = " Hello ";
console.log(msg.trim()); // "Hello"
```

### ✅ Uses:

- Text manipulation
- Parsing input
- Case handling

## 🔁 JavaScript Loops – Differences & Return Values

| Loop Type              | Description                         | Returns        | Breakable |
| ---------------------- | ----------------------------------- | -------------- | --------- |
| `for`                  | Traditional loop (init; cond; incr) | `undefined`    | ✅ Yes    |
| `for...of`             | Iterates over iterable values       | `undefined`    | ✅ Yes    |
| `for...in`             | Iterates over object keys           | `undefined`    | ✅ Yes    |
| `while` / `do...while` | Loop with condition check           | `undefined`    | ✅ Yes    |
| `forEach()`            | Array method for looping            | `undefined`    | ❌ No     |
| `map()`                | Transforms array items              | ✅ New array   | ❌ No     |
| `filter()`             | Filters based on condition          | ✅ New array   | ❌ No     |
| `reduce()`             | Reduces array to single value       | ✅ Final value | ❌ No     |

### 🧪 Example:

#### ✅ `for` loop

```js
// Used when you know the number of iterations.

for (let i = 0; i < 3; i++) {
	console.log(i); // 0, 1, 2
}
```

#### ✅ `for...in` loop

```js
// Used to loop over object keys (properties).

const user = { name: "Alice", age: 25 };

for (let key in user) {
	console.log(key, user[key]);
	// name Alice
	// age 25
}
// 🟡 Use for...in only with objects (not arrays), as it loops over keys.
```

#### ✅ `for...of` loop

```js
// Used to loop over iterable values (arrays, strings, etc.).

const colors = ["red", "green", "blue"];

for (let color of colors) {
	console.log(color);
	// red
	// green
	// blue
}

// 🟢 Works with arrays, strings, Sets, Maps, etc.
```

#### ✅ `while` loop

```js
// Runs as long as the condition is true.

let i = 0;
while (i < 3) {
	console.log(i);
	i++;
	// 0, 1, 2
}
```

#### ✅ `do...while` loop

```js
// Runs at least once, then checks the condition.

let i = 0;
do {
	console.log(i);
	i++;
	// 0, 1, 2
} while (i < 3);
```

#### ✅ `forEach()`

```js
// Calls a function for each item in an array (no return value).

const nums = [1, 2, 3];
nums.forEach((n) => console.log(n * 2));
// 2, 4, 6

// 🚫 Can't break or return from loop
```

#### ✅ `map()`

```js
// Transforms each item and returns a new array.

const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]
```

#### ✅ `filter()`

```js
// Returns a new array with only items that match condition.

const nums = [1, 2, 3, 4];
const even = nums.filter((n) => n % 2 === 0);
console.log(even); // [2, 4]
```

#### ✅ `reduce()`

```js
// Reduces array to a single value.

const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

### ⚠️ Notes:

- Use map, filter, reduce for functional programming
- Use for, while when you need flexibility (e.g., early break)
- forEach is not chainable and doesn’t return a result

## ⏳ JavaScript Promises

**Promises handle asynchronous operations and represent a value that may be available now, later, or never.**

### 📌 Common Methods:

- `new Promise((resolve, reject) => {})` → creates a promise
- `promise.then(onFulfilled)` → handles success
- `promise.catch(onRejected)` → handles errors
- `promise.finally(onSettled)` → runs regardless of outcome
- `Promise.all([...])` → waits for all to resolve
- `Promise.race([...])` → resolves/rejects with the first
- `Promise.allSettled([...])` → waits for all (regardless of success/failure)
