## 1. what is contructor

- A constructor is a special function used to **create and initialize objects**.  
  In JS, it can be written as a **constructor function** or inside a **class**.

---

**1. Constructor Function (old way):**

```js
function Person(name, age) {
	this.name = name;
	this.age = age;
}

const user = new Person("Naim", 25);
console.log(user.name); // "Naim"
```

**2. Class Constructor (ES6 way):**

```js
class Car {
	constructor(brand) {
		this.brand = brand;
	}
}

const car1 = new Car("Tesla");
console.log(car1.brand); // "Tesla"
```

---

## 2. 🗄️ What is ORM?

## 2.1 📜 What is ODM?

## 3. 🟢 Latest Version of Node.js

## 4. 📦 What is NPM?

[npm](../06_Node_Express/newnotes/npm.md)

---

## 5. 🔄 Require vs Import in Node.js

[click](../06_Node_Express/newnotes/nodejs_qna.md#L151)

> In short: require is older (CommonJS), import is modern (ESM). Today, ES Modules (import/export) are preferred for new projects.

---

## 6. 🔡 VARCHAR vs CHAR in SQL

## 7. 🔗 Different Types of Joins in SQL

## 8. 💳 What is a Transaction in SQL?

## 9. 📜 What is a Stored Procedure in SQL?

## 10. What is Trigger

## 11. 🗂️ What is an Index in SQL?

## 11.2 how does index work under the hood

## 11.3 ⚖️ Pros & Cons of Index in SQL

## 11.4 🧠 Should We Add Index on All Columns?

## 12. 🗑️ DELETE vs TRUNCATE vs DROP in SQL

## 13. now vs current_date

## 14. 🟦 What is Binary JSON (BSON)?

## 15. 🟢 Default Port of MongoDB

- **Default Port:** `27017`
- **Other Ports:**
  - `27018` → Used by **shard** in sharded clusters
  - `27019` → Used by **config servers** in sharded clusters

---

## 16. ⚛️ Why We Use React?

## 17. ⚠️ Limitations of React

## 18. 🔑 What Are Keys in React?

## 19. 🔑 React Keys & What Happens If You Don’t Pass Them

## 20. 📝 How to Handle Forms in React

### ⚡ Key Points

- Use **controlled components**: form input values are stored in **React state**.
- Update state on **`onChange`** events.
- Handle submission via **`onSubmit`**, prevent default browser behavior with `e.preventDefault()`.
- Can use **`useState`** or form libraries like **Formik / React Hook Form** for complex forms.

---

## 21. how to toggle between dark and light mode in react

### ⚡ Key Points

- Use **React state** to track current theme (`dark` or `light`).
- Apply **conditional CSS classes** or **Inline CSS** based on state.
- Can store prefer

### 🧪 Example

```js
document.body.className = darkMode ? "dark" : "light";
// or
<div style={{ backgroundColor: darkMode ? "black" : "white" }}></div>;
```

---

## 22. ⚛️ What is JSX?

## 22.1 📖 Expression vs Statement in JavaScript

---

### ⚡ Expression

- Produces a **value**.
- Can be used **`wherever a value is expected`** (inside JSX, assignment, etc.).
- Examples:
  ```js
  5 + 10; // → 15
  user.name; // → "Naim"
  isLoggedIn ? "Yes" : "No"; // → "Yes" or "No"
  ```

### ⚡ Statement

- Performs an action but `does not return a value` directly.
- Cannot be used directly inside JSX.
- Examples:

  ```js
  if (isLoggedIn) { ... }
  for (let i = 0; i < 5; i++) { ... }
  function greet() { ... }
  ```

---

## 22.2 why can't we use if else in jsx

### ⚡ Reason

- JSX is syntactic sugar for JavaScript expressions,
  and in JSX you can only use `expressions, not statements`.
- if-else is a statement, so it doesn’t work directly inside JSX.

> In short: Use ternary, &&, or helper functions instead of raw if-else inside JSX.

---

## 23. 📦 Rendering Arrays Directly in JSX

```jsx
const fruits = ["Apple", "Banana", undefined, null, "Mango"];
return <div>{fruits}</div>;
```

### ✅ Behavior

- Output → AppleBananaMango
- null, undefined, and boolean values are ignored.
- Numbers and strings are rendered.
- Plain objects → ❌ error (Objects are not valid as a React child).

### ⚡ Examples

```
["Hi", false, "Bye"]   // HiBye
["A", 0, "B"]          // A0B
["X", NaN, "Y"]        // XNaNY
```

> In JSX, undefined/null/boolean are ignored, numbers & strings render, objects throw error
