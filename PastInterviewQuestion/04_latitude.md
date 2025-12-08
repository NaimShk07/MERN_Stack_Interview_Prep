## 1. Tell me about few project that you have worked on

### 1. Business Networking App

- **Tech Stack**: React, Node.js
- **Role**: Implemented key features like referrals, testimonials, and reporting system.
- **Impact**: Boosted user engagement and helped businesses generate quality leads.

---

### 2. EV Charging Station Admin Panel

- **Tech Stack**: Angular
- **Role**: Built dashboards, reports, and user management modules.
- **Impact**: Enabled real-time monitoring and improved operational efficiency for charging stations.

---

### 3. Gujarat Maheshwari Samaj – District-Wise Listing

- **Tech Stack**: React, Node.js
- **Role**: Developed a district-wise listing system with advanced filters & search functionality.
- **Impact**: Simplified community access to information and improved overall usability.

---

## 1.1 What is your responsibility in your current company

- **Full Stack Development**:  
  Work with React, Angular, Node.js, and SQL to build scalable web applications.

- **Frontend Focus**:  
  Develop responsive UI components, optimize performance, and ensure smooth user experience.

- **Backend Contribution**:  
  Collaborate on APIs, integrate databases, and handle data-driven features.

- **Project Ownership**:  
  Take end-to-end responsibility for modules — from understanding requirements to deployment.

- **Collaboration**:  
  Work closely with designers, QA, and team members to deliver features on time.

---

## 2. What is asynchronous

- Asynchronous means tasks don't wait for each other to complete — they run independently.
- In JavaScript, it's useful when dealing with `time-consuming` operations like API calls or reading files.
- It allows the code to continue running without getting blocked or frozen.
- Common async tools: Callbacks, Promises, async/await

## 3. callback vs promise vs async/await

## 4. virtual dom vs real dom

- kerinfotech

---

## 5. how react handle virtual dom under the hood

- kerinfotech

---

## 6. Pure Component / Pure Function

- Pure Function
  - A function that **always returns the same output** for the **same input**.
  - It does **not change anything outside** itself (no side effects).
  - Easy to test and predict.
- Pure Component
  - React component that renders the same output for the same props/state.
  - Avoids unnecessary re-renders using shallow comparison.

---

## 7. Controlled vs uncontrolled component

## 8. React App is taking time to load What are the steps you will take to optimize

- kerinfotech 2.19

---

## 9. What is lazy loading

## 10. What is code spliting

## 11. useEffect with cleanup and dependency array

- code

  ```js
  const [count, setCount] = useState(0);

  useEffect(() => {
  	console.log("🔁 useEffect ran! Count is:", count);

  	return () => {
  		console.log("🧹 Cleanup before next effect/unmount. Count was:", count);
  	};
  }, [count]);
  ```

- output
  ```
  🔁 useEffect ran! Count is: 0     // on mount
  ---
  🧹 Cleanup before next effect/unmount. Count was: 0
  🔁 useEffect ran! Count is: 1     // after clicking increment
  ---
  🧹 Cleanup before next effect/unmount. Count was: 1
  🔁 useEffect ran! Count is: 2     // and so on...
  ```

---

## 12. What is debouncing

## 13. Structure of redux

-- kerinfotech: 2:14

## 14. What is reducer in redux

-- kerinfotech: 2:14

## 15. commonjs vs es modules

[click](../06_Node_Express/newnotes/nodejs_qna.md#L166)

## 16. Execution Differs: Synchronous vs Asynchronous

[click](../06_Node_Express/newnotes/nodejs_qna.md#L179)

## 17. 10 major features came in es6 module

## 18. If we have Promises, why do we still need async/await?

## 19. output of 2 loop with setTimeout, one with var and other with let, reason

## 20. JavaScript Scopes: Global vs Function vs Block

## 21. let vs const vs var

## 22. can i create server without express

[http](../06_Node_Express/newnotes/nodejs_qna.md#L109)

## 23. What is middleware

## 24. What is aggregation and aggregation pipeline

[click](../07_MongoDB/newnotes/mongodb_qna.md#L117)

## 25. how to handle one to many relationship in mongodb

## 26. write aggregation query to join 2 collection

## 27. What is populate

## 28. findOne and find

[click](../07_MongoDB/newnotes/mongodb_qna.md#L99)

---

## 29. User.findById vs db.collection('users').findById

- User.findById

  - Mongoose method
  - Finds a user by ID with schema validation
  - Returns a Mongoose document with extra features (like .populate())
  - Easier to use with Node.js apps using Mongoose

- db.collection('users').findById
  - Native MongoDB driver method
  - Directly accesses the users collection
  - Returns plain JavaScript objects (no validation or extras)
  - More control but less convenience

---

## 30. MongoDB vs Mongoose

## 31. What is event loops

## 32. How to secure your node js application

[click](../06_Node_Express/newnotes/optimize.md#L81)

---

## 33. How to optimize api in node and mongodb

- [Node.js](../06_Node_Express/newnotes/optimize.md#L82)
- [Mongodb](../07_MongoDB/newnotes/mongodb_qna.md#L124)

---

## 34. how to join collection with populate and aggregation

[check above](command:revealLine?{"lineNumber":413,"at":"top"})

---

## 35. How to do error handling in node js

[click](../06_Node_Express/newnotes/errorHandling.md)

---

## 36. How to make global error handling middleware

[click](../06_Node_Express/newnotes/errorHandling.md)

---

## 37. Which third party you use prisma, sequilize

---
