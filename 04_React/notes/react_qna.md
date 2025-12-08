1. What is React? Why use it?

- **React** is a **JavaScript library for building user interfaces**, primarily for single-page applications.
- Allows developers to create **reusable UI components**.
- Developed and maintained by **Facebook** (Meta).

## 🚀 Why Use React?

- **Component-Based Architecture** → Build reusable, modular UI pieces.
- **Virtual DOM** → Efficient updates and faster performance.
- **Declarative Programming** → Predictable and easier-to-debug UI.
- **Large Ecosystem & Community** → Plenty of libraries, tools, and support.
- **Flexible Integration** → Works with Redux, Next.js, and other libraries.
- **Cross-Platform** → Use React Native to build mobile apps.

## Advantages of React

- **Efficient Rendering** using the Virtual DOM.
- **Reusable Components** reduce code duplication and improve maintainability.
- **Large Ecosystem & Community** with strong support and many libraries.
- **SEO-Friendly** when paired with Next.js or server-side rendering.
- **Flexible State Management** — works well with Redux, MobX, Recoil, etc.

## Limitations of React

- **Only a UI Library** — Requires additional libraries for routing, state management, etc.
- **Steep Learning Curve** — JSX, hooks, and state management can be difficult for beginners.
- **Boilerplate & Setup** — Large applications need extra tooling and configuration.
- **SEO Limitations** — SPAs need SSR or extra setup for proper SEO.
- **Fast-Evolving Ecosystem** — Frequent updates require developers to stay updated.

## Current stable version: React 19.x

1. Library vs 🏗️ Framework

| Feature     | Library                  | Framework                       |
| ----------- | ------------------------ | ------------------------------- |
| Control     | **You** call the library | **Framework** calls your code   |
| Flexibility | More flexible            | More structured and opinionated |
| Usage       | Use only what you need   | Comes with full set of tools    |
| Example     | React (UI library)       | Angular, Next.js (frameworks)   |

---

### 🎯 Key Rule:

> **Library** → You’re in control  
> **Framework** → It’s in control

> A library is a tool you call when needed, like React. A framework is a full structure that controls the flow, like Angular or Next.js.

1. Why should we use React over plain JavaScript?

- 🔹 Makes complex UI easier to manage with components.
- 🔹 Declarative syntax reduces DOM manipulation errors.
- 🔹 Reusable components speed up development.
- 🔹 Optimized performance using Virtual DOM.
- 🔹 Better state management and predictable UI updates compared to vanilla JS.
- 🔹 Easier integration with modern tools and frameworks for scalable applications.

2. Virtual DOM

- When you use React, you don’t directly change the actual DOM. Instead, React uses a Virtual DOM — a lightweight in-memory copy of the real DOM.
  1. When your data changes, React creates a new Virtual DOM tree.
  2. It compares the new Virtual DOM with the previous one.
  3. It figures out the differences (called "diffing").
  4. It updates only the changed parts in the real DOM.

3.  What is the Diffing Algorithm?

- The diffing algorithm is how React compares the old and new Virtual DOM trees to figure out what changed.
- Key Concepts:

  1. Tree Comparison: React compares the two trees node-by-node.
  2. Heuristics Used:
     - If elements are of different types, React destroys the old and creates a new one.
     - If elements are of the same type, React compares their props and children recursively.
  3. Keys in lists: When rendering lists (like <li> items), React uses keys to track items efficiently. If the key changes, React treats it as a new element.

  - Example

```

    <ul>
      <li key="1">Apple</li>
      <li key="2">Banana</li>
    </ul>

```

- If "Banana" is removed, React will look at the keys and only remove that li, instead of re-rendering the whole list.

4.  What Are Components in React.js?

- Components are **reusable building blocks** of a React UI.
- Each component represents a **part of the UI** (like buttons, forms, navbars).
- Can be **functional** or **class-based**.

---

### 🧱 Types of Components:

1. **Functional Component** – Basic JS function using `useState`, `useEffect`, etc.
2. **Class Component** – Uses ES6 class, with lifecycle methods (`this.state`, `this.setState`)

> > In React, components are reusable pieces of UI — like functions that return JSX. We mainly use functional components now with hooks.

---

4. Can We Make React Components with Class?

