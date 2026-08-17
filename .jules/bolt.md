## 2025-05-18 - Safe In-Memory Caching for Synchronous File-Based Mock DB
**Learning:** Returning cached object references directly from a synchronous file-based mock database can lead to unsafe global mutations if callers mutate the returned objects.
**Action:** Use `structuredClone` on `getDb()` and `saveDb()` when implementing in-memory caches for file-backed DB mocks to safely eliminate synchronous disk I/O without risk of data contamination.
