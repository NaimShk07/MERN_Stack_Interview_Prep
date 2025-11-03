Skip to content
You said:
give me md code, make a note for all type of output based question of react with answer mean after reading then i should be able to answer all type of output based question in the interview
ChatGPT said:
Absolutely — here’s a complete Markdown (MD) note covering all major output-based questions in React that are often asked in interviews.

You can copy this into your notes app or VS Code .md file to study.

🧠 React Output-Based Interview Notes
This note covers all common output-based questions for React — from JSX behavior to hooks, re-renders, and component lifecycle quirks.
After studying this, you’ll be able to predict the output of almost any React code snippet.

🧩 1. JSX and Rendering Behavior
Example 1 — Expression Evaluation
function App() {
  const a = 5;
  const b = 10;
  return <h1>{a + b}</h1>;
}
Output:

15
🧠 Concept:

JSX allows JS expressions inside {}.

Only expressions, not statements (e.g., if, for).

Example 2 — Invalid JSX
function App() {
  const name = "React";
  if (name) {
    return <h1>Hello {name}</h1>;
  }
  return <h1>Bye</h1>;
}
Output:

Hello React
✅ Valid because conditional logic is outside JSX.
❌ You cannot use if directly inside JSX.

Example 3 — Multiple Elements
function App() {
  return (
    <h1>Hello</h1>
    <h2>World</h2>
  );
}
Output:

Error: Adjacent JSX elements must be wrapped in an enclosing tag
✅ Correct:

return (
  <>
    <h1>Hello</h1>
    <h2>World</h2>
  </>
);
⚙️ 2. Component Rendering and Re-rendering
Example 4 — State Update
function App() {
  const [count, setCount] = React.useState(0);
  setCount(5);
  console.log(count);
  return <h1>{count}</h1>;
}
Output:

Infinite re-render error
🧠 Reason:

State update (setCount) triggers re-render.

It’s called on every render → infinite loop.

✅ Correct approach:

React.useEffect(() => setCount(5), []);
Example 5 — Functional Updates
function App() {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }, []);
  
  return <h1>{count}</h1>;
}
Output:

2
🧠 Reason:

Both updates use the previous state (prev), so React batches them correctly.

❌ If you used setCount(count + 1) twice, output → 1.

🔁 3. useEffect and Execution Order
Example 6 — Logs and Render Flow
function App() {
  console.log("Render");
  React.useEffect(() => console.log("Effect"));
  return <h1>Hello</h1>;
}
Console Output:

Render
Effect
🧠 Reason:

useEffect runs after render and after DOM paint.

Example 7 — Dependency Array
function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Effect runs");
  }, [count]);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Click
    </button>
  );
}
Output on first render:

Effect runs
After click:

Effect runs
🧠 Reason:
Effect runs on mount + whenever count changes.

Example 8 — Cleanup Function
function App() {
  React.useEffect(() => {
    console.log("Mounted");
    return () => console.log("Unmounted");
  }, []);
  return <h1>Hello</h1>;
}
Console Output:

Mounted
(then when component unmounts → Unmounted)

🔄 4. Props and Child Rendering
Example 9 — Re-render Triggers
function Child() {
  console.log("Child render");
  return <h2>Child</h2>;
}

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Child />
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </>
  );
}
Console:

Child render
(then again every time you click)

🧠 Reason:

Parent re-renders → all children re-render (unless memoized).

✅ Fix:

const Child = React.memo(() => {
  console.log("Child render");
  return <h2>Child</h2>;
});
🪄 5. useMemo & useCallback
Example 10 — useMemo Caching
function App() {
  const [count, setCount] = React.useState(0);
  const value = React.useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);
  
  return (
    <>
      <p>{value}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </>
  );
}
Console:

Calculating...
(only when count changes)

🧠 Reason:

useMemo caches between renders unless dependency changes.

🧱 6. Conditional Rendering & Short-Circuit
Example 11 — Short-Circuit Logic
function App() {
  const isLoggedIn = false;
  return <h1>{isLoggedIn && "Welcome"}</h1>;
}
Output:

(empty)
🧠 Reason:

false && "Welcome" → false (renders nothing).

✅ Opposite:

<h1>{isLoggedIn || "Please login"}</h1>
Output:

Please login
⚡ 7. Event Handling and Synthetic Events
Example 12 — State Not Immediate
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return <button onClick={handleClick}>Click</button>;
}
Console after one click:

