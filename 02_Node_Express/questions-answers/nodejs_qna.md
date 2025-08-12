1. What is Node.js?

- Node.js is a runtime environment that allows you to run JavaScript on the server-side, outside the browser.
  - Built on Chrome’s V8 JavaScript engine
  - Supports non-blocking, event-driven architecture
  - Great for building scalable, real-time applications (e.g., APIs, chat apps)

2. Event-driven architecture

- Node.js uses an event-driven architecture, meaning it reacts to events instead of following a strict step-by-step sequence.
- It listens for events (like user actions, file reads, HTTP requests) and runs callback functions when those events occur.

3. Blocking vs Non-blocking I/O

- Blocking I/O
  - Code waits (or blocks) until the operation completes.
  - Slows down execution – nothing else runs in the meantime.
- Non-Blocking I/O
  - Code does not wait — it moves on and handles result later via callback/promise.
  - Improves speed and scalability.
- readFileSync() | readFile() with callback

4. File system module, path module

- FS: Used to interact with the file system — read, write, delete, rename files, etc.
- Path: Used to work with file and directory paths. Helps write clean, cross-platform code.

5. Streams

- Streams allow reading or writing data piece-by-piece (chunks) instead of loading everything into memory at once.
- ex. youtube video

6. Buffers

- Buffer is a temporary storage for raw binary data especially useful for streams and binary file processing.
- ex. a small box that holds raw data temporarily until it's processed.

7. Streams & Buffers Work Together:

- When you read a file with streams, it loads data into a buffer first.
- Node.js then gives you each chunk from the buffer using .on('data').

8. CommonJS, ESModules, require, import, exports

- CommonJs
  - CommonJS is the original module system used in Node.js.
  - Uses require() to import and module.exports to export.
  - Synchronous loading of modules.
  - File extension: .js
- ESModules
  - ESModules is the modern JavaScript module system (used in browsers and Node.js).
  - Uses import and export keywords.
  - Asynchronous module loading.
  - File extension: .mjs (or .js with "type": "module" in package.json)

9.  Http module

- It's a core Node.js module for creating web servers.
- You can handle requests and responses directly without using any external libraries like Express.

10. Dev Vs Normal Dependencies

- Needed only during development, not in production. ex. cors, morgan
- Needed for your app to run in production. ex. prettier, nodemon
