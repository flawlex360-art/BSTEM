## 2025-05-18 - Avoid Priority Preloading on Hidden Slideshow Images

**Learning:** Setting `priority={true}` on all `<Image />` elements in a slideshow forces Next.js to inject high-priority preloads for every slide image (even hidden ones), causing network bandwidth contention during page load and negatively affecting LCP. Furthermore, depending on array references (`images`) in `useEffect` when props are passed as inline array literals causes timers to reset unnecessarily on every render.
**Action:** Always condition `priority={idx === 0}` on image carousels so only the initial visible image is prioritized, and depend on primitive values (like `images.length`) in `useEffect` intervals.
