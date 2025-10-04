## 1. What challenges did you face in your project?

1. State Management & Performance:
   - In the networking app with multiple features like referrals and testimonials, managing state across modules was challenging.
   - I implemented Redux Toolkit with proper slicing and memoization, which improved performance and scalability.

## 2. JSON vs Object – What are the differences?

### 🔶 1. Definition

- **JSON (JavaScript Object Notation)**: A _string-based_ data format used for data exchange. It is language-independent but based on JavaScript syntax.
- **Object**: A data structure in JavaScript used to store key-value pairs.

### 🔶 2. Syntax Differences

- JSON keys and string values **must be in double quotes**.
- JS Objects can have keys without quotes and support functions and other complex types.

```js
// JSON (valid only as a string)
'{ "name": "Alice", "age": 25 }'

// JavaScript Object
{ name: "Alice", age: 25 }
```

## 3. How does reference vs value work in JavaScript?

- **Primitive types** (`string`, `number`, `boolean`, etc.) are **passed by value** — a copy is created; changes don’t affect original.
- **Objects, Arrays, Functions** are **passed by reference** — variables point to the same memory; changes affect all references.
- Assigning primitives copies the value, assigning objects copies the reference.
- To avoid mutation bugs, use shallow/deep copies (`spread`, `Object.assign`, `structuredClone`).

---

### Examples:

```js
// Passed by value
let a = 5;
let b = a;
b = 10;
console.log(a); // 5

// Passed by reference
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // 'Bob'
```

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

Both use the `...` syntax but serve **opposite purposes** based on context.

---

### 🔹 Spread Operator (`...`)

- **Expands** elements of an iterable (like arrays or objects).
- Used in array/object literals or function calls to **unpack values**.

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3]; // [1, 2, 3]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
```

### 🔸 Rest Operator (...)

- Collects multiple elements into a single array.
- Used in function parameters or destructuring to pack values.

```js
function sum(...numbers) {
	return numbers.reduce((a, b) => a + b, 0);
}

const [first, ...rest] = [10, 20, 30];
// first = 10, rest = [20, 30]
```

## 8. What is the difference between interfaces and types?##

## 9. How do you identify which component re-renders most in the component hierarchy? How do you debug it?

## 10. What is the difference between deep copy and shallow copy?

## 11. What javascript object and their methods

## 12. How do you make a secure and robust application from:

    - Frontend?
    - Backend?
    - Database?

## 13. What is XML and how is it used?

## 14. JSX vs JS – What are the differences?

## 15. How can you hide payload of api in browser network tab ?

## 15. forEach vs map , what both return ?
