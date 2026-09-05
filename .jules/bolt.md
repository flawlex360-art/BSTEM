## 2025-05-10 - Next.js Slideshow Image Preloading
**Learning:** Setting `priority={true}` on all images within a slideshow loop forces Next.js to preload hidden off-screen slides concurrently, causing network contention and slowing initial rendering.
**Action:** Always set `priority={idx === 0}` so only the initial visible image is prioritized.
