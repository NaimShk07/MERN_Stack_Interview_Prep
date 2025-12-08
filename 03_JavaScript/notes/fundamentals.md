# Computer Fundamentals & Core Concepts Cheat Sheet

## 1. Computer Basics

- **Computer System:** Hardware + Software
- **Hardware:** CPU, Memory, I/O Devices
- **Software:** System Software (OS, Drivers), Application Software
- **Binary & Bits:** 1 Byte = 8 Bits, Binary numbers represent data

---

## 2. Memory Basics

- **RAM (Random Access Memory):** Volatile, fast, used for running programs
- **ROM (Read Only Memory):** Non-volatile, stores firmware
- **Cache Memory:** Small, fast memory closer to CPU, improves performance
- **Virtual Memory:** Disk space used as "extra RAM" by OS

---

## 3. Heap vs Stack

| Feature           | Stack          | Heap                |
| ----------------- | -------------- | ------------------- |
| Memory managed by | Compiler       | Programmer / GC     |
| Allocation        | Automatic      | Manual (new/malloc) |
| Size              | Smaller        | Larger              |
| Lifetime          | Function scope | Until deleted / GC  |
| Access            | Fast           | Slower              |
| Fragmentation     | No             | Possible            |

- **Stack:** Stores local variables, function calls, and return addresses.
- **Heap:** Stores objects created dynamically (in JS: `new Object()`).

---

## 4. Pointers (C/C++ concept)

- **Pointer:** Variable that stores memory address of another variable

```c
int a = 10;
int *p = &a; // p points to a
```

- **Dereferencing:** Access value stored at address

```c
int val = *p; // val = 10
```

- **Pointer Arithmetic:** Can move addresses (p++, p--)

6. Data Types & Memory

| Type   | Size (typical) | Notes                    |
| ------ | -------------- | ------------------------ |
| int    | 4 bytes        | Stores integers          |
| float  | 4 bytes        | Stores decimal numbers   |
| double | 8 bytes        | Higher precision decimal |
| char   | 1 byte         | Stores single character  |
| bool   | 1 byte         | true/false               |

7. Variables & Scope

- **Local Variable**: Declared inside function/block, destroyed after scope ends
- **Global Variable**: Declared outside all functions, accessible everywhere
- **Static Variable**: Retains value between function calls

8. Object & Memory in JS (important for MERN)

**Primitive Types:** `Number`, `String`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt` → stored in stack
**Reference Types:** `Object`, `Array`, `Function` → stored in heap, variable stores reference

```js
let a = { name: "John" };
let b = a;
b.name = "Doe"; // a.name also changes
```

9. Garbage Collection (JS)

- JS automatically cleans up memory of objects not referenced
- Avoid memory leaks by removing references to unused objects

10. Call Stack & Execution Context (JS)

- JS uses single-threaded call stack
- Execution Context: Environment where code is executed (variable scope, function, this)
- Function call pushes to stack, finishes → popped

11. Basic Algorithms & Complexity

- Time Complexity: O(1), O(n), O(n²)
- Space Complexity: Memory used by algorithm
- Common interview topics:
  - Arrays & Strings
  - Linked List, Stack, Queue
  - Trees & Graphs basics
  - Sorting & Searching

12. Common Errors

- **Null/Undefined Reference** → Check variable before access
- **Memory Leak (JS)** → Remove unused references
- **Stack Overflow** → Infinite recursion
- **Dangling Pointer (C/C++)** → Pointer pointing to deleted memory