- Yes, **class components** are React components defined using ES6 classes.
- They have **lifecycle methods** and manage their own **state** with `this.state` and `this.setState`.
- Used before hooks were introduced; still supported but less common now.

---

### 🧪 Example:

```js
class Hello extends React.Component {
	render() {
		return <h1>Hello World</h1>;
	}
}
```

> Yes, React supports class components with lifecycle methods, but functional components with hooks are now preferred.

4. Functional vs Class components

- Functional
  - A JavaScript function that returns JSX.
  - useState and other Hooks
  - useEffect and other Hooks
  - Not used
  - setState()
- Class(No hook)
  - A JavaScript class that extends `React.Component` and returns JSX from render().
  - this.state
  - componentDidMount, componentDidUpdate, etc.
  - Required (e.g., this.state, this.props)
  - this.setState()

5. JSX and rendering

- JSX (**JavaScript XML**) lets us write **HTML-like syntax** inside JavaScript.
- It gets **transpiled to `React.createElement`** calls under the hood.
- Makes code more **readable** and **intuitive** when building UI.

- Rendering is the process of displaying React elements in the DOM.
- React components (either functional or class-based) return JSX, and React renders it to the DOM using the ReactDOM.render() method.
-
- JSX is not HTML — it’s syntactic sugar for JavaScript that allows you to build UIs declaratively with readable syntax. React then renders it into real DOM efficiently.

6. What are Props in React?

- **Props** (short for **properties**) are used to **pass data** from one component to another — usually **parent to child**.
- They are **read-only** — you **can’t modify** props inside the receiving component.
- Used to make components **reusable and dynamic**.
- Props are like function arguments for components — they help pass data and make components flexible.

  6.1 State and props

- Props flow down, and State stays local.
  Use props to pass data, and state to manage internal changes.
- Props is immutable (cannot be changed by the receiving component)

| Feature      | Props                               | State                               |
| ------------ | ----------------------------------- | ----------------------------------- |
| Definition   | Data **passed to** a component      | Data **managed inside** a component |
| Mutability   | **Read-only**                       | **Can be changed** using `setState` |
| Who sets it? | **Parent component**                | **Component itself**                |
| Purpose      | Pass data to child components       | Handle local, dynamic data          |
| Reusability  | Helps in making components reusable | Controls UI behavior and changes    |

7. Event handling

- Event handling in React is the process of responding to user interactions like clicks, typing, form submissions, etc., using event listener functions.
- React uses synthetic events for performance and consistency.
  Use camelCase event names and always prevent default on form submissions when needed.

8. useState, useEffect, useRef

- Allows functional components to have state.
- Re-renders the component on update.
-
- Performs side effects (like data fetching, event listeners, etc.) in functional components.
- Types: Run Once on Mount, Re-run on State Change and Cleanup (Unmount)
- Always manage cleanup to avoid memory leaks.
-
- Returns a mutable object: { current: ... }
- Doesn’t trigger re-renders when updated but other hook does.
- Useful for focusing input fields, tracking previous values, or holding interval IDs.

9.  useContext, useReducer

- Allows components to access global data without passing props manually at every level (i.e., avoids props drilling).
- Great for theme, auth, language, or any global config.
- Works best with small, static data or alongside useReducer for complex state.
-
- A more powerful alternative to useState, especially for complex logic or multiple related states.
- Follows Redux-like pattern: state, dispatch, and reducer.

10. Custom Hooks

- A Custom Hook is a JavaScript function that uses React hooks (like useState, useEffect, etc.) and allows you to reuse logic across multiple components.
- It must start with use (e.g., useAuth, useFetch, useForm) to follow React’s hook rules.
- Custom Hooks are essential for writing clean, reusable, and maintainable React code.
  Think of them as your own library of tools for recurring logic.

12. Conditional rendering

13. Controlled vs uncontrolled components

- A Controlled Component is a form element (like `<input>`, `<textarea>`, `<select>`) whose value is controlled by React state.
- Controlled Components keep the form UI and logic in sync via React state — giving full control, validation, and logic handling capabilities.

- An Uncontrolled Component is a form input where the DOM itself handles the input state, rather than React.
- You access the input value using a ref, not React state.
- Uncontrolled Components give up control to the browser. Use them when you don’t need to track input changes in real-time or for simple cases.

