# 1. Projects & Responsibilities

### 1. What kind of projects have you developed so far in your current company?

### 2. What are your core roles and responsibilities in those projects?

### 3. What does your day-to-day work look like? What tasks do you typically handle?

## My Day-to-Day Work

- **Requirement Analysis**:  
  Go through tasks assigned in Jira/Tracker, understand requirements, and clarify with team if needed.

- **Development**:

  - Build and enhance UI components (React/Angular).
  - Work on backend APIs and database queries when required.
  - Ensure clean, reusable, and optimized code.

- **Collaboration**:  
  Participate coordinate with designers, QA, and backend team for smooth delivery.

- **Code Reviews & Learning**:  
  Review peers’ code, implement feedback, and keep upgrading skills with new tools and best practices.

# 2. Frontend (React, State, Performance, Libraries)

### 1. What are the key differences between React and vanilla JavaScript?

- Vanilla JavaScript manipulates the `DOM` manually, which gets `messy` as the app grows.
-
- React makes **UI building** easier with **components, virtual DOM, and state management**.
- It helps write **clean, reusable, and scalable** code — especially for dynamic UIs.
-
- React is built on top of JavaScript, but offers a smarter structure for building apps.

---

### 2. Why should we use React over plain JavaScript or HTML?

- React makes `UI building` faster and cleaner with components and reusable code.
- It handles DOM updates automatically with the virtual DOM, so no manual DOM code.
- Managing `state` and dynamic data is much easier in React.
- Great for scalable projects — plain JS/HTML gets `messy` as app size grows.

---

### 3. What is the Real DOM?

- The **Real DOM** is the **actual structure of the webpage** that the browser builds from HTML.
- It’s like a **tree of elements** — every tag (`<div>`, `<p>`, `<button>`) is a node in this tree.
- When we change something (like text, style, etc.), the **Real DOM updates the page**.
- But updating it directly is **slow**, especially if there are many changes.

---

### 4. i am fresher how will you explain virtual dom to me

- The **Virtual DOM** is a **copy** of the real DOM, kept in `memory` by React.
- Instead of updating the real DOM `directly` (which is slow), React:
  1. Makes changes in the **Virtual DOM** first.
  2. **Compares** it with the previous version (using a process called "diffing").
  3. Only updates the **actual DOM where needed** — not the whole page.

---

### 5. What are Hooks in ReactJS?

- **Hooks** are special functions in React that let you **use state and other features** without writing a `class`.
- Introduced in **React 16.8**, they allow you to manage:
  - ✅ State (`useState`)
  - ✅ Side effects (`useEffect`)
  - ✅ Context (`useContext`)
  - ✅ Refs (`useRef`)
  - ...and more

---

### 6. What is `useState` in ReactJS?

- `useState` is a **React hook** that lets you **add state** to functional components.
- It returns an **array** with two values:
  - Current state value
  - Function to update that state
- `useState` lets your component remember values between renders and update the UI when state changes.

---

## MOST IMPORTANT !!

### 7. What is the difference between a regular variable and a useState variable in React?

#### 🔸 Regular Variable

- Just a **normal JS variable** inside a function.
- **Does NOT trigger re-render** when updated.
- Value is **lost on re-render**.

#### 🔸 useState Variable

- A React hook to create stateful variables.
- Triggers re-render when updated.
- Value is preserved across re-renders.

---

### 8. What are Props in React?

- **Props** (short for **properties**) are used to **pass data** from one component to another — usually **parent to child**.
- They are **read-only** — you **can’t modify** props inside the receiving component.
- Used to make components **reusable and dynamic**.
- Props are like function arguments for components — they help pass data and make components flexible.

---

### 9. Props vs State in React

| Feature      | Props                               | State                               |
| ------------ | ----------------------------------- | ----------------------------------- |
| Definition   | Data **passed to** a component      | Data **managed inside** a component |
| Mutability   | **Read-only**                       | **Can be changed** using `setState` |
| Who sets it? | **Parent component**                | **Component itself**                |
| Purpose      | Pass data to child components       | Handle local, dynamic data          |
| Reusability  | Helps in making components reusable | Controls UI behavior and changes    |

---

### 10. How to Share Data from Child to Parent in React?

- In React, **data flows one way (top to bottom)** — from parent to child.
- But to send data **from child to parent**, we pass a **function (callback)** from parent to child as a prop.
- The child calls that function and sends the data back to the parent.

---

### 11. What is Props Drilling in React?

- **Props drilling** happens when you pass data from a **parent component** to a **deeply nested child component**,
  through **intermediate components** that don’t actually use the data.

---

### 12. How to Avoid Prop Drilling in React?

#### ✅ Use the **Context API**

- React's **Context API** lets you share data between components **without passing props manually** at every level.
- You create a **context**, wrap your components with a **provider**, and consume it wherever needed.
- Use Context API or state management tools to directly access data where it's needed — no need to drill through every component.

### 13. What is Context API in React?

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

### 14. What is Redux?

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

### 15. Disadvantages of Context API