0
🧠 Reason:

State updates are asynchronous, value isn’t updated immediately.

✅ Use effect to track updates:

React.useEffect(() => console.log(count), [count]);
⚛️ 8. Key Prop & List Rendering
Example 13 — Keys & Re-render
function App() {
  const [list, setList] = React.useState(["A", "B"]);

  return (
    <>
      {list.map(item => (
        <p key={item}>{item}</p>
      ))}
      <button onClick={() => setList(["B", "A"])}>Swap</button>
    </>
  );
}
Output:

On render:

A
B
After click: visually →

B
A
🧠 Reason:
React uses key to track element identity. If keys stay same, React reuses nodes.

🧩 9. Context & Render Triggers
Example 14 — useContext and Re-render
const CountContext = React.createContext();

function Child() {
  const count = React.useContext(CountContext);
  console.log("Child render");
  return <h1>{count}</h1>;
}

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <CountContext.Provider value={count}>
      <Child />
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </CountContext.Provider>
  );
}
Console:

Child render
(re-runs every count change)

🧠 Reason:

Context consumers re-render whenever provider’s value changes.

🔚 10. Miscellaneous Gotchas
Example 15 — Missing Dependency Warning
function App() {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    console.log(count);
  }, []);
  
  return <button onClick={() => setCount(count + 1)}>+</button>;
}
Output:
Always logs:

0
🧠 Reason:
Effect depends on count, but you didn’t include it in the dependency array → stale closure.

✅ Fix:

React.useEffect(() => {
  console.log(count);
}, [count]);
✅ Quick Summary
Concept	Key Point	Example Output
JSX expressions	Only expressions in {}	5 + 10 → 15
State updates	Cause re-render	Infinite loop if not inside useEffect
useEffect	Runs after render	Logs after DOM paint
useMemo	Caches computed value	Avoids re-calculation
useCallback	Caches function reference	Prevents unnecessary re-renders
Context	Consumer re-renders on value change	Always logs new context
Keys	Identify list items	Prevent DOM reuse bugs
Would you like me to add an “Advanced Section” too — covering tricky interview puzzles like:

useEffect race conditions

stale closures

batching updates in React 18+

async state with promises?

I can append that next to make it 100% interview-ready.

You said:
all in md code and some good question which gets mostly asked in the interview most common and most important
ChatGPT said:
Perfect ✅ — here’s a complete Markdown note (.md) that includes:

All important and common output-based React interview questions,

Answers and explanations,

Plus advanced and tricky ones that interviewers love asking.

Copy-paste this into your markdown editor (e.g., VS Code or Obsidian) and you’ll have a ready-to-study React Output Question Sheet.

# ⚛️ React Output-Based Interview Cheat Sheet

Comprehensive notes to master **output-based questions** in React.  
Read this file thoroughly and you'll be able to handle **any output prediction question** asked in interviews.

---

## 🧩 1. JSX & Rendering Basics