12. Lifting state up

- Lifting state up means moving shared state to the nearest common ancestor component so that multiple child components can access and update it.
- Lifting state up" is the React way to share data between components — keep state where it logically belongs.

13. HOC (Higher Order Components)

- A Higher-Order Component (HOC) is a function that takes a component and returns a new enhanced component.
- To reuse logic across multiple components (e.g. loading states, auth, logging).

14. Render props

- A Render Prop is a technique for sharing code/logic between components using a function prop that returns a React element.
- It’s an alternative to HOC and works well with both class and functional components.

15. Composition over inheritance
16. React.memo, useMemo, useCallback

- React.memo is a higher-order component that prevents re-rendering if props haven’t changed.
- useMemo caches the result of a computation and recomputes only when dependencies change.
- useCallback returns a memoized function, useful when passing functions to child components (prevents unnecessary re-renders) Cache function reference.
- When we pass state from parent to child, React.memo can help prevent unnecessary re-renders if the props haven't changed. However, when we pass functions as props, they are often re-created on every render, which causes React.memo to think the props have changed. To prevent this, we use useCallback to memoize the function, so its reference stays stable across renders.

17. Reconciliation

- Reconciliation is the process React `uses` to update the DOM when a component’s state or props change.
- It compares the new virtual DOM with the previous one and efficiently applies the minimum number of changes to the real DOM.

18. Why key is very important in the react
19. React Router v6
20. useNavigate, useParams, Outlet
21. Nested routes
22. Controlled components
23. Validation (basic & libraries like Formik, Yup)
24. Context API
25. Redux Toolkit (createSlice, configureStore)
26. why do we use react
27. what makes react different from other and javascript
28. what is vite why it is faster
29. what is react element
30. what is fragment and why we use it
31. what foreach returns
32. redux vs contextapi
33. what is compiler
34. what is lazy loading

- Loading parts of an app **only when needed**, instead of all at once.

  - Improves initial load time.
  - Saves bandwidth by loading resources on demand.
  - Commonly used for images, components, or modules.

  ```js
  import { lazy, Suspense } from "react";

  const MyComponent = lazy(() => import("./MyComponent"));

  function App() {
  	return (
  		<>
  			<Suspense fallback={<div>Loading...</div>}>
  				<MyComponent />
  			</Suspense>
  		</>
  	);
  }
  ```

---

35. code spliting

- Code splitting means **breaking your app’s bundle into smaller chunks**.
  - Loads only the necessary code for the current page or feature.
  - `Reduces initial load time` and improves performance.
  - Often used with tools like Webpack or React.lazy.
  - same like above with out suspence

---

36. normalization
37. axios vs fetch
38. create async thunk
39. extra reducer
40. current latest version
41. useEffect vs useLayoutEffect

📌 **Both hooks run after a component renders, but the timing is different.**  
They affect how updates interact with the browser’s paint cycle.

---

### 🔹 useEffect (Async & Non-blocking)

- Runs **after** the UI is painted to the screen
- Does **not block** the browser paint
- Best for: data fetching, subscriptions, timers, logging

### 🔹 useLayoutEffect (Sync & Blocking)

- Runs before the browser paints the UI
- Blocks rendering until it finishes
- Best for: measuring DOM elements, synchronizing layout, preventing layout flicker

### ⚡ Interview Tip

> 📌 Use useEffect most of the time.
> 📌 Use useLayoutEffect only when you must measure or update the DOM before it flashes on screen.

42. organize the code in seperate file(demo)
43. what is outlet
44. i am fresher how will you explain virtual dom to me

- The **Virtual DOM** is a **copy** of the real DOM, kept in `memory` by React.
- Instead of updating the real DOM `directly` (which is slow), React:
  1. Makes changes in the **Virtual DOM** first.
  2. **Compares** it with the previous version (using a process called "diffing").
  3. Only updates the **actual DOM where needed** — not the whole page.

---

45. What are Hooks in ReactJS?

- **Hooks** are special functions in React that let you **use state and other features** without writing a `class`.
- Introduced in **React 16.8**, they allow you to manage:
  - ✅ State (`useState`)
  - ✅ Side effects (`useEffect`)
  - ✅ Context (`useContext`)
  - ✅ Refs (`useRef`)
  - ...and more

