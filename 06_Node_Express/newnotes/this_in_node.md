## This keyword is Node.JS

The keyword **`this`** refers to the **execution context** — i.e., the object that owns the currently executing code.

📌 **Key Points:**

| Context               | `this` refers to                |
| --------------------- | ------------------------------- |
| **Global scope**      | Empty object `{}` / `undefined` |
| **Regular function**  | `global`                        |
| **Method call**       | The object owning the method    |
| **Arrow function**    | Inherited from parent scope     |
| **Class constructor** | The class instance              |

🧪 **Example:**

```js
// Global scope
// commonjs.js
console.log(this); // {}

// esm.mjs or "type": "module" in package.json
console.log(this); // undefined

// Regular function
function showThis() {
	console.log(this);
}

showThis(); // global

// Method Call
const user = {
	name: "Alice",
	sayHi() {
		console.log(this.name);
	},
};

user.sayHi(); // "Alice" → `this` = user

// Arrow function
const obj = {
	name: "Node",
	display: () => console.log(this),
};
obj.display(); // `this` from parent (not `obj`)

// Class Constructor
class Person {
	constructor(name) {
		this.name = name;
	}
	greet() {
		console.log(`Hi, I'm ${this.name}`);
	}
}

const p = new Person("Charlie");
p.greet(); // "Hi, I'm Charlie" → `this` = class instance
```

✅ Key Takeaways:

- `this` is dynamic in normal functions but static (lexical) in arrow functions
- In Node.js modules, `this` ≠ global — it refers to the module.exports object
- Understanding `this` is crucial for callbacks, OOP, and asynchronous code in Node.js