### 🧠 Example 1 — Expression Evaluation
```jsx
function App() {
  const a = 5;
  const b = 10;
  return <h1>{a + b}</h1>;
}
Output:

15
✅ JSX supports expressions, not statements.

🧠 Example 2 — Adjacent JSX Elements
function App() {
  return (
    <h1>Hello</h1>
    <h2>World</h2>
  );
}
Output:

Error: Adjacent JSX elements must be wrapped in an enclosing tag
✅ Fix:

return (
  <>
    <h1>Hello</h1>
    <h2>World</h2>
  </>
);
🧠 Example 3 — Conditional Rendering
function App() {
  const isUser = true;
  return <h1>{isUser ? "Welcome" : "Please Login"}</h1>;
}
Output:

Welcome
⚙️ 2. State and Re-rendering
🧠 Example 4 — Infinite Render
function App() {
  const [count, setCount] = React.useState(0);
  setCount(5);
  console.log(count);
  return <h1>{count}</h1>;
}
Output:

Too many re-renders. React limits the number of renders.
🧠 Calling setCount() directly in render causes infinite loop.
✅ Always update state inside an event or useEffect.

🧠 Example 5 — Batching State Updates
function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setCount(c => c + 1);
    setCount(c => c + 1);
  }, []);
  return <h1>{count}</h1>;
}
Output:

2
✅ Functional updates (c => c + 1) ensure both updates apply sequentially.

🧠 Example 6 — Asynchronous State
function App() {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return <button onClick={handleClick}>Click</button>;
}
Output (console after one click):

0
🧠 State updates are asynchronous, not reflected immediately.

🔁 3. useEffect Behavior
🧠 Example 7 — Render Order
function App() {
  console.log("Render");
  React.useEffect(() => console.log("Effect"));
  return <h1>Hello</h1>;
}
Console Output:

Render
Effect
✅ useEffect runs after render and after DOM paint.

🧠 Example 8 — Cleanup Function
function App() {
  React.useEffect(() => {
    console.log("Mounted");
    return () => console.log("Unmounted");
  }, []);
  return <h1>Hello</h1>;
}
Output:

Mounted
(then when unmounted → Unmounted)

🧠 Example 9 — Missing Dependency Trap
function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log(count);
  }, []); // 👀 missing dependency
  return <button onClick={() => setCount(count + 1)}>+</button>;
}
Output (console):

0
🧠 The effect runs only once. To watch count, include it in dependencies.

🧱 4. Props and Child Rendering
🧠 Example 10 — Child Re-render
function Child() {
  console.log("Child render");
  return <h2>Child</h2>;
}

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Child />
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </>
  );
}
Console:

Child render
Child render
Child render
...
🧠 Parent re-render → child re-renders too.
✅ Use React.memo to prevent unnecessary renders.

🪄 5. useMemo & useCallback
🧠 Example 11 — useMemo
function App() {
  const [count, setCount] = React.useState(0);
  const value = React.useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);
  return (
    <>
      <p>{value}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </>
  );
}
Console:

Calculating...
🧠 Recomputes only when count changes.

🧠 Example 12 — useCallback
function App() {
  const [count, setCount] = React.useState(0);
  const log = React.useCallback(() => console.log("Clicked"), []);
  return <button onClick={log}>Click</button>;
}
✅ log function is memoized and stable between renders.

⚡ 6. Event Handling
🧠 Example 13 — Synthetic Event Pooling (React < 17)
function App() {
  const handleClick = (e) => {
    console.log(e.type);
    setTimeout(() => console.log(e.type), 1000);
  };
  return <button onClick={handleClick}>Click</button>;
}
Output (React < 17):

click
null
🧠 Synthetic events are pooled — values cleared asynchronously.

🧩 7. Lists & Keys
🧠 Example 14 — Key Reuse Issue
function App() {
  const [items, setItems] = React.useState(["A", "B"]);
  return (
    <>
      {items.map(item => <p key={item}>{item}</p>)}
      <button onClick={() => setItems(["B", "A"])}>Swap</button>
    </>
  );
}
Output:
Visually looks same but React reuses DOM nodes due to identical keys.

🧠 Always use unique and stable keys to prevent mismatched rendering.

🔄 8. Context & Re-renders
🧠 Example 15 — Context Causes Re-render
const CountContext = React.createContext();

function Child() {
  const count = React.useContext(CountContext);
  console.log("Child render");
  return <h1>{count}</h1>;
}

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <CountContext.Provider value={count}>
      <Child />
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </CountContext.Provider>
  );
}
Console:

Child render
Child render
🧠 Context consumers always re-render when the value changes.

⚛️ 9. Common Tricky Questions (Most Asked in Interviews)
❓Q1: What is the output?
function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setCount(1);
    console.log(count);
  }, []);
  console.log("Render");
  return <h1>{count}</h1>;
}
Output (Console):

Render
Render
0
🧠 setCount(1) schedules an update → re-renders → effect logs old count.

❓Q2: What is the output?
function App() {
  const [num, setNum] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => console.log(num), 1000);
  }, []);
  setNum(1);
  return <h1>{num}</h1>;
}
Output:

Too many re-renders
🧠 setNum(1) in render causes infinite loop.

❓Q3: useEffect vs useLayoutEffect
function App() {
  React.useEffect(() => console.log("useEffect"));
  React.useLayoutEffect(() => console.log("useLayoutEffect"));
  console.log("Render");
  return <h1>Hello</h1>;
}
Console Output:

Render
useLayoutEffect
useEffect
🧠 useLayoutEffect runs before painting.

❓Q4: setState Batching
function App() {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  return <button onClick={handleClick}>{count}</button>;
}
Output (after click):

1
🧠 React batches state updates — all use stale count value.
✅ Fix:

setCount(c => c + 1);
→ Output: 3

❓Q5: Lazy Initialization
function App() {
  const [count] = React.useState(() => {
    console.log("Initializer runs");
    return 10;
  });
  return <h1>{count}</h1>;
}
Console:

Initializer runs
🧠 The function in useState(() => value) runs only once, unlike direct useState(value) when component re-renders.

🧠 Quick Recap Table
Concept	Question Type	Expected Output / Behavior
JSX rules	Syntax-based	Adjacent elements error
State updates	Re-render logic	Infinite loop if set in render
useEffect	Timing	Runs after render
useMemo / useCallback	Optimization	Cached results
Context	Propagation	Consumer re-renders
Keys	Lists	DOM reuse issue
useLayoutEffect	Sync execution	Runs before paint
Batching	State handling	Updates merged
🚀 Advanced Interview Traps
🧩 Example 1 — Stale Closure
function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log(count);
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h1>{count}</h1>;
}
Output:

Logs: 0 0 0 0 ...
🧠 Closure captures initial count = 0.
✅ Fix by including [count] in dependency array.

🧩 Example 2 — React.memo + useCallback Combo
const Child = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>+</button>;
});

function App() {
  const [count, setCount] = React.useState(0);
  const handleClick = React.useCallback(() => setCount(c => c + 1), []);
  return (
    <>
      <Child onClick={handleClick} />
      <p>{count}</p>
    </>
  );
}
Console:

Child render
✅ Child doesn’t re-render because handleClick is memoized.

🧩 Example 3 — React 18 Batching
function App() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  const update = () => {
    setTimeout(() => {
      setA(1);
      setB(2);
    }, 0);
  };

  React.useEffect(() => console.log("Render", a, b));
  return <button onClick={update}>Update</button>;
}
Output (React 18+):

Render 1 2
🧠 React 18 auto-batches async updates, unlike previous versions.

🏁 Final Tips
✅ Never update state directly in render.

✅ Use functional updates when new state depends on old.

✅ Memorize useEffect execution order.

✅ Understand React.memo, useMemo, useCallback differences.

✅ Remember closure traps in hooks.

🎯 Master these and you can handle 95% of output-based React interview questions.


---

Would you like me to make this into a **color-coded Markdown (with emojis and section dividers)** version for visual learning (perfect for Obsidian or Notion)?  
It makes remembering outputs much easier.
You said:
how this : Render 1 2 not this : Render 0 0
ChatGPT said:
Excellent question 👏 — you’re asking about this React 18 batching example:

function App() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  const update = () => {
    setTimeout(() => {
      setA(1);
      setB(2);
    }, 0);
  };

  React.useEffect(() => console.log("Render", a, b));
  return <button onClick={update}>Update</button>;
}
Let’s go step by step 👇

🧠 Step 1 — Initial Render
When the component first renders:

a = 0, b = 0

So React runs the effect:

Render 0 0
🧠 Step 2 — The setTimeout callback
When you click the button:

After a short delay, both updates are queued:

setA(1);
setB(2);
These happen inside an asynchronous callback (setTimeout).

🧠 Step 3 — React 17 vs React 18 Difference
React Version	Behavior	Output
React 17 and below	Async updates (like in setTimeout) were not batched. So React would re-render twice — once for setA, once for setB.	Logs:
Render 1 0
Render 1 2
React 18+	React introduced automatic batching for async code. React detects both setA and setB in the same tick and batches them into a single re-render.	Logs:
Render 1 2
🧩 Why Not Render 0 0?
Because:

State changes (setA(1), setB(2)) schedule an update.

React applies both together → component re-renders once.

The new state values (1 and 2) are passed to render and effect runs again.

So the latest values (1, 2) are logged — not the old ones.

⚡ TL;DR Summary
Step	Action	React 18 Console
Mount	Initial render	Render 0 0
After click	Both state updates batched	Render 1 2
🔍 Key Concept — Automatic Batching
React 18 automatically batches all state updates inside:

setTimeout

Promise.then

fetch().then

async/await

Any other async event

This reduces unnecessary re-renders and improves performance.

Would you like me to include this React 17 vs 18 comparison table and short explanation inside your Markdown notes?
It’s a very common interview trap question (“Why one log? Why not multiple?”).

Get smarter responses, upload files and images, and more.

Log in

Sign up for free


Attach

Search

Study

Voice
No file chosenNo file chosen