---

46. What is `useState` in ReactJS?

- `useState` is a **React hook** that lets you **add state** to functional components.
- It returns an **array** with two values:
  - Current state value
  - Function to update that state
- `useState` lets your component remember values between renders and update the UI when state changes.

47. What is the difference between a regular variable and a useState variable in React?

#### 🔸 Regular Variable

- Just a **normal JS variable** inside a function.
- **Does NOT trigger re-render** when updated.
- Value is **lost on re-render**.

#### 🔸 useState Variable

- A React hook to create stateful variables.
- Triggers re-render when updated.
- Value is preserved across re-renders.

48. How to Share Data from Child to Parent in React?

- In React, **data flows one way (top to bottom)** — from parent to child.
- But to send data **from child to parent**, we pass a **function (callback)** from parent to child as a prop.
- The child calls that function and sends the data back to the parent.

49. What is Props Drilling in React?

- **Props drilling** happens when you pass data from a **parent component** to a **deeply nested child component**,
  through **intermediate components** that don’t actually use the data.

50. How to Avoid Prop Drilling in React?

#### ✅ Use the **Context API**

- React's **Context API** lets you share data between components **without passing props manually** at every level.
- You create a **context**, wrap your components with a **provider**, and consume it wherever needed.
- Use Context API or state management tools to directly access data where it's needed — no need to drill through every component.

51. What is Context API in React?

- Context API is a **React feature** that helps you **share data globally** across components without passing props manually at every level.
- It solves the problem of **prop drilling** (passing props through many layers).

```js
const UserContext = React.createContext();

<UserContext.Provider value="John">
	<App />
</UserContext.Provider>;

function GrandChild() {
	const user = useContext(UserContext);
	return <h1>Hello, {user}</h1>;
}
```

52. What is Redux?

- Redux is a **state management library** that helps `manage` and `centralize` the app’s state.
- It’s useful when your app `grows` and managing state with only React becomes `complex`.
- Redux provides a **single source of truth** (a global store) for all your app’s data.

---

#### 🔧 How Redux Works (Basics)

1. **Store**: Holds the whole app `state`.
2. **Actions**: Plain `objects` describing _what_ happened.
3. **Reducers**: Functions that `update` the state based on `actions`.
4. **Dispatch**: A method to send `actions` to `reducers`.

---

#### 🔧 How to Use Redux with React?

- Use the **`react-redux`** library to connect Redux with React components.
- Wrap your app in `<Provider store={store}>` to give access to the store.
- Use `useSelector` to read data and `useDispatch` to send actions.

53. Disadvantages of Context API

- 🔸 **Not designed for high-frequency updates** — frequent changes can cause unnecessary re-renders and affect performance.
- 🔸 **Limited debugging tools** compared to Redux.
- 🔸 Can lead to **tight coupling** if overused (using context everywhere).
- 🔸 **No built-in middleware** for async logic (like API calls).

54. Disadvantages of Redux

- 🔸 **More boilerplate code** (actions, reducers, store setup).
- 🔸 **Steeper learning curve** for beginners.
- 🔸 Can be **overkill for small/simple apps**.
- 🔸 Requires **extra libraries** (`redux-thunk`, `redux-saga`) for async operations.

55. Context API vs Redux

| Feature          | Context API                          | Redux                                 |
| ---------------- | ------------------------------------ | ------------------------------------- |
| Purpose          | Simple state sharing                 | Full-fledged state management         |
| Setup Complexity | Easy, minimal setup                  | Complex, requires more boilerplate    |
| Performance      | Can cause re-renders on every update | Optimized with middleware & selectors |
| Async Support    | No built-in async handling           | Supports async via middleware         |
| Debugging Tools  | Basic (React DevTools)               | Advanced (Redux DevTools)             |
| Use Case         | Small to medium apps, simple data    | Large apps with complex state         |

56. What is Redux Toolkit? Is it the same as Redux?

