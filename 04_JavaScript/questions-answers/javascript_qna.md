## 1. What is javascript, why use, pros and cons?

- JavaScript is a **high-level, interpreted programming language**.
- Runs mainly in the **browser**, but also on the **server (Node.js)**.
- Used to make web pages **interactive and dynamic**.
-
- just for info below
- JavaScript is a single-threaded, dynamically typed, prototype-based, high-level interpreted programming language, primarily used for creating interactive web applications.

---

### ❓ Why Do We Use JavaScript?

- To create **interactive web apps** (clicks, forms, animations, etc.)
- To handle **DOM manipulation**
- To make **API calls (fetch data without reload)**
- For **full-stack development** (Node.js + React)

---

### ✅ Pros of JavaScript

- 🌐 Runs in all browsers (no setup needed)
- ⚡ Fast execution (just-in-time compilation)
- 🧩 Works with HTML & CSS
- 💻 Supports both frontend & backend (with Node.js)
- 📦 Huge ecosystem (npm, libraries, frameworks)

---

### ❌ Cons of JavaScript

- 🐞 Loosely typed → more runtime bugs
- 🕵️‍♂️ Security issues (can be exploited if not handled properly)
- 🌍 Different browser behaviors (need polyfills sometimes)
- 🧠 Async can be tricky (callbacks, promises, etc.)

---

## 1.1 JavaScript Characteristics Explained

### 1️⃣ Dynamically Typed

- Variable types are **decided at runtime**, not during compilation.

```js
let x = 10; // number
x = "Hello"; // now it's a string — no error
```

### 2️⃣ Loosely Typed (Weakly Typed)

- Variables can hold any type, and JavaScript automatically converts types when needed (sometimes unexpectedly).
- Can lead to bugs if not careful with type coercion

```js
console.log(1 + "2"); // "12" → number + string = string
console.log("5" - 2); // 3 → string converted to number
```

### 3️⃣ Prototype-Based

- `first learn prototypes`
- JavaScript uses prototypes instead of classical classes for inheritance.
- Objects can inherit properties/methods from other objects.
- Inheritance is done via object prototypes, not classes (until ES6 introduced class as syntax sugar)

```js
const person = {
	greet() {
		console.log("Hi");
	},
};
const student = Object.create(person);
student.greet(); // Inherits from person
```

### High-Level

- Abstracts away low-level things like memory management, pointers, etc.
  - 🧼 Easier to write, read, and understand compared to low-level languages like C

### Interpreted Language

- Code is executed line-by-line at runtime, not compiled ahead of time.
  - 💻 Browsers or Node.js interpret JS code on the fly (using V8 engine, for example)

---

## 1.2 🧩 What is a Polyfill?

- A **polyfill** is a piece of code (usually JavaScript) that **adds support for modern features** in **older browsers** that don’t support them natively.

> It's like a "patch" that lets your code work across all environments.

---

### 🛠 Example:

- A polyfill is fallback code that adds support for modern JavaScript features in older browsers. It lets me use the latest features without breaking compatibility.

Suppose you're using `Array.prototype.includes()` — supported in modern browsers, but not in Internet Explorer.

You can add a polyfill like this:

```js
if (!Array.prototype.includes) {
	Array.prototype.includes = function (value) {
		return this.indexOf(value) !== -1;
	};
}
```

Now older browsers will understand .includes()!

---

## 1.3 what do you mean by this : 🕵️‍♂️ Security issues (can be exploited if not handled properly)

---

## 1. Scope

- Scope determines where variables can be accessed in your code.
- Types Global, Functional and Block(let and const)
- Functional (){}
- Block {}

---

## 2. Hoisting

- Hoisting means JavaScript moves **declarations** (not initializations) to the top of their scope before running the code.
- variables (var) and functions can be used before they are declared.
- Only var and function declarations are hoisted, let and const are also hoisted but in different way. let and const are in a "temporal dead zone" before declaration.

---

## 3. Temporal dead zone

- The Temporal Dead Zone is the time between when a let or const variable is hoisted and when it is actually declared in the code.
- During this time, accessing the variable throws an error.

---

## 4. Closures

- A closure is a function that remembers variables from the outer scope or parent function even after the outer function has finished executing.

---

## 5. Execution context

- An Execution Context is the environment in which JavaScript code is evaluated and executed.
- Every time a function runs, a new execution context is created.

---

