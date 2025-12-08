# HTML Interview Questions — Advanced (15 Q&A)

> A concise collection of 15 frequently asked **advanced** HTML interview questions with clear answers.
> Formatted as a `README.md` for quick study or to include in your notes.

---

## 1. What is the purpose of `<!DOCTYPE html>` and what happens if it's missing or incorrect?
**Answer:** `<!DOCTYPE html>` tells the browser to render the page in standards mode (HTML5). If missing or incorrect, browsers may enter *quirks mode* or *limited-quirks mode*, emulating old browser behaviors which can break layout and CSS. Always include the correct doctype at the top of the document.

---

## 2. Explain the difference between HTML (text/html) and XHTML (application/xhtml+xml).
**Answer:** HTML (text/html) is parsed with the flexible HTML parser; it tolerates malformed markup. XHTML (served as application/xhtml+xml) is XML — strictly well-formed, case-sensitive, and errors cause parse failures. Most modern web uses HTML5 (`text/html`). XHTML usage is rare due to XML strictness and interoperability issues.

---

## 3. How does the HTML parser handle unclosed or mis-nested tags (e.g., `<p><div></p></div>`)?
**Answer:** The HTML parser uses a state machine with error-correction rules defined in the HTML spec. It implicitly closes open elements when required and rearranges the DOM to produce a consistent tree. Behavior is standardized, which is why browsers handle broken markup similarly.

---

## 4. What are "void elements" in HTML? Give examples and explain how they differ from self-closing syntax.
**Answer:** Void elements cannot have content and must not have closing tags: examples include `<img>`, `<br>`, `<meta>`, `<input>`. In HTML (text/html), the self-closing slash (`<img />`) is ignored; it's optional. In XML/XHTML it matters. Don't add content inside void elements.

---

## 5. How do `srcset`, `sizes`, and `<picture>` work for responsive images?
**Answer:** `srcset` provides multiple image candidates with descriptors (width `w` or pixel density `x`). `sizes` tells the browser the slot's rendered width under different conditions. The browser chooses the best candidate. `<picture>` allows art-direction — different source elements with media queries and types; the browser picks the first matching `<source>` before falling back to `<img>`.

---

## 6. What is the `<template>` element and how is it used?
**Answer:** `<template>` holds inert DOM fragments that are not rendered or executed. Its contents are not part of the document flow and scripts inside don't run. Use `template.content.cloneNode(true)` in JS to stamp content into the live DOM—useful for client-side rendering, templating, and Web Components.

---

## 7. Explain Shadow DOM vs. Light DOM and why encapsulation matters.
**Answer:** Shadow DOM provides scoped DOM and CSS for Web Components, isolating internals from the host page's CSS/JS. Light DOM is the regular page DOM. Encapsulation prevents style leakage, naming collisions, and makes components more predictable and reusable.

---

## 8. How do ARIA roles, states, and properties interact with semantic HTML for accessibility?
**Answer:** Prefer native semantic HTML (e.g., `<button>`, `<nav>`, `<form>`) because browsers and assistive tech have built-in behavior. Use ARIA to fill gaps where semantics are missing (e.g., custom widgets). Avoid `role` that duplicates native semantics. ARIA states/properties (e.g., `aria-expanded`, `aria-hidden`) communicate dynamic changes. Follow ARIA authoring practices to avoid creating inaccessible controls.

---

## 9. What is `loading="lazy"` and when is it appropriate to use?
**Answer:** `loading="lazy"` is a native browser hint for deferring offscreen images and iframes until near viewport. Use for lower-priority media to improve page load and LCP. Avoid for above-the-fold images or content that affects layout/SEO-critical content. Consider `decoding="async"` and proper width/height attributes to avoid layout shifts.

---

## 10. Explain the purpose and differences between `<meta name="viewport">`, `initial-scale`, and `width=device-width`.
**Answer:** The viewport meta informs mobile browsers how to scale/layout the page. `width=device-width` sets the viewport width to device's CSS pixel width. `initial-scale=1` sets the initial zoom level. Without this, mobile browsers may use a wider viewport, causing tiny text and scaling. Use both for responsive design.

---

## 11. How do `data-*` attributes work and when should you use them?
**Answer:** `data-*` attributes store custom data on elements. They are accessible via `element.dataset` in JS (camelCased). Use them for application-specific metadata that doesn't belong in class names or DOM structure. Avoid overusing for complex data; prefer JSON/JS state or `aria-*` if it affects accessibility.

---

## 12. What is the difference between `<main>`, `<section>`, `<article>`, and `<div>`?
**Answer:** `<main>` marks the primary page content (one per page). `<article>` represents self-contained content that could be syndicated. `<section>` is a thematic grouping, often with a heading. `<div>` is a generic container with no semantic meaning. Use semantic elements to improve accessibility and SEO.

---

## 13. How does preloading (`<link rel="preload">`) differ from prefetch, and when should you use each?
**Answer:** `preload` is a high-priority hint to fetch a critical resource needed for the current navigation (fonts, hero images, scripts) and should be used when you need a resource ASAP. `prefetch` is low priority for future navigations/pages. Misusing `preload` can hurt performance by fetching too many resources early.

---

## 14. What is Content Security Policy (CSP) and what's its relationship to HTML?
**Answer:** CSP is a response header (or `<meta http-equiv="Content-Security-Policy">`) that restricts where resources (scripts, styles, images) can be loaded from, mitigating XSS and data injection attacks. While it's not strictly an HTML feature, it's enforced by browsers for HTML pages and improves security posture when configured correctly.

---

## 15. How do you prevent form autofill and what considerations exist around UX and security?
**Answer:** Use `autocomplete` attribute (`on`, `off`, or specific tokens like `name`, `email`, `current-password`) properly. Browsers may ignore `autocomplete="off"` for credentials. To prevent unwanted autofill on security-sensitive fields, follow best practices (use correct `autocomplete` tokens, avoid tricking browsers with fake fields). Consider user convenience — autofill improves usability and security by encouraging stronger passwords.

---

## Bonus — Quick study tips
- Prefer semantic HTML + progressive enhancement.
- Practice accessibility (ARIA, keyboard nav, semantic landmarks).
- Know responsive images, preloading, and why file size/critical path matter.
- Review Web Components basics (shadow DOM, templates).

---

*File generated for quick download.*  
