# React App Optimization — Interview Cheat Sheet

A compact, high-impact cheat sheet covering practical React app optimization techniques often discussed in interviews. Copy this `README.md` to your notes.

---

## 1. Performance fundamentals (1‑line answers)

* **Perceived vs Actual performance:** Perceived = how fast the UI feels (skeletons, progressive rendering). Actual = load/CPU/time metrics (LCP, FID, TTFB).
* **Key metrics to know:** LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift), TTI (Time to Interactive).
* **Bottlenecks:** Network, main-thread JS, rendering (reconciler), expensive React renders, large bundles.

---

## 2. Measure before optimizing

* Use **Chrome DevTools Performance**, **React Profiler**, **Lighthouse**, **Web Vitals** and **bundle analyzers** (source-map-explorer, webpack-bundle-analyzer, `rollup-plugin-visualizer`).
* Always reproduce slow scenario (slow network, CPU throttling) and profile.

---

## 3. Bundle & code-splitting

* **Tree-shaking:** Use ES modules, keep dependencies modern.
* **Code-splitting:** Dynamic `import()` and `React.lazy` for route-level and heavy components.
* **Route-based split:** Split each route chunk to lazy-load on navigation.
* **Component-level split:** Lazy-load modals, charts, video players, editors.
* **Vendor splitting:** Separate `vendor` and `commons` chunks via bundler config.

**Quick example:**

```js
const Heavy = React.lazy(() => import('./Heavy'));
<Suspense fallback={<Spinner/>}><Heavy/></Suspense>
```

---

## 4. Rendering optimizations

* **Avoid unnecessary renders:** ensure parent components don't re-render children with stable props.
* **`React.memo`** for pure functional components.
* **`useMemo`** to memoize expensive computations (not for micro-optimizations).
* **`useCallback`** to memoize callbacks passed to children (useful when children are memoized).
* **Key rules:** Only memoize when it prevents noticeable re-renders — measure first.

**Pitfalls:** Overusing `useMemo`/`useCallback` can add memory and CPU overhead.

---

## 5. List rendering & virtualization

* For large lists, use virtualization libraries: **react-window** or **react-virtualized**.
* Use stable `key` values; avoid using index as key when items change order.

---

## 6. Avoid expensive reconciliations

* Prefer splitting big component trees into smaller ones so React can bail out earlier.
* Keep props shallow and primitive where possible.
* Avoid passing new object/array/inline functions as props each render.

---

## 7. Images, fonts & assets

* **Images:** Use responsive images (`srcset`), WebP/AVIF, size them correctly, lazy-load (`loading="lazy"`), use CDN.
* **Fonts:** Use `font-display: swap`, subset fonts, preload critical fonts with `<link rel="preload">`.
* **Static assets:** Serve via CDN, set cache headers, use hashed filenames for long-term caching.

---

## 8. Network & caching

* **HTTP caching:** Leverage `Cache-Control` and `ETag` for static assets.
* **Client caching:** Cache API responses with SWR or React Query (stale-while-revalidate).
* **Service Workers / PWA:** Use Workbox to cache resources and improve repeat-load performance.

---

## 9. Server-side rendering (SSR) & hydration

* **SSR / SSG:** Reduce Time-to-First-Byte and LCP. Use Next.js, Remix, or custom SSR.
* **Streaming SSR:** Send HTML progressively to improve TTFB and perceived load.
* **Hydration costs:** Avoid hydrating very large app at once; consider partial hydration/islands.

---

## 10. Lazy hydration & progressive enhancement

* Defer non-interactive components or hydrate on interaction.
* Use frameworks or patterns that support islands architecture.

---

## 11. CPU-bound work & web workers

* Offload heavy calculations to **Web Workers** or `requestIdleCallback`/`requestAnimationFrame`.
* Split tasks into small chunks to avoid blocking the main thread.

---

## 12. Third-party scripts

* Treat them as untrusted: load async, defer, or inject after user interaction.
* Audit 3rd-party cost with Chrome DevTools (Third-party panel).

---

## 13. Dev / Build optimizations

* **Production builds:** enable minification, terser, remove dev-only code.
* **Source maps:** upload them to error trackers; keep them out of production bundles.
* **Bundle analysis:** run before release to catch big deps.
* **Use Vite** for faster dev and smaller default bundles (if asked compare CRA vs Vite briefly).

---

## 14. React-specific APIs & patterns to mention

* `React.memo`, `useMemo`, `useCallback`, `useDeferredValue`, `useTransition` (concurrent features), `Profiler` API.
* **Concurrent features:** explain trade-offs (smoother UI vs complexity).

---

## 15. Common interview questions & short answers

* **Q: When should you use `useMemo`?**
  A: To memoize expensive calculations whose inputs rarely change; measure first.

* **Q: How does `React.memo` work?**
  A: It shallowly compares props and skips re-render when identical; custom comparator allowed.

* **Q: How do you reduce bundle size?**
  A: Tree-shaking, code-splitting, replace heavy libs, use lighter alternatives, dynamic imports.

* **Q: Why virtualization helps?**
  A: It renders only visible items, reducing DOM nodes and rendering cost.

* **Q: How to optimize images?**
  A: Proper formats (WebP/AVIF), responsive sizes, lazy-loading, CDN, caching.

---

## 16. Quick checklist to mention in interviews

* Measured with Profiler/Lighthouse ✅
* Code-splitting implemented ✅
* Lazy-load heavy components ✅
* Memoized only where needed ✅
* Virtualized large lists ✅
* Optimized images & fonts ✅
* Bundle analyzed & reduced ✅
* CDN + caching headers configured ✅
* SSR/SSG considered for critical pages ✅

---

## 17. Commands & tools (one-liners)

* **Lighthouse:** `Chrome DevTools → Lighthouse` or `npx lhci autorun`
* **Bundle analyze (webpack):** `npx webpack-bundle-analyzer dist/stats.json`
* **Source map explorer:** `npx source-map-explorer build/static/js/*.js`
* **React Profiler:** React DevTools Profiler tab

---

## 18. Final interview tips

* Always **measure first**; explain the trade-offs for each optimization.
* When giving answers, state **why** it helps (network vs CPU vs render cost) and **how** you'd measure success.
* Prepare 2-3 concrete examples from your past projects where you applied optimizations (what you measured, changes made, and improvements).

---

*Saved as a compact cheat-sheet for quick revision before interviews.*
