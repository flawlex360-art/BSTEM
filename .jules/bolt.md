# Bolt's Journal

## 2026-03-04 - [Synchronous JSON Database Caching]
**Learning:** Calling synchronous `fs.readFileSync` and parsing a JSON database files multiple times per page request is a heavy bottleneck in server components, layouts, and sub-components.
**Action:** Implement a global in-memory write-through cache in `src/lib/db.ts` to cache the database instance on the first read. Ensure subsequent calls use the cache, and invalidate/update the cache upon writes via `saveDb()`.
