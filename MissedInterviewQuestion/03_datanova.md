## 1. Tell me about your current and previous projects

---

## 2. What is your role in the current project

---

## 3. dsa question : give longest substring without repeating

---

## 4. What is javascript

-- js qna 1

---

## 5. What is ecmascript

- ECMAScript ek standard hai jo batata hai JavaScript kaise kaam kare — jaise ek guideline ya rulebook.
- ECMAScript is the **specification** or rulebook for JavaScript.
- iska kaam hai rules define karna — jaise syntax, features, aur behavior.
- Bas, jitne naye versions aate hain (jaise ES6(2015), ES2020), naye features add hote hain.

---

## 6. synchronous vs asynchronous

### ⏱️ Synchronous

- Code is executed **line-by-line**, one after another.
- Each line **waits for the previous one** to finish.
- Can block the main thread (slow UI / performance issues).

### ⚡ Asynchronous

- Code runs non-blocking, allowing other tasks to continue.
- Useful for operations that take time — like API calls, timers, file read, etc.
- Uses: Callbacks, Promises, async/await

---

## 7. If there is a function that's asynchronous and it's 100 lines long — do all those 100 lines run in parallel or at the same time?

- JavaScript is single-threaded, so even in an async function, the lines of code run sequentially until the first await.
- Only the asynchronous parts (after await) are paused and resumed later — they don’t run in parallel.
- So, the 100 lines don’t run simultaneously; they run in order, unless some lines use await, callbacks, or Promises.

---

## 8. ⚡ What Are Events in JavaScript?

- Events are **actions or occurrences** that happen in the browser.
- The browser can respond to these events using **event listeners**.
- Common in interactive web apps.

---

### 🎯 Examples of Events:

- `click` – User clicks a button
- `keydown` – User presses a key
- `submit` – Form is submitted
- `load` – Page finishes loading
- `mouseover` – Mouse hovers over an element

---

## 9. 🎧 What is an Event Listener in JavaScript?

- An **Event Listener** is a function that **waits for a specific event to happen**, then runs code in response.

> It’s how we tell the browser: “When this happens, do that.”

---

## 10. 📦 Data Types in JavaScript

JavaScript has two main categories of data types:

---

### 🔹 1. **Primitive Data Types**

> Stored by value (not by reference)

- `String` → `"Hello"`
- `Symbol` → unique & immutable value (used as object keys)
- `Number` → `42`, `3.14`
- `Null` → intentional absence of value
- `Boolean` → `true`, `false`
- `BigInt` → large integers (e.g. `12345678901234567890n`)
- `Undefined` → declared but not assigned

---

### 🔸 2. **Non-Primitive (Reference) Data Types**

> Stored by reference (points to memory location)

- `Object` → `{ name: "John" }`
- `Array` → `[1, 2, 3]` (technically an object)
- `Function` → `function() {}` (also a type of object)

---

### 🧪 typeof Examples:

```js
typeof null; // "object" ❗ (JavaScript quirk)
typeof undefined; // "undefined"
typeof "hello"; // "string"
typeof 42; // "number"
typeof [1, 2, 3]; // "object"
typeof function () {}; // "function"
```

---

## 11. ⚖️ null vs undefined in JavaScript

| Feature | `null`                           | `undefined`                        |
| ------- | -------------------------------- | ---------------------------------- |
| Meaning | Intentional absence of value     | Variable declared but not assigned |
| Type    | `object` (weird JS quirk)        | `undefined`                        |
| Set By  | Developer (manually)             | JavaScript (by default)            |
| Usage   | When you want to "empty" a value | When a value hasn't been set yet   |

---

### ✅ Examples:

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

---

## 12. 🔍 What is Scope in JavaScript?

- **Scope** defines **where a variable is accessible** in your code.
- JavaScript has global, function, and block scopes depending on where and how variables are declared.

> It answers: "Can I access this variable here?"

- types: latitude: 15

---

## 13. Can We Create Scope Without Curly Braces?

- Scope creation depends on the type:
  - Block scope (for let/const) requires curly braces {}.
  - Function scope is created by functions themselves, which need {} for their body—except arrow functions with a single expression don’t use {} but still create function scope.
- So, you can’t create block scope without {}, but function scope exists with or without {} in concise arrow functions.

---

## 14. lexical scope

- Lexical scope means that the scope of a variable is determined by its position.
- In JavaScript, child functions have access to variables defined in their parent functions because of lexical scope.

---

## 15. what is closures, where/why should we use it

- A **closure** is when a function **remembers** variables from its outer scope, even after the outer function has finished executing.
- It gives you access to variables from an outer function **inside** an inner function, **even after** the outer function has returned.

```js
function outer() {
	let count = 0;
	return function inner() {
		count++;
		console.log(count);
	};
}

const counter = outer();
counter(); // 1
counter(); // 2
```

