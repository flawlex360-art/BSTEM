## 2025-05-18 - In-Memory Caching for File-Based Mock DB
**Learning:** Next.js Server Components and layout components frequently invoke mock database fetchers (like `getDb()`). Synchronous file system reads (`fs.readFileSync`) and JSON parsing (`JSON.parse`) on every request or component render add unnecessary I/O overhead and block the main execution thread.
**Action:** Implement an in-memory write-through cache for file-backed JSON mock databases to ensure subsequent queries are served instantly from memory without synchronous disk reads.
