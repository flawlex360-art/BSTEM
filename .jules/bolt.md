## 2026-09-17 - Optimize Image Preloading in Next.js Slideshow Components

**Learning:** Setting `priority={true}` on all images inside a slideshow component forces Next.js to inject high-priority `<link rel="preload">` tags for every slide (including hidden ones with `opacity: 0`). On pages with multiple slideshows, this creates severe network contention on initial page load, consuming bandwidth and delaying First Contentful Paint (FCP) and Largest Contentful Paint (LCP).
**Action:** In Next.js slideshow components, set `priority={idx === 0}` so only the initial visible image is prioritized for loading rather than preloading all hidden slide images.