### 🔹 Where?

- **Data privacy:** To create private variables not accessible from outside.
- **Maintain state:** In functions like counters, timers, or caches.
- **Callbacks & event handlers:** To remember variables in asynchronous code.
- **Functional programming:** For partial application, currying, and memoization.

---

### 🔹 Why?

- To **encapsulate data** and avoid polluting global scope.
- To **keep state** without using global variables or classes.
- To write **cleaner, modular code** with better control over variables.

---

## 16. what is hoisting

- Hoisting is JavaScript's behavior of moving declarations to the top of their scope before the code is executed.

---

## 17. multi threading vs single threading

- Single Threading: A single thread can do only one task at a time in a specific order (synchronously).

  - Executes code line by line.
  - If one task takes time (e.g., file read), it blocks the others.
  - Example: JavaScript is single-threaded (main thread).

- Multi-threading allows a program to run multiple tasks at the same time (in parallel or concurrently).
  - Uses multiple threads.
  - Can handle multiple operations without waiting for one to finish.
  - Example: Java, C++, Python (with threading), and Node.js worker threads.

---

## 18. why javascript is so popular

- JavaScript is the only language natively supported by all web browsers.
- With Node.js, you can use JavaScript on the server-side too.
- allowing developers to use it on both the front-end and back-end. and it has low learning curve.

---

## 19. can we mongodb without javascript

- MongoDB can be used with many programming languages.
- Although MongoDB uses a JavaScript-like syntax in its shell (like db.collection.find()), you don't need to use JavaScript to interact with it in real projects.
- MongoDB uses BSON (Binary JSON) internally, which is language-neutral.
- This is why it's easy to integrate with multiple languages, not just JavaScript

---

## 20. what is callback in javascript

- A callback is a function passed as an argument to another function.
- It gets executed after the main function is done.
- Commonly used in asynchronous operations like API calls, timers, or file handling.
- Helps in handling tasks that take time without blocking the rest of the code.
- Can be synchronous or asynchronous, depending on how it’s used.

---

## 21. what is promises

- A Promise is a built-in JavaScript object used to handle asynchronous operations.
- It represents a value that may be available now, later, or never.
- Helps avoid callback hell and makes async code more readable.
- states: Pending, Fulfilled, Rejected

---

## 22. why we should use promise i we already have callback

- Callbacks definitely work—but they can quickly become messy and difficult to manage when dealing with multiple asynchronous tasks.
- This mess is often called **callback hell** deeply nested functions that are hard to read, maintain, and debug.
- Promises help solve this problem by allowing us to chain asynchronous operations using .then() and handle errors centrally with .catch(), leading to cleaner, more readable code.

---

## 23. what is call back hell

- **Callback Hell** refers to a situation in JavaScript where you have multiple nested callbacks, making the code hard to read, maintain, and debug.
- This usually happens when you perform many asynchronous operations that depend on each other, and you use callbacks to handle each step.

---

## 24. What is polyfil

-- js qna: 1.2

---

## 25. what is debouncing

- latitude : 12

---

## 26. what is closures, where should we use it

- above 15

---

## 27. What is Recursion?

- **Recursion** is a programming technique where a function **calls itself** to solve smaller instances of a problem.
- It breaks a complex problem into **simpler, smaller sub-problems**.
- Each recursive call works on a smaller piece until it reaches a **base case**, which stops the recursion.

---

## 28. what is Promise.all and Promise.race

### ✅ Promise.all

- Takes **an array of promises** and returns a **single promise**.
- Resolves **when all promises resolve**.
- Rejects **if any promise rejects**.
- Useful when you want **all async tasks done** before proceeding.

```js
Promise.all([promise1, promise2, promise3])
	.then((results) => {
		// results is an array of all resolved values
	})
	.catch((error) => {
		// error from any rejected promise
	});
```

### ⚡ Promise.race

- Takes an array of promises and returns a single promise.
- Resolves or rejects as soon as the first promise settles (either resolve or reject).
- Useful when you want the fastest response among multiple promises.

```js
Promise.race([promise1, promise2, promise3])
	.then((result) => {
		// result of the first settled promise
	})
	.catch((error) => {
		// error of the first rejected promise
	});
```

---

## 29. What is Ecmascript

- above 5

---

## 30. ⏳ What is the Temporal Dead Zone (TDZ)?

- TDZ is the time **between** a variable being **declared** and **initialized** where it **cannot be accessed**.
- It happens with **`let` and `const`**, not with `var`.

---

### 🔥 Example:

```js
console.log(x); // ❌ ReferenceError
let x = 10;
```

### 🧠 Why It Happens:

- let and const are hoisted, but not initialized.
- JavaScript knows the variable exists in memory, but it won’t allow access until the actual line of initialization.

