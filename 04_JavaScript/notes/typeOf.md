## === Primitives ===

- console.log(typeof 42); // "number"
- console.log(typeof 'hello'); // "string"
- console.log(typeof true); // "boolean"
- console.log(typeof undefined); // "undefined"
- console.log(typeof 10n); // "bigint"
- console.log(typeof Symbol()); // "symbol"

## === Special Case ===

- console.log(typeof null); // "object" // ⚠️ Interview favorite - legacy bug

## === Functions ===

- console.log(typeof function() {}); // "function"
- console.log(typeof () => {}); // "function"
- console.log(typeof class X {}); // "function"

## === Objects ===

- console.log(typeof {}); // "object" // plain object
- console.log(typeof []); // "object" // array
- console.log(typeof new Date()); // "object" // date object
- console.log(typeof /regex/); // "object" // regex
- console.log(typeof Math); // "object" // built-in object

## === Edge Cases ===
let x;

- console.log(typeof x); // "undefined" // uninitialized variable
- console.log(typeof NaN); // "number" // Not a Number is still a number
- console.log(typeof (typeof 1)); // "string" // typeof always returns a string

## === Browser Specific (Optional) ===

- console.log(typeof window); // "object"
- console.log(typeof document); // "object"
- console.log(typeof alert); // "function"
