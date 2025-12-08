1. What is hoisting?
2. What is closure and how are they used in JavaScript?
3. Explain async/await and how it differs from promises.
4. How does the JavaScript event loop work?
5. What is debounce and throttle function?
6. What is deep copy vs shallow copy? In deep copy, if we update the copied variable, does it affect the original?
7. What would be the output of A and B? (Context: code output questions)
8. What would be the output of variable printed with var in setTimeout?
9. What would be the output of another code snippet? (Details discussed in the meeting.)
10. Create a function that flattens an array without using any inbuilt method.
11. What is event-driven architecture?

**Event-Driven Architecture (EDA)** is a software design pattern where **components communicate by emitting and responding to events** rather than calling each other directly.

Event-driven architecture = programs events ka wait karte hain aur jab event hota hai, turant react karte hain.

---

### 📌 Key Points

- System reacts to **events** (state changes or messages)
- Components are **loosely coupled** and independent
- Common in **microservices, Node.js applications, and real-time systems**
- Uses **event producers** and **event consumers**

---

### 🧪 Example (Node.js EventEmitter)

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listener
emitter.on("orderPlaced", (order) => {
	console.log("Processing order:", order.id);
});

// Emitting an event
emitter.emit("orderPlaced", { id: 101, item: "Laptop" });
```

12. What is asynchronous in Node.js?
13. What is the event loop in Node.js?
14. What’s the difference between process.nextTick, setImmediate, and setTimeout?
15. What are streams in Node.js?
16. What is the purpose of the cluster module?
17. How do you prevent re-renders in React?
18. What are custom hooks and why use them?

**Custom Hooks** are **user-defined functions in React** that allow you to **reuse stateful logic** across multiple components.  
They start with the prefix `use` and follow the same rules as React hooks.

---

### 📌 Key Points

- Encapsulate **reusable logic** (state, effects, context, etc.)
- Not components, just **functions that use hooks internally**
- Helps **avoid code duplication**
- Can be shared across projects or components

---

19. What is a React Portal?

A **React Portal** allows you to **render a component’s children into a DOM node outside the parent component’s DOM hierarchy**.  
It’s useful for modals, tooltips, or popups that need to visually break out of their parent container.

---

### 📌 Key Points

- Preserves **React context and state**
- Useful for **overlays, modals, tooltips, dropdowns**
- Syntax: `ReactDOM.createPortal(children, container)`
- Children behave normally in React, but rendered elsewhere in the DOM

---

### 🧪 Example

```jsx
import ReactDOM from "react-dom";

function Modal({ children }) {
	return ReactDOM.createPortal(
		<div className="modal">{children}</div>,
		document.getElementById("modal-root") // outside main DOM tree
	);
}

// Usage
function App() {
	return (
		<div>
			<h1>Main App</h1>
			<Modal>
				<p>This is a modal!</p>
			</Modal>
		</div>
	);
}
```

20. How do you handle error boundaries in React?

**Error Boundaries** are React components that **catch JavaScript errors in their child component tree**, log them, and display a fallback UI instead of crashing the whole app.

---

### 📌 Key Points

- Only **class components** can be error boundaries
- Implements **`static getDerivedStateFromError`** and **`componentDidCatch`**
- Catch errors during **rendering, lifecycle methods, and constructors**
- Do **not** catch errors inside event handlers

---

## Error Boundaries in Functional Components

**React functional components cannot natively be error boundaries** because error boundaries rely on **lifecycle methods** (`getDerivedStateFromError`, `componentDidCatch`) which only exist in class components.

However, you can handle errors in functional components using **hooks** and **third-party libraries**.

---

### 📌 Key Approaches

1. **Using `react-error-boundary` library**

   - Provides a hook-based API for error boundaries in functional components

2. **Try-catch in event handlers**
   - Functional components can handle errors inside **callbacks or effects**

---

### 🧪 Example Using `react-error-boundary`

```jsx
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong: {error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function MyComponent() {
  // This will throw an error for demo
  throw new Error("Demo error");
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MyComponent />
    </ErrorBoundary>
  );
```

21. Difference between Context API and React hooks.
22. What is the difference between useEffect and useLayoutEffect?
23. What is React Fiber architecture?

**React Fiber** is a complete rewrite of React's core **reconciliation algorithm**, designed to make rendering **incremental, interruptible, and more efficient**.  
It improves React's ability to handle **complex, asynchronous UIs**.

---

### 📌 Key Points

- Introduced in **React 16**
- **Breaks rendering work into units** (fibers) to avoid blocking the main thread
- Supports **prioritization of tasks** (high-priority updates like typing vs low-priority updates like animations)
- Enables **concurrent rendering**, **suspense**, and **time-slicing**
- Uses a **linked tree structure** for efficient diffing and scheduling

---

### 🧪 How It Works

1. **Fiber Tree**: Each element in the virtual DOM is represented by a fiber node
2. **Reconciliation**: React compares new fiber tree with previous one (diffing)
3. **Incremental Rendering**: Large updates are split into small units
4. **Scheduler**: Decides which updates to process first based on priority

---

### ⚡ Advantages

- ✅ Smooth and responsive UI for large/complex apps
- ✅ Supports **concurrent features** like Suspense and lazy loading
- ✅ Better control over update priorities and interruptions
- ✅ Prevents long blocking renders, improving UX

24. Difference between controlled and uncontrolled components.
25. What is React Suspense?
26. What is lazy loading in React?
27. What are the roles and responsibilities in this position?
28. Which tech stack is used in the company?
29. For databases, do you use raw SQL or ORM?
30. How many members are there in the team?