- **Redux Toolkit (RTK)** is the **official, recommended way to write Redux logic** today.
- It is **built on top of Redux**, designed to `simplify` Redux `setup` and reduce `boilerplate`.
- Provides **pre-configured tools** like `configureStore`, `createSlice`, and `createAsyncThunk` to make Redux easier and faster to use.

---

#### 🔧 Why use Redux Toolkit?

- Removes the need to write action `types`, action `creators`, and `reducers` separately.
- Includes **good defaults** for store setup (middleware, devtools).
- Simplifies async logic with built-in helpers.
- Encourages **best practices** and safer immutable updates with `Immer` under the hood.

---

#### ✅ Is it the same as Redux?

- RTK is **NOT a different library** — it’s **Redux + helpers** combined into one package.
- Using Redux Toolkit means you are still using Redux but **in a cleaner, modern way**.

---

> Redux Toolkit = **Redux, but easier, faster, and less boilerplate**.

57. What steps are you taking to ensure your React application performs well?

#### 🔹 1. Component Optimization

- ✅ Use **React.memo** to prevent unnecessary re-renders.
- ✅ Split large components into smaller reusable ones.

#### 🔹 2. State Management

- ✅ Avoid **lifting state too high** — keep state as close as possible to where it’s needed.
- ✅ Use **Context API or Redux** smartly to avoid excessive re-renders.

#### 🔹 3. Lazy Loading & Code Splitting

- ✅ Use **React.lazy** and **Suspense** to load components only when needed.
- ✅ Split bundles using tools like **Webpack** or **Vite**.

#### 🔹 4. Efficient List Rendering

- ✅ Use **keys** correctly in lists.
- ✅ Use **pagination**, **infinite scroll**, or **windowing** (e.g., `react-window`) for large lists.

#### 🔹 5. Avoid Unnecessary Re-Renders

- ✅ Use **`useCallback`** and **`useMemo`** to memoize functions and values.
- ✅ Keep dependency arrays clean in **`useEffect`**.

#### 🔹 6. Image & Asset Optimization

- ✅ Compress images and use **WebP** format.
- ✅ Lazy load images and static content.

#### 🔹 7. Minimize API Calls

- ✅ Use **debouncing** for search inputs.
- ✅ Use **caching** (like React Query or SWR) to avoid duplicate requests.

#### 🔹 8. Use Production Build

- ✅ Always build the app using `npm run build` for optimized performance in production.

58. What is React.memo?

- `React.memo` is a **higher-order component** that helps **prevent unnecessary re-renders** of functional components.
- It **remembers (memoizes)** the component output and **only re-renders if props change**.
- React.memo does a shallow comparison of props.
- React.memo boosts performance by skipping re-renders when props haven’t changed.

#### When to Use It?

- When the component:
  - Renders the same output for the same props
  - Is pure and doesn't rely on internal state
  - Receives heavy props (e.g., large data, complex objects)

59. What is a Pure Component in React?

- A **Pure Component** is a component that **renders the same output** for the same props and state.
- A Pure Component is a component that doesn't re-render unless props or state have actually changed.
- It automatically implements **shouldComponentUpdate** with a **shallow comparison** of props and state.

#### ✅ Why Use Pure Components?

- Improves performance by preventing unnecessary re-renders.
- Best for components with heavy UI or frequently updating parents.

60. What is `useCallback` in React?

- `useCallback` is a React **hook** that **memoizes a function**, so it doesn't get `recreated` on every render.
- It returns the **same function instance** unless the dependencies change.

#### Example

```js
const handleClick = useCallback(() => {
	console.log("Button clicked");
}, []);
```

- Without useCallback, this function would be `recreated` every render.
- With useCallback, it stays the same unless dependencies change.

#### ✅ When to Use useCallback?

- To prevent unnecessary re-renders of child components that `rely on function props`.
- Useful when passing functions to:
  - React.memo components
  - Optimized list items

#### ⚠️ Notes

- Don’t overuse it — it's only helpful when `functions` are passed as `props` and cause re-renders.
- Functions with no dependencies or frequent changes don’t benefit.

61. What is `useMemo` in React?

- `useMemo` is a React **hook** that **memoizes a computed value** — it recalculates the value **only when its dependencies change**.
- Used to **optimize performance** by avoiding expensive `recalculations` on every render.

#### 🔧 Example

