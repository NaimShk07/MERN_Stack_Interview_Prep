Skip to content
Chat history

You said:
give me some react output based question for my mern stack interview
ChatGPT said:
Got it 👍
I’ll give you React-based output questions (the kind where interviewer shows code and asks “what will be rendered?”). These are commonly asked in MERN stack interviews to test deep understanding.

🔹 React Output-Based Questions
1. Component Rendering with State
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  setTimeout(() => setCount(count + 1), 1000);

  return <h1>{count}</h1>;
}

export default App;
👉 Question: What will be displayed on the screen?
(Hint: check how setTimeout runs on every render.)

2. Object as State
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "Ali" });

  const changeName = () => {
    user.name = "Ahmed";
    setUser(user);
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={changeName}>Change</button>
    </div>
  );
}

export default App;
👉 Question: When the button is clicked, what will be displayed and why?

3. UseEffect with Dependencies
import React, { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Effect runs");
  }, [value === 2]);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  );
}

export default App;
👉 Question: When clicking the button multiple times, how many times will "Effect runs" log?

4. Key Prop
import React from "react";

function App() {
  const items = ["a", "b", "c"];
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default App;
👉 Question: If "b" is removed from the array, what happens to the rendered list and why?

5. Closure in Event Handlers
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default App;
👉 Question: What happens if you click the button 3 times quickly?

6. JSX Expression
function App() {
  const val = [1, 2, 3];
  return <h1>{val}</h1>;
}
export default App;
👉 Question: What will be rendered?

7. Conditional Rendering
function App() {
  const x = 0;
  return <h1>{x && "Hello"}</h1>;
}
export default App;
👉 Question: What will be displayed?

8. Multiple State Updates
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default App;
👉 Question: If the initial count = 0, what will be displayed after one button click?

Do you want me to also give answers + explanations for each, or just keep them as raw questions so you can practice?

You said:
now give answer of all question
ChatGPT said:
Perfect 👍 let’s go one by one with answers + explanations so you can revise quickly.

✅ Answers to React Output Questions
1. Component Rendering with State
setTimeout(() => setCount(count + 1), 1000);
Every render schedules a new setTimeout.

React renders → schedules setCount(count + 1) using the old value of count.

This causes infinite re-renders → React throws an error (Too many re-renders) or keeps updating.

👉 Answer: App will keep incrementing infinitely (not stable).

2. Object as State
user.name = "Ahmed";
setUser(user);
State in React is immutable. Mutating the object directly does not trigger re-render.

Here, React sees the same reference → no UI update.

👉 Answer: Even after clicking, it will still display Ali.

3. UseEffect with Dependencies
useEffect(() => {
  console.log("Effect runs");
}, [value === 2]);
Dependency is a boolean (true or false), not value.

First render → logs once.

When value becomes 2 → condition changes from false → true, effect runs again.

After that, increasing further won’t run effect unless it toggles back.

👉 Answer: Logs only twice (initial + when value becomes 2).

4. Key Prop
<li key={i}>{item}</li>
Using index as key causes problems when items are removed.

If "b" is removed, React reuses DOM nodes → "c" will move up but keeps old state (if it had internal state).

👉 Answer: UI will still look correct visually (a, c), but React may reuse incorrect DOM nodes → potential bugs.

5. Closure in Event Handlers
setTimeout(() => {
  setCount(count + 1);
}, 2000);
count inside setTimeout is captured (closure).

If you click 3 times quickly when count = 0, each timeout sees count = 0.

After 2s → all set count to 1.

👉 Answer: Final output will be 1, not 3.

6. JSX Expression
const val = [1, 2, 3];
return <h1>{val}</h1>;
React converts array to string → 1,2,3.

👉 Answer: Displays 1,2,3.

7. Conditional Rendering
const x = 0;
return <h1>{x && "Hello"}</h1>;
In JavaScript, 0 && "Hello" evaluates to 0.

👉 Answer: Displays 0.

8. Multiple State Updates
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
count = 0 initially.

Each setCount uses stale value (0), so all become 1.

React batches updates → final value is 1, not 3.

👉 Answer: Displays 1.
(To fix: use setCount(prev => prev + 1).)

✅ Now you’ve got both the questions + answers with reasoning — great for interviews.

Do you want me to also prepare a cheat sheet of common React tricky outputs (like useEffect cleanup, memo, props vs state, == vs === in JSX) so you can revise quickly before interviews?






No file chosenNo file chosen
ChatGPT can make mistakes. Check important info. See Cookie Preferences.