- 🔸 **Not designed for high-frequency updates** — frequent changes can cause unnecessary re-renders and affect performance.
- 🔸 **Limited debugging tools** compared to Redux.
- 🔸 Can lead to **tight coupling** if overused (using context everywhere).
- 🔸 **No built-in middleware** for async logic (like API calls).

### 16. Disadvantages of Redux

- 🔸 **More boilerplate code** (actions, reducers, store setup).
- 🔸 **Steeper learning curve** for beginners.
- 🔸 Can be **overkill for small/simple apps**.
- 🔸 Requires **extra libraries** (`redux-thunk`, `redux-saga`) for async operations.

### 17. Context API vs Redux

| Feature          | Context API                          | Redux                                 |
| ---------------- | ------------------------------------ | ------------------------------------- |
| Purpose          | Simple state sharing                 | Full-fledged state management         |
| Setup Complexity | Easy, minimal setup                  | Complex, requires more boilerplate    |
| Performance      | Can cause re-renders on every update | Optimized with middleware & selectors |
| Async Support    | No built-in async handling           | Supports async via middleware         |
| Debugging Tools  | Basic (React DevTools)               | Advanced (Redux DevTools)             |
| Use Case         | Small to medium apps, simple data    | Large apps with complex state         |

### 18. What is Redux Toolkit? Is it the same as Redux?

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

### 19. What steps are you taking to ensure your React application performs well?

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

### 20. What is React.memo?

- `React.memo` is a **higher-order component** that helps **prevent unnecessary re-renders** of functional components.
- It **remembers (memoizes)** the component output and **only re-renders if props change**.
- React.memo does a shallow comparison of props.
- React.memo boosts performance by skipping re-renders when props haven’t changed.

#### When to Use It?

- When the component:
  - Renders the same output for the same props
  - Is pure and doesn't rely on internal state
  - Receives heavy props (e.g., large data, complex objects)

### 21. What is a Pure Component in React?

- A **Pure Component** is a component that **renders the same output** for the same props and state.
- A Pure Component is a component that doesn't re-render unless props or state have actually changed.
- It automatically implements **shouldComponentUpdate** with a **shallow comparison** of props and state.

#### ✅ Why Use Pure Components?

- Improves performance by preventing unnecessary re-renders.
- Best for components with heavy UI or frequently updating parents.

### 22. What is `useCallback` in React?

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

### 23. What is `useMemo` in React?

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

### 24. Which routing library is used React project

- React Router is the most commonly used routing library in React projects
- because it's specifically built for React, supports `dynamic` and `nested` routes
- integrates well with components, and is well-maintained.
- It makes `navigation` and `route-based` rendering simple and efficient.

# 3. Backend (Node.js, Express.js)

### 1. What is Node.js?

[09](../06_Node_Express/newnotes/nodejs_qna.md#L9)

### 4. What is Express.js?

[click](../06_Node_Express/newnotes/express_qna.md#L5)

### 5. Node.js vs Express.js

[click](../06_Node_Express/newnotes/express_qna.md#L50)

### 6. Why should we use Express.js if we already have Node.js?

[click](../06_Node_Express/newnotes/express_qna.md#L50)

### 7. ---------------------

### 8. What is Middleware in Express.js?

[click](../06_Node_Express/newnotes/express_qna.md#L97)

### 9. What is restful api?

[click](../06_Node_Express/newnotes/express_qna.md#L72)

### 10. How to Make APIs Secure (Simple & Smart Answer)

[click](../06_Node_Express/newnotes/optimize.md#L81)

### 11. How are you structuring your backend using Express.js in your projects?

- I use a **modular structure**:
  - Separate **routes**, **controllers**, and **models** into folders.
  - Use **middleware** for common tasks (auth, error handling).
  - Keep server setup clean in a main file (`app.js` or `server.js`).

# 4. API Security

### 1. How do you ensure your APIs are secure?

[click](../06_Node_Express/newnotes/optimize.md#L82)

### 2. Let’s say someone gets access to your API endpoint — how would you protect against unauthorized access?

- I’d protect API endpoints using **authentication** like JWT tokens.
- **authorization** to ensure users access only allowed data.
- **HTTPS** to encrypt data and secure communication.

### 3. What backend strategies do you use if the frontend team forgets to add proper security checks (e.g. repeated form submissions)?

- I would implement **rate limiting** to limit the number of requests per user/IP.

### 4. Have you implemented CAPTCHA or any other anti-bot techniques? How?

# 5. Authentication / JWT

### 1. How do you generate a JWT token in Node.js? What’s the process?

[JWT](../06_Node_Express/newnotes/nodejs_qna.md#L206)

### 2. How do you validate and verify JWT tokens on subsequent API requests?

# 6. Database (MySQL)

### 1. How are you performing MySQL queries in Express.js?

- How to Perform MySQL Queries in Express.js
- Steps:
  1.  Install MySQL package → `npm install mysql2`
  2.  Create a DB connection
  3.  Use `.query()` to run SQL queries

```js
const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "yourpassword",
	database: "yourdb",
});

app.get("/users", (req, res) => {
	connection.query("SELECT * FROM users", (err, results) => {
		if (err) return res.status(500).send(err);
		res.json(results);
	});
});
```