```js
const expensiveResult = useMemo(() => {
	return heavyCalculation(number);
}, [number]);
```

- Without useMemo, heavyCalculation `runs` on every render.
- With useMemo, it runs only when number changes.

#### ✅ When to Use useMemo?

- For expensive calculations that `don't need to run` on every render.
- When passing calculated values to child components that rely on memoization (React.memo).

#### ⚠️ Notes

- useMemo is not for caching API calls — it's for memoizing computed values.
- Don't overuse — use only when there's an actual performance bottleneck.

62. Which routing library is used React project

- React Router is the most commonly used routing library in React projects
- because it's specifically built for React, supports `dynamic` and `nested` routes
- integrates well with components, and is well-maintained.
- It makes `navigation` and `route-based` rendering simple and efficient.

58. What is debouncing

- Debouncing is a `technique` to **limit how often a function runs**.
  - It `waits` for a `pause` in user actions before running a function.
  - Commonly used in **search input, resize, scroll**, etc.
  - Helps improve performance and reduce API calls.

```js
const [searchTerm, setSearchTerm] = useState("");
const [debouncedValue, setDebouncedValue] = useState("");

useEffect(() => {
	const timer = setTimeout(() => {
		setDebouncedValue(searchTerm);
	}, 500);

	return () => clearTimeout(timer);
}, [searchTerm]);

useEffect(() => {
	if (debouncedValue) {
		console.log("Api called...");
	}
}, [debouncedValue]);
```

---

59. JSX vs JS – What are the differences?

**JSX** is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript, primarily used in React to describe UI components.

- 📝 JSX looks like HTML but is transformed into `React.createElement` calls
- ⚙️ JS is the core scripting language without special syntax
- 🧩 JSX must be compiled (e.g., Babel) before browsers can run it
- 🚀 JSX improves readability and UI development

```jsx
// JSX example
const element = <h1>Hello, world!</h1>;

// JS equivalent
const element = React.createElement("h1", null, "Hello, world!");
```

### ✅ Key Points

- 📌 JSX is **not** valid JavaScript until transpiled
- ⚡ JSX makes UI code declarative and easier to visualize
- 🔄 JS is more flexible but less readable for UI
- 🧪 JSX supports embedding JS expressions inside `{}`

60. 🔑 What Are Keys in React?

📌 **Definition:**  
Keys are **unique identifiers** used by React to track elements in **lists** for efficient re-rendering.

---

### ⚡ Key Points

1. Helps React identify which items **changed, added, or removed**.
2. Must be **unique among siblings**, usually using IDs.
3. Improves **performance** by minimizing unnecessary DOM updates.
4. Should **not** use indexes as keys if list can change order.

---

61. 🔑 React Keys & What Happens If You Don’t Pass Them

- React **will still render the list**, but it will **warn in the console**:  
  `"Each child in a list should have a unique "key" prop."`
- Without keys, React may **re-render inefficiently**, causing:
  - Unnecessary DOM updates
  - Wrong component state being reused

> In short: Keys prevent warnings and ensure efficient list rendering. Always pass a unique key for list items.

---

62. How to manage state in React without Redux?

✅ React provides several built-in and external tools to manage state **without using Redux**.

---

### 🔹 1. **useState (Local State)**

Used for simple, component-level state.

```tsx
const [count, setCount] = useState(0);
```

---

### 🔹 2. **useContext (Global State)**

Share state across multiple components without prop drilling.

```tsx
const MyContext = React.createContext(null);

function App() {
	const [user, setUser] = useState("Alice");

	return (
		<MyContext.Provider value={{ user, setUser }}>
			<Profile />
		</MyContext.Provider>
	);
}

function Profile() {
	const { user } = useContext(MyContext);
	return <p>User: {user}</p>;
}
```

---

### 🔹 3. **useReducer (Advanced local/global state)**

Similar to Redux but built into React.

