1. How we can change object value which is created with const keyword ?
2. why 1 + + '1' and 1 + '1' different output and why the reason?
3. what will happen in memory stack if i write a infinite loop ?

An **infinite loop** occurs when a loop’s exit condition is never met.  
In JavaScript (or most programming languages), this can lead to **high CPU usage and potential memory issues**, but the exact effect depends on the type of loop.

---

### 📌 Key Points

- **Call Stack** grows **only if recursive functions** are used without a base case
- A **regular infinite loop** (like `while(true)`) keeps the CPU busy but **does not grow the stack**
- Can cause **browser/tab freeze** or **Node.js process to hang**
- May eventually trigger **Out Of Memory** if objects are continuously allocated inside the loop

---

### 🧪 Example

```js
// Infinite loop without recursion
while (true) {
	console.log("Looping...");
}

// CPU usage spikes, but stack size remains stable
```

```js
// Infinite recursion (stack grows)
function recurse() {
	recurse();
}
recurse();
// ❌ RangeError: Maximum call stack size exceeded
```

4. what is heap memory ?

**Heap memory** is a region in a computer’s memory used for **dynamic allocation**, where objects, arrays, and other reference types are stored during runtime.  
In JavaScript, this is where all **objects and functions** live.

---

### 📌 Key Points

- Stores **dynamic data** like objects, arrays, and closures
- Memory is **managed automatically** by JavaScript’s **garbage collector**
- Access to heap memory is **slower than stack memory**
- Stack stores **primitive values and function calls**, while heap stores **reference types**

### 📌 Stack Memory

- Stores **primitive values**:  
  `undefined`, `null`, `boolean`, `number`, `string`, `symbol`, `bigint`
- Stores **function call frames** (execution context)
- **Last-In-First-Out (LIFO)** structure
- Fast access, but **size is limited**

### 📌 Heap Memory

- Stores **reference types**:
  `Objects`, `Arrays`, `Functions`, `Classes`
- Dynamic memory allocation
- Garbage collector automatically frees unused memory
- Slower access compared to stack

5. What is error heap out of bound ?

A **"Heap Out of Memory"** error occurs in JavaScript (Node.js) when the **heap memory is exhausted**, meaning the program is trying to allocate more memory than the engine allows.

---

### 📌 Key Points

- Happens when **too many objects or large data structures** are kept in memory
- Common in **large arrays, infinite loops, or memory leaks**
- Node.js has a **default heap size** (~1.5GB for 64-bit systems)
- Can crash the application if not handled

6. What is difference between rdbms and nosql database ?
7. Which Database to Use for Storing Files: MongoDB vs MySQL

To store **files or large binary data** in a database, **MongoDB is generally preferred over MySQL**.

---

### 📌 Key Points

- **MongoDB** supports **GridFS**, a specification for storing and retrieving **large files (>16MB)**
- MySQL can store files using **BLOBs**, but it is **less efficient for large files**
- GridFS splits files into **chunks**, allowing streaming, partial reads, and easier scaling
- MongoDB handles **metadata** and **file content** together

---

### 🧪 Example Using MongoDB GridFS

```javascript
const { MongoClient, GridFSBucket } = require("mongodb");

async function uploadFile() {
	const client = await MongoClient.connect("mongodb://localhost:27017");
	const db = client.db("myDB");
	const bucket = new GridFSBucket(db);

	const fs = require("fs");
	fs.createReadStream("sample.pdf")
		.pipe(bucket.openUploadStream("sample.pdf"))
		.on("finish", () => console.log("File uploaded"));
}

uploadFile();
```

### ⚡ Why MongoDB is Preferred

- ✅ Handles large files efficiently via GridFS
- ✅ Supports streaming and chunking
- ✅ Easier to scale for distributed systems
- ✅ Stores file metadata alongside content

### ⚠️ MySQL Limitation

- BLOBs can store files, but reading/writing large files is slower
- Difficult to scale for huge datasets or real-time streaming
