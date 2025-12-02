# 🚀 JavaScript Output-Based Interview Questions (With Explanations)

> Master these and you'll be ready for any output-based JavaScript interview.

---

## 🧩 1. Variable Hoisting & Temporal Dead Zone (TDZ)

### Q1:

```js
console.log(a);
var a = 10;
console.log(b);
let b = 20;
```

🧠 Output:

```js
undefined
ReferenceError: Cannot access 'b' before initialization
```

### Q2:

```js
sayHi();
function sayHi() {
	console.log("Hello 1");
}
function sayHi() {
	console.log("Hello 2");
}
```

🧠 Output:

```
Hello 2
```

> Function declarations are hoisted completely, and the last one wins.

## 🧠 3. `this` Keyword Inside Objects & Functions

```js
const user = {
	name: "Alice",
	greet: function () {
		console.log(this.name);
	},
};

const greet = user.greet;
greet();
```

```
undefined
```

Explanation:

- When extracted, `this` becomes `undefined` (or `window` in non-strict mode).
- Use `user.greet()` to `bind` this to `user`.

## 🌀 4. Arrow Functions & `this`

```js
const user = {
	name: "Bob",
	arrow: () => {
		console.log(this.name);
	},
	normal() {
		console.log(this.name);
	},
};

user.arrow();
user.normal();
```

```
undefined
Bob
```

Explanation:

- Arrow functions don’t have their own `this`; they inherit it from their outer scope.
- `normal()` binds `this` to `user`.

## ⚙️ 5. Closures & Loops

```js
for (var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 0);
}
```

```
3
3
3
```

Fix with let:

```js
for (let i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 0);
}
// Output: 0 1 2
```

Explanation:

- `var` has function scope → all callbacks share the same `i` (value 3 after loop).
- `let` has block scope → each iteration gets its own `i`.

## 6. Event Loop & Microtasks

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

```
A
D
C
B
```

Explanation:

- JS executes synchronously first (A, D).
- Then microtasks (promises → C).
- Then macrotasks (timeouts → B).

## 🧮 7. Type Coercion

```js
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log("A" - "B" + "2");
```

```
122
32
02
NaN2
```

> number + string = string
> string + number = string

> number - string = number
> string - number = number

## 💥 8. Destructuring & Default Values

```js
const { a = 1, b = 2 } = { a: undefined, b: null };
console.log(a, b);
```

🧠 Output:

```
1 null
```

Explanation:

- Default values apply only when the property is `undefined`, not `null`.

## 🧩 9. Object Keys & Reference Behavior

```js
const obj = {};
const a = { key: "a" };
const b = { key: "b" };

obj[a] = 123;
obj[b] = 456;
console.log(obj[a]);
```

```
456
```

Explanation:

- Object keys are converted to strings — both a and b become "[object Object]".

Explanation:

- In JavaScript, object keys are automatically converted to strings (or Symbols).
- When you use another object as a key, it’s converted to the string "[object Object]".
- Both a and b therefore map to the same key, so the second assignment overwrites the first.

Step-by-step breakdown of `obj`

| Step | Code                   | What Happens                                             | `obj` State                  |
| ---- | ---------------------- | -------------------------------------------------------- | ---------------------------- |
| 1    | `const obj = {};`      | Create empty object                                      | `{}`                         |
| 2    | `obj[a] = 123;`        | `a` converts to `"[object Object]"`                      | `{ "[object Object]": 123 }` |
| 3    | `obj[b] = 456;`        | `b` converts to `"[object Object]"`, overwrites same key | `{ "[object Object]": 456 }` |
| 4    | `console.log(obj[a]);` | Looks up same key → `456`                                | Output: `456`                |

## 🧱 10. Equality Traps

```js
console.log([] == ![]);
```

🧠 Output:

```
true
```

Explanation:

- ![] → false
- [] == false → Number([]) is 0 → 0 == 0 → true.

## ⚡ 11. Async/Await Execution Order

```js
async function test() {
	console.log(1);
	await Promise.resolve();
	console.log(2);
}
test();
console.log(3);
```

🧠 Output:

```
1
3
2
```

Explanation:

- `await` pauses only the async function, not the entire program.

## 🔁 12. Prototypes & Inheritance

```js

```

## 🔥 13. Spread Operator & Mutation

```js
const arr = [1, 2, 3];
const copy = arr;
const spread = [...arr];

copy.push(4);
spread.push(5);

console.log(arr);
```

```
[1, 2, 3, 4]
```

Explanation:

- `copy` references the same array.
- `spread` creates a new shallow copy.

## 🧠 14. Optional Chaining & Nullish Coalescing

```js
const obj = { name: null };
console.log(obj?.name ?? "default");
```

```
default
```

## 🧩 15. Trickiest Nested Promises

```js
Promise.resolve()
	.then(() => console.log(1))
	.then(() => {
		console.log(2);
		return Promise.resolve().then(() => console.log(3));
	})
	.then(() => console.log(4));
```

```
1
2
3
4
```

## 🧮 16. Rest & Spread Parameter Confusion

```js
function sum(a, ...rest) {
	console.log(rest);
}
sum(1, 2, 3);
```

```
[2, 3]
```

## 🧩 17. Object.freeze vs Mutations

```js
const obj = Object.freeze({ a: 1, b: { c: 2 } });
obj.b.c = 3;
console.log(obj.b.c); // 3
```

Explanation:

- Object.freeze is shallow — nested objects can still be mutated.

## 🧨 18. Immediately Invoked Functions (IIFE)

```js
(function (x) {
	return (function (y) {
		console.log(x);
	})(2);
})(1);
```

```
1
```

### 🔄 19. Promise vs setTimeout Order

```js
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```

```
End
Promise
setTimeout
```

### 🎭 20. Chained Assignments

```js
let a = { n: 1 };
let b = a;
a.x = a = { n: 2 };
console.log(a.x);
console.log(b.x);
```

```
undefined
{ n: 2 }
```

Explanation:

- Assignment is right-to-left.
- a.x is evaluated first (on old a), then a is reassigned.

---

| Concept       | Key Learning                                     |
| ------------- | ------------------------------------------------ |
| Hoisting      | `var` = undefined, `let/const` = TDZ             |
| this          | Depends on **call site**, not where defined      |
| Closures      | Functions remember outer variables               |
| Event Loop    | Microtasks (Promise) before Macrotasks (Timeout) |
| Type Coercion | `+` triggers string/number conversions           |
| Destructuring | Defaults apply only to `undefined`               |
| Object Keys   | Converted to strings                             |
| Prototypes    | Shared methods among instances                   |
| Freeze        | Shallow only                                     |
| Spread        | Shallow copy, new reference                      |
