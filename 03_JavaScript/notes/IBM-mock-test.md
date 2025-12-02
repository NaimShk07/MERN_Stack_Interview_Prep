# IBM Mock Test – Combined MCQs with Answers & Explanations

This document contains all MCQs from:

- The first IBM-style MCQ set (30 questions)
- The IBM Full Mock Test (25 questions)

Each question includes:

- **Correct Answer**
- **Reasoning / Explanation**

---

# 🟦 SECTION 1 — First 30 IBM‑Style MCQs (with Answers + Reasoning)

## 1. What is the time complexity of searching in a balanced BST?

**Answer:** B. O(log n)  
**Reason:** Balanced BST height ≈ log n, so search follows tree height.

## 2. What data structure uses FIFO?

**Answer:** B. Queue  
**Reason:** FIFO = First In First Out, queue operations follow this order.

## 3. Undo functionality uses:

**Answer:** B. Stack  
**Reason:** Undo is last operation undone → LIFO.

## 4. Inserting at end of dynamic array (amortized):

**Answer:** A. O(1)  
**Reason:** Occasional resizing is costly but average insertion is constant.

## 5. Which is NOT stable sort?

**Answer:** C. Quick Sort  
**Reason:** Quick sort doesn't guarantee order of equal elements.

## 6. Output?

```js
typeof null;
```

**Answer:** B. "object"  
**Reason:** JS bug from 1995; null is tagged as object.

## 7. Output?

```js
let a = 10;
let b = a++;
console.log(a, b);
```

**Answer:** C. 11 10  
**Reason:** Post-increment returns old value.

## 8. Output?

```js
[] + [];
```

**Answer:** B. ""  
**Reason:** Arrays → string → "" + "".

## 9. Output?

```js
[1, 2] == "1,2";
```

**Answer:** A. true  
**Reason:** Array → "1,2" → string comparison.

## 10. Output?

```js
0.1 + 0.2 === 0.3;
```

**Answer:** B. false  
**Reason:** Floating-point precision error in JS.

## 11. Output?

```js
return;
{
	name: "IBM";
}
```

**Answer:** B. undefined  
**Reason:** Automatic semicolon insertion ends `return`.

## 12. Output?

```js
"5" - 2;
```

**Answer:** B. 3  
**Reason:** "-" converts both sides to numbers.

## 13. Encapsulation means:

**Answer:** A. Hiding internal details.

## 14. Which supports multiple inheritance?

**Answer:** C. C++  
**Reason:** C++ allows multiple base classes.

## 15. Polymorphism means:

**Answer:** B. Many forms.

## 16. NOT an OOP principle?

**Answer:** C. Compilation

## 17. Child modifies parent method:

**Answer:** B. Overriding

## 18. Return unique values?

**Answer:** B. SELECT DISTINCT

## 19. LEFT JOIN returns:

**Answer:** B. all left + matching right

## 20. Fastest search:

**Answer:** C. B-tree index

## 21. Document-based DB?

**Answer:** B. MongoDB

## 22. HAVING used with?

**Answer:** B. GROUP BY

## 23. Default join:

**Answer:** C. INNER JOIN

## 24. Fastest HashMap operation:

**Answer:** B. Search  
**Reason:** Average O(1)

## 25. Create branch:

**Answer:** A. git branch mybranch

## 26. Upload commits:

**Answer:** A. git push

## 27. git merge does:

**Answer:** B. Combines histories

## 28. .gitignore:

**Answer:** B. Blocks files from commit

## 29. Output?

```js
[1, 2, 3].map((x) => x * 2);
```

**Answer:** B. [2,4,6]

## 30. Output?

```js
true + true;
```

**Answer:** D. 2  
**Reason:** true → 1.

---

# 🟦 SECTION 2 — IBM Full Mock Test MCQs (25)

## 1. Time complexity of binary search?

**Answer:** B. O(log n)

## 2. Which allows both FIFO & LIFO?

**Answer:** C. Deque  
**Reason:** Double-ended queue.

## 3. Output?

```js
typeof NaN;
```

**Answer:** "number"

## 4. Output?

```js
x++ === ++x;
```

**Answer:** False  
**Reason:** Values differ.

## 5. Polymorphism?

**Answer:** C. Many forms.

## 6. Only matching rows?

**Answer:** C. INNER JOIN

## 7. Output?

```js
[] == 0;
```

**Answer:** true  
**Reason:** [] → "" → 0.

## 8. NOT NoSQL?

**Answer:** Oracle

## 9. Downloads + merges?

**Answer:** git pull

## 10. Ties data + methods?

**Answer:** Encapsulation

## 11. Fastest average?

**Answer:** Quick sort

## 12. Improves lookup?

**Answer:** Index

## 13. Output?

```js
[1] + [2, 3];
```

**Answer:** "12,3"

## 14. npm install?

**Answer:** installs node packages

## 15. Mutable?

**Answer:** Object

## 16. HashMap average search:

**Answer:** O(1)

## 17. useEffect runs:

**Answer:** when dependencies change

## 18. key prop?

**Answer:** identifies elements uniquely

## 19. HAVING applied after:

**Answer:** GROUP BY

## 20. Not JS datatype?

**Answer:** decimal

## 21. Output?

```js
1 < 2 < 3;
```

**Answer:** true  
**Reason:** (1<2)=true → true<3 → 1<3 → true.

## 22. Output?

```js
3 > 2 > 1;
```

**Answer:** false  
**Reason:** (3>2)=true → true>1 → 1>1 → false.

## 23. View commits?

**Answer:** git log

## 24. is-a relationship?

**Answer:** Inheritance

## 25. NOT JavaScript?

**Answer:** Compiled

---

# 🟦 SECTION 3 — Coding + Debugging

## Palindrome

```js
function isPalindrome(str) {
	return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}
```

**Reason:** Reverse string = same → palindrome.

---

## First Non-Repeating

```js
function firstNonRepeating(arr) {
	const map = {};
	for (let n of arr) map[n] = (map[n] || 0) + 1;
	for (let n of arr) if (map[n] === 1) return n;
	return -1;
}
```

**Reason:** Count frequency → return first with count=1.

---

## Debugging

**Bug:** `total is not defined`  
**Fix:**

```js
let total = 0;
```
