# ⭐ Advanced & Commonly Asked CSS Interview Questions (Not Basic)

## 1️⃣ What is the difference between **display: none**, **visibility: hidden**, and **opacity: 0**?

- `display: none` → element removed from layout (no space).
- `visibility: hidden` → space reserved but element invisible.
- `opacity: 0` → element invisible but still interactive (clickable).

## 2️⃣ Explain **Reflow** vs **Repaint**

- **Reflow**: Layout recalculation (expensive).
- **Repaint**: Only visual appearance changes.

## 3️⃣ What are **stacking contexts** in CSS?

Created by:

- `position + z-index`
- `opacity < 1`
- `transform`
- `filter`
- `isolation: isolate`

## 4️⃣ Difference between **absolute**, **relative**, **fixed**, and **sticky**?

- `relative` → normal flow + can shift.
- `absolute` → removed from flow; positioned to nearest positioned ancestor.
- `fixed` → relative to viewport.
- `sticky` → toggles between relative & fixed based on scroll.

## 5️⃣ CSS Containment

```css
.container {
	contain: layout paint size;
}
```

- Tells browser to limit layout calculations inside the element.
- Improves rendering for large UIs.

## 6️⃣ CSS Custom Properties vs SASS variables

- Live in the DOM → affected by JS.
- Allow theming, dynamic updates.
- Cascade-aware.
  SASS variables compile-time only.

## 7️⃣ Flexbox conflict resolution

Priority order:

- flex-basis
- If flex-basis: auto → uses width
- min-width/max-width ALWAYS override others

## 8️⃣ When to use Grid vs Flexbox

- Flexbox → 1D (row OR column), content-driven.
- Grid → 2D (row AND column), layout-driven.
  Interviewers often ask scenarios.

## 9️⃣ auto, min-content, max-content, fit-content()

- min-content → smallest possible size without overflow.
- max-content → content's max size without breaking.
- fit-content(200px) → clamps between min-content and 200px.

## 🔟 How calc() behaves

- Runtime evaluated.
- Can combine %, px, vw, etc.

```css
width: calc(100% - 2rem);
```

Works because browser calculates values after layout.

## 1️⃣1️⃣ Critical CSS

- Inline above-the-fold CSS in <head> so page renders faster.
- Rest of CSS loaded async.
  Improves FCP, LCP → common performance interview question.

## 1️⃣2️⃣ BFC (Block Formatting Context)

A BFC isolates layout inside an element.
Triggers:

- overflow: hidden
- float
- display: flex/grid/inline-block
  Fixes:
- margin collapsing issues
- float overlapping
- layout isolation

## 1️⃣3️⃣ Transitions vs Animations

- Transitions need a triggering event (hover, active, class change).
- Animations auto-run with keyframes + more control (loop, reverse, easing).

## 1️⃣4️⃣ object-fit vs background-size

- `object-fit: cover` → used for `<img>`, `<video>`.
- `background-size: cover` → used for CSS backgrounds.
  Both scale differently and respect aspect ratio.

## 1️⃣5️⃣ Subgrid in CSS

Allows child elements to align to the parent’s grid tracks.

```css
.child {
	display: grid;
	grid-template-columns: subgrid;
}
```

Solves nested grid alignment issues.
Very commonly asked since 2024+.
