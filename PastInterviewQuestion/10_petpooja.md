## 1. ## Commonly Used Libraries in React

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

## 2. CSS Libraries in React

📌 **React supports multiple CSS approaches and libraries to style apps efficiently.**  
Here’s a quick overview of the most popular ones.

---

### 1️⃣ SCSS (Sassy CSS)

📌 **CSS preprocessor adding variables, nesting, mixins, and functions.**

- Use `.scss` or `.sass` files
- Can be global or scoped via CSS Modules
- Compiled to regular CSS before use

> Advantages: Nesting, variables, mixins, organized large stylesheets

### 2️⃣ MUI (Material-UI) 🎨

📌 **React component library implementing Google’s Material Design.**

- Pre-built components like buttons, cards, modals
- Supports theming and customization

> Advantages: Fast UI development, consistent design, responsive components

### 3️⃣ Tailwind CSS 🌬️

📌 **Utility-first CSS framework for highly customizable, responsive designs.**

- No pre-built components, uses utility classes
- Works perfectly with React for rapid styling

> Advantages: Rapid styling, responsive design, low CSS bloat, easily composable

## 3. Critical Issue Faced and Fixed in MERN App

📌 **Issue:** While building a real-time collaborative task management MERN app, users reported that updates from one user were not reflecting immediately for other users. The UI sometimes showed stale data, and occasionally multiple updates caused race conditions.

---

### 🔍 Root Cause

- The issue was caused by **inefficient state management and delayed database writes**.
- Frontend was relying solely on polling for updates instead of real-time updates.
- Backend was **overwriting concurrent updates** due to naive `findOneAndUpdate` usage without versioning.

---

### ⚡ How I Fixed It

1. **Implemented WebSockets (Socket.IO)** for real-time communication:
2. **Optimized Redux state** using redux-toolkit to handle incoming updates without overwriting local changes.
3. Added optimistic **UI updates** with rollback on server errors.
4. **Used MongoDB versioning** (\_\_v) to prevent race conditions when multiple users updated the same document simultaneously.

## 4. ## Lifecycle Methods of React Components

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

## 5. Why Write Speed Decreases When Using Indexes

📌 **Important:** Indexes **increase read speed**, but they **decrease write speed**.  
Many developers misunderstand this — write operations actually become **slower** when indexes exist.

---

### 📌 Why Write Speed Decreases with Indexes

When you perform a `INSERT`, `UPDATE`, or `DELETE`, the database must:

1️⃣ **Write data to the main table**  
2️⃣ **Also update every index associated with that table**

This means:

- More disk I/O
- More CPU work
- More pages to maintain in B-Tree indexes
- More locks and latches

> Indexes improve read performance but slow down write operations because every write must also update the index structure. More indexes = more overhead during write operations.

## 6. Inclusive vs Exclusive Tax (Simple Explanation)

📌 **These terms describe whether the tax is already included in the product price or added on top of it.**

---

## 🟩 Inclusive Tax

**Tax is already included** in the final price you see.

✔ What you see = What you pay  
✔ The seller deducts the tax amount from the displayed price

---

## 🟥 Exclusive Tax

**Tax is added on top** of the base price.

❌ What you see ≠ What you pay  
✔ The tax is calculated separately and added to the bill

> Inclusive tax means tax is part of the displayed price. Exclusive tax means tax is added separately to the base price.

---

## 7. What is 100 + 5%, 100 has 5% in it — what is the base number?

---

### 🟥 1️⃣ What is 100 + 5%?

This means **100 is the base amount**, and we add 5% on top.

📌 **Calculation:**  
5% of 100 = 5  
Final amount = **100 + 5 = 105**

---

### 🟩 2️⃣ “100 has 5% in it — what is the base number?”

This means **100 is inclusive of 5% tax**, and we want the **original amount before tax**.

1️⃣ Let **base amount = x**  
2️⃣ Tax = 5% of x = 0.05 × x = 0.05x

Since 100 **includes the tax**, we can write:

```text
x + 0.05x = 100
1.05x = 100
x = 100 / 1.05
x ≈ 95.24
```
