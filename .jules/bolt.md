# Bolt's Journal: Critical Performance Learnings

## 2025-03-05 - Redundant Interval Setup via Reference-Type React Props
**Learning:** React slideshow components (e.g. `CardSlideshow`) that accept array props and place them in `useEffect` dependency arrays will continuously recreate intervals on every render cycle of their parent. This happens because inline array operations like `[...].sort()` return a new array reference on each render, breaking dependency reference-equality even when elements remain identical.
**Action:** Always serialize array props (e.g., using `images.join(',')`) before specifying them in the `useEffect` dependency array, or use memoization patterns to preserve referential stability.

## 2025-03-05 - Synchronous Disk Reads Blocking Request Thread
**Learning:** Synchronous operations like `fs.readFileSync` inside standard data access layers (e.g., `getDb` in `src/lib/db.ts`) block the single-threaded Node.js event loop during Server Component rendering. When multiple components or layout blocks fetch data independently, this causes sequential disk read bottlenecks.
**Action:** Implement an in-memory write-through cache to intercept reads, converting synchronous disk reads into instant O(1) in-memory operations.
