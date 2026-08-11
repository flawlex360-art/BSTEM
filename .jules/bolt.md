# Bolt's Performance Journal

This journal documents critical learnings, performance bottlenecks, and architectural insights discovered while optimizing the application.

## 2025-05-10 - [Database and React Component Optimizations]
**Learning:** Frequent file-system Reads and JSON parsing are synchronous blocking operations. Implementing a simple in-memory write-through cache prevents redundant file I/O operations and speeds up database lookups during server rendering.
Additionally, when array references are recreated on every render (such as sorted image arrays or array props), passing them as dependencies to `useEffect` inside React slideshows resets the timer/interval unnecessarily. Serializing the array (e.g., `images.join(',')`) ensures the interval is only recreated when the actual images list changes, preventing timer resets and stutter.
**Action:** Use an in-memory `cachedDb` variable in `src/lib/db.ts` to skip reading from disk if already cached. Serialize array dependencies or use joined string keys inside `useEffect` in slideshow components.
