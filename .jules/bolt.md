# Bolt's Performance Journal

## 2025-02-19 - In-memory Database Caching
**Learning:** In projects using a mock database stored in a local JSON file (`data.json`), calling synchronous filesystem APIs like `fs.readFileSync` and `JSON.parse` inside standard page components (like footer, navbar, home page blocks, etc.) creates a severe performance bottleneck. On every render/fetch of static and dynamic routes, the system hits the disk and parses the entire database multiple times redundantly.
**Action:** Implement a lightweight, in-memory write-through cache within the db module. On subsequent reads, return the cached database object instantly. Ensure the `save` method updates both the in-memory cache and the disk to maintain full consistency.
