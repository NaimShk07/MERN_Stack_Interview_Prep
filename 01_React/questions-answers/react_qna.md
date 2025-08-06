1. What is React?

- React is a JavaScript library which make easy to manage and build comple front end /user interfaces, especially single-page applications (SPAs).
- Developed by Facebook
- Uses components to break UIs into reusable pieces
- Uses JSX (JavaScript + HTML)
- Maintains a virtual DOM for efficient rendering

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

4. Functional vs Class components

- Functional
  - A JavaScript function that returns JSX.
  - useState and other Hooks
  - useEffect and other Hooks
  - Not used
  - setState()
- Class(No hook)
  - A JavaScript class that extends React.Component and returns JSX from render().
  - this.state
  - componentDidMount, componentDidUpdate, etc.
  - Required (e.g., this.state, this.props)
  - this.setState()

5. JSX and rendering

- JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe how the UI should look.
- Enables writing HTML-like code in JavaScript
- Allows embedding JavaScript logic inside UI
-
- Rendering is the process of displaying React elements in the DOM.
- React components (either functional or class-based) return JSX, and React renders it to the DOM using the ReactDOM.render() method.
-
- JSX is not HTML — it’s syntactic sugar for JavaScript that allows you to build UIs declaratively with readable syntax. React then renders it into real DOM efficiently.

6. State and props

- Props flow down, and State stays local.
  Use props to pass data, and state to manage internal changes.
- Props is immutable (cannot be changed by the receiving component)

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

- A Controlled Component is a form element (like <input>, <textarea>, <select>) whose value is controlled by React state.
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

- Reconciliation is the process React uses to update the DOM when a component’s state or props change.
- It compares the new virtual DOM with the previous one and efficiently applies the minimum number of changes to the real DOM.

18. React Router v6
19. useNavigate, useParams, Outlet
20. Nested routes
21. Controlled components
22. Validation (basic & libraries like Formik, Yup)
23. Context API
24. Redux Toolkit (createSlice, configureStore)
