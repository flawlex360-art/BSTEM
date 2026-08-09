# Bolt's Journal

## 2025-03-05 - [In-memory database write-through caching]
**Learning:** In Next.js/Node.js web applications using local JSON files for persistent data, synchronous file I/O operations (`fs.readFileSync`) block the event loop entirely. Adding an in-memory module-level write-through cache in `src/lib/db.ts` eliminates redundant disk operations and JSON parsing on subsequent reads.
**Action:** Always cache synchronous filesystem reads in memory for persistent mock database implementations, updating the cache on any subsequent write operations to preserve consistency.
