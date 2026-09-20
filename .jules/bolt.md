## 2025-05-18 - Next.js Slideshow Image Priority Optimization
**Learning:** In Next.js slideshow components using `next/image`, setting `priority={true}` on all slide images forces the browser to preload all images immediately (including those hidden offscreen), competing with critical initial assets for network bandwidth and degrading LCP.
**Action:** Always set `priority={idx === 0}` so that only the first visible slide image is loaded with high priority.
