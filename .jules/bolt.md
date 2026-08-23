## 2025-05-18 - In-Memory Caching for JSON Database & Array Prop Stabilization

**Learning:** `getDb()` in `src/lib/db.ts` was performing synchronous file reads (`fs.readFileSync`) and JSON parsing (`JSON.parse`) on every call. Because multiple server components invoke `getDb()` during SSR of a single page request, redundant disk I/O occurs. Additionally, passing inline sorted/mutated arrays (like `.sort(() => Math.random() - 0.5)`) into slideshow components breaks React pure render rules and triggers extra re-allocations on every render frame.

**Action:** Implement an in-memory write-through cache in `src/lib/db.ts` so `getDb()` returns cached data on repeated calls, and update `saveDb()` to invalidate/update the cache. Always declare static array props outside render functions to maintain reference stability for components with timer effects.
