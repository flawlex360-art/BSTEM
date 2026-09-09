# Bolt's Journal - Critical Learnings

## 2025-05-18 - Avoid Priority Image Preloading on Slideshows & Inline Prop Re-allocations
**Learning:** Setting `priority={true}` on all images within a slideshow component forces Next.js to preload all hidden slide images concurrently at high priority, saturating network bandwidth and harming Largest Contentful Paint (LCP). Furthermore, passing inline array sorting expressions like `.sort()` as props resets `useEffect` timers on parent re-renders.
**Action:** Always set `priority={idx === 0}` on slideshow images, hoist static image arrays outside the render function, and depend on stable array primitives (e.g. `images.length`) in `useEffect`.
