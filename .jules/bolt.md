## 2026-09-07 - Next.js Slideshow Priority Image Preloading
**Learning:** Setting `priority={true}` on all images within a Next.js slideshow causes the browser to eagerly preload every hidden slide image simultaneously, consuming unnecessary network bandwidth and delaying Largest Contentful Paint (LCP).
**Action:** Always set `priority={idx === 0}` on slideshow images so only the initial visible slide is prioritized for initial render, allowing subsequent hidden slides to be lazy loaded.
