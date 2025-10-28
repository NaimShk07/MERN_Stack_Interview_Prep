# Node.js & npm Cheatsheet

---

## 1. What is npm?

- **npm (Node Package Manager)**: Default package manager for Node.js.
- Used to **install**, **manage**, and **share** JavaScript packages.
- Manages dependencies via `package.json`.
- Provides CLI commands like `npm install`, `npm run`, and `npx`.

---

## 2. Role of `package.json`

- Project **manifest file** with metadata (name, version, author, license).
- Lists **dependencies** & **devDependencies** with versions.
- Defines **scripts** (e.g., `start`, `test`) for automation.
- Enables consistent dependency management.

---

## 3. Dependencies vs DevDependencies

| Type                | Purpose                                                  | Installed in Production? |
| ------------------- | -------------------------------------------------------- | ------------------------ |
| **dependencies**    | Required to **run** the app                              | Yes                      |
| **devDependencies** | Required for **development only** (testing, build tools) | No                       |

---

## 4. What does `npm install` do?

- Reads `package.json` and `package-lock.json`.
- Installs listed dependencies into `node_modules`.
- Updates `package-lock.json` to lock exact versions.
- Prepares environment for app execution.

---

## 5. What is `npx`?

- Executes package binaries **without global install**.
- Useful for one-time CLI tool runs, e.g., `npx create-react-app my-app`.
- Prevents global package clutter and version conflicts.

---

## 6. What is `package-lock.json`?

- Locks **exact dependency versions** and their entire tree.
- Ensures **consistent installs** across environments.
- Speeds up installs via caching.
- Should be committed alongside `package.json`.

---

## 7. `package.json` vs `package-lock.json`

| Aspect           | package.json                   | package-lock.json              |
| ---------------- | ------------------------------ | ------------------------------ |
| Purpose          | Defines dependencies & scripts | Locks exact installed versions |
| Maintained by    | Developer                      | npm (auto-generated)           |
| Editable         | Yes                            | No (avoid manual edits)        |
| Included in repo | Yes                            | Yes                            |
| Role             | What you want                  | What you actually get          |

---

## 8. If deleted, will code run?

| File                | Effect                                              | Code Run?              |
| ------------------- | --------------------------------------------------- | ---------------------- |
| `package.json`      | Lose dependency info; can't install/manage packages | ❌ No                  |
| `package-lock.json` | May install different versions causing bugs         | ⚠️ Possibly (unstable) |
| Both                | Dependency & script info lost; project breaks       | ❌ No                  |

---

## 9. What is `node_modules`?

- Directory where npm installs project packages and their dependencies.
- Contains all package code used by the app.
- Can be large depending on dependency tree.

---

## 10. What if you delete `node_modules`? Will code run?

- Deletes all installed packages.
- Project breaks until dependencies are restored.
- Safe to delete; run `npm install` to reinstall.

---

## 11. Can we use built-in Node.js modules without `node_modules`?

- **Yes!**
- Core modules like `http`, `fs`, `path` are built-in.
- Use via `require('http')` without installing anything.

---

# Summary

| Concept               | Description                                  |
| --------------------- | -------------------------------------------- |
| **npm**               | Node.js package manager                      |
| **npx**               | Run package binaries without install         |
| **package.json**      | Project metadata & dependencies              |
| **package-lock.json** | Locks exact dependency versions              |
| **node_modules**      | Installed packages directory                 |
| **npm install**       | Install project dependencies                 |
| **Core modules**      | Built-in Node.js modules (no install needed) |

---