---

## 31. ⏱️ 1. setTimeout vs setInterval

| Feature        | `setTimeout`              | `setInterval`                   |
| -------------- | ------------------------- | ------------------------------- |
| Purpose        | Runs **once** after delay | Runs **repeatedly** at interval |
| Executes after | Delay (in ms)             | Every interval (in ms)          |
| Returns        | Timeout ID                | Interval ID                     |

---

## 32. how to stop setinterval

- Use clearTimeout() and clearInterval() with the returned ID

```js
const timeoutId = setTimeout(() => {
	console.log("This won't run");
}, 2000);
clearTimeout(timeoutId);

clearInterval(intervalId);
```

---

## 33. typeof

- `typeof` is an **operator** used to **check the data type** of a value.
- It returns a **string** describing the type.

---

## 34. 🧠 typeof Array in JavaScript, why

```js
typeof [1, 2, 3]; // "object"
```

### Why is typeof array "object"?

- In JavaScript, arrays are a type of object.
- typeof can’t distinguish between arrays and general objects.
-
- to properly check: Array.isArray([1, 2, 3]); // true

### 💡 1. Arrays _are_ Objects in JavaScript

- In JavaScript, almost everything except primitives data types is an **object**.
- An **array is a special kind of object** — optimized for storing ordered data.

### ⚙️ 2. Internally, Arrays Are Objects with Extra Features

- Arrays are constructed using Array constructor, which is a function object.
- Under the hood, an array is just an object with:
  - Indexed keys (0, 1, 2...)
  - A special property called .length
  - Array-specific methods like .push(), .map(), .filter()

```js
const arr = [10, 20];
console.log(arr); // {0: 10, 1: 20, length: 2}
```

### 🧠 3. typeof is Not Precise

- The typeof operator is not meant to tell you the specific type of objects (like arrays, dates, etc.)
- It can only distinguish between primitive types and "object".

```js
// So even though you're writing:
const arr = [1, 2, 3];

// It's still:
const arr = new Array(1, 2, 3); // behind the scenes
```

> And this is an object, just with special behavior.

---

## 35. typeof string, any why ?

---

## 36. why type of array is object and string is string

---

## 37. what happen when you write a url and hit enter in browser

---

## 38. what is this keyword

---

## 38. call apply bind

---

## 39. console this keyword in browser and node js output ?, why

---

## 40. what is prototypes

---

## 41. output based

```js
console.log("Start");

setTimeout(async function () {
	console.log("Before await");
	await null;
	console.log("After await");
}, 0);

console.log("End");
```

```

start
end
Before await
After await

```

---

## 42. what is nodejs, why, advantage, disadvantage

---

## 43. pro and con of node.js

---

## 44. in which use case we should avoid using node.js

---

## 45. what is event loop in node js

---

## 46. what is v8 engine

---

## 47. what is rest api

---

## 48. difference between put vs patch

---

## 49. what is express.js, why, advantage, disadvantage

---

## 50. what is next functions

---

## 51. what is package.json

---

## 52. what is package-lock.json

---

## 53. difference between package.json vs package-lock.json

---

## 54. if i delete one of them, or both will the code/server work ?

---

## 55. if i delete node modules will the code/server work ?

---

## 56. can we use http module without node modules

---

## 57. what is git

---

## 58. what is database

---

## 59. before there were file manager, why do we need database

---

## 60. types of database

---

## 61. sql vs nosql

---

## 62. what is foreign key

---

## 63. what is unique key

---

## 64. what is orm, orm vs raw query

---

## 65. what is transaction

---

## 66. what is store procedures

---

## 67. store procedures vs function

---

## 68. what is normalization

---

## 69. what is indexes, why, disadvantage, advantage

---

## 70. how indexing works under the hood, how it make query faster

---

## 71. types is indexes

---

## 72. can we put index to all the column in the table

---

## 73. what is react.js, why, disadvantage, advantage

---

## 74. why use react.js if we had html css js

---

## 75. what is dom

---

## 76. what is virtual dom

---

## 77. what are components in react.js

---

## 78. can we make component with class

---

## 79. state vs prop

---

## 80. what is hooks

---

## 81. difference between useState vs useMemo

---

## 82. let take scenario, you are only full stack developer in the team and frontend is not loading or giving 500 error what are the steps you will take to fix this

---

## 83. suppose there is a dashboard and plenty of api is getting called in it how will decide which api is breaking or taking time longer then expected

---

## 84. suppose you got the api which taking time longer then expected so would you speed up the api, what the step you will take in node and db

---

## 85. suppose we have 2 gb memory and 4 bit cpu server(fixed non expandable) space and issue is from the server db has indexing , it query fast, and the issue is from server side because millions of request are coming to our server, so how will fix it

---
