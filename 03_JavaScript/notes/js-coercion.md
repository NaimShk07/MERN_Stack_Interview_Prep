# JavaScript Type Coercion Cheat Sheet

## 1. `==` vs `===`

- `===` → strict (no coercion)
- `==` → loose (coercion happens)

## 2. Arrays → Strings

```js
[1] + [2, 3]; // "12,3"
[] + []; // ""
[] == ""; // true
```

## 3. Strings → Numbers (except +)

```js
"5" - 2; // 3
"5" * 2; // 10
"5" / 2; // 2.5
"5" + 2; // "52"
```

## 4. Boolean → Number

```js
true == 1; // true
false == 0; // true
true + true; // 2
```

## 5. Null & Undefined

```js
null == undefined; // true
null === undefined; // false
null == 0; // false
undefined == 0; // false
```

## 6. Objects → Primitives

```js
[1, 2] == "1,2"; // true
{
}
+[]; // "[object Object]"
```
