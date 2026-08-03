# Bolt's Journal

## 2025-06-03 - In-memory Caching for JSON Database
**Learning:** Found that `getDb` synchronously reads `data.json` on every invocation. Since `Navbar`, `Footer`, and page components are rendered on the same request context, this results in multiple redundant synchronous disk reads and parses of the exact same 10KB file per request. Implementing an in-memory cache with write-through updates completely avoids these synchronous disk operations.
**Action:** Implement `cachedDb` in `src/lib/db.ts` to cache the parsed JSON. Clear and update the cache inside `saveDb`.

## 2025-06-03 - Optimizing CardSlideshow Dependency Array
**Learning:** `CardSlideshow` accepts an array of image strings as a prop. Passing the array itself in `useEffect` dependency array triggers interval teardown and setup on every render where reference is not stable. Using `images.join(',')` as a primitive dependency ensures the effect only triggers when the actual elements of the array change, avoiding unnecessary overhead from resetting intervals.
**Action:** Use `images.join(',')` inside `CardSlideshow`'s `useEffect` dependency array instead of `images`.