## 6. Difference between var, let and const

- var : can redeclare, can reassign, has function scope and can be hoisted.
- let : can't redeclare, can reassign, has block scope and can be hoisted(TDZ).
- const : can't redeclare, can't reassign, has block scope and can be hoisted(TDZ).

---

## 7. Regular functions vs Arrow functions

- Dynamic (based on how called) | Lexical (inherits from parent scope)
- arguments object: Available | No
- Hoisting : Yes | No
- can be constructor : Yes (can with new) | No
- Use case: General functions, methods, constructors | Small callbacks, non-method functions
- Use arrow functions for short tasks and when you want to inherit this.
- Use regular functions when you need your own this, arguments, or hoisting.

---

## 8. this keyword

- this keyword is special keyword in javascript which changes it's value in different context
- in global scope similar like call but
- in method scope -> object

---

## 9. bind/call/apply

- datanova: 38.2
- All three are used to manually set the value of this.
- to change function's this value to some object of our choice we can use call apply bind
- call: change the value of this to a given object
- apply: similar like call but 2nd arg always an array
- bind: similar like call but dont call straight it return a function for later call

---

## 10. Promises

- A Promise is a JavaScript object that represents the eventual result (or failure) of an asynchronous operation.
- state: pending(initial), fulfilled and rejected
- Promises make async code cleaner and chainable
- new Promise((resolve,reject) => {})

---

## 11. async / await

- async makes a function return a Promise.
- await waits for the Promise to resolve/reject before continuing.
- for error handling you have to use try catch

---

## 12. fetch api

- The Fetch API is used to make HTTP requests (like GET, POST) from the browser.
  It returns a Promise that resolves to the response.

---

## 13. Event loop, Microtask and macrotask

- The Event Loop is the mechanism that allows JavaScript to perform non-blocking, asynchronous operations — even though JavaScript is single-threaded.
- It manages what code runs now and what runs later.
- JavaScript executes:
  1. Synchronous code (line by line)
  2. Then all Microtasks
  3. Then one Macrotask, and repeats the cycle.
- Execution Order: Call Stack ➝ Microtask Queue ➝ Macrotask Queue
- Microtasks: .then(), catch(), async/await, fetch api
- Macrotasks: setTimeout, setInterval

---

## 14. Microtasks vs Macrotasks

---

## 15. map, filter, reduce, find, some, every

- map: Creates a new array.
- filter: Creates a new array with element that pass a condition.
- reduce: Reduces the array to a single value.
- find: Returns the first element that matches a condition.
- some(or): Returns true if at least one element matches the condition.
- every(and): Returns true if all elements match the condition.

---

## 17. Object/Array destructuring, spread/rest operator

- Destructuring Extract values from objects or array
- Spread : Expand array/object contents
- Rest : Gather "rest" of values

---

## 18. Optional chaining ?., nullish coalescing ??

- Use ?. to avoid crashes on missing properties. Right before the property where parent obj might not exist.

---

## 19. && vs ?? vs ||

- && — AND: If the first thing is true, return the second.
- || — OR: If the first thing is false, use the second.
- ?? — Nullish Coalescing: If the first thing is null or undefined, use the second.

---

## 20. Module system: import/export, CommonJS vs ESM

- CommonJS:
  - require() / module.exports
  - .js
  - Synchronous
- ESM:
  - import/export
  - .mjs (or set "type": "module" in package)
  - Asynchronous

---

## 20. IIFE

---

## 21. What is Javascript?

- JavaScript is a high-level, interpreted programming language used to make web pages interactive. It runs in browsers and can also be used on servers (like with Node.js).

---

## 22. Higher Order Function

---

## 23. Prototype & Prototypal Inheritance

---

## 24. Pure & Impure functions

---

## 25. Lamba Function

---

## 26. Curring

---

## 27. First Class Fuctions

---

## 28. New keyword

---

## 29. Object in Js

---

## 30. Accessing Object Properties 2 Ways

---

## 31. Strict mode

---

## 32. Localstorage vs Sessionstorage

---

## 33. Cookies & Session

---

## 34. Lexical environment

---

## 35. Array and string includes

---

## 36. Debounce

---

## 37. Throttle

---

## 38. Deep copy

---

## 39. Flatten array

---

## 40. Unique values

---

## 41. moduel scope and type of scopes

---

## 42. memoize function

---

## 43. es6 vs before

```

```

```

```
