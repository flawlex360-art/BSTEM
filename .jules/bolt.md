## 2025-06-20 - Write-through Cache for Mock Database
**Learning:** Calling synchronous filesystem operations (`fs.readFileSync`) and JSON parsing on every database query (e.g., `getDb()`) in dynamic or statically generated pages in Next.js introduces severe rendering overhead, blocking the main thread and slowing down the TTFB (Time to First Byte).
**Action:** Implement an in-memory cache variable in the database wrapper (`src/lib/db.ts`) that gets populated on the first read and updated on writes (`saveDb`), completely bypassing redundant disk operations.

## 2025-06-20 - Serialized Dependencies for React Intervals
**Learning:** Passing arrays directly as React Hook dependency arrays can trigger infinite or redundant effect executions because array references change on every render (especially when derived dynamically or sorted).
**Action:** Use a serialized primitive representation of the array (such as `images.join(',')`) in the `useEffect` dependency array to guarantee that the interval is only torn down and set up again when the actual content of the array changes.
