# Bolt's Journal

## 2025-03-04 - [Database Performance Optimization]
**Learning:** Reading/parsing data.json repeatedly in getDb() for every request/component is highly inefficient. Implemented an in-memory cached database reader that acts as a write-through cache to avoid redundant fs/JSON operations.
**Action:** Always maintain an in-memory cache variable for reading mock database files to prevent sync I/O overhead.