```tsx
const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		default:
			return state;
	}
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

---

### 🔹 4. **Third-party alternatives**

- 🧠 `zustand` – minimal and easy global

63. What is an Error Boundary in React?

An **Error Boundary** is a React component that **catches JavaScript errors in its child component tree** and displays a fallback UI instead of crashing the whole app.

---

### 📌 Key Points

- ✅ Catches errors during `rendering`, `lifecycle methods`, and `constructors` of child components
- ⚠️ Does **not** catch errors inside `event handlers` or `async code`
- 🔄 Implemented using `componentDidCatch` lifecycle method or `static getDerivedStateFromError`

---

### ✅ Key Takeaways

- Use Error Boundaries to **prevent entire app crashes**
- Wrap them around components that might throw errors
- Helps improve user experience with graceful error handling

64. Commonly Used Libraries in React

📌 **React ecosystem has many libraries to simplify state management, routing, UI, and data fetching.**  
Here are the most commonly used ones in modern React apps:

---

### 📌 Key Libraries

- **State Management**

  - `redux` / `@reduxjs/toolkit` ✅
  - `zustand` ⚡
  - `recoil` 🌿
  - `mobx` 🧠

- **Routing**

  - `react-router-dom` 🌐

- **Data Fetching / Server State**

  - `react-query` / `@tanstack/react-query` 🔄
  - `swr` 🌊

- **UI / Component Libraries**

  - `material-ui` / `@mui/material` 🎨
  - `chakra-ui` ✨
  - `antd` 🏛

- **Form Handling**

  - `react-hook-form` 📝
  - `formik` 🧩

- **Animation**

  - `framer-motion` 🎬

- **Utility**
  - `axios` ⚡ (HTTP requests)
  - `date-fns` 📅 / `moment` ⏳ (Date manipulation)

---

### ✅ Interview Tip

> When asked, mention 3–4 popular libraries and their **primary use case**, e.g.,  
> “I mostly use `react-router-dom` for routing, `react-query` for server state, and `@mui/material` for UI components.”

65. Lifecycle Methods of React Components

📌 **Lifecycle methods are functions in React class components that run at specific stages of a component’s life: mounting, updating, and unmounting.**

---

## 1️⃣ Mounting (Component is created & added to DOM)

- `render()` → Returns JSX
- `componentDidMount()` → Runs after first render (API calls, subscriptions)

---

## 2️⃣ Updating (Props or state change)

- `componentDidUpdate()` → Runs after DOM update (fetch more data, sync state)

---

## 3️⃣ Unmounting (Component removed from DOM)

- `componentWillUnmount()` → Cleanup (timers, listeners, subscriptions)

---

66. What is React query and TanStack , it's use

📌 **React Query (now called TanStack Query) is a powerful data-fetching and caching library for React.**  
It manages server state (API calls) efficiently with caching, background updates, and syncing.

---

### 📌 Key Points

- Handles **server state**, not client state
- Provides **caching**, **refetching**, **pagination**, **infinite queries**, and **auto retries**
- Removes the need for manual `useEffect + fetch + useState` patterns
- Makes API calls **fast, consistent, and reliable**

---

### 🔧 Example Usage

```jsx
import { useQuery } from "@tanstack/react-query";

const fetchUsers = () => fetch("/api/users").then((res) => res.json());

export function Users() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
	});

	if (isLoading) return "Loading...";
	if (error) return "Error";

	return data.map((u) => <p key={u.id}>{u.name}</p>);
}
```

### ⭐ Why Use TanStack Query?

- ⚡ Automatic caching
- 🔄 Auto refetch on window focus
- 🔁 Retry failed requests
- 📊 Supports pagination & infinite scroll
- 🧪 Devtools for debugging queries
- 🧠 No need for Redux for API fetching
- ⏳ Background updates → smooth UI

67. Axios Interceptor

📌 **An Axios interceptor is a middleware-like function that runs before a request is sent or before a response is processed.**  
It allows you to **modify requests**, **handle errors**, or **transform responses** globally.

---

### 📌 Types of Interceptors

- **Request Interceptor**  
  Runs **before** the request is sent.  
  Used for adding headers, tokens, logging, etc.

- **Response Interceptor**  
  Runs **after** the server responds.  
  Used for error handling, refreshing tokens, transforming data, etc.

### ✅ Advantages / Uses

- ⚡ Add auth tokens automatically
- 🛡️ Global error handling
- 🔄 Auto-refresh access tokens
- 📊 Logging requests/responses
- 🧪 Modify or transform responses globally

68. df
69. as
70. df
71. asd
72. f
