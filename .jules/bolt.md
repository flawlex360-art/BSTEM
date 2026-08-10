# Bolt's Journal

## 2025-02-28 - In-memory Write-Through Cache
**Learning:** Repetitive synchronous file reads and parsing of static database configurations (`data.json`) during high-frequency server-side operations block the event loop and waste precious CPU cycles. Adding an in-memory write-through cache prevents redundant file-system access while keeping state updated.
**Action:** Use a module-level variable in the data provider `src/lib/db.ts` to cache parsed settings, falling back to disk reading only on first call or on cache invalidation, and writing through to both the cache and disk on updates.

## 2025-02-28 - Array Prop Dependency Serialization
**Learning:** React slideshow/interval components accepting array props (like `images`) trigger redundant interval setups and teardowns on every re-render when the parent component recreates or sorts the array (e.g. `images.sort(() => Math.random() - 0.5)` or mapping on-the-fly), degrading client-side performance.
**Action:** Serialize the array parameter to a primitive representation (e.g., `images.join(',')`) in the `useEffect` dependency array.
