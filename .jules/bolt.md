## 2026-08-26 - In-Memory Write-Through Caching for JSON File Storage
**Learning:** `getDb()` was performing `fs.readFileSync` and `JSON.parse` synchronously on every single request or page render across multiple components, causing repetitive synchronous file system read operations and JSON parsing overhead.
**Action:** Implement an in-memory cache `cachedDb` with write-through invalidation in `saveDb()` to serve reads instantaneously after the initial load.
