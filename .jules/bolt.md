## 2025-05-18 - [In-memory database caching and slideshow serialization]
**Learning:** In Next.js SSR and static page rendering, multiple modules or components synchronously request JSON data on every page load. Adding an in-memory cache on top of `fs.readFileSync` completely eliminates repeated I/O requests. Additionally, serialization of array dependencies prevents redundant interval setups and teardowns in UI sliders.
**Action:** Always mock-cache synchronous mock DB structures and avoid putting un-memoized object references as hook dependencies.
