## 2025-08-29 - In-Memory DB Caching and Next Image Priority Optimization

**Learning:** `getDb()` was synchronously reading disk files on every invocation across server components, blocking render loops. Additionally, slideshow `<Image>` components were setting `priority={true}` on all slide images including hidden ones, causing unnecessary high-priority downloads.
**Action:** Use an in-memory write-through cache for file-backed mock DBs and restrict image loading priority (`priority={idx === 0}`) to the primary visible slide.
