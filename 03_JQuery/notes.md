# 🌟 Important & Most Asked jQuery Interview Questions (With Answers)

---

## 1. **What is jQuery?**

jQuery is a `fast`, `lightweight JavaScript library` that simplifies HTML DOM manipulation, event handling, animations, and AJAX interactions using a simple syntax.

---

## 2. **Why use jQuery over JavaScript?**

- Less code, more functionality
- Cross-browser compatibility
- Easy DOM manipulation
- Simplified AJAX
- Built-in animations

---

## 3. **What is the difference between `$(document).ready()` and `window.onload`?**

- `$(document).ready()` runs **as soon as the DOM is ready** (before images load).
- `window.onload` runs **only after the entire page**, including images and resources, is fully loaded.

---

## 4. **How to select elements in jQuery?**

```js
$("#id"); // by ID
$(".class"); // by class
$("p"); // by tag
$("div > p"); // child selector
```

## 5. What is chaining in jQuery?

Chaining allows multiple jQuery methods to run on the same element in one line.

```js
$("#box").css("color", "red").slideDown().fadeOut();
```

## 6. How to perform an AJAX call in jQuery?

```js
$.ajax({
	url: "data.json",
	method: "GET",
	success: function (res) {
		console.log(res);
	},
});
```

## 7. What is event delegation in jQuery?

Attaching an event to a parent element instead of individual child elements—useful for dynamic elements.

```js
$(document).on("click", ".btn", function () {
	alert("Button clicked!");
});
```

## 8. How to hide/show elements?

```js
$("#box").hide();
$("#box").show();
$("#box").toggle();
```

## 9. Difference between `.text()` and `.html()`?

- `.text()` → returns/sets plain text
- `.html()` → returns/sets HTML markup

## 10. How to animate elements in jQuery?

```js
$("#box").animate(
	{
		width: "300px",
		opacity: 0.5,
	},
	1000
);
```
