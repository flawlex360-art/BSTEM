## 2025-05-18 - Next.js Slideshow Image Priority Optimization
**Learning:** Setting `priority={true}` on all slides in a slideshow component causes Next.js to preload every image with high priority simultaneously, creating network request bandwidth contention on initial page load.
**Action:** Always set `priority={idx === 0}` so that only the first visible slide image is prioritized for preloading while subsequent slides are loaded as needed.
