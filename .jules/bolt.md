# Bolt's Journal - Critical Learnings

This journal documents critical, high-impact performance learnings, anti-patterns, or rejected optimizations encountered in this codebase.

## 2025-08-12 - [Mock Database Synchronous Disk Access & React Array Prop Dependencies]
**Learning:**
1. Synchronous disk reads block the main thread and degrade response times. The mock database in `src/lib/db.ts` was reading and parsing `data.json` synchronously on *every* call to `getDb()`. Because `getDb()` is called across many server components (layouts, page components, footers, navbars) on a single request, this resulted in multiple redundant synchronous I/O operations per render.
2. In React, array props are reference types. When passed directly to components like `CardSlideshow`, they trigger `useEffect` cleanup and setup on every parent render even if the elements are identical, resulting in frequent `setInterval` / `clearInterval` thrashing.

**Action:**
1. Implemented an in-memory write-through cache in `src/lib/db.ts` so that `getDb()` performs O(1) memory lookup after the initial read, and `saveDb()` updates both the in-memory cache and the disk concurrently.
2. Serialized the `images` array prop into a primitive string (`images.join(',')`) in `CardSlideshow.tsx` to prevent unnecessary interval resets and resource thrashing.
