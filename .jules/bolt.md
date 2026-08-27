## 2025-05-18 - In-memory Caching for JSON File Database
**Learning:** The mock JSON database helper `getDb()` performed synchronous disk reads (`fs.readFileSync`) and JSON parsing (`JSON.parse`) on every call across multiple page components and layout renders, creating unnecessary I/O overhead.
**Action:** Use an in-memory write-through cache for file-backed data getters/setters while ensuring mutations (`saveDb`) update the memory reference synchronously.
