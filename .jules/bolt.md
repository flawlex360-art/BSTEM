## 2025-05-18 - Selective Image Priority in Next.js Slideshows
**Learning:** Setting `priority={true}` on all images inside a slideshow component forces Next.js to inject preload link headers for every slide (including hidden ones), leading to network congestion and competing with critical rendering path assets during initial load.
**Action:** In Next.js slideshow components, set `priority={idx === 0}` so only the initial visible image is prioritized for loading rather than preloading all hidden slide images.
